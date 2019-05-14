// 弹框js
var oMask=$('#mask');
var oA=$('.close');
var oSave=$('#save');
var oCancel=$('#cancel');
var oAdd=$('.btn2');
var oDel=$('.del');
var omask=$('.mask');

oAdd.click(function () {
        oMask.css('display','block')
});
oA.click(function () {
    oMask.css('display','none')
});
oCancel.click(function () {
    oMask.css('display','none')
});
oDel.click(function () {
    omask.css('display','block')
});
// 删除提示小弹框
let oDelete=$('#delete');
let oClose=$('#close');
oDelete.click(function () {
    omask.css('display','block')
});
let oNo=$('.no');
oNo.click(function () {
    omask.css('display','none')
});
let oSure=$('#sure');
oSure.click(function () {
    omask.css('display','none')
});
