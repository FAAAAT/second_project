
let oBleft=$('#B-left');
let oBRight=$('#B-right');
let oBleftName=$('#B-name');
let oBBoss=$('#B-boss');
let oBRightLogo=$('#B-right-logo');

//当页面加载时获取可视区高度
window.onload= Bwidth;
//当页面缩放时
window.onresize=Bwidth;

function Bwidth() {
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
