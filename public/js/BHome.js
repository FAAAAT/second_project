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
//当页面加载时获取可视区高度
window.onload= BDivWidth;
//当页面缩放时
window.onresize=BDivWidth;
//左右显示框长宽显示函数
function BDivWidth() {
    let oLookW = $(window).width();
    let oLookH = $(window).height();
    let oBExitH=oBRightLogo.outerHeight();
    if (oLookH<630) {
        oBleft.css('height','630');
        oBRight.css('height','630');
        oBBoss.css('height',oBRight.outerHeight()-oBExitH-40);

    }else {
        oBleft.css('height',oLookH);
        oBRight.css('height',oLookH);
        oBBoss.css('height',oBRight.outerHeight()-oBExitH-40);
    }
    if (oLookW<500){
        oBleft.css('width','500');
        oBRight.css('width','500')
    } else {
        oBleft.css('width','180');
        oBRight.css('width',oLookW-182)
    }
}
