window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
             
                var n = document.getElementById('nav');
            
        
                 n.classList.add("navbar2");
    
         
             
          } else {

                var n = document.getElementById('nav');

                n.classList.remove("navbar2");
             
          }
        });
  

        let iframe = document.querySelector('iframe');
        let player = new Vimeo.Player(iframe);
        let playing = false;
        let simulationTime = 0;
       
        player.on('play', function(e) {
            playing = true;
        });
       
        player.on('pause', function(e) {
            playing = false;
        });
       
        /**
        * Event fired when user want to fast forward
        */
        player.on('seeked', function(e) {
            if (e.seconds > simulationTime) {
                player.setCurrentTime(simulationTime).then(function(seconds) {
                }).catch(function(error) {
                   switch (error.name) {
                       case 'RangeError':
                           // The time is less than 0 or greater than the video's duration
                           break;
                       default:
                           // Some other error occurred
                           break;
                   }
                });
            }
            else {
                simulationTime = data.seconds;
            }
        });
       
        /**
        * Keep time going
        */
        window.setInterval(function() {
            if (playing) {
                simulationTime++;
            }
        }, 1000);