const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('.menuBtn').className = 'menuBtn active';
    document.querySelector('aside').className = 'active';

}

document.querySelector('.menuBtn').className = 'menuBtn';


const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop ';
    document.querySelector('.main').className = 'main';
    document.querySelector('.loginBtn').className = 'loginBtn';
    document.querySelector('.menuBtn').className = 'menuBtn';
    document.querySelector('aside').className = '';

}

document.getElementById("menuBtn").onclick = e => {
    e.preventDefault();
    openMenu();
}


document.querySelector('button.close').onclick = e => {
    closeMenu();
}

document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}

document.querySelector('button.closeMenu').onclick = e => {
    closeMenu();
}
