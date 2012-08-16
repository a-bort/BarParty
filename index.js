$(function() {
    resizeToolbar();
    
    $(window).resize(function(){ 
        resizeToolbar()
    });
    
    //Init on the first tab
    $(".inner-panel").hide();
    $(".inner-panel[index=0]").show();
    $(".toolbar-item[index=0]").css("background", "#383838");
    
    $(".toolbar-item").click(function(eObj){
        tabClick(eObj);
    });
});

resizeToolbar = function(){
    //setup even spaced toolbar items
    $(".toolbar-item").each(function(){
        $(this).css("width", (($(this).parent().width() - 100) / $(".toolbar-item").length) + "px");
    })
    
    $(".toolbar-item").hover(
        function(){
            var currentItem = $('.inner-panel:visible'),
            currentIndex = currentItem.attr('index');
            
            if($(this).attr('index') != currentIndex){
                $(this).css("background", "#5E5E5E");
            }
        },
        function(){
            var currentItem = $('.inner-panel:visible'),
            currentIndex = currentItem.attr('index');
            
            if($(this).attr('index') != currentIndex){
                $(this).css("background", "black");
            }
        }
    );
}

tabClick = function(eventObj){
    var clickedIndex = $(eventObj.target).attr('index'),
        currentItem = $('.inner-panel:visible'),
        currentIndex = currentItem.attr('index');
    
    if(clickedIndex != currentIndex){
        currentItem.hide();
        $('.inner-panel[index=' + clickedIndex + ']').show();
        $('.toolbar-item[index=' + currentIndex + ']').css("background", "black");
        $('.toolbar-item[index=' + clickedIndex + ']').css("background", "#383838");
    }
}