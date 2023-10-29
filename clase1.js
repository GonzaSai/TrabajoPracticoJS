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

//4)

let díasDeLaSemana = prompt('Introduce un día')
if (díasDeLaSemana == 'Sábado')
{
    alert('Es fin de semana')
}else if (díasDeLaSemana == 'Domingo') {
    alert('Es fin de semana')
}else{
    alert('Es un día de semana')
}

//5)

let Contraseña = prompt('Introduce la contraseña')
if (Contraseña == 'Secreto')
{
    alert('Acceso concedido')
}else{
    alert('Acceso denegado')
}

//6) 

function MúltiploDe5 ()
{
    let MúltiploDe5 = prompt('Introduce un número')
    if (MúltiploDe5 / 5 == true)
    {
        return 'El número es múltiplo de 5'
    }else{
        return 'El número no es múltiplo de 5'
    }
}
alert(MúltiploDe5())

//7) 

function Descuento (){
    let Edad = prompt('Introduce tu edad')
    let Precio = 2500
    let PrecioSinDesuento = 2250
    if (Edad >= 65)
    {
        return 'El precio del producto es ' + PrecioSinDesuento
    }else{
        return 'El precio del producto es ' + Precio
    }
}
alert(Descuento())

//8)

function Notas(){
    let Notas = prompt('Introduce una nota')
    if  (Notas <= 100)
    {
        return 'Tu nota es un MS'
    }else if (Notas <80){
        return 'Tu nota es una S'
   }else{
    return 'Tu nota es un EP'
    }
}
alert(Notas())

//9)

function NúmeroDeDía(){
    let Día = prompt('Introduce un número del 1 al 7')
    if(Día == 1){
        return 'El día de la semana es el lunes'
    }else if(Día == 2){
        return 'El día de la semana es el martes'
    }else if (Día == 3){
        return 'El día de la semana es el miercoles'
    }else if (Día == 4){
        return 'El día de la semana es el jueves'
    }else if (Día == 5) {
        return 'El día de la semana es el viernes'
    }else if (Día == 6){
        return 'El día de la semana es el sábado'
    }else{
        return 'El día de la semana es el domingo'
    }
}
alert(NúmeroDeDía())

//10)

function AñoBisiesto(){
    let Año = Number(prompt ('Introduce un año'))
    if((Año / 400 === 0) || ((Año /4 === 0) && (Año /100 !== 0))){
        return 'Es bisiesto'
    }else{
        return 'El año no es bisiesto'
    }
}
alert(AñoBisiesto())

//11)

function ComprobarTexto(){
    let Texto1 = prompt('Introduce algún texto')
    let Texto2 = prompt('Introduce otro texto')
    if (Texto1 == Texto2){
        return 'Los textos son iguales'
    }else {
        return 'Los textos son diferentes'
    }
}
alert(ComprobarTexto())

//2) 

function Edad(){
    let Edad = 2023 - prompt('Introduce el año de nacimiento') 
    return 'Tu edad es ' + Edad
}
alert(Edad())