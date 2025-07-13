/// <reference path="crud.d.ts">
//triple slash directive

import { rowId, rowElement } from "./interface";
import * as CRUD from "./crud.js";
import { insertRow } from "./crud";
// import {insertRow} from "./crud.js";

const obj: rowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: rowId = insertRow(obj);

const updatedRow: rowElement = {
    ...obj,
    age: 23
}

 CRUD.updateRow(newRowID, updatedRow);

 CRUD.deleteRow(newRowID);