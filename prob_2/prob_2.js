"use strict";
class Matrix {
    constructor(rows, columns) {
        this._rows = rows;
        this._columns = columns;
        this._elements = [];
        for (let i = 0; i < this._rows; i++) {
            const array = [];
            for (let j = 0; j < this._columns; j++) {
                array.push(0);
            }
            this._elements.push(array);
        }
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    get elements() {
        return this._elements;
    }
    getElement(rowIndex, columnIndex) {
        return this._elements[rowIndex][columnIndex];
    }
    setElement(rowIndex, columnIndex, value) {
        if (rowIndex > this._rows || columnIndex > this._columns) {
            console.log("Error: You cannot insert values on undefined index");
        }
        else {
            this._elements[rowIndex][columnIndex] = value;
        }
    }
    add(matrix1, matrix2) {
        if (matrix1.rows === matrix2.rows && matrix1.columns === matrix2.columns) {
            return this.calculateSum(matrix1, matrix2);
        }
        else {
            console.log("Error: NOOP");
            return undefined;
        }
    }
    calculateSum(matrix1, matrix2) {
        const resultMatrix = new Matrix(matrix1.rows, matrix1.columns);
        for (let i = 0; i < matrix1.rows; i++) {
            for (let j = 0; j < matrix1.columns; j++) {
                const element1 = matrix1.getElement(i, j);
                const element2 = matrix2.getElement(i, j);
                const resultValue = element1 + element2;
                resultMatrix.setElement(i, j, resultValue);
            }
        }
        return resultMatrix;
    }
    multiply(matrix1, matrix2) {
        if (matrix1.columns === matrix2.rows) {
            return this.calculateProduct(matrix1, matrix2);
        }
        else {
            console.log("Error: NOOP");
            return undefined;
        }
    }
    calculateProduct(matrix1, matrix2) {
        const resultMatrix = new Matrix(matrix1.rows, matrix2.columns);
        for (let m1Row = 0; m1Row < matrix1.rows; m1Row++) {
            for (let m2Column = 0; m2Column < matrix2.columns; m2Column++) {
                let resultValue = 0;
                for (let m2Row = 0; m2Row < matrix2.rows; m2Row++) {
                    const element1 = matrix1.getElement(m1Row, m2Row);
                    const element2 = matrix2.getElement(m2Row, m2Column);
                    const multiply = element1 * element2;
                    resultValue += multiply;
                }
                resultMatrix.setElement(m1Row, m2Column, resultValue);
            }
        }
        return resultMatrix;
    }
}
// METHODS AND PROPERTIES TEST
// const matrix1 = new Matrix(2, 2);
// const matrix2 = new Matrix(2, 2);
// const matrix3 = new Matrix(3, 4);
// const matrix4 = new Matrix(3, 4);
// console.log(matrix1.rows);
// console.log(matrix1.columns);
// console.log(matrix1.elements);
// matrix1.setElement(0, 0, 5);
// matrix1.setElement(0, 1, 7);
// matrix1.setElement(1, 0, 5);
// matrix1.setElement(1, 1, 10);
// console.log(matrix1.elements);
// // ADDITION TEST
// matrix2.setElement(0, 0, 5);
// matrix2.setElement(0, 1, 7);
// matrix2.setElement(1, 0, 5);
// matrix2.setElement(1, 1, 10);
// console.log(matrix1.add(matrix1, matrix2));
// matrix3.setElement(0,0,5);
// matrix3.setElement(0,1,51);
// matrix3.setElement(0,2,48);
// matrix3.setElement(1,2,25);
// matrix3.setElement(1,0,16);
// matrix3.setElement(2,0,150);
// matrix3.setElement(2,1,-15);
// console.log(matrix3.elements);
// matrix4.setElement(0,0,5);
// matrix4.setElement(0,1,51);
// matrix4.setElement(0,2,48);
// matrix4.setElement(1,2,25);
// matrix4.setElement(1,0,16);
// matrix4.setElement(2,0,150);
// matrix4.setElement(2,1,-15);
// console.log(matrix4.add(matrix3, matrix4));
// PRODUCT TEST
// const matrix1 = new Matrix(3, 3);
// const matrix2 = new Matrix(3,3);
// matrix1.setElement(0,0,2);
// matrix1.setElement(0,1,0);
// matrix1.setElement(0,2,1);
// matrix1.setElement(1,0,3);
// matrix1.setElement(1,1,0);
// matrix1.setElement(1,2,0);
// matrix1.setElement(2,0,5);
// matrix1.setElement(2,1,1);
// matrix1.setElement(2,2,1);
// matrix2.setElement(0,0,1);
// matrix2.setElement(0,1,0);
// matrix2.setElement(0,2,1);
// matrix2.setElement(1,0,1);
// matrix2.setElement(1,1,2);
// matrix2.setElement(1,2,1);
// matrix2.setElement(2,0,1);
// matrix2.setElement(2,1,1);
// matrix2.setElement(2,2,0);
// console.log(matrix1.elements);
// console.log(matrix2.elements);
// console.log(matrix1.multiply(matrix1, matrix2));
// PRODUCT TEST 2
const matrixProd1 = new Matrix(2, 2);
const matrixProd2 = new Matrix(3, 2);
matrixProd1.setElement(0, 0, 1);
matrixProd1.setElement(0, 1, 2);
matrixProd1.setElement(1, 0, 3);
matrixProd1.setElement(1, 1, 4);
matrixProd2.setElement(0, 0, 1);
matrixProd2.setElement(0, 1, 1);
matrixProd2.setElement(1, 0, 0);
matrixProd2.setElement(1, 1, 2);
console.log(matrixProd1.elements);
console.log(matrixProd2.elements);
console.log(matrixProd1.multiply(matrixProd1, matrixProd2));
