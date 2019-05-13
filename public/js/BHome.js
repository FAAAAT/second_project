let oLook=$(window).height();
let oBleft=$('#B-left');
let oBRight=$('#B-right');
let oBleftName=$('#B-name');
let oBBoss=$('#B-boss');
let oBRightLogo=$('B-right-logo');
//当页面加载时获取可视区高度
window.onload=function () {
    if (oLook<630) {
        oBleft.css('height','630');
    }else {
        oBleft.css('height',oLook);
    }
    oBBoss.css('height',oBleft.outerHeight()-oBBoss.offset().top-10);
    Bwidth();
};
//当页面缩放时
window.onresize=Bwidth;

function Bwidth() {
    let oLookW=$(window).width();
    if (oLookW<500){
        oBleft.css('width',500);
        oBleftName.css('width',500);
    }else {
        oBleft.css('width',180);
        oBleftName.css('width',180);
    }
    if (oLookW-oBleft.outerWidth()<0){
        oBRight.css('width','500');
    } else {
        oBRight.css('width',oLookW-oBleft.outerWidth());
    }

}
