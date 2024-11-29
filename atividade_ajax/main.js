document.addEventListener('DOMContentLoaded', function() {
    const nameElemen = document.querySelector('#name');
    const usernameElemen = document.querySelector('#username');
    const avatarElemen = document.querySelector('#avatar');
    const reposElemen = document.querySelector('#repos');
    const followersElemen = document.querySelector('#followers');
    const followingElemen = document.querySelector('#following');
    const linkElemen = document.querySelector('#link');

    fetch('https://api.github.com/users/joseluisbr5')
        .then(function(res) {
            return res.json();
        })
        .then(function(json){
            nameElemen.innerText = json.name;
            usernameElemen.innerText = json.login;
            avatarElemen.src = json.avatar_url;
            followersElemen.innerText = json.followers;
            followingElemen.innerText = json.following;
            reposElemen.innerText = json.public_repos;
            linkElemen.href = json.html_url;
        })
})