import { rowId, rowElement } from "./interface";

export function insertRow(row: rowElement): rowId;

export function updateRow(rowId: rowId, row: rowElement): rowId;

export function deleteRow(rowId: rowId): void;
