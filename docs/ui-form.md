# ui-form 表单

---

###表单命令项

````html
	<div class="ui-form">
		<div class="ui-form-order ui-border-t">
			<a href="#" class="ui-border-b">清空消息列表</a>
		</div>
		<div class="ui-form-order">
			<a href="#" class="ui-border-b">清空所有聊天记录</a>
		</div>
		<div class="ui-form-order ui-border-b">
			<a href="#">清空缓存数据</a>
		</div>
	</div>
````


###表单输入项
````html
	<div class="ui-form">
		<form action="#" class="ui-border-t">

			<div class="ui-form-item ui-border-b">
				<label for="#">身份证号码</label>
				<input type="text" placeholder="18位身份证号码">
				<a href="#" class="ui-form-icon-close"></a>
			</div>
			<div class="ui-form-item ui-form-textarea ui-border-b">
				<label for="#">详细地址</label>
				<textarea placeholder="街道等详细地址"></textarea>
			</div>

		</form>
````



###表单输入项2
````html
	<div class="ui-form">
		<form action="#" class="ui-border-t">

			<div class="ui-form-item ui-form-pure ui-border-b">
				<input type="text" placeholder="QQ号/手机号/邮箱">
				<a href="#" class="ui-form-icon-close"></a>
			</div>
			<div class="ui-form-item ui-form-pure ui-border-b">
				<input type="password" placeholder="密码">
				<a href="#" class="ui-form-icon-close"></a>
			</div>

		</form>
	</div>
````



###表单输入项3
````html
	<div class="ui-form">

		<div class="ui-form-item ui-form-l ui-border-tb">
			<span class="ui-border-r">中国 +86</span>
			<input type="text" placeholder="请输入手机号码">
			<a href="#" class="ui-form-icon-close"></a>
		</div>

	</div>
````



####表单输入项4
````html
	<div class="ui-form">

		<div class="ui-form-item ui-form-r ui-border-tb">
			<input type="text" placeholder="请输入验证码">
			<!-- 若按钮不可点击则添加 disabled 类 -->
			<button type="button" class="ui-border-l">重新发送</button>
			<a href="#" class="ui-form-icon-close"></a>
		</div>

	</div>
````


####表单展示项
````html
	<div class="ui-form">

		<div class="ui-form-item ui-form-show ui-form-item-link ui-border-t">
			<label for="#">账号</label>
			<input type="text" value="421205351" readonly>
		</div>

		<div class="ui-form-item ui-form-show ui-border-tb">
			<label for="#">身份证号码</label>
			<input type="text" value="445331199401055317" readonly>
		</div>

	</div>
````