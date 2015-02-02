$(function() {
    $('.pull_feedback').on("click", function(e) {
        var left = -390;
        var screenWidth = $(window).width();
        if (screenWidth <= 991) {
            left = -220;
        }
        console.log(left);
        $("#feedback").animate({left: $("#feedback").css("left") == "0px" ? left + "px" : "0px"});
    });

    $('#chat_opener').on("click", function(e) {
        var bottom = -305;
        $("#chat_box").animate({bottom: $("#chat_box").css("bottom") == "0px" ? bottom + "px" : "0px"});
    });

});
    