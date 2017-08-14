import fetch from 'node-fetch';

function getGithubUser(user) {
    const endpoint = `https://api.github.com/users/${user}`;
    return fetch(endpoint).then(response => response.json());
}

async function getGithubUserAsyncFn(user) {
    const endpoint = `https://api.github.com/users/${user}`;
    const response = await fetch(endpoint);
    return response.json();
}

export {
    getGithubUser,
    getGithubUserAsyncFn
};
