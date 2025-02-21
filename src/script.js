class Hospede {
    constructor ({id,nome,apartamento,plataforma,data,diarias,valor_reserva}){
        this.id = id;
        this.nome = nome;
        this.apartamento = apartamento;
        this.plataforma = plataforma;
        this.data = data;
        this.diarias = diarias;
        this.valor = valor_reserva;
        this.storage = []
    }


    adicionarItems (id,nome,apartamento,plataforma,data,diarias,valor_reserva) {
        for (let i = 0; i < this.storage.length ; i ++ ){
            if (this.storage[i].id === id){
                return
            }
        }
        this.storage.push(id,nome,apartamento,plataforma,data,diarias,valor_reserva)
        this.salvarLocalStorage()
        this.gerarItems()
    }
    

    


    gerarItems () {
        const tlist = document.getElementById('Tlist');
        tlist.innerHTML = '';

        this.storage.forEach((value , index) => {
            const tItemns = document.createElement('th')
            tItemns.innerHTML = `
                <span> ${value.id} </span>
                <span> ${value.nome} </span>
                <span> ${value.apartamento} </span>
                <span> ${value.plataforma} </span>
                <span> ${value.data} </span>
                <span> ${value.diarias} </span> 
                <span> ${value.valor_reserva} </span>

            `
        })
    }






    salvarLocalStorage () {
        localStorage.setItem('storage' , JSON.stringify(this.storage))
    }

    acessarLocalStorage () {
        const loadItems = localStorage.getItem('storage');
        this.storage = JSON.parse(loadItems)
    }

}











