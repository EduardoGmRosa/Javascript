var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatemente ${hora} horas!`)
if (hora < 6){
    console.log('Boa madrugada!')
} else if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else if (hora < 24){
    console.log('Boa noite!')
} else {       
    console.log('Hora inexistente!')
}
   