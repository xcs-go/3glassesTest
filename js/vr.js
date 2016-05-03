$(document).ready(function () {
    $(".info_left_content label").click(function () {
        alert(this.innerHTML);
    });

    $(".info_right .toChinaSite.info_comment").click(function () {
        alert(this.href);
    });

    $(".select_language").mouseover(function(){
       $(this).find("ul").css({"display":"block"});
        $(this).find("ul li a").css("color","black");
    });
    $(".select_language").mouseout(function () {
        $(this).find("ul").css("display","none");
    });

    $(".myAccount").mouseover(function(){
        $(this).find("ul").css({"display":"block"});
        $(this).find("ul li a").css("color","black");
    });
    $(".myAccount").mouseout(function () {
        $(this).find("ul").css("display","none");
    });

    $("#VrImgNav .glyphicon-menu-left , .glyphicon-menu-right , .circle_first , .circle_second").click(function () {
        $("#VrImgNav  .VrImgNav_Img_First").toggle();
        $("#VrImgNav  .VrImgNav_Img_Second").toggle();
    });
    
});