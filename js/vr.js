$(document).ready(function () {
    $(".info_left_content label").click(function () {
        alert(this.innerHTML);
    });

    $(".info_right .toChinaSite.info_comment").click(function () {
        alert(this.href);
    })

});