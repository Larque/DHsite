window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
             
                var n = document.getElementById('nav');
            
        
                 n.classList.add("navbar2");
    
         
             
          } else {

                var n = document.getElementById('nav');

                n.classList.remove("navbar2");
             
          }
        });
  