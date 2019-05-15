var oBtn=$('.btn');
var oT=$('.ipt');
var oUl=$('.aaa');

oBtn.click(function () {
    console.log(oT.val())
    oUl.prepend()
    $('<li>'+oT.val()+'</li>').prependTo(oUl);
    oT.val('')
});