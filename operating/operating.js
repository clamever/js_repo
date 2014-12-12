/**
* 用来进行操作的方法
*
* @date:
* @author: 张啟明<1095841676@qq.com>
* @version: 1.0
* @copyright: 2014 yasin.com.cn
*/

/**
* 复制当前url操作，仅仅适用于IE
*
* @date:
* @author: 张啟明<1095841676@qq.com>
* @return:
*/
function copyUrl()
{
    var clipBoardContent=this.location.href;
    window.clipboardData.setData("Text",clipBoardContent);
    alert("复制成功!");
}