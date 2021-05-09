const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')

const form = document.getElementById('form')
const search = document.getElementById('search')


async function getUser (username)
{
    try{
    const {data} = await axios(APIURL+username)
    createUserCard(data);
    getRepos(username)
    }catch(err)
    { 
        createErrorCard('No profile with this username')
    }
}
async function getRepos (username)
{
    try{
    const {data} = await axios(APIURL+username+'/repos?sort=created')
    addReposToCard(data)
    }catch(err)
    { 
        createErrorCard('Problem fetching repos')
    }
}
function createUserCard(user){
    const {avatar_url, bio,name,followers,following,public_repos} = user
    const cardHTML = `<div class="card">
    <div>
        <img src=${avatar_url} alt="" class="avater">
    </div>
    <div class="user-info">
        <h2>${name}</h2>
        <p>${bio}</p>
        <ul>
            <li>${followers} <strong>Followers</strong></li>
            <li>${following} <strong>Following</strong></li>
            <li>${public_repos} <strong>Rpost</strong></li>
        </ul>
        <div id="repos"></div>

    </div>
</div>`

    main.innerHTML = cardHTML
}

function createErrorCard(msg)
{
 const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
 `
 main.innerHTML = cardHTML
}

function addReposToCard(repos)
{
    const reposEl = document.getElementById('repos')

    repos.slice(0,10).forEach(repo => {
        const {html_url,name} =repo;
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = html_url
        repoEl.target = 'blank'
        repoEl.innerText = name

        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const user = search.value
    if(user)
    {
        getUser(user)
        search.value = ''
    }
})
