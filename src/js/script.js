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



    salvarLocalStorage () {
        localStorage.setItem('storage' , JSON.stringify(this.storage))
    }

    acessarLocalStorage () {
        const loadItems = localStorage.getItem('storage');
        const itemsverified =  JSON.parse(loadItems)

        if(Array.isArray(itemsverified)) {
            this.storage = itemsverified
        }

        else {
            this.storage = []
        }
    }



    adicionarItems (id,nome,apartamento,plataforma,data,diarias,valor_reserva) {
        if (this.storage){
            for (let i = 0; i < this.storage.length ; i ++ ){
                if (this.storage[i].id === id){
                    return
                }
            }
        }
        else {
            this.storage = []
        }

        this.storage.push({id,nome,apartamento,plataforma,data,diarias,valor_reserva})
        this.salvarLocalStorage()
        this.gerarItems()
    }


    excluirItems (id) {
        if (this.storage){
            for (let i = 0 ; i < this.storage.length ; i ++){
                if (this.storage[i].id == id){
                    this.storage.splice(i,1)
                    break
                }
            }
        }
        this.salvarLocalStorage()
        this.gerarItems()
    }


    gerarItems () {
        const tlist = document.getElementById('Tlist');
        tlist.innerHTML = '';
        if (this.storage){
            this.storage.forEach((value) => {
                const tItemns = document.createElement('tr')
                tItemns.innerHTML = `
                    <td> ${value.id} </td>
                    <td> ${value.nome} </td>
                    <td> ${value.apartamento} </td>
                    <td> ${value.plataforma} </td>
                    <td> ${value.data} </td>
                    <td> ${value.diarias} </td> 
                    <td> ${value.valor_reserva} </td>
                    <td>
                        <button class="btn-editar" data-id="${value.id}">Editar</button>
                        <button class="btn-deletar" data-id="${value.id}">Deletar</button>
                    </td>

                `

                tlist.appendChild(tItemns)
            })
        }
    }
}






    











