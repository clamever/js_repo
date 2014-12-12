/**
* 用来检测客户端信息的方法收集
*
* @date:  
* @author: 张啟明<1095841676@qq.com>
* @version: 1.0
* @copyright: 2014 yasin.com.cn
*/

/**
* 用来检测客户端浏览器是否是微信内置浏览器
*
* @date:
* @author: 张啟明<1095841676@qq.com>
* @return:
*/
function is_weixn(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

