    // 弹框js
    var oMask=$('#mask');
    var oA=$('.close');
    var oSave=$('#save');
    var oCancel=$('#cancel');
    var oAdd=$('.btn2');
    var oEdio=$('.edio');
    var oDel=$('.del');
    var omask=$('.mask');
    var oKeep=$('.keep');
    var oAll=$('.all');


    oSave.click(function () {
        oKeep.css('display','block')
    });
    oAdd.click(function () {
        oAll.css('display','block');
        oMask.css('display','block');
    });
    oA.click(function () {
        oMask.css('display','none');
        oAll.css('display','none')
    });
    oCancel.click(function () {
        oMask.css('display','none');
        oAll.css('display','none')
    });
    oDel.click(function () {
        omask.css('display','block')
    });
    // console.log(oEdio);
    oEdio.click(function () {
        oAll.css('display','block');
        oMask.css('display','block')
    });

    // 删除提示小弹框
    let oDelete=$('#delete');
    let oClose=$('#close');
    let oNo=$('.no');
    let oSure=$('#sure');
    let osure=$('.sure');
    let oYes=$('.yes');
    oDelete.click(function () {
        omask.css('display','block')
    });
    oNo.click(function () {
        omask.css('display','none');
    });
    oSure.click(function () {
        omask.css('display','none');
    });
    oNo.click(function () {
        oKeep.css('display','none')
    });

    osure.click(function () {
        oKeep.css('display','none')
    });

    oYes.click(function () {
        oKeep.css('display','none');
        oMask.css('display','none');
        oAll.css('display','none');
    });


    // 查询功能
        var oT1=$('.t1');
        var oBtn1=$('.btn1');

        oBtn1.onclick=function (){
            var str1=oT1.val()
            $("#mapAddress tr").hide();
            $("#mapAddress tr td").filter(":contains('" + str1 + "')").parents("tr").show();
        }

