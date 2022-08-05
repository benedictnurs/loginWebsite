function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const openLogin = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('.main').className = 'main active';
    document.querySelector('.loginBtn').className = 'loginBtn active';

}

const closeLogin = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('.main').className = 'main';
    document.querySelector('.loginBtn').className = 'loginBtn';
    
  }

document.getElementById("loginBtn").onclick = e => {
  e.preventDefault();
  openLogin();
}



document.querySelector('button.close').onclick = e => {
    closeLogin();
}

document.querySelector('.backdrop').onclick = e => {
    closeLogin();
}
/*Menu Login Button*/ 


const openLoginMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop active';
  document.querySelector('.main').className = 'main active';
  document.querySelector('aside').className = '';

}


document.getElementById("loginBtnMenu").onclick = e => {
  e.preventDefault();
  openLoginMenu();
}