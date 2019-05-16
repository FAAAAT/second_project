//获取左边div
let oBleft=$('#B-left');
//获取右边div
let oBRight=$('#B-right');
//获取左边标题
let oBName=$('#B-name');
//获取内容显示区
let oBBoss=$('#B-boss');
//获取右侧顶部区域
let oBRightLogo=$('#B-right-logo');
//获取专属admin的权限
let aBAdmin=document.getElementsByClassName('admin');
//获取专属teacher的权限
let aBTeacher=document.getElementsByClassName('teacher');
//获取登录后的用户名
let oBUserWho=$('#B-user-who');
//获取页面的退出按钮
let oBRightExitGo=$('#B-right-exit-go');
//获取蒙版
let OBMaskEnd=$('#B-mask-end');
//获取蒙版弹框的确认按钮
let OOk=$('#ok');
//获取蒙版弹框的取消按钮
let ONo=$('#no');
//获取li
let aBLi=document.querySelectorAll('li');




//当页面加载时
window.onload=function(){
    //确定显示区大小
    BDivWidth();
    //判断用户登录类型
    let oBWho=window.location.search;
    let oB=oBWho.charAt(oBWho.length-1);
    if (oB==1){
        for (let i=0;i<aBAdmin.length;i++){
            aBAdmin[i].style.display='none';
        }
        oBUserWho.text('Teacher');
    } else if(oB==2){
        for (let i=0;i<aBAdmin.length;i++){
            aBAdmin[i].style.display='none';
        }
        for (let j=0;j<aBTeacher.length;j++){
            aBTeacher[j].style.display='none';
        }
        oBUserWho.text('Parent');
    }
};
//当页面缩放时
window.onresize=BDivWidth;
//左右显示框长宽显示函数及蒙版长宽
function BDivWidth() {
    let oLookW = $(window).width();
    let oLookH = $(window).height();
    let oBExitH=oBRightLogo.outerHeight();
    if (oLookH<630) {
        oBleft.css('height','660');
        oBRight.css('height','660');
        oBBoss.css('height',oBRight.outerHeight()-oBExitH-40);
        OBMaskEnd.css('height','660')

    }else {
        oBleft.css('height',oLookH);
        oBRight.css('height',oLookH);
        oBBoss.css('height',oBRight.outerHeight()-oBExitH-40);
        OBMaskEnd.css('height',oLookH)
    }
    if (oLookW<500){
        oBleft.css('width','500');
        oBRight.css('width','500');
        OBMaskEnd.css('height','1260')
    } else {
        oBleft.css('width','180');
        oBRight.css('width',oLookW-182)
    }
}
//当退出按钮被点击时
oBRightExitGo.click(function () {
    OBMaskEnd.css('display','block');
});
//蒙版的确认按钮点击时
OOk.click(function () {
    window.open('../../index.html','_self')
});
//蒙版的取消按钮点击时
ONo.click(function () {
    OBMaskEnd.css('display','none');
});
//当列表选择框被点击时
for (let i=0;i<aBLi.length;i++){
    aBLi[i].onclick=function () {
        for(let j=0;j<aBLi.length;j++){
            aBLi[j].style.background='';
        }
        aBLi[i].style.background='#3d5f59';
        aBLi[i].querySelector('a').click();
    };
}