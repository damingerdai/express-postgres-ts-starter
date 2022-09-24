/*
 * Copyright 2020 大明二代
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { config } from 'src/config';
import { Response, Request } from 'express';
import { minioClient } from './minio';
import type { UploadedFile } from 'express-fileupload';

export const uploadImage = async (
	req: Request,
	res: Response
): Promise<void> => {
	if (!req.files || Object.keys(req.files).length === 0) {
		res.status(400).json({
			message: 'No files were uploaded.'
		});

		return;
	}

	const inputFile = req.files.file as UploadedFile;
	// eslint-disable-next-line prefer-named-capture-group
	const ext = inputFile.mimetype.match(/\w+\/(\w+)/)[1];
	const inputFilename = inputFile.name + '.' + ext;

	const minioConfig = config.minio;
	const bucket = minioConfig.bucket;
	const isExist = await minioClient.bucketExists(bucket);
	if (!isExist) {
		await minioClient.makeBucket(bucket, 'us-east-1');
	}
	await minioClient.putObject(bucket, inputFilename, inputFile.data);
	const personedUrl = await minioClient.presignedUrl(
		'GET',
		bucket,
		inputFilename
	);
	console.log(personedUrl);
	res.status(200).json({ data: personedUrl });
};

export const FileService = {
	uploadImage
};
