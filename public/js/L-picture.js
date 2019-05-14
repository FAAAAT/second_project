$(function () {

    //鼠标移入相册效果
    $(".el-img").hover(
        function () {
            $(this).css("opacity", "0.8")
        },
        function () {
            $(this).css("opacity", "1")
        }
    )

    //点击新建按钮出来新建组
    $(".el-c").on("click",function(){
        console.log("31321")
        $("#mask").css("display","block")
    })
})



