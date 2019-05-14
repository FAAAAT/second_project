//存入登录数据
let arr=[{name:'ad001',pass:123456,who:0},{name:'js001',pass:123456,who:1},{name:'jz001',pass:123456,who:2}];
//用户名正则
const oReg=/^[a-z]{2}[0-9]{3}$/;
//密码正则
const oRegPass=/^[0-9]{6}$/;
//获取用户名
let oUser=$('#B-user');
//获取密码
let oPass=$('#B-pass');
//获取登录按钮
let oBtn=$('#B-go');
//获取用户名对图标
let oYes=$('#yes');
//获取用户名错图标
let oNo=$('#no');
//获取密码对图标
let oYes1=$('#yes1');
//获取密码错图标
let oNo1=$('#no1');
//获取用户名下面提示标签
let oBUserCon=$('#B-user-content');
//获取密码下面提示标签
let oBPassCon=$('#B-pass-content');
//获取弹框
let oBMaskEnd=$('#B-mask-end');
//获取弹框内的确定按钮
let oBOk=$('#ok');
//获取弹框顶部提示
let oBTop=$('#B-top');
//获取弹框的内容
let oBContent=$('#B-content');
//当用户名框失去焦点时
oUser.blur(function(){
   //获取用户名框的内容
   let oUserVal=oUser.val();
   //判断是否为空
   if(!oUserVal.trim()){
      oNo.css('display','block');
      oYes.css('display','none');
      oBUserCon.text('*该项不能为空');
   }else if (oReg.test(oUserVal)){
       //不为空的时候判断用户名格式是否正确
       oNo.css('display','none');
       oYes.css('display','block');
       oBUserCon.text('');
   }else  {
       oNo.css('display','block');
       oYes.css('display','none');
       oBUserCon.text('*请输入正确的用户类型及编码');
   }

   });
//当密码框失去焦点时
oPass.blur(function(){
    //获取用户名框的内容
    let oPassVal=oPass.val();
    //判断是否为空
    if(!oPassVal.trim()){
        oNo1.css('display','block');
        oYes1.css('display','none');
        oBPassCon.text('*该项不能为空');
    }else if (oRegPass.test(oPassVal)){
        //不为空的时候判断密码格式是否正确
        oNo1.css('display','none');
        oYes1.css('display','block');
        oBPassCon.text('');
    }else  {
        oNo1.css('display','block');
        oYes1.css('display','none');
        oBPassCon.text('*密码应当包含6位数字');
    }
});
//用于判断用户输入密码错误次数
let n=0;
//当登录按钮被点击
oBtn.click(function () {
    oDian();
});
//点击登录按钮时调用的函数
function oDian(){
    let oBUserVal=oUser.val();
    let oBPassVal=oPass.val();
    console.log(oBUserVal,oBPassVal);
    n++;
    for (var i=0;i<arr.length;i++){
        if (arr[i].name==oBUserVal) {
            if (arr[i].pass==oBPassVal) {
                n=0;
                window.location.href='public/pages/BHome.html?type='+arr[i].who;
                return;
            }else {
                oBMaskEnd.css('display','block');
                if (n>=3){
                    oBTop.text('警告');
                    oBTop.css('color','red');
                    oBContent.text('您已连续多次输入错误的账号或密码，为保护您的账号安全，系统将强制关闭!');
                    oBOk.click(function () {
                        window.close();
                    });
                    return;
                }
            }
        }
    }
    oBMaskEnd.css('display','block');
    if (n>=3){
        oBTop.text('警告');
        oBTop.css('color','red');
        oBContent.text('您已连续多次输入错误的账号或密码，为保护您的账号安全，系统将强制关闭!');
        oBOk.click(function () {
            window.close();
        });
    }
}
//当弹框的OK按钮被点击
oBOk.click(function () {
    oBMaskEnd.css('display','none');
});
//回车键按下时
document.onkeydown=function (ev) {
    if (ev.keyCode==13) {
        oDian();
    }
};