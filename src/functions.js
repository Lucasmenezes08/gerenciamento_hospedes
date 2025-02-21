const hospede = new Hospede();

function adicionarItems () {
    const id = document.getElementById('idd-ad').value 
    const nome = document.getElementById('nome').value 
    const apartamento = document.getElementById('apartamento').value 
    const plataforma = document.getElementById('plataforma').value 
    const data = document.getElementById('data')
    const diarias = document.getElementById('diarias').value 
    const valor_reserva = document.getElementById('valor-reserva').value 
    
    if (id.length > 0 ){
        hospede.adicionarItems(id);
        id.value = ""
        hospede.gerarItems()
    }

    if (nome.length > 0){
        nome.adicionarItems(nome);
        nome.value = ""
        hospede.gerarItems()
    }

    if (apartamento.length > 0){
        apartamento.adicionarItems(apartamento);
        apartamento.value = ""
        hospede.gerarItems()
    }

    if (plataforma.length > 0){
        plataforma.adicionarItems(plataforma);
        plataforma.value = ""
        hospede.gerarItems()
    }

    if (data.length > 0){
        data.adicionarItems(data);
        data.value = ""
        hospede.gerarItems()
    }

    if (diarias.length > 0){
        valor_reserva.adicionarItems(diarias);
        diarias.value = ""
        hospede.gerarItems()
    }

    if (valor_reserva.length > 0){
        valor_reserva.adicionarItems(valor_reserva);
        valor_reserva.value = ""
        hospede.gerarItems()
    }
}


document.getElementById('btn-adicionar').addEventListener('submit' , adicionarItems)