
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
	    $(".pay_goods_div").css("display","none");
	}
}
	checkCookes();
	//退出登录按钮	
	var oExit =  $("#exit");
	oExit.click(function(){
		window.open("../HomePage.html", "_self");
		removeCookie("user","/");
	})
});

	var oEnterState = $("#enter_state");
	if(oEnterState.text().indexOf("退出")<0){
		$(".pay_goods_div").css("display","none");
	}
//验证购物车中中是否有商品
//如果购物车中有商品，那么将他显示出来
//如果没有商品就显示其他页面
$(function(){
   var oGoodsText = $("#goodstext"),
	   oGoodsMsg = $(".goodsmessage"),
	   oEnterSuccess =  $(".enter_success"),
	   oGoodsMsgContent = $(".goodsmessage_content");
	function checkCarGoods(){
	$.get("http://10.35.164.185:8080/myWeb/getShoppingCart.jsp",
	    {
	    	stuId:764790954,
	    	userName:$.parseJSON($.cookie("user")).name
	    },function(data){
	    	if($.trim(data).length>0){
	    	var newObj = eval("("+data+")");
	    		oEnterSuccess.css("display","none");
	    		oGoodsMsg.css("display","block");
	    		oGoodsMsgContent.css("display","block");
	    		$(".pay_goods_div").css("display","block");
	        for(var i=0;i<newObj.length;i++){
	    	  oDiv = document.createElement("div");
	    	  oGoodsMsgContent.append(oDiv);
	    	  oGoodsMsgContent.children().eq(i).html(oGoodsText.html());
	    	  var	oGoodsName =  $(".goodsname"),
	                oGoodsPrice = $(".goodsprice"),
	                oShuLiang = $(".shuliang"),
	                oGoodsAllPrice = $(".goodsallprice"),
	                oGoodsImgSrc = $(".goodsimg img"),
	                oGoodsImgAName = $(".goodsimg>a"),
	                oGoodsWeight= $(".goodsweight");
	                oGoodsImgAName.eq(i)[0].name = newObj[i].goodsId;
	                oGoodsImgSrc.eq(i)[0].src = "../img/goodsimg/"+newObj[i].goodsImg;
	    			oGoodsName.eq(i).html(newObj[i].goodsName);
	    			oGoodsPrice.eq(i).html(newObj[i].goodsPrice);
	    			oGoodsWeight.eq(i).html(newObj[i].goodsWeight*newObj[i].goodsCount);
	    			oShuLiang.eq(i).html(newObj[i].goodsCount);
	    			oGoodsAllPrice.eq(i).html(newObj[i].goodsPrice*newObj[i].goodsCount);
	    			countAllGoodsPrice(oGoodsAllPrice);
	    		}
	    	}else{
	    		$(".pay_goods_div").css("display","none");
	    	}
	    });
	}
	checkCarGoods();
	
//计算商品的总价
 var   iAllGoodsPrice = $(".allgoodsprice");
  function countAllGoodsPrice(obj){
  	var GoodsPriceHtml = [],
        iAllPrice = 0;
  	for(var i=0;i<obj.length;i++){
   	  GoodsPriceHtml[i] = obj.eq(i).html(); 
    }
   for(var j=0;j<GoodsPriceHtml.length;j++){
  	  iAllPrice += Number(GoodsPriceHtml[j]);
    }
   iAllGoodsPrice.html(iAllPrice);
  } 

	
	//增加商品的数量
       var oAdd = $(".add"),
	       oReduce = $(".reduce"),
	       oDeleteGoods =  $(".deletegoods");
	 oAdd.live('click',function(){
	 	  var n = $(this).parent().parent().parent().index(); 
	 	  //var n = oAdd.index(this);
	 	  var oShuLiang = $(".shuliang").eq(n),
	 	      oGoodsAllPrice = $(".goodsallprice").eq(n),
	 	      oGoodsWeight= $(".goodsweight").eq(n),
	 	      oGoodsPrice = $(".goodsprice").eq(n),
	 	      oGoodsImgAName = $(".goodsimg>a").eq(n);
	  	  var iGoodsCount = oShuLiang.text();
	  	      iGoodsCount++;
	  	   oShuLiang.text(iGoodsCount);
	  	   //oGoodsWeight.text(iGoodsCount*oGoodsWeight.text());
	  	   oGoodsAllPrice.text(iGoodsCount* oGoodsPrice.text());
	  	   countAllGoodsPrice($(".goodsallprice"));
	  	  $.get("http://10.35.164.185:8080/myWeb/updateGoodsCount.jsp",{
	  	  	  stuId:764790954,
	  	  	  userName:$.parseJSON($.cookie("user")).name,
	  	  	  goodsId:oGoodsImgAName[0].name,
	  	  	  goodsCount:iGoodsCount
	  	  	  });
	  });
	//  减少商品的数量
	 oReduce.live("click",function(){
	 	 var  n = $(this).parent().parent().parent().index();  
		 var  oShuLiang = $(".shuliang").eq(n),
	 	      oGoodsAllPrice = $(".goodsallprice").eq(n),
	 	      oGoodsWeight= $(".goodsweight").eq(n),
	 	      oGoodsPrice = $(".goodsprice").eq(n),
	 	      oGoodsImgAName = $(".goodsimg>a").eq(n);
	  	  var iGoodsCount = oShuLiang.text();
	  	      iGoodsCount--;
		    if(iGoodsCount<1){
		      iGoodsCount=1;
		    }
		    oShuLiang.text(iGoodsCount);
		   // var s = oGoodsImgAName.eq(n)[n].name;
	  	  // oGoodsWeight.text(iGoodsCount*oGoodsWeight.text())
	  	   oGoodsAllPrice.text(iGoodsCount* oGoodsPrice.text());
		    oShuLiang.text(iGoodsCount);
		    countAllGoodsPrice($(".goodsallprice"));
		    $.get("http://10.35.164.185:8080/myWeb/updateGoodsCount.jsp",{
	  	  	  stuId:764790954,
	  	  	  userName:$.parseJSON($.cookie("user")).name,
	  	  	  goodsId:oGoodsImgAName[0].name,
	  	  	  goodsCount:iGoodsCount
	  	  	  });
	 })
	//删除物品
	oDeleteGoods.live("click",function(){
		var  n = $(this).parent().parent().index();  
		 var oShuLiang = $(".shuliang").eq(n),
	 	      oGoodsAllPrice = $(".goodsallprice").eq(n),
	 	      oGoodsWeight= $(".goodsweight").eq(n),
	 	      oGoodsPrice = $(".goodsprice").eq(n),
	 	      oGoodsImgAName = $(".goodsimg>a").eq(n);
		if(confirm("您确定要删除该商品么？--！")){
		    $.get("http://10.35.164.185:8080/myWeb/deleteGoods.jsp",
		    {
		    	stuId:764790954,
		    	userName:"study",
		    	goodsId:oGoodsImgAName.eq(n)[0].name
		    },function(data){
		    	if(data.indexOf("true")){
		    		alert("删除成功！");
		    		window.location.reload();
		    	}else{
		    		alert("删除失败");
		    	}
		    })
		}	
	});
});

   
var oNowEnter = $("#now_enter"),
    oPopupEnetr = $(".popup_enter"),
    oClosePopupEnter = $("#close_popup_enter");
   //点击立即登录与关闭的动画效果
   oNowEnter.click(function(){
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

//省市联动
        var parv;
		$.getJSON("../js/city.json",function(data){
				   parv = data;
		  for(var i=0;i<data.cityId.length;i++){
				$("#parvS").append("<option value='"+i+"'>"+data.cityId[i].parv+"</option>")    	
				   }
	             for(var i=0;i<parv.cityId[0].city.length;i++){
				  $("#cityS").append("<option value='"+parv.cityId[0].city[i].coding+"'>"+parv.cityId[0].city[i].cityName+"</option>")
				  }
				})
		   $("#parvS").change(function(){
                  $("#cityS")[0].length = 0;
              	   for(var i=0;i<parv.cityId[this.value].city.length;i++){
				  $("#cityS").append("<option value='"+parv.cityId[this.value].city[i].coding+"'>"+parv.cityId[this.value].city[i].cityName+"</option>")    	
				   } 
             });	


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
      
      
    //对搜索按钮添加事件
   var oSearch = $("#search"),
       str = "";
       oSearchBtn = $("#search_btn");
     oSearchBtn.click(function(){
  	   var oSearchGoods = oSearch.val();
//	   for(var i=0;i<oSearchGoods.length;i++){
//	   	  str +=oSearchGoods.charCodeAt(i);
//	   }
//	    str = "";
  	   var oOpenUrl = "search.html?"+"name="+oSearchGoods;
  	   window.open(oOpenUrl,"_blank");  
  });  
   
});