let method=()=>{

    let num1 = parseInt(document.getElementById("num").value)
    let num2 = parseInt(document.getElementById("numz").value)
    let x=document.getElementById("operation").value
    if(x=="sum") {
    let su = num1 + num2;
    document.getElementById("ans").value=su
    }
    if(x=="mul") {
    let su = num1 * num2;
    document.getElementById("ans").value=su
    }
    if(x=="div") {
    let su = num1 / num2;
    document.getElementById("ans").value=su
    }
    if(x=="sub") {
    let su = num1 - num2;
    document.getElementById("ans").value=su
    }
    
    }