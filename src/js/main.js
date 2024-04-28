'use strict'
{
  $(window).on('load',function(){
    $("#title-logo").fadeIn('slow');//ロゴを1.2秒でフェードアウトする記述
    $('#title-sq').addClass('animate-swing-left-fwd');
    $("#title-logo").delay(500).fadeOut('slow');
    $("#title-sq").delay(1200).fadeOut('slow');
  
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() {    
        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
  });
  

  const humburgerMenu = document.querySelector("#humburgerMenu");
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");
  const menus = document.querySelectorAll(".menu");

  //メニューのずらしアニメーション
  async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

 open.addEventListener("click", async ()=>{
   humburgerMenu.classList.remove("hidden");
   close.classList.remove("hidden");
   open.classList.add("hidden");
   for (const menu of menus){
    menu.classList.remove("hidden");
    menu.classList.add("animate-tracking-in-expand", "block");
    await sleep(100);
   }
  });
  //^^^^

  close.addEventListener("click", ()=>{
    closeMenu();
    menus.forEach(menu => {
      menu.classList.remove("animate-tracking-in-expand", "block");
      menu.classList.add("hidden");
    });
   });

menus.forEach(menu => {
  menu.addEventListener("click", ()=>{
    closeMenu();
   });
});


 function closeMenu(){ 
  humburgerMenu.classList.add("hidden");
  close.classList.add("hidden");
  open.classList.remove("hidden");
  menus.forEach(menu => {
    menu.classList.remove("animate-tracking-in-expand", "block");
    menu.classList.add("hidden");
  });
}


// async function main() {
//   menus.forEach(async menu => {
//     menu.classList.add("animate-tracking-in-expand");
//     await sleep(1000);
//     });
// }

// async function main() {
//   let num = 0;
//   menus.forEach(menu => {
//     num ++;
//     return new Promise((resolve)=>{
//       setTimeout{()=>{
//         resolve(num * 2);
//       },}
//     })
//     menu.classList.add("animate-tracking-in-expand");
//   });
}