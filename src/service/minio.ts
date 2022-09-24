import * as Minio from 'minio';
import { config } from 'src/config';

const { minio: minioConfig } = config;

export const minioClient = new Minio.Client({
	endPoint: minioConfig.endPoint,
	port: minioConfig.port,
	useSSL: minioConfig.useSSL,
	accessKey: minioConfig.accessKey,
	secretKey: minioConfig.secretKey
});
