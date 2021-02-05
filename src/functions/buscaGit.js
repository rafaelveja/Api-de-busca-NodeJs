const fetch = require('node-fetch')

module.exports = async function buscaGit(git){
    const response = await fetch(`https://api.github.com/users/${git}`)

    const json = await response.json()

    return json
}

