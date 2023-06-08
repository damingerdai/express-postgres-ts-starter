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
import { Workbook, Worksheet, WorksheetProtection } from 'exceljs';
import { Sheets } from './type';

export async function protectSheets(sheets: Worksheet[]): Promise<void> {
	const spinCount = Math.min(sheets.length, 10);
	await Promise.all(
		sheets.map(sheet => sheet.protect(Math.random().toString(), {
			selectLockedCells: true,
			selectUnlockedCells: true,
			formatCells: false,
			formatColumns: true,
			formatRows: true,
			insertRows: false,
			insertColumns: false,
			spinCount
		} as unknown as WorksheetProtection)
		)
	);
}

export async function createWorkBook(
	data: Sheets,
	locked?: boolean
): Promise<Workbook> {
	const workbook = new Workbook();

	for (const row of data) {
		const sheet = workbook.addWorksheet(row.name);
		if (row.columns) {
			sheet.columns = row.columns;
		}

		for (const cellConfig of row.cells) {
			const cell = sheet.getCell(cellConfig.cell);
			cell.value = cellConfig.value || '';
			if (cellConfig.style) {
				(cell.style = cellConfig.style), (cell.protection = { locked });
			}
		}
	}
	if (locked) {
		const sheets = workbook.worksheets;
		await protectSheets(sheets);
	}

	return workbook;
}
