$(function () {

    //----------------------------相册

    //克隆单个相册

    //鼠标移入图片相册效果,出现下拉功能小框
    function pictures(item){

        $( item + " .el-pisingle").hover(
            function () {
                $(this).find("button").show();
                $(this).find("img").css("opacity", "0.9");  
                //给下拉按钮付赋索引值
               // $(this).find(".el-wr").attr("data-index",$(this).index())
               $("#el-save").val($(this).index())
               $("#el-cancel").val($(this).index())
            },
            function (){
                $(this).find("button").hide();
                $(this).find("img").css("opacity","1");
                $(this).find(".el-downlist").hide();
            }
        )
        
        //鼠标移入单个相册
        // $( item ).on("mouseenter",".el-pisingle",function(){
        //     $(this).find("button").show();
        //     $(this).find("img").css("opacity", "0.9");
        // })

        // //鼠标移出单个相册
        // $( item ).on("mouseleave",function(){
        //     $(this).find("button").hide();
        //     $(this).find("img").css("opacity","1");
        //     $(this).find(".el-downlist").hide();
        // })


        //点击下拉小按钮下拉列表出现
        $( item +" .el-downbtn").on("click",function(){
            $(this).next().show();
         })
    
    
    
         //点击列表按钮
         $( item + " .el-downlist li").on("click",function(){
           if($(this).index()==0){
            //获取相册信息到弹框中
            var pr= $(this).closest(".el-pisingle");
            var tx=pr.find("p").text();
            $("#recipient-name").val(tx);  
            //修改弹窗的title     
            $("#exampleModalLabel").text("编辑相册信息");
            //console.log( $(this).)
    
           }else{
            // var pr= $(this).closest(".el-pisingle");
            // var tx=pr.find("p").text();
            // $("#el-cancel").val(tx);
           }
    
         })
       
        //点击新建相册
        $(item+ " .el-c1").on("click",function(){
            $("#exampleModalLabel").text("新建相册");
            $("#recipient-name").val("");
            $("#recipient-name").prop("placeholder","请输入名称")
        })
    
         
         //保存按钮
         $("#el-save").on("click",function(){
             
            var title=$(this).closest("#exampleModal").find("#exampleModalLabel").text();
            var newtext=$("#recipient-name").val();
            var index= $(this).val()
            //alert(index)
            if(title=="编辑相册信息"){ 
                var oletext=$("#el-save").val();
                //修改本p标签titel文字
                $( item+" .el-pisingle p").eq(index).text(newtext)
                console.log(newtext)
    
    
            }else if(title=="新建相册"){

           
                //添加新相册
                var newp=$(".el-clone:first").clone(true);
                newp.find("img").prop("src","");
                newp.find(".el-nub").text("0");
                newp.find("p").text("");
                newp.find("a").prop("href","L-creatimages.html");
                if(newtext==""){
                    newtext="未命名"
                }
                newp.find("p").text(newtext);
                $( item+" .el-pictures").append(newp);
            }
    
         })
    
    
        //删除按钮
        $("#el-cancel").on("click",function(){   
            var index= $(this).val();
            $(item+" .el-pisingle").eq(index).remove();
        })
         
        
    }
 
    //存储照片信息，
    $("a").on("click",function(){

        var src=$(this).find("img").prop("src");
        var pnub=$(this).find(".el-nub").text();
        var ptext=$(this).siblings("p").text();
        var jsonone={src:src,pnub:pnub,ptext:ptext}
        var tojson=JSON.stringify(jsonone)
        localStorage.setItem("info",tojson);
        console.log(tojson)
    })

 pictures(".el-imgbox_1")


  //------------------------------------视频

  pictures(".el-imgbox_2")

  

})



