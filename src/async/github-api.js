import fetch from 'node-fetch';

function getGithubUser(user) {
    const endpoint = `https://api.github.com/users/${user}`;
    return fetch(endpoint).then(response => response.json());
}

export {
    getGithubUser
};
