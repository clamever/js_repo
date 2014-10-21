/**
* 用于解决老式IE浏览器不能兼容placeholder标签的问题
*
* @date:  
* @author: 张啟明<1095841676@qq.com>
* @version: 1.0
* @copyright: 2014 yasin.com.cn
*/
$(document).ready(function(){
    var doc=document,
        inputs=doc.getElementsByTagName('input'),
        supportPlaceholder='placeholder'in doc.createElement('input'),

        placeholder=function(input){
            var text=input.getAttribute('placeholder'),
                defaultValue=input.defaultValue;
            if(defaultValue==''){
                input.value=text
            }
            input.onfocus=function(){
                if(input.value===text)
                {
                    this.value=''
                }
            };
            input.onblur=function(){
                if(input.value===''){
                    this.value=text
                }
            }
        };

    if(!supportPlaceholder){
        for(var i=0,len=inputs.length;i<len;i++){
            var input=inputs[i],
                text=input.getAttribute('placeholder');
            if(input.type==='text'&&text){
                placeholder(input)
            }
        }
    }
});