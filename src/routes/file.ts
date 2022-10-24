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
import { UploadedFile } from 'express-fileupload';
import { contextBuilder } from '../graphql/context';
import { IRoute } from '../types/routes';

export const File: IRoute = {
	method: 'POST',
	path: '/uploadImage',
	controller: async (req, res) => {
		if (!req.files || Object.keys(req.files).length === 0) {
			res.status(400).json({
				error: 'No files were uploaded'
			});

			return;
		}
		const context = contextBuilder(req);
		const fileService = context.fileService;
		const personedUrl = await fileService.uploadImage(
			req.files.file as UploadedFile
		);
		res.status(200).json({ data: personedUrl });
	}
};
