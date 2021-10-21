 var n = 5;

function factorial(n){
    
    if(n<0){
        
       return;
       
    }
    
    console.log(n)
    n--
    
    factorial(n)
}


console.log(factorial(n))



