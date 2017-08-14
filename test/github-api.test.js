import {getGithubUser} from '../src/async/github-api';

describe('Async function to test github api', () => {
    test('should return an User with name property', () => {
        expect.assertions(1);
        return getGithubUser('nandawtek').then(actual => {
            expect(actual).toHaveProperty('name', 'Nacho');
        });
    });

    test('result should be a promise', () => {
        const response = getGithubUser('xaviuzz')
        const isPromise = !!response && !!response.then && typeof response.then === 'function';

        expect(isPromise).toBe(true);
    })
});
