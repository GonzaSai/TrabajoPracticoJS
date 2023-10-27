//1)

let nombrePersona = prompt('Introduce tu nombre')
if (nombrePersona == ' Santino' ) 
{
    alert('Hola' + nombrePersona + ' ,bienvenido a esta página')
}else if(nombrePersona == ' Nahuel'){
    alert('Hola' + nombrePersona + ' ,bienvenido a esta página')
}else{
    alert('Hola ' + nombrePersona + ' ,bienvenido')
}


//2)

    let EdadUsuario = prompt('Introduce tu edad')
    if (EdadUsuario >= 18)
    {
        alert('Sos mayor de edad')
    }else{
        alert('Sos menor de edad')
    }

//3) 

let Categoría = prompt('Introduce tu edad nuevamente')
if (Categoría <= 11)
{
    alert('Sos un niño')
}else if(Categoría <= 18){
    alert('Sos adolecente')
}else if(Categoría <= 26){
    alert('Sos joven')
}else if(Categoría <= 59){
    alert('Sos adulto')
}else{
    alert('Sos anciano')
}
