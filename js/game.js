
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

 
//对banner轮播图
    var oBannerLunBo = $(".banner_lunbo"),
        oBannerBtnSpan = $("#banner_btn span"),
        oBannerLunBoImg = $(".banner_lunbo img"); 
        oBannerLunBoImg.width(document.documentElement.clientWidth)
        oBannerLunBo.width(oBannerLunBoImg.width()*5);
    var ord = 1;	
	var myTimer = null;			
		function changeImg(){
    	    ord++;
			goImg(ord);
		}	
	myTimer = setInterval(changeImg,3000);	
	function goImg(transOrd){
			ord = transOrd;
			oBannerLunBo.animate({
				left:-(ord-1)*oBannerLunBoImg.width()
				},500,function(){
				oBannerBtnSpan.css("background","#ccc");
    	        oBannerBtnSpan.eq(transOrd-1).css("background","hotpink");	
				if(ord>4){
					oBannerLunBo.css("left",0);
					ord=1;
					oBannerBtnSpan.css("background","#ccc");
    	            oBannerBtnSpan.eq(0).css("background","hotpink");
					}	
				});
			}
	
    oBannerLunBoImg.mouseover(function(){
      clearInterval(myTimer);	
    });
    oBannerLunBoImg.mouseout(function(){
      myTimer = setInterval(changeImg,3000);
    });   
	    
	    
  //对火热游戏
   var oHotGameImg = $(".hot_game img");
   oHotGameImg.hover(function(){
   	var n = oHotGameImg.index(this);
   	oHotGameImg.eq(n).css("opacity","1");
   },function(){
  	var n = oHotGameImg.index(this);
   	oHotGameImg.eq(n).css("opacity","0.8");
   })
 //对所有游戏 
    var oAllGameDl = $(".allgame dl"),
        oAllGameInput = $(".allgame input");
    oAllGameDl.hover(function(){
    	var n = oAllGameDl.index(this);	
     oAllGameInput.eq(n).show(500);
    },function(){
  	var n = oAllGameDl.index(this);
   	oAllGameInput.eq(n).hide(500);
   })
        
});