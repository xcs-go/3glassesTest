$(document).ready(function () {
    $(".info_left_content label").click(function () {
        alert(this.innerHTML);
    });

    $(".info_right .toChinaSite.info_comment").click(function () {
        alert(this.href);
    });

    // $("#VrImgNav .glyphicon-menu-left").click(function () {
    //    $("#VrImgNav  .VrImgNav_Img_First").toggle();
    //     $("#VrImgNav  .VrImgNav_Img_Second").toggle();
    //     // alert("hsdhhfh");
    // });

    $("#VrImgNav .glyphicon-menu-left , .glyphicon-menu-right , .circle_first , .circle_second").click(function () {
        $("#VrImgNav  .VrImgNav_Img_First").toggle();
        $("#VrImgNav  .VrImgNav_Img_Second").toggle();
        // alert("hsdhhfh");
    });
    
});