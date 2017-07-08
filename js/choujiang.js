

$(function(){	
//验证是否保存了Cookes
//当cookes保存了的时候应该执行的函数,将登陆注册替换	
$(function(){
	function checkCookes(){
	var oTopLeftEnterState = $("#top_left_enter_state");
	if($.cookie("user").length!=0){
		var s=$.parseJSON($.cookie("user"));
		oTopLeftEnterState.html("Hi,"+s.name+"<span id='exit'>退出</span>").css("color","black");
	}
}
	checkCookes();
	var oExit =  $("#exit");
	oExit.click(function(){
		window.open("HomePage.html", "_self")
		removeCookie("user","/");
	})
});
	
	var oBtn = $("#btn"),
	    oShdaowTime,
	    gobtn = true,
	    stopbtn =true,
	    oShadow = $("#shadow");
	oBtn.click(function(){
		oShadow.css("display","block");
        go();
        stop();
        stopbtn = false;
        btn = false;
	});
	//对弹出窗事件
	var oPopupHappy =  $("#popup_happy"),
	    oPopupHappyFirstSpan = $("#popup_happy .first span"),
	    oPopupSad =  $("#popup_sad"),
	    oHappySure = $(".happy_sure"),
        oSadSure = $(".sad_sure");
    oHappySure.click(function(){
    	oPopupHappy.css("display","none");
    });
    oSadSure.click(function(){
    	oPopupSad.css("display","none");
    });
	 
	var aDlArr = [0,1,2,3,5,8,7,6,4],//存放礼物在Jquery中的集合的位置，与下方的位置数组一一对应
	    iDlCount,
	    oMiddlRightDlDd = $("#middle_right dl dd");
	function count(){
		var addressArr = [[0,0],[1,0],[2,0],[3,0],[3,1],[2,2],[1,2],[0,2],[0,1]];
            var i = Math.floor(Math.random()*addressArr.length);
		      iDlCount = i;    
		    oShadow[0].style.top = addressArr[i][1]*130 + "px";
		    oShadow[0].style.left =addressArr[i][0]*130 + 10 + "px";
		    oPopupHappyFirstSpan.html(oMiddlRightDlDd.eq(aDlArr[i]).html());
		    oPopupHappy.css("display","block");
	}
	function stop(){
	if(stopbtn){
	setTimeout(function(){
		clearInterval(oShdaowTime);
		var i=Math.floor(Math.random()*10);
		if(i>5){
		oShadow[0].style.top = 260 + "px";
		oShadow[0].style.left = 400 + "px";
		oPopupSad.css("display","block");
		}else{
	     count();
		}
		stopbtn = true;
        btn = true;
	},3000)
	}
	}
	  var x=10,
	      y=0;     
	function go(){ 
	if(btn){
	oShdaowTime = setInterval(function(){
	  if(x===400){
		  x = 400;
		  y +=130;
		  }
	  if( y===0 ){
			 x +=130;
			 y=0;
		}
	  if(x===10){
	  	  x = 10;
		  y -= 130;
	  }
	  if(y===260){
	  	  x -=130;
		  y = 260;
	  }
	    oShadow[0].style.top = y + "px";
		oShadow[0].style.left = x + "px";
	},30)
	}
}
	
//对抽奖图片添加滑动事件	
	var oMiddlRightDl = $("#middle_right dl"),
	    oMiddlRightDlDd = $("#middle_right dl dd");
	oMiddlRightDl.hover(function(){
		var n=oMiddlRightDl.index(this);
		oMiddlRightDlDd.eq(n).css("display","block");
	},function(){
		var n=oMiddlRightDl.index(this);
		oMiddlRightDlDd.eq(n).css("display","none");
	});
	
//对奖品介绍图片添加事件	
	var oShowInnerDl = $(".show_inner dl"),
	    oShowInnerDlDd = $(".show_inner dl dd");
	oShowInnerDl.hover(function(){
		var n=oShowInnerDl.index(this);
		oShowInnerDl.eq(n).css("border","3px solid #ff3c3c");	
	},function(){
		var n=oShowInnerDl.index(this);
		oShowInnerDl.eq(n).css("border","3px solid #fff");
		
	});
//对右侧中奖人员的滚动事件	
	var oMiddleLeftInnerUl  = $(".middle_left_inner ul");
	    var oUlTop = 0;
	setInterval(function(){
		oUlTop +=1;
		oMiddleLeftInnerUl[0].style.top = -oUlTop+"px";
		if(oUlTop>366){
			oUlTop=0;
		}
	},60)
	
});
