$(function () {
    //翻页器
    layui.use('laypage', function(){
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
            elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: 50 //数据总数，从服务端得到
        });
    });

    //新增资料界面
    var D_iframeBtn = $('.D-iframe-btn');
    var D_elastic = $('.D-elastic');
    var D_eIput = $('.D-inp');

    //新增职工按钮
    D_iframeBtn.click(function () {
        D_elastic.css('display','block')
    });

    //新增职工表单验证
    //姓名验证
    var reg = /^1[3-9]\d{9}$/;
    D_eIput.focusout(function () {
        var str = $(this).val();

        if (!str.trim()){
            $(this).after('<span>不能为空</span>');
            $('span').css('color','red')
        }

    })


});



