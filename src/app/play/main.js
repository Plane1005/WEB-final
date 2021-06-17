const $ = (str) => document.querySelector(str);
// const myAudio = document.getElementById('audio1');
// $(myAudio).click(function(){
//     $(".song-disc").trigger('click');
//   })
// $('.audio1').addEventListener('click', () => {
//     correctCoverRotate();
//     $('.song-needle').classList.toggle('play');
//     $('.song-img').classList.toggle('play');
//     $('.play-btn').classList.toggle('play');
// });
$('.song-disc').addEventListener('click', () => {
    correctCoverRotate();
    $('.song-needle').classList.toggle('play');
    $('.song-img').classList.toggle('play');
    $('.play-btn').classList.toggle('play');
});
// $('.audio1').addEventListener('click', () => {
//   $(".song-disc").addEventListener('click');
// });
// $(".audio1").click(function(){
//   correctCoverRotate();
//   $('.song-needle').classList.toggle('play');
//   $('.song-img').classList.toggle('play');
//   $('.play-btn').classList.toggle('play');
//   })

// function playPause(){
//   const myAudio = document.getElementById('audio1');
//   if(myAudio.paused){
//       myAudio.play();
//    }else{
//     myAudio.pause();
// }

function correctCoverRotate() {
    const isPlaying = $('.play-btn').classList.contains('play');
    const nextPlay = !isPlaying;
    // 下一步静止的时候才纠正旋转
    if (!nextPlay) {
        const $songCover = $('.song-disc__cover');
        const $songImg = $('.song-img');
        const songImgMatrix = window.getComputedStyle($songImg).getPropertyValue('transform');
        const songCoverMatrix = window.getComputedStyle($songCover).getPropertyValue('transform');
        if (songCoverMatrix === 'none') {
            // 第一次暂停
            $songCover.style.transform = songImgMatrix;
        } else {
            const matrix1 = parseMatrix(songCoverMatrix);
            const matrix2 = parseMatrix(songImgMatrix);
            const angle1 = calcAngle(matrix1[0], matrix1[1]);
            const angle2 = calcAngle(matrix2[0], matrix2[1]);
            const angle = angle1 + angle2;
            const radian = (Math.PI / 180) * angle;
            const [a, b, c, d] = [Math.cos(radian), Math.sin(radian), -Math.sin(radian), Math.cos(radian)];
            $songCover.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, 0, 0)`;
        }
    }
}

// const BTN1 = document.getElementById('.audios1');
// const BTN2 = document.getElementByclassName('.play-btn');
//     //给按钮2添加点击事件
//     function GO(){
//       correctCoverRotate.onclick();
//     }
// .addEventListener('click', () => {
//     correctCoverRotate();
//   $('.song-needle').classList.toggle('play');
//   $('.song-img').classList.toggle('play');
//   $('.play-btn').classList.toggle('play');
//         // BTN2.onclick(); //按钮2点击后触发按钮1的onclick
//         //BTN1.click(); //按钮2点击后触发按钮1的click 效果一样
//     });
// $(".audios1").click(function(){
//     $(".play-btn").trigger('click');
//   })
/**
 * 解析 matrix 数据
 * @param {String} matrix "matrix(-0.97874, 0.205104, -0.205104, -0.97874, 0, 0)"
 * @returns {Array} [a, b, c, d, e, f]
 */
function parseMatrix(matrix) {
    const start = matrix.indexOf('(') + 1;
    const end = matrix.indexOf(')');
    const content = matrix.slice(start, end);
    const values = content.split(', ');
    return values;
}

function calcAngle(a, b) {
    const radian = Math.atan2(b, a);
    const angle = radian * (180 / Math.PI);
    return angle;
}
// function playPause(){
//   const myAudio = document.getElementById('audio1');
//   if(myAudio.paused){
//       myAudio.play();
//    }else{
//     myAudio.pause();
// }
// $(document).ready(function() {
//     $('.audios1').click(function() {
//         $('.play-btn').onclick();
//     });
// });
// function playMusic() {
//         var audios1 = document.getElementById("audios1");  

//         if (audios1.paused){ /*如果已经暂停*/
//             audios1.play(); /*播放*/
//         }else {
//             audios1.pause();/*暂停*/
//         }
//     }
// var C=document.getElementByClassName("play-btn");
// var W=document.getElementById("audios1");
// W.addEventListener('click', () => {
//         C.onclick(); //按钮2点击后触发按钮1的onclick
//         //BTN1.click(); //按钮2点击后触发按钮1的click 效果一样
//     });