/**
 * Created by Administrator on 2017/3/17.
 */
;
(function (window, $) {
    var tool = {},
        $consult = $('.com-consult'),
        $menuFold=$('.com-menu-fold'),
        $menuFoldTag=$('.com-top-search .menu'),
        $window = $(window);
    tool.winScroll=function(){
        if ($window.scrollTop() > 500) {
            $consult.fadeIn();
        }else{
            $consult.hide();
        }
    };
    $menuFoldTag.on('click', function () {
        $menuFold.addClass('open');
        return false;
    });
    $window.on({
        'click': function () {
            $menuFold.removeClass('open');
            //return false;
        },
        'scroll': $.throttle(500, tool.winScroll)
    });
    window.tool = tool;

})(window, jQuery);