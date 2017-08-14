import {clear} from '../src/array/array-utils.js';

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
