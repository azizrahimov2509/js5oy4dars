let  buttons = document.querySelectorAll('a');
let body = document.querySelector('body');
let btn1= document.querySelector("#click");
const colorText = document.querySelector(".color-text");

        buttons.forEach(btn => {
            btn.addEventListener('click', function(e) {
             
                let ripples = document.createElement('span');
            
                let rect = this.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

               
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                
            
                this.appendChild(ripples);

               
                setTimeout(() => {
                    ripples.remove();
                }, 1000);
            });
        });


    
      
        const values = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        
   
        
        function getGradient(){
            let color = "#";
            for(i=0;i<6;i++){
              const randomNumber = Math.trunc(Math.random()*values.length);
              color+=values[randomNumber];
            }

            return color;
        }
  
      function setGradient(){
        const color1 = getGradient();
        const color2 = getGradient();
        const randomDeg = Math.trunc(Math.random()*360);
        const backGround = `linear-gradient(${randomDeg}deg,${color1},${color2})`

        body.style.background = backGround;
        colorText.textContent = backGround;
      }
        

      setGradient();

      btn1.addEventListener('click',setGradient);
      