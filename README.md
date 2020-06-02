# 提示框使用说明 #
+ ## 1、 组件介绍 ##
	原生JS实现，需要依赖jquery库。实现了兼容pc端与手机端。所有参数都可以修改。
+ ## 2 、使用方法
+ ### 第一步，需在头部引入css，body外层引入js ###
+ ### 第二步，将html代码写在body中 ###
+ ***
` <button class="btn1" id="btn1">点我</button>
    <div class="content">
        <div class="dialog" id="dialog">
            <div class="dialog-content">
                <div class="dialog-header">
                    <h3 class="dialog-title">标题</h3>
                </div>
                <div class="dialog-body">
                    <p>主题内容....</p>
                </div>
                <div class="dialog-footer">
                    <button type="button" class="close" id="close">关闭</button>
                    <button type="button" class="save" id="save">保存</button>
                </div>
            </div>
        </div>
    </div>
		
***
### 第三步，JSAPI ###
		var Obj = {
			id: "dialog",
			titl: "弹出成功", //标题
			conts: "哈哈哈哈",
			_w: 700, //提示框的高，最小150px；
			_h: 200, //提示框的宽，最小150px
			callback: duihua,//用户自定义回调函数名称
		}
		function duihua(){
		    //用户要做的事情
		    console.log('保存')
		}
		btn1.onclick=function(){
		    a.onclick("dialog");
		}
		var dialog1 = new DH(Obj);
	
## 3、 联系方式 ##
#### vx:15536715308 
#### qq:760158239 
#### 注意们要写好备注，你主动我们就有故事哦 
