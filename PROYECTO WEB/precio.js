function precio(){
    let op1=document.getElementById("equipo").value;
    let op2 = document.querySelector('input[name="talle"]:checked').value;
    if(op1=="river"&&op2=="s"){
        document.getElementById("resultado2").textContent=" $35,000$";
    }
    if(op1=="river"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $35,500$";
    }
    if(op1=="river"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $36,000$";
    }
    if(op1=="boca"&&op2=="s"){
        document.getElementById("resultado2").textContent=" $35,000$";
    }
    if(op1=="boca"&&op2=="m"){
        document.getElementById("resultado2").textContent="$35,500$";
    }
    if(op1=="boca"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $36,000$";
    }
    if(op1=="arg"&&op2=="s"){
        document.getElementById("resultado2").textContent=" $40,000$";
    }
    if(op1=="arg"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $40,500$";
    }
    if(op1=="arg"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $41,000$";
    }
    if(op1=="rac"&&op2=="s"){
        document.getElementById("resultado2").textContent="$30,000$";
    }
    if(op1=="rac"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $30,500$";
    }
    if(op1=="rac"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $31,000$";
    }
    if(op1=="ale"&&op2=="s"){
        document.getElementById("resultado2").textContent=" $40,000$";
    }
    if(op1=="ale"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $40,500$";
    }
    if(op1=="ale"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $41,000$";
    }
    if(op1=="bar"&&op2=="s"){
        document.getElementById("resultado2").textContent=" $40,000$";
    }
     if(op1=="bar"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $40,500$";
    }
     if(op1=="bar"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $41,000$";
    }
     if(op1=="cro"&&op2=="s"){
        document.getElementById("resultado2").textContent=" $40,000$";
    }
     if(op1=="cro"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $40,500$";
    }
     if(op1=="cro"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $41,000$";
    }
     if(op1=="bet"&&op2=="s"){
        document.getElementById("resultado2").textContent="$40,000$";
    }
     if(op1=="bet"&&op2=="m"){
        document.getElementById("resultado2").textContent=" $40,500$";
    }
     if(op1=="bet"&&op2=="l"){
        document.getElementById("resultado2").textContent=" $41,000$";
    }
    
}
