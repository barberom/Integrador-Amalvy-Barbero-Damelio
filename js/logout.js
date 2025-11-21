let logout = document.querySelector('.link-logout')
console.log(logout);

logout.addEventListener('click', function(){
    location.reload()
    localStorage.clear()
})