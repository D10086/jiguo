$('.addmore').on('click',function(){
    $('#container3').css('display','block');
    $('.addmore').hide()
})

// 轮播图
var imgs=document.getElementsByClassName('allleng')[0].children;
var picmove=document.getElementsByClassName('winshow')[0];
// var prev=document.getElementsByClassName('left')[0];
// var next=document.getElementsByClassName('right')[0];
var index=0;
var timer1=null, timer2=null;
picmove.scrollLeft=imgs[0].offsetWidth;
function automove(){
    timer1=setInterval(function () {
      index+=4;
      if (index >= imgs.length) {
        index = 0
        picmove.scrollLeft =0
      }
      move()
    }, 1000)
  }
  automove()

  function move() {

    var step = 0 
    var maxstep = 20 
    var start=picmove.scrollLeft
    var end=imgs[0].offsetWidth*index;
    var everystep = (end - start) / maxstep 

    timer2 = setInterval(function () {
      step++
      if (step >= maxstep) {
        clearInterval(timer2)
      }

      start += everystep
      picmove.scrollLeft = start
    }, 10)
  }

  document.addEventListener('visibilitychange', function () {
    if (this.visibilityState == 'hidden') {
      clearInterval(timer1)
      clearInterval(timer2)
    }
    if (this.visibilityState == 'visible') {
      automove()
    }
  })

function pre(){
  clearInterval(timer1);
  clearInterval(timer2);
  picmove.scrollLeft-=imgs[0].offsetWidth;
  // var ow=document.getElementsByClassName('allleng')[0].offsetWidth;
  var ow=1080;
  console.log(ow)
  if(picmove.scrollLeft<=0){
    picmove.scrollLeft=ow;
  }


}
function next(){
  clearInterval(timer1);
  clearInterval(timer2);
  picmove.scrollLeft+=imgs[0].offsetWidth;
  // var ow=document.getElementsByClassName('allleng')[0].offsetWidth;
  var ow=1080;
  if(picmove.scrollLeft>=ow){
    picmove.scrollLeft=0;
  }

}