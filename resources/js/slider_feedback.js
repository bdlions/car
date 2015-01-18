
            $(function(){
                $('.pull_feedback').on("click", function(e){
                    var left = -390;
                    var screenWidth = $( window ).width();
                    if(screenWidth <= 991){
                        left = -220;
                    }
                    console.log(left);
                    $("#feedback").animate({left:$("#feedback").css("left") == "0px" ? left +"px" :"0px"});
                });
                
            });
    