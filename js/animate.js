const btn = document.querySelector('.sending .btn');
let timer = null;



btn.addEventListener('click', e => {
    console.log("[eq");
    btn.classList.add('animate__animated','animate__bounce');
    clearTimeout(timer);
    timer = setTimeout(()=> btn.classList.remove('animate__animated','animate__bounce'),1000);
});
