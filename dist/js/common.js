/**
 * Created by Administrator on 2017/3/17.
 */
;
(function (window, $) {
    var tool = {},
        $body = $('html, body'),
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
    tool.eleHandel=function($target) {
        var len = $target.length,
            eleArray = [];
        $target.each(function(){
            eleArray.push($(this).offset().top );
        })
        return eleArray;
    }
    tool.tabPos=function($tab){
        $('a', $tab).each(function (index, element) {
        var _this = $(element),
            $target = $(_this.attr('rel'));
        _this.on('click', function () {
            var offerTop = $target.offset().top;
            $body.animate({
                scrollTop: offerTop
            }, 500);
        })
    });
    }
    $menuFoldTag.on('click', function () {
        $menuFold.addClass('open');
        return false;
    });
    $window.on({
        'click': function () {
            $menuFold.removeClass('open');
            //return false;
        }
    });
    window.tool = tool;

})(window, jQuery);