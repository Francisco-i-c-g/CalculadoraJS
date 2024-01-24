function operacion(){
    let numero1 = 0;
    let numero2 = 0;
    let resul = 0;
    let operacion = "";

    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);


    operacion = document.getElementById("operacion").value;

   
    if((operacion ==="+" || operacion ==="-" || operacion ==="*" || operacion==="/") && !(Number.isNaN(numero1)  || Number.isNaN(numero2))){

        switch(operacion){

            case "+":
                resul = numero1 + numero2;
                break;
            case "-":
                resul = numero1 - numero2;
                break;
            case "*":
                resul = numero1 * numero2;
                break;
            case "/":
                resul = numero1 / numero2;
                break;

            default:
                resul = 0;

        }

    }else(
        alert("Error")
        
        );


   document.getElementById("resultado").innerHTML= resul;

   
}