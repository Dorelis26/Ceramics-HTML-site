const a = document.querySelectorAll("a");




for(let i = 0; i <a.length; i++){
    const link = a[i].getAttribute("href");
    a[i].addEventListener("click",function(event){
        if(link === "#work"){
            a[i].classList.add("underL");
            a[1].classList.remove("underL");
            a[2].classList.remove("underL");
        }else if(link === "#about"){
            a[i].classList.add("underL");
            a[0].classList.remove("underL");
            a[2].classList.remove("underL");
            
        }else if(link === "#contact"){
            a[i].classList.add("underL");
            a[0].classList.remove("underL");
            a[1].classList.remove("underL");
        }
        
    })
}