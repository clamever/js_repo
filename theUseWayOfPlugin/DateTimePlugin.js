/**
* js时间插件的标准使用方法
*
* @date:
* @author: 张啟明<1095841676@qq.com>
* @version: 1.0
* @copyright: 2014 yasin.com.cn
*/

/**
* * datetimepicker插件的标准使用方法
 * 前台调用方式:<input id="startDate"  name="startDate"  type="text" class="datepicker" readonly="readonly" placeholder="订单创建日期"/>
*
* @date:
* @author: 张啟明<1095841676@qq.com>
* @return: none
*/
$('.datepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii',
    autoclose : true,
    minuteStep : 5,
    language : "zh-CN"
});