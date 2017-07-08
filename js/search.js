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
     var oSearchWords,
         oNewGoods=[];
	  function aa(){
           var oUrl = location.search;
           var s = oUrl.indexOf("=");
           oSearchWords =  decodeURI(oUrl).slice(s+1);//decodeURI方法对URL中的中文乱码进行解码
//    var   str = "",
//          newstr ="";
//          j = 0,
//          oNewName = [];
//          for(var i=0;i<oNewUrl.length+1;i++){
//          	if(i%5 == 0 && i!=0){
//          	var str =oNewUrl.slice(j*5,(j+1)*5);
//          		j++;
//          		oNewName.push(str);
//          		str = "";
//          	}
//          }
//          for(var x=0;x<oNewName.length;x++){
//          	newstr += String.fromCharCode(oNewName[x]);
//          }
        $.get("http://10.35.164.185:8080/myWeb/getGoodsList.jsp",
		{
			stuId:764790954,
		},function(data){
			var newObj = eval("("+data+")");
			for(var i=0;i<newObj.length;i++){
				if(oSearchWords == newObj[i].goodsType){
					oNewGoods.push(newObj[i]);
				}
			} 
		var	oMiddleInnerH3Span = $(".middle_inner h3 span");
			oMiddleInnerH3Span[0].innerHTML = oSearchWords;
			for(var i=0;i<oNewGoods.length;i++){
				$(".middle_inner").append($("#goodstext").html());
			var oGoods =  $(".goods"),
	            oGoodsA =  $(".goods  a"),
	            oGoodsImg =  $(".goods  img"),
	            oGoodsH4 =  $(".goods  h4"),
	            oGoodsP =  $(".goods  p");
			    oGoodsA.eq(i)[0].href = "goodsdetains.html?name="+oNewGoods[i].goodsId;
   	 	        oGoodsImg.eq(i)[0].src = "../img/goodsimg/"+oNewGoods[i].goodsImg;
   	 	        oGoodsH4.eq(i).html("￥"+oNewGoods[i].goodsPrice+"元")
   	 	        oGoodsP.eq(i).html(oNewGoods[i].goodsName);
			}
			if(oNewGoods.length < 1){
				$("#sorry").show(1000);
			}
		})	
           
       }
       aa();
    //对搜索按钮添加事件
   var oSearchTxt = $("#search_txt"),
       str = "";
       oSearchBtn = $("#search_btn");
     oSearchBtn.click(function(){
  	   var oSearchGoods = oSearchTxt.val();
//	   for(var i=0;i<oSearchGoods.length;i++){
//	   	  str +=oSearchGoods.charCodeAt(i);
//	   } 
//	   str = "";
  	   var oOpenUrl = "search.html?"+"name="+oSearchGoods;
  	   
  	   window.open(oOpenUrl,"_self");  
  });

  
     //对右侧按钮进行修饰
  var oBodyRtNavEndThree =  $("#body_right_nav_end_three");
      oBodyRtNavSpan =  $("#body_right_nav span");
       oBodyRtNavSpan.hover(function(){
       	var n = oBodyRtNavSpan.index(this);
       	oBodyRtNavSpan.css({background:"#ffa89a",color:"red"})
       	oBodyRtNavSpan.eq(n).css({background:"#fff",color:"#666"})
       },function(){
       	oBodyRtNavSpan.css({background:"#ffa89a",color:"red"})
       }) 
 // 回到顶部
       oBodyRtNavEndThree.click(function(){     	
           $("html").animate({
   	 		scrollTop:0
   	 	},300);      	
       });  
       
//对右侧购物车模块 
 var oBodyRigthNavCar = $("#body_right_nav_car"),
     oBodyRightBox   =  $("#body_right_box");
     
     oBodyRigthNavCar.hover(function(){
     	oBodyRigthNavCar.css({background:"#fff",color:"#666"})
     },function(){
     	oBodyRigthNavCar.css({background:"#3f3c3c",color:"red"})
     })
     oBodyRigthNavCar.toggle(function(){
     	oBodyRightBox.animate({
     		width:320
     	},600)
     },function(){
     	oBodyRightBox.animate({
     		width:34
     	},600)
     })
     
})