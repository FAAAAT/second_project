$(function(){
   //从localstorage里面获取照片的信息
    function info(){
        var infopicture=JSON.parse(localStorage.getItem("info"));
        console.log(infopicture);
        var src=infopicture.src;
        var pnub=infopicture.pnub;
        var ptext=infopicture.ptext;
        
       $(".el-headimg img").prop("src",src);
       $(".el-text p").text(ptext);
       var spancr=$("<span>"+pnub+"张</span>");
       $(".el-text p").append(spancr)
    }
    info();
     
    //点击全选所有都选中取消
    $(".el-checkall").on("click",function(){
        //alert("jlj")
        var is=$(this).prop("checked")
         $(".el-imgonebox").find("input").prop("checked",is)
       
    })
   
    //点击批量管理 显示多选 显示下拉功能框
     $("#el-lib").on("click",function(){
         //alert("jlkjl")
         $("#el-tangbox").slideToggle();
         $(".el-imgonebox").find("input").show();

     });

     //点击全部删除的按钮
     $("#el-cancel").on("click",function(){
        //alert("jlkjl")
        $(".el-chekb").each(function(){
            var ischek=$(this).prop("checked")
             //console.log(ischek)
             if(ischek){
                 $(this).closest(".el-imgonebox").remove();
             };
        });
        $(".el-checkall").prop("checked",false);
        
        
     })
    

     //点击完成管理取消多选
     $("#el-argan").on("click",function(){
        //alert("jlkjl")
        $("#el-tangbox").slideToggle();
        $(".el-imgonebox").find("input").hide();
     });



     //照片移入移出效果
     $(".el-bodyimg").on("mouseover",".el-imgonebox",function(){
         $(this).find("img").css("opacity","0.8");
         $(this).find(".el-cal").show();
         //赋索引值index
         $("#el-cancel2").val($(this).index())

     });
     
     $(".el-bodyimg").on("mouseout",".el-imgonebox",function(){
        $(this).find("img").css("opacity","1");
        $(this).find(".el-cal").hide()
    });



    
   //点击图片的删除图标，删除本张照片
    $("#el-cancel2").on("click",function(){   
        var index= $(this).val();
        $(".el-imgonebox").eq(index).find("img").removeAttr("data-original");
        $(".el-imgonebox").eq(index).remove();
        
    })

    /*------------图片查看器插件----------*/
    $('#el-im_1').viewer({
        url:"data-original",
        toolbar:true
    });


   

   //时间分装
    function datecreat(){
        var dates=new Date();
        var year= dates.getFullYear();
        var month=dates.getMonth()+1;
        var day=dates.getDate();
        return year+"-"+month+"-"+day;
        //console.log(year,month,day);
    }
     

    // 文件上传
    var oF=document.getElementById('file-btn');
    var oBtn=document.getElementById('el-lis');
    var imgbox=$('#el-im_1');
    

    oF.onchange=function () {
        /*创建一个文件阅读器*/
        var oFReader = new FileReader();
        /*获取文件，因为可以上传多个，所以是数组，咱们获取第一个就可以了*/
        var file = oF.files[0];
        //*通过文件阅读器,解析uRL地址，并且转化成base64格式*/
        oFReader.readAsDataURL(file);
        //*等文件阅读器加载完毕的时候*/
        oFReader.onloadend = function(ev){
            //*或者目标文件的解析结果*/
            var src = ev.target.result;
            //*创建，插入*/
            // var oLi=document.createElement('li');
            // oLi.innerHTML='<img src="'+src+'">';
            // oUl.appendChild(oLi);
            var imgbox=$('#el-im_1');
            var newimg=$("#el-ingclone");
            newimg.find("img").prop("src",src);
            //时间
            var nowdate=datecreat();
            newimg.find("p").text(nowdate)
            newimg.show();
            console.log(newimg.find("img").prop("src"));
            imgbox.append(newimg);
            
        }

    }

    // oF.onchange=function(){
    //     alert("已经改变")
    // }
})

