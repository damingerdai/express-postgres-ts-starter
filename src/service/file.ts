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
import * as Minio from 'minio';
import type { UploadedFile } from 'express-fileupload';
import { config } from '../config';
import { minioClient } from './minio';

export class FileService {
	constructor(private ossClient: Minio.Client) {}

	public async uploadImage(inputFile: UploadedFile): Promise<string> {
		// eslint-disable-next-line prefer-named-capture-group
		const ext = inputFile.mimetype.match(/\w+\/(\w+)/)[1];
		const inputFilename = inputFile.name + '.' + ext;
		const minioConfig = config.minio;
		const bucket = minioConfig.bucket;
		const isExist = await this.ossClient.bucketExists(bucket);
		if (!isExist) {
			await this.ossClient.makeBucket(bucket, 'us-east-1');
		}
		await this.ossClient.putObject(bucket, inputFilename, inputFile.data);
		return this.ossClient.presignedUrl('GET', bucket, inputFilename);
	}
}

export const fileService = new FileService(minioClient);
