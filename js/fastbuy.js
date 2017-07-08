$(function(){
	
//验证是否保存了Cookes
//当cookes保存了的时候应该执行的函数,将登陆注册替换
$(function(){
	function checkCookes(){
	var oEnterState = $("#enter_state");
	var oEnterSuccess =  $(".enter_success");
	var oNowEnterDl =  $(".now_enter_dl");
	if($.cookie("user").length!=0){
		var s=$.parseJSON($.cookie("user"));
		oEnterState.html("Hi,"+s.name+"<span id='exit'>退出</span>").css("color","black");
	    oEnterSuccess.css("display","block");
	    oNowEnterDl.css("display","none"); 
	}
}
	checkCookes();
	//退出登录按钮	
	var oExit =  $("#exit");
	oExit.click(function(){
		window.open("../HomePage.html", "_self")
		removeCookie("user","/");
	})
});
	
	
	
//对banner轮播图
    var oBannerLunBo = $(".banner_lunbo"),
        iTime;
        oBannerLunBoImg = $(".banner_lunbo img"),
        oBannerBtnSpan = $("#banner_btn span");
        $(".banner_lunbo").width(oBannerLunBoImg.width()*5)
        iLunBoCount = 1;
    function changeLunbo(n){
    	oBannerBtnSpan.css("background","#ccc");
    	oBannerBtnSpan.eq(iLunBoCount).css("background","hotpink");
    	iLunBoCount++;
    	oBannerLunBo.animate({
    	  left:-oBannerLunBoImg.width()*(n)
    },500,function(){
    	if(n>3){
			oBannerLunBo.css("left",0);
			iLunBoCount=1;
			oBannerBtnSpan.css("background","#ccc");
    	    oBannerBtnSpan.eq(0).css("background","hotpink");
		}
    })
    }
   function startImg(){ 
    iTime = setInterval(function(){
    	changeLunbo(iLunBoCount);
    },2500)
    }  
    startImg();  
    oBannerLunBoImg.mouseover(function(){
      clearInterval(iTime);	
    });
    oBannerLunBoImg.mouseout(function(){
    	startImg();  
    });
   
 
 
 
 
  //对倒计时函数封装
  //oObj 需要调用的对象
  //Time 需要传入的结束时间
   function  TimeCount(oObj,Time){
     var oNowData = new Date,
	     oEndData = new Date(Time);
	 var iTime = oEndData.getTime()-oNowData.getTime();
	 var iDate,
	     iHours,
		 iSeconds, 
	     iMinutes;
	     if(iTime>0){
			iDate  = Math.floor(iTime/(24*3600*1000));
			iHours = Math.floor(iTime/(3600*1000)%24);
			iSeconds = Math.floor(iTime/(60*1000)%60);
			iMinutes = Math.floor(iTime/1000%60);
			 }
	     oObj[0].innerHTML = iDate;
	     oObj[1].innerHTML = iHours;
	     oObj[2].innerHTML = iSeconds;
		 oObj[3].innerHTML = iMinutes;
	 }
    //对图片上的倒计时添加
    var aSpan = $(".time span"); 
    setInterval(function(){
		TimeCount(aSpan.slice(0,4),"2017/1/10"); 
		TimeCount(aSpan.slice(4,8),"2017/1/25"); 
		TimeCount(aSpan.slice(8,12),"2017/1/3"); 
		TimeCount(aSpan.slice(12,16),"2016/12/29"); 
		TimeCount(aSpan.slice(16,20),"2016/12/29"); 
		TimeCount(aSpan.slice(20,24),"2017/1/14"); 
		TimeCount(aSpan.slice(24,28),"2016/12/31");
		TimeCount(aSpan.slice(28,32),"2016/12/30"); 
		TimeCount(aSpan.slice(32,36),"2016/12/31"); 
		TimeCount(aSpan.slice(36,40),"2017/1/6"); 
		TimeCount(aSpan.slice(40,44),"2016/12/31"); 
		TimeCount(aSpan.slice(44,48),"2017/1/10"); 
		TimeCount(aSpan.slice(48,52),"2016/12/29"); 
		TimeCount(aSpan.slice(52,56),"2017/1/20"); 
		TimeCount(aSpan.slice(56,60),"2016/12/28"); 
		TimeCount(aSpan.slice(60,64),"2016/12/30"); 
		TimeCount(aSpan.slice(64,68),"2017/1/7"); 
		TimeCount(aSpan.slice(68,72),"2017/1/2"); 
		 },1000)
   //对大牌的图片划入变大效果
    var oFamousDt = $(".famous_inner dl dt"),
       oFamousDtImg = $(".famous_inner dl dt img");
    hoverImgchangebig(oFamousDt,oFamousDtImg,"",400,250,366,230,400);  
   //对每日上新图片划入变大效果
   var oImg = $(".img"),
       oImgImg = $(".img img"),
       oTime = $(".time");
    hoverImgchangebig(oImg,oImgImg,oTime,600,250,552,230,400,"#ff4600","#37333b");   
   //对即将结束  
    var oOverImg = $(".over_img"),
       oOverImgImg = $(".over_img img"),
       oOverTime = $(".over_img .time");
    hoverImgchangebig(oOverImg,oOverImgImg,oOverTime,600,250,550,230,400,"#ff4600","#37333b");          
   //图片放大动画封装和时间背景颜色改变
    function hoverImgchangebig(objImg,objImgImg,objTime,changeWidth,changehHeight,width,height,speed,changeBgcolor,bgcolor){
 	 objImg.hover(function(){
   	var n= objImg.index(this);
   	if(objTime !=""){
   		objTime.eq(n).css("background",changeBgcolor);
   	}
   	objImgImg.eq(n).animate(
   		{
   			width:changeWidth,
   		    height:changehHeight
   		   },speed)
    },function(){
   	var n= objImg.index(this);
   	if(objTime !=""){
   		objTime.eq(n).css("background",bgcolor);
   	}
   	objImgImg.eq(n).animate(
   		{
   			width:width,
   			height:height
   		},speed)
    })
    }
    
 var oBuyCar = $("#buycar"),
    oPopupEnetr = $(".popup_enter"),
    oClosePopupEnter = $("#close_popup_enter");
   //点击立即登录与关闭的动画效果
   oBuyCar.click(function(){
	oPopupEnetr.show(600);
   });
   oClosePopupEnter.click(function(){
    oPopupEnetr.hide(600);
   });  
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
	
//对自动登录
   var oKeeMsgEnter = $("#keepmsg_enter"),
       oKeepMsgCount=0,//计数器，当偶数时，删除不保存cookes，奇数时保存cookes
       oKeepMsgSpan = $(".keepmsg span"),
       oKeepMsgOne  =  $("#keepmsg_one") ; 
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
	
//添加登录事件
   var oEnterBtn = $("#enter_btn"),
         oPassword = $("#password");
        var oExit =  $("#exit"); 
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
      				window.location.reload();
      			}else{
      				$.cookie('user',JSON.stringify(a),{expires:1/24,path:"/"});
      				window.location.reload();
      			}	
      		}else{
      			alert("用户名或密码错误，请仔细填写！");
      		}
      	})	
      })	
	
	
	
	
	
	
	
   
})
