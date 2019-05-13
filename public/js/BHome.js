
let oBleft=$('#B-left');
let oBRight=$('#B-right');
let oBleftName=$('#B-name');
let oBBoss=$('#B-boss');
let oBRightLogo=$('B-right-logo');
//当页面加载时获取可视区高度
window.onload= Bwidth;
//当页面缩放时
window.onresize=Bwidth;

function Bwidth() {
    let oLookW=$(window).width();
    let oLookH=$(window).height();
    oBBoss.css('height',oBleft.outerHeight()-oBBoss.offset().top-10);
    if (oLookW<500){
        oBleft.css('width',500);
        oBleftName.css('width',500);
        oBRight.css('width','480');
        oBBoss.css('height','600');
    }else {
        oBleft.css('width',180);
        oBleftName.css('width',180);
        oBRight.css('width',oLookW-oBleft.outerWidth());
    }
   /* if (oLookW-oBleft.outerWidth()<=0){
        oBRight.css('width','500');
    } else {
        oBRight.css('width',oLookW-oBleft.outerWidth());
    }*/
    if (oLookH<630) {
        oBleft.css('height','630');
    }else {
        oBleft.css('height',oLookH);

    }

    console.log(oBleft.outerHeight(),oBBoss.offset().top,oLookH)
}
