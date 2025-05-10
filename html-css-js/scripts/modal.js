const tableDates = document.querySelectorAll('table:not(.modal-table-inside) tbody tr');
const modal = document.querySelector('.modal');
const modal_form = document.querySelector('.modal-form')
const modal_inputs = document.querySelectorAll('.modal-form input, .modal-form select, .modal-form textarea');
const modal_newBtn = document.querySelector('.new-btn');
const modal_closeBtn = document.querySelector('.modal-close-btn')
const modal_doneBtn = document.querySelector('.modal-done-btn')
const modal_editBtn = document.querySelector('.modal-edit-btn')
const modal_deleteBtn = document.querySelector('.modal-delete-btn')
const modal_insideForm = document.querySelector('.modal-inside-form')

function fecharModal(){ // fecha e reseta o modal
    modal.style.display = 'none';
    modal_inputs.forEach((input) => {
        input.removeAttribute('disabled');
    })
    modal_doneBtn.style.display = 'block';
    modal_editBtn.style.display = 'block';
    modal_deleteBtn.style.display = 'block';
    modal_form.reset();
}

if(modal_newBtn){
    modal_newBtn.addEventListener('click', () => { // abre um novo cadastro
        modal.style.display = 'flex';
        if(modal_insideForm){
            modal_insideForm.style.display = 'flex';
        }
        modal_editBtn.style.display = 'none';
        modal_deleteBtn.style.display = 'none';
    }); 
}

modal_closeBtn.addEventListener('click', fecharModal); // fecha o modal

modal_doneBtn.addEventListener('click', (e) => { // registra/modifica o cadastro
    e.preventDefault();
    console.log('teste!');
    
    if (!modal_form.checkValidity()) {
        modal_form.reportValidity();
        return;
    }

    let formData = new FormData(modal_form);
    let dados= {};

    for(let [nome, valor] of formData.entries()){
        dados[nome] = valor;
    }

    console.log(dados);
    fecharModal();
})

if(tableDates){
    tableDates.forEach((row) => {  // abre a visualizacao do cadastro
        row.addEventListener('click', () => {
            modal.style.display = 'flex';
            modal_inputs.forEach((input) => {
                input.setAttribute('disabled', '');
            })
            if(modal_insideForm){
                modal_insideForm.style.display = 'none';
            }
            modal_doneBtn.style.display = 'none';
        })
    });
}

modal_editBtn.addEventListener('click', (e) =>{ // habilita editar o cadastro
    e.preventDefault();

    modal_inputs.forEach((input) => {
        input.removeAttribute('disabled');
    })

    if(modal_insideForm){
        modal_insideForm.style.display = 'flex';
    }
    modal_doneBtn.style.display = 'block';
    modal_editBtn.style.display = 'none';
})

modal_deleteBtn.addEventListener('click', (e) => { // exclui o cadastro
    e.preventDefault();
    fecharModal();
})
