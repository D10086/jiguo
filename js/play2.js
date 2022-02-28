function ajd(a){
    var myajax=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    myajax.open('get',a,true);
    myajax.send();
    myajax.onreadystatechange=function(){
        if(myajax.readyState==4){
            if(myajax.status==200){
                var data=JSON.parse(myajax.responseText);
                console.log(data);
                var output0=template('fullm',{value:data[0]});
                var output1=template('fullm',{value:data[1]});
                full0.innerHTML=output0;
                full1.innerHTML=output1;
    
            }
        }
    }
};
ajd('http://192.168.31.110:3000/play/new');
var coollis=document.getElementsByClassName('coolsm');
function newclick(){
    ajd('http://192.168.31.110:3000/play/new');
    for(var i=0;i<coollis.length;i++){
        coollis[i].id=''
    }
    var cooln=document.getElementsByClassName('cooln')[0];
    var rep=document.getElementsByClassName('report-box')[0];
    coollis[0].id="chred";
    cooln.style.display='block';
    rep.style.display='none'
}
function hotclick(){
    ajd('http://192.168.31.110:3000/play/hot');
    for(var i=0;i<coollis.length;i++){
        coollis[i].id=''
    }
    var cooln=document.getElementsByClassName('cooln')[0];
    var rep=document.getElementsByClassName('report-box')[0];
    coollis[1].id="chred";
    cooln.style.display='block';
    rep.style.display='none'
}
function pinclick(){
    for(var i=0;i<coollis.length;i++){
        coollis[i].id=''
    }
    coollis[2].id="chred";
    var cooln=document.getElementsByClassName('cooln')[0];
    var rep=document.getElementsByClassName('report-box')[0];
    cooln.style.display='none';
    rep.style.display='block'
}

function add(){
    $('.circle img')[0].src="image/loading-icon.gif";
    $('.addmore').animate({
      'display':'none'
    },function(){
      $('#container3').css('display','block');
      $('.addmore').hide();00
    })
}



