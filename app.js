const body = document.querySelector("tbody");
let x = 0;

for(let i = 0; i<10; i++){
    let tr = document.createElement("tr")
    body.append(tr)
   for(let g =0;g<10;g++){
    let td = document.createElement("td")
    tr.append(td)
    

    td.addEventListener("mouseover",function(){
        if(td.innerText % 2 == 0){
            td.classList.add("luwi")
            
        }
        if(td.innerText % 2 == 1){
            td.classList.remove("luwi")
            td.classList.add("kenti")
        }
        
    })
    x++
    td.innerHTML=x
    
    
}
}


/*for(let i = 0; i<10; i++){
    var tr = document.createElement("tr")
    body.append(tr)
    
   for(let g = 0;g<10;g++){

   

    var td = document.createElement("td")
    tr.append(td)
    td.textContent=x
    td.addEventListener("click",function(){
        if(x % 2 == 0){
            td.classList.add("luwi")
            console.log(x);
        }else{
            td.classList.add("kenti")
            console.log(x);
        }
       
    })
   
    x++
}

}

*/