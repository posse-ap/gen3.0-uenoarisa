'use strict';
{
  for (var i = 0; i < 6; i++){
    let ele = document.getElementById(`correctbox-${i}`);
    let ele1 = document.getElementById(`falsebox-${i}`);
    document.getElementById('correct-' + i).onclick = ()=>{
      if (ele1.style.display!=='block'){
        ele.style.display = 'block';
        let main = document.getElementById(`correct-${i}`)
        main.style.backgroundColor = "red";
        console.log(main);
      }
    };

    document.getElementById('false0-' + i).onclick = ()=>{
      if (ele.style.display!=='block'){
        ele1.style.display = 'block';
      }
    };

    document.getElementById('false1-' + i).onclick = ()=>{
      if (ele.style.display!=='block'){
        ele1.style.display = 'block';
      }
    };
  };
  
};



  // let switchBtn = document.getElementById('correct');
  // let box = document.getElementById('correctbox');

  // let changeElement = (el)=> {
  //   //el.classList.toggle('active');
  //   if(el.style.display=='none'){
  //     el.style.display='';
  //   }
  // }

  // switchBtn.addEventListener('click', ()=> {
  //   changeElement(box);  
  // },false);

