import {clear, first, deleteIf} from '../src/array/array-utils.js';

describe('Clear function for array', () =>{
    test('clear an array', () => {
        const array = [1,2,3];
        const result = [];

        expect(clear(array)).toEqual(result);
    });
    test('throws an error if argument is not an array', () => {
        const number = 1;

        expect(()=>{clear(number)}).toThrow('argument is not an array');
    });
});

describe('First function for array', () =>{
    test('retrieves first element of array', () => {
        const array = [1,2,3];
        const result = 1;

        expect(first(array)).toEqual(result);
    });
    test('should return null if array is empty', () => {
        const array = [];

        expect(first(array)).toEqual(null);
    });
    test('throws an error if argument is not an array', () => {
        const number = 1;

        expect(()=>{first(number)}).toThrow('argument is not an array');
    });
});

describe('deleteIf function for array', () =>{
    test('should detete all elements that match in condition', () => {
        const array = [1,3,5,7,9];
        const isGreaterThan5 = (number) => number > 5;
        const result = [1,3,5];

        expect(deleteIf(array, isGreaterThan5)).toEqual(result);
    });
    test('should return an empty array if array is empty', () => {
        const array = [];
        const isGreaterThan5 = (number) => number > 5;

        expect(deleteIf(array, isGreaterThan5)).toEqual([]);
    });
    test('should do nothing is the condition is not matched', () => {
        const array = [1,2,3];

        expect(deleteIf(array)).toEqual([1,2,3]);
    });
    test('throws an error if argument is not an array', () => {
        const number = 1;

        expect(()=>{deleteIf(number)}).toThrow('argument is not an array');
    });
});
