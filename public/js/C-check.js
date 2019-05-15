var aDiv=$('#view div');
var oMybox=$('#mybox');
var oBtn2=$('.btn2');
var oBtn1=$('.btn1');
var oT2=$('.t2');
var oDel=$('.layui-icon-delete');
var oEdi=$('.layui-icon-edit');


aDiv.click(function () {
    oMybox.css('display','block')
});
oBtn2.click(function () {
    oMybox.css('display','none')
});


var aaa=function () {
    // alert(aaa)
    var str=oT2.val();
    $("tbody tr").hide();
    $("tbody tr td").filter(":contains('" + str + "')").parents("tr").show();
};
    oBtn1.click(aaa);
    document.onkeydown=function (ev){
        switch (ev.keyCode) {
            case 13:
                aaa();
                break;
        }
    };

oDel.click(function () {
    alert('确定要删除这项内容吗？');
   $(this).parent().parent().remove()
});


oEdi.click(
    function () {
        console.log(1)
        var strs=$(this).parent().parent();
        var that=this;
        // console.log(strs[0].children[0])
        var str1=$(strs[0].children[0]).text();
        var str2=$(strs[0].children[1]).text();
        var str3=$(strs[0].children[2]).text();
        var str4=$(strs[0].children[3]).text();
        var str5=$(strs[0].children[4]).text();
        var str6=$(strs[0].children[5]).text();
        var str7=$(strs[0].children[6]).text();

        var Str1=$(strs[0].children[0]);
        var Str2=$(strs[0].children[1]);
        var Str3=$(strs[0].children[2]);
        var Str4=$(strs[0].children[3]);
        var Str5=$(strs[0].children[4]);
        var Str6=$(strs[0].children[5]);
        var Str7=$(strs[0].children[6]);
        console.log(strs[0].children[0]);
        $('  <div class="mask">\n' +
            '            <div>\n' +
            '                <a class="close" href="javasript:;">×</a>\n' +
            '            </div>\n' +
            '        </div>').appendTo($('#mybox'));
        $('  <div>\n' +
            '            <span>教师姓名：<p>*</p></span><input type="text" placeholder="请输入姓名"' +
            'value="'+str1+'">\n' +
            '            </div>').appendTo($('.mask'))
        $(' <div>\n' +
            '            <span>部门：<p>*</p></span><input type="text" placeholder="请输入部门" value="'+str2+'">\n' +
            '            </div>').appendTo($('.mask'))
        $(' <div>\n' +
            '            <span>职务：</span><input type="text" placeholder="请输入职务" value="'+str3+'">\n' +
            '            </div>').appendTo($('.mask'))
        $('<div>\n' +
            '            <span>授课课程：<p>*</p></span><input type="text" placeholder="请输入授课课程" value="'+str4+'">\n' +
            '            </div>').appendTo($('.mask'))
        $(' <div>\n' +
            '            <span>出勤情况：<p>*</p></span><input type="text" placeholder="正常/休假" value="'+str5+'">\n' +
            '            </div>').appendTo($('.mask'))
        $('<div>\n' +
            '            <span>休假：</span><input type="text" placeholder="请输入假别" value="'+str6+'">\n' +
            '            </div>').appendTo($('.mask'))
        $('<div>\n' +
            '            <span>打卡日期：</span><input type="text" placeholder="2019-5-15" value="'+str7+'">\n' +
            '            </div>').appendTo($('.mask'))
        $(' </div>\n' +
            '            <button class="save">保存</button>\n' +
            '            <button class="cancel">取消</button>\n' +
            '            </div>').appendTo($('.mask'))

        var oSave=$('.save');
        oSave.click(function () {
            var oMask=$('.mask');
            oMask.css('display','none');

            var arr=[];
            $('.mask input').each(function () {
                arr.push($(this).val())
            });
            // console.log(arr[0])
            Str1.text(arr[0]);
            Str2.text(arr[1]);
            Str3.text(arr[2]);
            Str4.text(arr[3]);
            Str5.text(arr[4]);
            Str6.text(arr[5]);
            Str7.text(arr[6]);
        })
    }
)
    // // bbb()
    // oEdi.click(bbb);


