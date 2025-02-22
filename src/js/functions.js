document.addEventListener('DOMContentLoaded' , function(){
    const form = document.querySelector('.modal-add-form')
    const hospede = new Hospede({})
    hospede.acessarLocalStorage()
    hospede.gerarItems()
    
    form.addEventListener('submit' , function(event){
        event.preventDefault()
        adicionarItems()
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


