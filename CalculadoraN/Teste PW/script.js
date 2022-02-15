function pass(){
    let pass = document.getElementById("UserPassword")
    let imagem = document.getElementById("olho")
    if(pass.type == "password"){
        pass.type = "text"
        imagem.src = "../images/eyef.png"
    }
    else{
        pass.type = "password"
        imagem.src = "../images/eye1.png"
    }
}