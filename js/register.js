var reg_get = document.getElementsByClassName('reg-get')[0]
var index = 10
var timer = null
reg_get.onclick = function(){
    reg_get.innerHTML = '10'
    timer = setInterval(() => {
        index--
        reg_get.innerHTML = index
        if(index<0) {
            clearInterval(timer)
            reg_get.innerHTML = '再次发送验证码'
            index = 10
            reg_get.disabled = false
        }
    }, 1000);
    
    if(timer){
        reg_get.disabled = true
    }
}

// 表单验证
$('.reout').eq(0).find('input').blur(function(){
    var span=$('.rein').eq(0);
    var re=/^1[3-9]\d{9}$/;
    if(re.test($(this).val())){
        span.text('输入正确');
        span.css('color','green');
    }else{
        span.text('请输入正确手机号码');
        span.css('color','red');
    }
})
$('.reout').eq(1).find('input').blur(function(){
    var span=$('.rein').eq(1);
    var re=/^r2B7$/;
    if(re.test($(this).val())){
        span.text('输入正确');
        span.css('color','green');
    }else{
        span.text('请输入正确验证码');
        span.css('color','red');
    }
})
$('.reout').eq(2).find('input').blur(function(){
    var span=$('.rein').eq(2);
    var re=/^[0-9]{4}$/;
    if(re.test($(this).val())){
        span.text('输入正确');
        span.css('color','green');
    }else{
        span.text('请输入正确验证码');
        span.css('color','red');
    }
})
$('.reout').eq(3).find('input').blur(function(){
    var span=$('.rein').eq(3);
    var re=/^[a-zA-Z0-9]{4,8}$/;
    if(re.test($(this).val())){
        span.text('输入正确');
        span.css('color','green');
    }else{
        span.text('请重新输入用户名');
        span.css('color','red');
    }
})

$('.reout').eq(4).find('input').blur(function(){
    var span=$('.rein').eq(4);
    var re=/^\w{6,12}$/;
    if(re.test($(this).val())){
        span.text('输入正确');
        span.css('color','green');
    }else{
        span.text('请输入正确密码');
        span.css('color','red');
    }
})
$('.reout').eq(5).find('input').blur(function(){
    var span=$('.rein').eq(5);
    var same=$('.reout').eq(4).find('input').val();
    if($(this).val()==same){
        span.text('输入正确');
        span.css('color','green');
    }else{
        span.text('请确认密码');
        span.css('color','red');
    }
})

function reg_(){
    var data = {
        phone:phone_.value,
        code:code_.value,
        username:use.value,
        password:psd.value,
    }
    var myajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    myajax.open('http://192.168.31.110:3000/users/register',true)
    myajax.send(data)
    myajax.onreadystatechange = function(){
        if(myajax.readyState ==4){
            if(myajax.status==200){
                console.log(myajax.responseText);
                console.log(data);
            }
        }
    }
}