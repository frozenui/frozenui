# ui-form 表单

---

###表单命令项
````html
	<div class="ui-form">
		<ul class="ui-form-order ui-border-tb">
			<li><a href="#" class="ui-border-b">清空消息列表</a></li>
			<li><a href="#" class="ui-border-b">清空所有聊天记录</a></li>
			<li><a href="#">清空缓存数据</a></li>
		</ul>
	</div>
````


###表单输入项
````html
	<div class="ui-form">
		<form action="#" class="ui-border-t">

			<div class="ui-item ui-border-b">
				<label for="#">身份证号码</label>
				<input type="text" placeholder="18位身份证号码">
			</div>
			<div class="ui-item textarea ui-border-b">
				<label for="#">详细地址</label>
				<textarea placeholder="街道等详细地址"></textarea>
			</div>

		</form>
	</div>
````



###表单输入项2
````html
	<div class="ui-form">
		<form action="#" class="ui-border-t">

			<div class="ui-item pure ui-border-b">
				<input type="text" placeholder="QQ号/手机号/邮箱">
			</div>
			<div class="ui-item pure ui-border-b">
				<input type="password" placeholder="密码">
			</div>

		</form>
	</div>
````



###表单输入项3
````html
	<div class="ui-form">

		<div class="ui-item left ui-border-tb">
			<label class="ui-border-r">中国 +86</label>
			<input type="text" placeholder="请输入手机号码">
		</div>

	</div>
````



####表单输入项4
````html
	<div class="ui-form">

		<div class="ui-item right ui-border-tb">
			<input type="text" placeholder="请输入验证码">
			<!-- 若按钮不可点击则添加 disabled 类 -->
			<button type="button" class="ui-border-l">重新发送</button>
		</div>

	</div>
````

