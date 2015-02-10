/**
 * autoComplete插件的标准使用方法
 * 插件地址为http://complete-ly.appspot.com
 * 注意:记得将html片段的style设为style='border:1px solid #999;'
 * @date:
 * @author: 张啟明<1095841676@qq.com>
 * @version: 1.0
 * @copyright: 2014 yasin.com.cn
 */
function autoComplete(id, url) {
    var auto = completely(document.getElementById(id), {
        fontSize : '1em',
        fontFamily : 'Arial',
        color:'#933'
    });
    auto.onChange = function(text) {
        var data = $.ajax({
            url : url+"?term="+text,
            success: function(data) {
                auto.options = data;
                auto.repaint();
                setTimeout(function() {
                    auto.input.focus();
                },0);
            }
        });
    }
}