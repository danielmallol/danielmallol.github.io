const botonCalcularTotal = get('botonResumen')
const botonBorrarTotal   = get('botonBorrar')
let Total;
let precioTicket = " ";


function get(id) {
    return document.getElementById(id);
}

botonCalcularTotal.addEventListener('click', function(){
    get('Total').innerHTML = 'Total A Pagar: $' + calcular();
})


let cantidadTickets = get('cantidad'); 

function cantTickets (){
    const cant = parseInt(cantidad.value);  
    if(cant > 0 ) { 
    return(cant)
    } else {
    return(0)
    }
}

let TicketAComprar = get('precio');

function precioIndicado (){
    const TicketAComprar = precio.options[precio.selectedIndex].value

    if (TicketAComprar === "estudiante"){
        let precioTicket = 40;
        return precioTicket
    }
    if (TicketAComprar === "trainee"){
        let precioTicket = 100;
        return precioTicket
    }
    if (TicketAComprar === "junior"){
        let precioTicket = 170;
        return precioTicket
    }
    if (TicketAComprar === "general"){
        let precioTicket = 200;
        return precioTicket
    }
} 


 function calcular() {
    const ValorA = cantTickets();
    const ValorB = precioIndicado();
    let resultadoFinal= ValorA*ValorB;
    return resultadoFinal
 }

 botonBorrarTotal.addEventListener('click', function(){
    get('Total').innerHTML = 'Total A Pagar: $';
})
    