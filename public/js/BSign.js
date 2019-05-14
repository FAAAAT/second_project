//存入登录数据
window.onload=function () {
    localStorage.setItem('ad001','000000');
    localStorage.setItem('zg001','000000');
    localStorage.setItem('jz001','000000');
};
//用户名正则
const oReg=/^[a-z]{2}[0-9]{4}$/;
//密码正则
const oRegPass=/^[0-9]{6}$/;
//获取用户名
let oUser=$('#B-user');
//获取密码
let oPass=$('#B-poss');
//获取登录按钮
let oBtn=$('#B-go');
//获取对图标
let oYes=$('#yes');
//获取对图标
let oNo=$('#no');
//当用户名框失去焦点时判断是否为空
oUser.blur(function(){
   //获取用户名框的内容
   let oUserVal=oUser.val();
    //获取密码框的内容
   let oPassVal=oPass.val();
   //判断是否为空
   if(!oUserVal.trim()){
      oNo.css('display','block');
      oYes.css('display','none')
   }else {
     //不为空的时候判断用户名是否正确
       if (localStorage.getItem(oUserVal)){
           oNo.css('display','none');
           oYes.css('display','block');
       }
   }
   });


//获取登录按钮，点击跳转到主页

/*
oBtn.click(function () {
   window.location.href='public/pages/BHome.html'
});*/
