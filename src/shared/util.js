export function logout(){

    const login_url = document.querySelector('ion-router') ?.useHash ?? true; 
    window.location.hre = login_url == true ? '#/login' : '/login'

}