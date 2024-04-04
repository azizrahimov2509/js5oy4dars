let  buttons = document.querySelectorAll('a');
let body = document.querySelector('body');
let btn1= document.querySelector("#click");

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


        
        btn1.addEventListener('click', randomColor1);
        
        function randomColor1() {
            let randomColorDg = Math.floor(Math.random() * 180);
            let randomColor1 = Math.floor(Math.random() * 255);
            let randomColor2 = Math.floor(Math.random() * 255);
            let randomColor3 = Math.floor(Math.random() * 255);
        
            body.style.backgroundColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
            body.style.backgroundImage = `linear-gradient(${randomColorDg}deg, rgb(${randomColor1}, ${randomColor2}, ${randomColor3}) 0%, rgb(${randomColor2}, ${randomColor3}, ${randomColor1}) 46%, rgb(${randomColor3}, ${randomColor1}, ${randomColor2}) 100%)`;
        }

      