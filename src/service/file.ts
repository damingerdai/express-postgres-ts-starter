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
