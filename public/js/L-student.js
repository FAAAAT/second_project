  
  
  function type(){
    var firstinputval=$("#mask input:first").val();
    var classtype=["大班","小班","中班"];
    for(var cl=0;cl<classtype.length;cl++){
        if(firstinputval==classtype[cl]){
            return true;
        }
    }
  }
    




    // 查询功能
    // 全局查询
    var oT3=$('.t3');
    var oBtn1=$('.btn1');

    oBtn1.click(function () {
        // alert(aaa)
        var str1=oT3.val();
        $("tbody tr").hide();
        $("tbody tr td").filter(":contains('" + str1 + "')").parents("tr").show();
    });

    // 班级查询
    var oT1=$('.t1');
    oBtn1.click(function () {
        var str2=oT1.val();

        $("tbody tr").each(function () {
            var text=$(this).children('td:first').text();
            // console.log(this);
            if (str2==text) {
                $("tbody tr").hide();
                $("tbody tr td").filter(":contains('" + str2 + "')").parents("tr").show();
            }
        });
    });

    // 班主任查询
oBtn1.click(function () {
    var oT2=$('.t2');
    var str3=oT2.val();

    $("tbody tr").each(function () {
        // console.log(this.children[4], str3)
        if($(this.children[4]).text() == str3){
            $("tbody tr").hide();
            $("tbody tr td").filter(":contains('" + str3 + "')").parents("tr").show();
        }
    });
});


// // 正则验证
//
// var reg = /^20[0-9]{1}[0-9]{1}$/;           //班级
// var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;  //班主任
// var reg=/^000[1-9]{1,5}$/;               //教室
// var reg=/^admin$/;               //创建人
// var reg=/^\d{4}-\d{1,2}-\d{1,2}/;    //创建日期
//
// reg.test()