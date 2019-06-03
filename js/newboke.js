window.onload=function() {
    let home = document.getElementById('home');
    let btnlist = document.getElementsByClassName('btnlist');

    home.onmouseenter = function () {
        home.style.color = 'red';
    };
    home.onmouseleave = function () {
        home.style.color = '#fff';
    };


    let dairylist = document.getElementsByClassName('dairylist')[0];
    let lilist = dairylist.getElementsByTagName('li');
    for (let i = 0; i < lilist.length; i++) {
        lilist[i].onclick = function () {
            for (let j = 0; j < lilist.length; j++) {
                lilist[j].style.borderBottom = 'none'
            }
            this.style.borderBottom = '2px solid #000';
        }
    }
    let tabtexts = document.querySelectorAll('.tablist>li');
    // console.log(tabtexts);
    tabtexts.forEach(function (elem, index) {
        // console.log(elem);
        elem.onmouseenter = function () {
            for (let i = 0; i < tabtexts.length; i++) {
                tabtexts[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }
    });


    //轮播图
    let current = 0;
    next = 0;
    let rb = document.querySelector('.rightbtn');
    let lb = document.querySelector('.leftbtn');
    let bannermig = document.querySelectorAll('.bannerimg>li');
    let bannerpointer = btnlist[0].getElementsByTagName('li');
    let w = bannermig[0].offsetWidth;
    console.log(w);
    lb.onclick = function () {
        next--;
        if (next < 0) {
            next = bannermig.length - 1;
        }
        bannermig[next].style.left = w + 'px';
        animate(bannermig[current], {left: -w});
        animate(bannermig[next], {left: 0});
        bannerpointer[current].classList.remove('hot');
        bannerpointer[next].classList.add('hot');
        current = next;
    };
    rb.onclick = function () {
        next++;
        if (next == bannermig.length) {
            next = 0;
        }
        bannermig[next].style.left = -w + 'px';
        animate(bannermig[current], {left: w});
        animate(bannermig[next], {left: 0});
        bannerpointer[current].classList.remove('hot');
        bannerpointer[next].classList.add('hot');
        current = next;
    };
//dian


//
//     let index=0;
//     let rb=document.querySelector('.rightbtn');
//     let bannerimg=document.querySelectorAll('.bannerimg>li');
//     console.log(rb);
//     console.log(bannerimg);
//     rb.onclick = function() {
//         index++;
//         if (index === bannerimg.length) {
//             index = 0;
//         }
//         bannerimg.forEach(function (elem) {
//             elem.style.zIndex = 1;
//         })
//         Array.prototype.forEach.call(bannerpointer,function(elem){
//             elem.classList.remove('hot')
//         })
//         bannerpointer[index].classList.add('hot')
//         bannerimg[index].style.zIndex = 999;
//         return false;
//     }
//     let rl=document.querySelector('.leftbtn');
//     rl.onclick = function() {
//         index--;
//         if (index <0) {
//             index = bannerimg.length - 1;
//         }
//         bannerimg.forEach(function (elem) {
//             elem.style.zIndex = 1;
//         });
//         Array.prototype.forEach.call(bannerpointer,function(elem){
//             elem.classList.remove('hot')
//         })
//         bannerpointer[index].classList.add('hot');
//         bannerimg[index].style.zIndex = 999;
//         return false;
//     }
//     //自动切换
    let bannerleft = document.querySelector('.bannerleft');
    let t = setInterval(rb.onclick, 2000);
    bannerleft.onmouseenter = function () {
        clearInterval(t);
    };
    bannerleft.onmouseleave = function () {
        t = setInterval(rb.onclick, 2000)
    };
//
//     for(let i=0;i<bannerpointer.length;i++){
//       bannerpointer.onclick=function(){
//           Array.prototype.forEach.call(bannerpointer,function(elem){
//               elem.classList.remove('hot')
//           })
//          bannerimg.forEach(function(elem){
//               elem.style.zIndex=1;
//           })
//           this.classList.add('hot');
//           bannerimg[i].style.zIndex=999
//       }
//     }

    for (let i = 0; i < bannerpointer.length; i++) {
        bannerpointer[i].onclick = function () {
            if (current === i) {
                return;
            }
            next = i;
            if (next > current) {
                bannermig[next].style.left = w + 'px';
                animate(bannermig[current], {left: -w});
                animate(bannermig[next], {left: 0});
            } else {
                bannermig[next].style.left = -w + 'px';
                animate(bannermig[current], {left: w});
                animate(bannermig[next], {left: 0});
            }
            bannerpointer[current].classList.remove('hot');
            bannerpointer[next].classList.add('hot');
            current = next;
        }
    }


    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll(".lazyload");
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrolltop);
        for (let i = 0; i < positionArr.length; i++) {
            if (scrolltop + viewH >= positionArr[i] + 50) {
                //标准属性
                if (!imgs[i].src) {
                    imgs[i].src = imgs[i].getAttribute('aa');
                }
            }
        }
    };
}
