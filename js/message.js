    let imgs = document.getElementsByClassName('tx_tab');
    let img = imgs[0].getElementsByTagName("img");
    let current  = 0;
    for (let i = 0; i < img.length; i ++){
        img[i].onclick = function () {
            for(let i = 0; i < img.length; i ++){
                img[i].style.opacity ='0.5';
            }
            this.style.opacity = 1;
            current = i;

            let max = 150;
            let name = document.querySelector('input[name = name]');
            let textarea = document.querySelector('textarea');
            let written = document.querySelector('#written');
            let leftToWrite = document.querySelector('#left_to_write');


            textarea.onkeyup = function(){
                let value = this.value;

                written.innerText = value.length;

                leftToWrite.innerText = max - value.length;
            }

            let thumb = img[current].src;

            let username = name.value.trim();

            let time = new Date().toISOString().slice(0,10);

            let submit = document.querySelector('input[type = submit]');

            let messageTab = document.querySelector('.comment:last-child')

            console.log(messageTab.innerHTML);

            function insertMessage(){
                let str = `
                    <div class ="comment_tab">
                        <img src="${thumb}" alt="1024">
        
                        <p class = "date">${time}</p>
        
                        <span>${username}</span>
        
                        <p class = "comment_content">${textarea.value}</p>
                    </div>
                `;
                messageTab.innerHTML += str;

            }


            submit.onclick = function(e) {
                console.log(1);
                e.preventDefault();
                console.log(thumb);
                insertMessage();
            }
        }
    }
