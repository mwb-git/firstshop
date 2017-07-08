   $(function(){
//对用户名框的提示及动画效果	
	var oUserName = $("#username"),
	    oUserNameSpan = $("#username_span"),
	    oUserNameLayout =  $("#username_layout"),
	    oUserNamePrompt =  $("#username_prompt");
	oUserName.focus(function(){
		//对用户名的动画效果
	animateResult(oUserNameSpan,oUserNameLayout,oUserNamePrompt,500,-60);
	});
//验证用户名是否存在	
	oUserName.blur(function(){
		var reg = /^[a-zA-Z_]\w{4,20}$/ig;
		$.get("http://10.35.164.185:8080/myWeb/checkUser.jsp",
		  {
		  	stuId:764790954,
		  	userName:oUserName.val()
		  },
		  function(date){
			if(date == 0){
			oUserNamePrompt.show(500);
			oUserNameLayout.hide(500);
			if(oUserName.val()==""){
				oUserNamePrompt.html("不可为空!");
			}
			if(reg.test((oUserName.val()))){
				 oUserNamePrompt.css("color","green");
				 oUserNamePrompt.html("用户名可用！");
			}else{
				 oUserNamePrompt.css("color","red");
				 oUserNamePrompt.html("格式不正确！");
			}
			}else{
			oUserNamePrompt.show(500);
			oUserNameLayout.hide(500);
			oUserNamePrompt.css("color","red");
		    oUserNamePrompt.html("用户名已存在");
			}
		})
	})

//对手机号框的提示及动画效果	
	var oPhoneNumber = $("#phonenumber"),
	    oPhoneNumSpan = $("#phonenumber_span"),
	    oPhoneNumLayout =  $("#phonenumber_layout"),
	    oPhoneNumPrompt =  $("#phonenumber_prompt");
	oPhoneNumber.focus(function(){
		//对手机的动画效果
		animateResult(oPhoneNumSpan,oPhoneNumLayout,oPhoneNumPrompt,500,-60);
	});
	oPhoneNumber.blur(function(){
		var reg = /^1\d{10}$/ig;
		inputResult(oPhoneNumber,oPhoneNumPrompt,"手机号",reg,oPhoneNumLayout,500);
	})
	
//对验证码框	
	oAuthCode = $("#authcode"),
	oAuthCodeSpan = $("#authcode_span");
	oAuthCode.focus(function(){
		oAuthCodeSpan.animate({
			left:-90
		},500)
	})
	
 //对设置密码框的提示及动画效果	
	var oSetPassword = $("#setpassword"),
	    oSetPasswordSpan = $("#setpassword_span"),
	    oSetPasswordLayout =  $("#setpassword_layout"),
	    oSetPasswordPrompt =  $("#setpassword_prompt");
	oSetPassword.focus(function(){
		//对设置密码的动画效果
		animateResult(oSetPasswordSpan,oSetPasswordLayout,oSetPasswordPrompt,500,-75);
	});
	oSetPassword.blur(function(){
		var reg = /^\S{6,20}$/ig;
        inputResult(oSetPassword,oSetPasswordPrompt,"密码",reg,oSetPasswordLayout,500);
	})   
	
//对确认密码框
     var oCheckPassword = $("#checkpassword"),
	     oCheckPasswordSpan = $("#checkpassword_span"),
	     oCheckPasswordPrompt =  $("#checkpassword_prompt");
	oCheckPassword.focus(function(){
		//对设置密码的动画效果
		oCheckPasswordSpan.animate({
			left:-75
		},500)
		//去掉设置密码提示框
		oCheckPasswordPrompt.hide(500);
	});
	oCheckPassword.blur(function(){
		if(oCheckPassword.val() == ""){
			oCheckPasswordPrompt.show(500);
			oCheckPasswordPrompt.html("确认密码不能为空");
			oCheckPasswordPrompt.css("color","red");
			oCheckPassword.css("border","1px solid red");
		}else if(oCheckPassword.val()==oSetPassword.val()){
			oCheckPasswordPrompt.show(500);
			oCheckPasswordPrompt.html("密码一致");
			oCheckPasswordPrompt.css("color","darkgreen");
			oCheckPassword.css("border","1px solid darkgreen");
		}else{
			oCheckPasswordPrompt.show(500);
			oCheckPasswordPrompt.html("密码不一致");
			oCheckPasswordPrompt.css("color","red");
			oCheckPassword.css("border","1px solid red");
		}
	})   


 //对邮箱的提示及动画效果	
	var oMail = $("#mail"),
	    oMailSpan = $("#mail_span"),
	    oMailLayout =  $("#mail_layout"),
	    oMailPrompt =  $("#mail_prompt");
	oMail.focus(function(){
		//对设置邮箱的动画效果
		animateResult(oMailSpan,oMailLayout,oMailPrompt,500,-45);
	});
	oMail.blur(function(){
		var reg = /^[^\u4e00-\u9fa5]{5,}@\S[^\u4e00-\u9fa5]{1,}\.(com|cn)$/ig; 
		inputResult(oMail,oMailPrompt,"邮箱",reg,oMailLayout,500);
	}) 

var oRegisterBtn = $("#register_btn");
    oRegisterBtn.click(function(){
    	if(oUserName.val()==""){
    		alert("用户名不能为空")
    	}else{
    	 $.post("http://10.35.164.185:8080/myWeb/reg.jsp",
    	  {
    	  	stuId:764790954,
    	  	userName:oUserName.val(),
    	  	userPass:oSetPassword.val()
    	  },function(data){
    	  	if(data){
    	  		window.open("enter.html", target="_blank");
    	  	}else{
    	  		alert("注册失败"); 	
    	  	}
    	  	
    	  })
    	}
    });


//inputObj表示输入框的Jq集合。
//inputPromptObj表示输入框提示对象的集合
//name表示输入框名称
//regExp表示正则验证
//inputLayoutObj表示输入框提示格式
//speed:动画速度
function inputResult(inputObj,inputPromptObj,name,regExp,inputLayoutObj,speed){
	inputLayoutObj.hide(speed);
	if(inputObj.val() == ""){
			inputPromptObj.show(speed);
			inputPromptObj.html(name+"不能为空");
			inputPromptObj.css("color","red");
			inputObj.css("border","1px solid red");
		}else if(regExp.test(inputObj.val())){
			inputPromptObj.show(speed);
			inputPromptObj.html("格式正确");
			inputPromptObj.css("color","darkgreen");
			inputObj.css("border","1px solid darkgreen");
		}else{
			inputPromptObj.show(speed);
			inputPromptObj.html("格式不正确");
			inputPromptObj.css("color","red");
			inputObj.css("border","1px solid red");
		}	
}
//封装动画效果	
function  animateResult(oObjSpan,oObjLayout,oObjPrompt,speed,iLeft){
	 oObjSpan.animate({
			left:iLeft
		},speed)
		//弹出格式框
		oObjLayout.show(speed);
		//去掉提示框
		oObjPrompt.hide(speed);
}

});
