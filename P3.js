function bot(){
    let bot = Math.floor(Math.random()* 100) // ran 0 - 100
    let checkbot = bot
    alert(checkbot)
    let checkbot1 = prompt("Enter number in past side")
    if(checkbot1 != checkbot){
        for(checkbot1 != checkbot ; ;){
            alert("Wrong captcha try again")
        }
    }
}
