
$(function(){
	//对用户名的函数
	var oUserName = $("#username"); 
     oUserName.focus(function(){
     	if(oUserName.val() == "邮箱/手机/用户名"){
     		oUserName.val("");
     	}
     });
	oUserName.blur(function(){
		if(oUserName.val() == ""){
			oUserName.val("邮箱/手机/用户名");
		}
	});

//生成验证码的函数
	function createCode(){
		var sStr = "0123456789abcdefghijklopqrstvwxyzABCDEFGHIJKOPQRSTOVWXYZ",
	        sNewStr ='';
		for(var i=0; i<4;i++){
			var iPos = Math.floor(Math.random()*56);
			sCode = sStr.charAt(iPos);
			sNewStr +=sCode;
		}
		return sNewStr;
		
	}
//createCode();	
//对验证码
   var oPassword = $("#password"),
       oCheckCode = $("#checkcode")
       oCheckCodeCase= $("#checkcode_case"), 
       oCheckCodePrompt = $("#checkcode_prompt"),
	   oCheckCodeChange = $("#checkcode_change");  
	
	oPassword.blur(function(){
		var sStrCode = createCode();
		oCheckCodeCase.html(sStrCode);
	})
	oCheckCode.blur(function(){
	    if(oCheckCode.val() == ""){
	    	oCheckCodePrompt.html("不能为空");
	    	oCheckCodePrompt.css("color","red");
	    }else if(oCheckCode.val().toLowerCase()== oCheckCodeCase.html().toLowerCase()){
	    	oCheckCodePrompt.html("正确");
	    	oCheckCodePrompt.css("color","green");
	    }else{
	    	oCheckCodePrompt.html("错误");
	    	oCheckCodePrompt.css("color","red");
	    	var sStrCode = createCode();
		    oCheckCodeCase.html(sStrCode);
	    } 
	})
	oCheckCodeChange.click(function(){
		var sStrCode = createCode();
		oCheckCodeCase.html(sStrCode);
	});
//对自动登录
   var oKeeMsgEnter = $("#keepmsg_enter"),
       oKeepMsgSpan = $(".keepmsg span"),
       oKeepMsgCount = 0,
       oKeepMsgOne  =  $("#keepmsg_one"); 
	//点击第一次打钩，第二次取消
oKeeMsgEnter[0].onclick = function(){
	 oKeepMsgCount++;
	 if(oKeepMsgCount%2 !== 0){
		oKeepMsgOne.css("background-position","-338px -330px");
     	oKeepMsgSpan.css("display","inline-block");
	}else{
		oKeepMsgOne.css("background-position","-338px -270px");
     	oKeepMsgSpan.css("display","none");
	}
}
//对合作网站添加事件
//    var oMoreWebAone = $("#moreweb a").slice(0,3),
//        oMoreWebAtwo = $("#moreweb a").slice(4,6);
//     oMoreWebAone.mouseover(function(){
//     	  var n = oMoreWebAone.index(this);
//     	  if(n=0){
//     	  oMoreWebAone.eq(n).css("background-position","0 -250px")
//     	   }
//     })


//app登录与账号登录相互切换
var oAppEnter =  $("#appenter"),
    oAppDiv = $("#app_div"),
    oUserNumber = $("#usernumber"),
    oUserNameEnter =  $("#usernameenter");
    
    oAppEnter.click(function(){
    	oUserNumber.hide(1000);
    	oAppDiv.show(1000);
    	oAppEnter.css({background:"green",color:"#fff"})
    	oUserNameEnter.css({background:"#eee",color:"#666"});
    });
    oUserNameEnter.click(function(){
    	oAppDiv.hide(1000);
    	oUserNumber.show(1000);
    	oAppEnter.css({background:"#eee",color:"#666"});
    	oUserNameEnter.css({background:"green",color:"#fff"});
    });

//添加登录事件
     var oEnterBtn = $("#enter_btn"),
         oPassword = $("#password");
      oEnterBtn.click(function(){
      	$.post("http://10.35.164.185:8080/myWeb/login.jsp",{
      		stuId:764790954,
      		userName:oUserName.val(),
      		userPass:oPassword.val()
      	},function(data){
      		if(data.indexOf("true")>-1){
      			var a={};
      				a.name =oUserName.val();
      				a.passowrd = oPassword.val();
      			if(oKeepMsgCount%2 !=0){
      				$.cookie('user',JSON.stringify(a),{expires:7,path:"/"});
      				window.open("../HomePage.html","_self");
      			}else{
      				$.cookie('user',JSON.stringify(a),{expires:1/24,path:"/"});
      				window.open("../HomePage.html","_self");
      			}	
      			
      		}else{
      			alert("用户名或密码错误，请仔细填写！");
      		}
      	})	
      })









})
