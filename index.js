document.querySelectorAll(".bouncing-letters>span") 
    .forEach((element) => { 
        element.addEventListener("mouseover",  
                                 (e) => bounce(e.target)); 
    }); 

    function bounce(letter) { 
        if (!letter.classList.contains("bounce")) { 
            letter.classList.add("bounce"); 
            setTimeout( 
                function () { 
                    letter.classList.remove("bounce"); 
                }, 
                1000 
            ); 
        } 
    }; 