
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
//从服务器获取相关商品信息
function gainServierGoods(){
	var oGoodsShowLi =  $(".goodsshow li"),
	    oGoodsShowLiA =  $(".goodsshow li a"),
	    oGoodsShowLiImg =  $(".goodsshow li img"),
	    oGoodsShowLiH4 =  $(".goodsshow li h4"),
	    oGoodsShowLiP =  $(".goodsshow li p");
   $.get("http://10.35.164.185:8080/myWeb/getGoodsList.jsp",{
   	   stuId:764790954
     },function(d){
   	 var data = eval("("+d+")");
   	 for(var i=0; i<oGoodsShowLi.length;i++){
   	 	oGoodsShowLiA.eq(i)[0].href = "html/goodsdetains.html?name="+data[i].goodsId;
   	 	oGoodsShowLiImg.eq(i)[0].src = "img/goodsimg/"+data[i].goodsImg;
   	 	oGoodsShowLiH4.eq(i).html("￥"+data[i].goodsPrice+"元")
   	 	oGoodsShowLiP.eq(i).html(data[i].goodsName);
   	 }
     });
 }
  gainServierGoods();   


  
//对banner图右侧的选项卡进行修饰
	var aLi  =  $("#all_goodslist_ul>li"),
	    oAllGoodsCon =  $("#all_goods_content"),
	    oAllGoodsConDiv =  $("#all_goods_content>div"),
	    n;
	 aLi.mouseover(function(){
	 	 n = aLi.index(this);
	   aLi[n].style.background = "#872222"; 
	    oAllGoodsCon.css("display","block");
	   oAllGoodsConDiv[n].style.display = "block";
	   oAllGoodsConDiv.mouseover(function(){
	 	 
	 	 oAllGoodsCon.css("display","block");
	 	 oAllGoodsConDiv[n].style.display ="block";
	 	  aLi[n].style.background = "#872222"; 
	 });
	  oAllGoodsConDiv.mouseout(function(){
	  	 aLi[n].style.background = "#c23131"; 
	  	 oAllGoodsCon.css("display","none");
	 	 oAllGoodsConDiv[n].style.display ="none";
	 });
	 });
	 aLi.mouseout(function(){
	    n = aLi.index(this);
	    aLi[n].style.background = "#c23131";
	    oAllGoodsCon.css("display","none");
	    oAllGoodsConDiv.css("display","none");
	 });
	 

//banner图轮播
   var bannerCount = 0,
       bannerTime,
       oBannerLunBoImg = $("#banner_lunbo img"),
       oBannerLunBoImgBtnSpan = $("#banner_lunbo_btn span"),
       oBanner = $(".banner"),
       bannerBgColor = ["#f94d67","#f4c668","#ff3157","#7d15cc","#4a29ff","#0092ff","#fa2f4c"];
 function bannerChangeImg(){      
  bannerTime=setInterval(function(){
  	    oBanner.css("background",bannerBgColor[bannerCount]);
   	    oBannerLunBoImg.css("display","none");
   	    oBannerLunBoImgBtnSpan.css("background","#ccc");
   	    oBannerLunBoImg[bannerCount].style.display = "block";
   	    oBannerLunBoImgBtnSpan[bannerCount].style.background = "red";
   	  bannerCount++;
   	if(bannerCount>6){
   		bannerCount=0;
   	}
   },2000);
 };
 bannerChangeImg();
 oBannerLunBoImg.mouseover(function(){
   	 clearInterval(bannerTime);
   });
  oBannerLunBoImg.mouseout(function(){
   	   bannerChangeImg();
   }); 
 oBannerLunBoImgBtnSpan.mouseover(function(){
 	 clearInterval(bannerTime);
 	var n = oBannerLunBoImgBtnSpan.index(this);
 	oBanner.css("background",bannerBgColor[n]);
 	oBannerLunBoImg.css("display","none");
    oBannerLunBoImgBtnSpan.css("background","#ccc");
   	oBannerLunBoImg[n].style.display = "block";
   	oBannerLunBoImgBtnSpan[n].style.background = "red";
 })
  oBannerLunBoImgBtnSpan.mouseout(function(){
 	var n = oBannerLunBoImgBtnSpan.index(this);
 	bannerCount = n;
 	bannerChangeImg();
 })
 //对banner图右侧中1号专享内添加事件
    var  oEnjoyContentDl   = $("#enjoy_content>dl"),
         oEnjoyContentInner =  $("#enjoy_content_inner"),
         oEjCoInListDiv = $("#enjoy_content_inner>div");
     
     oEnjoyContentDl.mouseover(function(){
     	var n = oEnjoyContentDl.index(this);
      	 oEnjoyContentDl.css("color","#666")
     	 oEnjoyContentDl[n].style.color = "red";
     });
     oEnjoyContentDl.slice(3).mouseover(function(){
          oEnjoyContentInner.css("display","block");
        var n = oEnjoyContentDl.slice(3).index(this);
          changeEnjoyContent(n);
          
     })
  //对其中的关闭按钮添加事件
    var  oEyCotInClose =  $(".enjoy_content_inner_close");
         oEyCotInClose.click(function(){
         oEnjoyContentInner.css("display","none");        	
      });
    
 //对banner图右侧中1号专享内下方三个
    var  oEjCoInListA = $("#enjoy_content_inner_list a");
      oEjCoInListA.mouseover(function(){
      	var n = oEjCoInListA.index(this);
           changeEnjoyContent(n);
      });
//改变 banner图右侧中1号专享内的充值中心内的内容，
//  使其中内容随着你滑动内容的不同而不同
 function changeEnjoyContent(n){
 	oEjCoInListA.css({borderBottom:"1px solid red",borderTop:"1px solid #ccc",borderRight:"1px solid #ccc",borderLeft:"1px solid #ccc"});
      	oEnjoyContentInner[0].style.borderTop = "none";
      	oEjCoInListA[n].style.cssText = "border-bottom:none; border-right:1px solid red; border-top:1px solid red; border-left:1px solid red;";
      	oEjCoInListDiv.css("display","none");
      	oEjCoInListDiv[n].style.display = "block";
 }
 
 // 对banner图右侧中1号专享内的充值中心
    var oEjCoInPeDiv = $("#enjoy_content_inner_price>div"),
         oEjCoInPeListA = $("#enjoy_content_inner_price_list a");
     oEjCoInPeListA.mouseover(function(){
     	var n = oEjCoInPeListA.index(this);
     	oEjCoInPeListA.css("color","#666")
     	oEjCoInPeListA[n].style.color = "red";
     	oEjCoInPeDiv.css("display","none");
     	oEjCoInPeDiv[n].style.display = "block";
     });
 
//对banner图右侧中1号专享内的充值中心内的话费充值
    var oPricePhoTxt = $("#price_phone_txt"),
        oPricePhoTxtPro = $("#price_phone_txt_prompt");
      oPricePhoTxt.keyup(function(){
  	     checkPhone(oPricePhoTxt,oPricePhoTxtPro); 
      });
  	 oPricePhoTxt.blur(function(){
  	  	 checkPhone(oPricePhoTxt,oPricePhoTxtPro);
  	  });
  	  
 //对banner图右侧中1号专享内的充值中心内的话费充值下的面值
      var oPriPhoList = $("#price_phone_list"),
          oPriPhoAmoList =  $("#price_phone_amount_list"),
          oPriPhoAmoListLi =  $("#price_phone_amount_list li"),
          oPriPhoCost =  $("#price_phone_cost");
          oPriPhoList.click(function(){
         	oPriPhoAmoList.css("display","block");
         	oPriPhoAmoListLi.mouseover(function(){
         		var n = oPriPhoAmoListLi.index(this);
         		oPriPhoAmoListLi.css({background:"#fff",color:"black"})
         		oPriPhoAmoListLi[n].style.cssText = "background:blue;color:#fff"
         	}).click(function(){
         		var n = oPriPhoAmoListLi.index(this);
         		oPriPhoList.val(oPriPhoAmoListLi[n].innerHTML);
         		oPriPhoAmoList.css("display","none");
         		oPriPhoCost.html("￥"+oPriPhoAmoListLi[n].innerHTML*0.98)
         	})

         	
         });
//对banner图右侧中1号专享内的充值中心内的流量充值 
   var oPriceFlowTxt = $("#price_flow_txt"),
       oPriceFlowTxtPro = $("#price_flow_txt_prompt");
      oPriceFlowTxt.keyup(function(){
	     checkPhone(oPriceFlowTxt,oPriceFlowTxtPro);  
      });
	 oPriceFlowTxt.blur(function(){
	  	 checkPhone(oPriceFlowTxt,oPriceFlowTxtPro);
	  });

 //验证电话号码的函数 
 // x:表示传入需要验证的元素对象， y:表示显示验证信息的元素对象
 function checkPhone(x,y){
 	var reg = /^1\d{10}$/ig;
  	  	 if(reg.test(x.val())){
  	  	 	y.text("号码正确");
  	     	y.css({color:"green",fontWeight:700})
  	  	 }else{
  	     	y.text("号码错误！");
  	     	y.css({color:"red",fontWeight:700})
  	    }
 }
 
//对楼层 
   var oFloor = $("#floor"),
       oFloorSpan = $("#floor span"),
       oAllFloor = $("body>div").slice(6,16);
   $(window).scroll(function(){ 
   	var iScrollTop = $(document).scrollTop();
      if(iScrollTop>1100){ 
        oFloor.fadeIn();
         }else{
        oFloor.fadeOut(); 	
         }
      for(var i=0;i<oAllFloor.length;i++){
      	if(iScrollTop>oAllFloor.eq(i).offset().top){
      		oFloorSpan.css({background:"#fff",color:"#666"});
      		oFloorSpan[i].style.cssText = "background:red; color:#fff";
      	}
      }
   });
   
   oFloorSpan.mouseover(function(){
   	 var n = oFloorSpan.index(this);
   	 oFloorSpan.css({background:"#fff",color:"#666"});
     oFloorSpan[n].style.cssText = "background:red; color:#fff";
   });
   oFloorSpan.click(function(){   
   	 	var i = oFloorSpan.index(this);
   	 	    iTop = oAllFloor.eq(i).offset().top+20;
   	 	$("body,html").animate({
   	 		scrollTop:iTop
   	 	},300);
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
     
     
 
//面向对象轮播图封装
  function Lunbotu(boxDivId,imgArr,count,imgWidth,imgurl){
	this.boxDivId = boxDivId;//所放入的盒子Id
	this.imgArr = imgArr;//照片的Src地址
	this.count = count;//计数器
	this.imgWidth = imgWidth;//相片宽度
	this.imgurl = imgurl;//图片链接地址
  }
//创建轮播图
 Lunbotu.prototype.createBox = function(){
	var oUl =document.createElement("ul");
	  oUl.id = this.boxDivId + "ul";
	for(var i=0;i<this.imgArr.length;i++){
	  var oLi = document.createElement("li");
	  var oA = document.createElement("a");
	      oA.href = this.imgurl[i];
	  var oImg = document.createElement("img");
	      oImg.src=this.imgArr[i];
	    $(oA)[0].appendChild(oImg); 
	    $(oLi)[0].appendChild(oA);  
	    $(oUl)[0].appendChild(oLi);
	}
	$(this.boxDivId)[0].appendChild(oUl);
 }
//创建轮播图按钮
Lunbotu.prototype.changebtn  = function(){
   	var that  = this;
    var btninterval,
	    btncount = 0,
	    oWidth = 0;    
	var oDiv =document.createElement("div");
	    oDiv.id = this.boxDivId + "div";
	for(var i=0;i<this.imgArr.length;i++){
       oDivChild =document.createElement("div");
       oSpan  = document.createElement("span");
        $(oDivChild)[0].appendChild(oSpan); 
	    $(oDiv)[0].appendChild(oDivChild);
	}
	$(this.boxDivId)[0].appendChild(oDiv);
	//对按钮添加滑动事件
	var oDivBtn = $(this.boxDivId).children("div").children("div"),
	    oDivBtnSpan =$(this.boxDivId).children("div").children("div").children("span");
	  oDivBtn.mouseover(function(){
	  	 var n = oDivBtn.index(this);
	  	 oDivBtnSpan.css("width","0").eq(n).css("width","31px");
	  	 $(that.boxDivId).children("ul").animate({
			left:(-that.imgWidth)*n
		},600)
	  })
	  oDivBtn.mouseout(function(){
	  	oDivBtnSpan.css("width","0");
	  });
}	
//进度条轮播
Lunbotu.prototype.changeImg = function(){
	var that = this;
	var  btncount = 0;
	var  oDivBtnSpan =$(this.boxDivId).children("div").children("div").children("span");
	//此处用到递归函数，每当一个完成在调用函数，计数器加1
	function planstrip(){
	 oDivBtnSpan.eq(btncount).animate({
	        width:31
	  },2000,function(){
	  	   oDivBtnSpan.eq(btncount).width(0);
	  	   btncount ++ ;
	  	   if(btncount>2){
	  	   	btncount =0;
	  	   }
	  	 $(that.boxDivId).children("ul").animate({
			left:(-that.imgWidth)*btncount
		   },600) 
		   planstrip();
	  });
	 }
	  planstrip();
	  $(that.boxDivId).hover(function(){
	  	 oDivBtnSpan.stop();
	  	 oDivBtnSpan.eq(btncount).width(31);
	  	 $(that.boxDivId).children("ul").stop();
	  },
	  function(){
	  	 oDivBtnSpan.width(0);
	  	  planstrip();
	  })
}	   

//食物楼层轮播图
var foodLunbo = new Lunbotu("#food_lunbo",["img/lunbotu/ChEi1FhBPNaAMdjVAAB0uXHy6Qg80100.jpg",
    "img/lunbotu/ChEi1FhIzF2AXIThAABg4s-XWWM94300.jpg",
    "img/lunbotu/ChEi2lgSwCiACjG2AAB0EfUpFcM95400.jpg"],0,330,["#","#","#"]);
    foodLunbo.createBox();
    foodLunbo.changebtn(); 
    
    foodLunbo.changeImg();

//冰冻食物楼层轮播图
var icefoodLunbo = new Lunbotu("#icefood_lunbo",["img/lunbotu/ChEi1FgtCgOAVY4pAABtBTuQ2x871400.jpg",
    "img/lunbotu/ChEi1FhBPNaAMdjVAAB0uXHy6Qg80100.jpg",
    "img/lunbotu/ChEi1FhIzF2AXIThAABg4s-XWWM94300.jpg"],0,330,["#","#","#"]);
    icefoodLunbo.createBox();
    icefoodLunbo.changebtn();
    icefoodLunbo.changeImg();

//饮料楼层轮播图
var drinkLunbo = new Lunbotu("#drink_lunbo",["img/lunbotu/ChEi1FhKDD-AVABXAAEfPqUGvOg19400.jpg",
    "img/lunbotu/ChEi1lg72zOALSdjAACa--XQhQU47600.jpg",
    "img/lunbotu/ChEi1lhBRlKANQ8rAABrDElbDJQ10100.jpg"],0,330,["#","#","#"]);
    drinkLunbo.createBox();
    drinkLunbo.changebtn();
    drinkLunbo.changeImg();

//厨房卫具轮播图。
var kitchenLunbo = new Lunbotu("#kitchen_lunbo",["img/lunbotu/ChEi1lhE24aAO03lAAC8UqKYQGQ14000.jpg",
    "img/lunbotu/ChEi1lhGcZ6AXsNZAACG1XzQsBw29400.jpg",
    "img/lunbotu/ChEi21hE0gWALRGVAACLnqlux7Y92400.jpg"],0,330,["#","#","#"]);
    kitchenLunbo.createBox();
    kitchenLunbo.changebtn();
    kitchenLunbo.changeImg();

//母婴。
var babyLunbo = new Lunbotu("#baby_lunbo",["img/lunbotu/ChEi2FgtgGuAQklUAABilZPi3Ak99700.jpg",
    "img/lunbotu/ChEi2Fg8APiAUKxqAABTrX5ByA846300.jpg",
    "img/lunbotu/ChEi2lgSwCiACjG2AAB0EfUpFcM95400.jpg"],0,330,["#","#","#"]);
    babyLunbo.createBox();
    babyLunbo.changebtn();
    babyLunbo.changeImg();

//家居家居轮播图
var homeLunbo = new Lunbotu("#home_lunbo",["img/lunbotu/ChEi21hE0gWALRGVAACLnqlux7Y92400.jpg",
    "img/lunbotu/ChEi2Fg9OCCAEAcQAACfgFOwVO099500.jpg",
    "img/lunbotu/ChEi1Vg_i1qANY5aAACBfBEgTj885600.jpg"],0,330,["#","#","#"]);
    homeLunbo.createBox();
    homeLunbo.changebtn();
    homeLunbo.changeImg();

//流行百货轮播图
var popshopLunbo = new Lunbotu("#popshop_lunbo",["img/lunbotu/ChEi1lhGcZ6AXsNZAACG1XzQsBw29400.jpg",
    "img/lunbotu/ChEwoVgWqnWAKyQFAACLKuFC-hU64900.jpg",
    "img/lunbotu/ChEi2FgtgGuAQklUAABilZPi3Ak99700.jpg"],0,330,["#","#","#"]);
    popshopLunbo.createBox();
    popshopLunbo.changebtn();
    popshopLunbo.changeImg();
//手机轮播图

var phoneLunbo = new Lunbotu("#phone_lunbo",["img/lunbotu/ChEi2FhBMKKARBPvAABHW5gHV-g08400.jpg",
    "img/lunbotu/ChEi1lhH2s6AGNRjAACXGVWTvQc92500.jpg",
    "img/lunbotu/ChEi2Fg9OCCAEAcQAACfgFOwVO099500.jpg"],0,330,["#","#","#"]);
    phoneLunbo.createBox();
    phoneLunbo.changebtn(); 
    phoneLunbo.changeImg();


//对首页的商品链接添加点击事件
  $("#foodgoodslist>a").click(function(){
  	   var s = $("#foodgoodslist>a").index(this);
  	   changeHref($("#foodgoodslist>a"),s);
  });

function changeHref(obj,n){
        var oNowHref = obj[n].href;
        var oUrl;
        var sGoodsId =  obj[n].name;
        if(oNowHref.indexOf("=")>-1){
            var x = oNowHref.indexOf("?");
            var y = oNowHref.slice(0,x+1);
            oUrl = y + "name="+ sGoodsId;
            obj[n].href = oUrl;
        }else {
            oUrl = obj[n].href + "name=" + sGoodsId;
            obj[n].href = oUrl;
        }
		console.log(obj[n].href)
    }

var changeLeft = 2,
    iLeft=10,
    iTop =10,
    oStartGame = $("#startgame"),
    changeTop = 2;
//让弹力球动起来		
 function  gosport(){
 	iLeft = iLeft + changeLeft;
 	iTop = iTop + changeTop;
	clientWidth = document.documentElement.clientWidth;
	clientHeight = document.documentElement.clientHeight;
	scrollTop  = document.documentElement.scrollTop || document.body.scrollTop;
	scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	//判定弹力球的top和left值不能小于增量
	if(iTop<changeTop){
		iTop = 0;
		}
	if(iLeft<changeLeft){
		iLeft = 0;
		}
	//边界判定，碰到四条边后反弹		
	if(iTop <=0){
		changeTop = 2;
		}
	else if(iTop>=clientHeight-100){
			changeTop = -2;
			}
	if(iLeft <=0){
		changeLeft =2;
		}
	else if(iLeft>=clientWidth-100){
			changeLeft = -2;
			}		
	//将改变后的值赋给球
	oStartGame[0].style.left = iLeft+'px';
	oStartGame[0].style.top = iTop+'px';
	}
 //启动运动的定时器	
	setInterval(function(){
		gosport();
	},20)
oStartGame.click(function(){
	window.open("html/game.html","_blank")
});

//对搜索按钮添加事件
   var oSearchTxt = $("#search_txt"),
       str = "";
       oSearchBtn = $("#search_btn");
     oSearchBtn.click(function(){
  	   var oSearchGoods = oSearchTxt.val();
//	   for(var i=0;i<oSearchGoods.length;i++){
//	   	  str +=oSearchGoods.charCodeAt(i);
//	   }
//	    str = "";
  	   var oOpenUrl = "html/search.html?"+"name="+oSearchGoods;
  	   window.open(oOpenUrl,"_blank");  
  });
  //对闪购中的图片选项卡添加事件
  var oFastBuyListUl = $(".fastbuy_list_ul"),
      oFastBuyTitleLi = $(".fastbuy_title li").slice(0,3),
      oFastBuyTitleLiA = $(".fastbuy_title li a");
      
  oFastBuyTitleLi.mouseover(function(){
  	var n = oFastBuyTitleLi.index(this);
  	oFastBuyListUl.hide();
  	oFastBuyTitleLiA.css("color","#666");
  	oFastBuyTitleLiA.eq(n).css("color","red");
  	oFastBuyListUl.eq(n).show();
  });
  //对图片添加倒计时
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
		TimeCount(aSpan.slice(0,4),"2017/1/7"); 
		TimeCount(aSpan.slice(4,8),"2017/1/3"); 
		TimeCount(aSpan.slice(8,12),"2017/1/7"); 
		TimeCount(aSpan.slice(12,16),"2017/1/12"); 
		TimeCount(aSpan.slice(16,20),"2017/1/19"); 
		TimeCount(aSpan.slice(20,24),"2017/1/22"); 
		TimeCount(aSpan.slice(24,28),"2017/1/10");
		TimeCount(aSpan.slice(28,32),"2017/1/9"); 
		TimeCount(aSpan.slice(32,36),"2017/1/18"); 
		TimeCount(aSpan.slice(36,40),"2017/1/6"); 
		TimeCount(aSpan.slice(40,44),"2017/1/15"); 
		TimeCount(aSpan.slice(44,48),"2017/1/14"); 
		TimeCount(aSpan.slice(48,52),"2017/1/12"); 
		TimeCount(aSpan.slice(52,56),"2017/1/24"); 
		TimeCount(aSpan.slice(56,60),"2017/1/15"); 
		 },1000)

//对闪购模块图片添加划入效果
    var oFastBuyListUlLi = $(".fastbuy_list_ul li"),
        oFastBuyListUlLiImg = $(".fastbuy_list_ul li img"),
        oFastBuyListUlLiDiv = $(".fastbuy_list_ul li div");
      oFastBuyListUlLi.hover(function(){
      	var n = oFastBuyListUlLi.index(this);
      	oFastBuyListUlLiDiv.eq(n).css("display","block")
      	oFastBuyListUlLiDiv.eq(n).css({background:"#fe5666",color:"#fff"})
      },function(){
      	var n = oFastBuyListUlLi.index(this);
      	oFastBuyListUlLiDiv.eq(n).css("display","none")
      	oFastBuyListUlLiDiv.eq(n).css({background:"#666",color:"#fff"})
      });
})