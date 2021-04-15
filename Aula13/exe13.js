function carregar() {    
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora > 01 && hora < 12){
    //bom dia
    img.src = 'Manhã.png'
    document.body.style.background = '#adad5a'
}else if ( hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'Tarde.png'
        document.body.style.background = '#585826'
}else {
    //boa noite 
    img.src = 'Noite.png'
    document.body.style.background = '#41410c91'
}
}
