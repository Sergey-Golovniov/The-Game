// let forScreen = false;
// document.addEventListener('keydown', function (event) {
//     if(event.code == 'KeyQ'&&forScreen){
//     if (document.fullscreenElement) {
//       document.exitFullscreen();
//     } else {
//       document.documentElement.requestFullscreen();
//     }
// }
// forScreen = (event.code == 'ControlRight'||event.code == 'ControlLeft')?true:false;
//   }, false);

let changeScreen = document.querySelector('.changeScreen');
changeScreen.addEventListener('click', function(){
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
});