let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('#gnb_bg');
let lnb = document.querySelectorAll('.lnb');
console.log(lnb);


gnb.addEventListener('mouseenter',()=>{
  gnb_bg.style.height = '250px';

  for( i = 0 ; i <lnb.length; i++){
    lnb[i].style.display = 'block';
  }
})

gnb.addEventListener('mouseleave',()=>{
  gnb_bg.style.height = '0px';

  for( i = 0 ; i <lnb.length; i++){
    lnb[i].style.display = 'none';
  }
})


let list = document.querySelectorAll('.list');

  for(let i = 0; i<list.length; i++){
    list[i].addEventListener('mouseenter',()=>{
      list[i].src = `img/main3-on${i+1}.jpg`
    });

    list[i].addEventListener('mouseleave',()=>{
      list[i].src = `img/main3-img${i+1}.jpg`
    });
}



let floor = document.querySelectorAll('.floor');
for(let i = 0; i<floor.length; i++){

  floor[i].addEventListener('mouseenter',()=>{
    floor[i].style.backgroundImage = 'url(img/floorplan-icon-on.png)';
    floor[i].style.backgroundColor = '#fff';
    floor[i].style.color = '#333';
  })

  floor[i].addEventListener('mouseleave',()=>{
    floor[i].style.backgroundImage = 'url(img/floorplan-icon.png)';
    floor[i].style.backgroundColor = '#8d7249';
    floor[i].style.color = '#fff';
  })
}


let vr = document.querySelectorAll('.vr');
for(let i = 0; i <vr.length; i++){

  vr[i].addEventListener('mouseenter',()=>{
    vr[i].style.backgroundColor = '#fff';
    vr[i].style.backgroundImage = 'url(img/vr-icon-on.png)';
    vr[i].style.color = '#333';
  })

  vr[i].addEventListener('mouseleave',()=>{
    vr[i].style.backgroundColor = '#59483f';
    vr[i].style.color = '#fff';
    vr[i].style.backgroundImage = 'url(img/vr-icon.png)';
  })
}

let topBtn = document.querySelector('.top_btn');
topBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
})