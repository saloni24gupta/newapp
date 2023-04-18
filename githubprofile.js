const APIURL = 'https://api.github.com/users/'
// getUser('bradtraversy')
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
async function getUser(username) {


    //method 2  res and data
    // const res = await axios(APIURL + username)
    // console.log(res.data)

    //method 3 onlt data using array destrucring
    // const { data  } = await axios(APIURL + username)
    // console.log(data)

    // method 1 res and err

    // axios(APIURL + username)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))

    // method 4 try and catch
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    }
    catch (err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }

}
async function getRepos(username) {
try {
    const {data} = await axios(APIURL + username + '/repos')
    addReposToCard(data)
}
catch(err) {
        createErrorCard('problem fetching repos')
    
}
}


function createUserCard(user) {
    const cardHTML = ` <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers}<strong>Following</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>

        <div class="repos">
        </div>
    </div>
</div>`

    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')
    repos 
       .forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
       })
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value

    if (user) {

        getUser(user)

        search.value = ''
    }
})