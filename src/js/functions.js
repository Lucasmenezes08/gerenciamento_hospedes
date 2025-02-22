document.addEventListener('DOMContentLoaded' , function(){
    const form = document.querySelector('.modal-add-form')
    const hospede = new Hospede({})
    hospede.acessarLocalStorage()
    hospede.gerarItems()

    const btn_confirm = document.querySelector('.modal-ask .modal-btn-confirm')
    const btn_close = document.querySelector('.modal-ask .modal-btn-close')
    const btn_add = document.getElementById('btn-cadastro')
    

    btn_add.addEventListener ("click" , function () {
        document.querySelector('.modals').style.display = 'block'
    })


    btn_confirm.addEventListener('click' , function(){
        document.querySelector('.modals').style.display = 'none'
        document.querySelector('.modals').style.display = 'block'
        document.querySelector('.modal-add-form').style.display = 'block'

    })

    btn_close.addEventListener('click' , function(){
        document.querySelector('.modals').style.display = 'none'
        document.querySelector('.modal-add-form').style.display = 'none'
    })


    form.addEventListener('submit' , function(event){
        event.preventDefault()
        adicionarItems()
    })

    document.getElementById('Tlist').addEventListener('click' , function(event){
        if (event.target.classList.contains('btn-deletar')){
            const id = event.target.dataset.id
            hospede.excluirItems(id)
        }
    })

    function adicionarItems () {
        const id = document.getElementById('id-add').value 
        const nome = document.getElementById('nome').value 
        const apartamento = document.getElementById('apartamento').value 
        const plataforma = document.getElementById('plataforma').value 
        const data = document.getElementById('data').value
        const diarias = document.getElementById('diarias').value 
        const valor_reserva = document.getElementById('valor-reserva').value 
    
        hospede.adicionarItems(id, nome , apartamento , plataforma , data , diarias , valor_reserva)
        
    
        document.getElementById('id-add').value = "";
        document.getElementById('nome').value = "";
        document.getElementById('apartamento').value = "";
        document.getElementById('plataforma').value = "";
        document.getElementById('data').value = "";
        document.getElementById('diarias').value = "";
        document.getElementById('valor-reserva').value = "";
    
        hospede.gerarItems()
    }    
})


