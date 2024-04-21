function reg(){
    const login = prompt("Enter your login")
    if(!login){
        for(!login ; ;){
            alert("Login must have any symbol")
        }
    }else{
        const password = prompt("Enter your password")
        if(!password || password == null || password == undefined){
            for(!password ; ;){
                alert("Password must have any symbol")
            }
        }else{
            const checkpass = prompt("Enter your password again")
            if(checkpass != password){
                for(checkpass != password ; ;){
                    alert("Wrong password")
                }
            }else{
                const welcome = document.getElementById('reg');
                welcome.textContent = `Welcome back ${login}`;
            }
        }
    }
}
function checkpersonaldata(){
    for(persdata != true ; ;){
        alert("You must accept personal data")
    }
}
let persdata = confirm("You must accept personal data")?
() => reg():
() => checkpersonaldata()
reg()

var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
