// target the form
const form = document.querySelector('form')
// be watching out for form submission
form.addEventListener('submit', (event)=>{
    event.preventDefault()  // prevent auto reloading of page 
    
    let a = document.querySelector('.csqr').value
    let b = document.querySelector('.cx').value
    let c = document.querySelector('.constant').value

    if( a ===''){
       return document.querySelector('.csqr').style.border = "1px solid red" 
    }else if(b ===''){
         return document.querySelector('.cx').style.border = "1px solid red"   
    }else if(c ===''){
         return document.querySelector('.constant').style.border = "1px solid red"   
    }else{

 
            document.querySelector('.csqr').style.border = "1px solid darkcyan" 
            document.querySelector('.cx').style.border = "1px solid darkcyan" 
            document.querySelector('.constant').style.border = "1px solid darkcyan" 

      
    a = Number(document.querySelector('.csqr').value)
    b = Number(document.querySelector('.cx').value)
    c = Number(document.querySelector('.constant').value)



     let x1 =( -b + Math.sqrt((b * b) - (4 * a * c) )) / (2 * a)
    let x2 =( -b - Math.sqrt((b * b) - (4 * a * c) )) / (2 * a)

    document.querySelector(".x1").innerHTML = "x1: " + x1.toFixed(2)
    document.querySelector(".x2").innerHTML = "x2: " + x2.toFixed(2)

    // document.querySelector('.display-result').classList.add('show')
     document.querySelector('.display-result').style.left = "0"

    }
    

   
   

      
})