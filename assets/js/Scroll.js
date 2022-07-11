const links = document.querySelectorAll('a.anchor');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(e.target.href.split('#')[1]);
        console.log(document.getElementById(e.target.href.split('#')[1]))
    })
})