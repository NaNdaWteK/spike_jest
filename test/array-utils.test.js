import {clear, first} from '../src/array/array-utils.js';

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
