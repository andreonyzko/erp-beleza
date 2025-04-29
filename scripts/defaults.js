// SELETORES DOM
const navBtn = document.querySelector('.nav-btn');
const navMainContainer = document.querySelector('.nav-main-container')


// MOSTRAR/OCULTAR MENU
navBtn.addEventListener('click', () => {
    navMainContainer.classList.toggle('unnav');
})

// IMPRIMIR
const printBtn = document.querySelector('.report-submit');
if(printBtn){
    printBtn.addEventListener('click', () =>{
        window.print();
    })
}