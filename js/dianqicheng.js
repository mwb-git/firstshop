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
		window.open("dianqicheng.html", "_self");
		removeCookie("user","/");
	})
});	

var arr=["4226367_130x130","CgQCslfWOIWAYUREAAGErDbRAuE62001_130x130","CgQCtFfPpuaATpWTAACaqprrHqQ23201_130x130",
        "CgQCtFfQi7SAIXCZAAJW_WseWb051201_130x130","CgQCtVfRUN6Abu2HAAISUhdf9yU29301_130x130","CgQDrlf9k1KAQatMAAX_svDJiyk93800_130x130",
        "CgQI0FSACpGAGdCCAASU0i8XjX878401_130x130","CgQI0FZG-OaAOc9nAAM-zr6wypQ16901_130x130","CgQI0lc79syAEqFuAAFI6mwZkDw53800_130x130",
        "CgQIz1fQi_-ABhqdAAKjQTK-MO891801_130x130","CgQIzlbzj86AQ4GxAAJHVIT7opg44500_130x130","ChEi2FhKEKCAIrBHAATMo4JUW5s66100_130x130",
        "CgQIzlX_Z8aAATEiAADPqGiryE812501_130x130","CgQIzVVUNPqAQzRSAAQ9El79FD082101_130x130","ChEbu1e-5L6AKFY0AAT8jP7v1-k93201_130x130",
        "ChEbu1fSgQKARz3PAAFWz_SV4mU28701_130x130","ChEbulbrqGmAQj1OAAHKt1y3iu020301_130x130","ChEbuleDP4aAQ_PKAANk8px02-k15800_200x200",
        "ChEbuleDu8qANv0BAAVatNfWMdM87400_130x130","ChEbulSCxFiAaGJBAANDiBTyyF854401_130x130","ChEbulWwaOKASYxlAAJOa2T1hwY35001_130x130",
        "ChEi1FcdwdCAIznVAALh9nemU3k64801_130x130","ChEi1FdGbwWAEO8FAAL5tZXmPig35001_130x130","ChEi1FfNLseABsxGAANUawVTneA05001_130x130",
        "ChEi1Fg4A42AYvC6AAHLZAKkuzc18501_130x130","ChEi1lfje5qAU9cxAAPhSeHRicM51301_130x130","ChEi1lginEWALluGAAM83JDv_go42601_130x130",
        "ChEi1VgQc1qAC_kvAAOvKHqvDbY45301_130x130","ChEi2lfQl02AKsxNAADKM05ULXI80001_130x130","ChEi2lg2jAeAaOCFAANnTSmKvwc15200_130x130",
        "ChEi2lhXR1KAcBmrAAWzlziO7zI55100_130x130","ChEi3Fg-N4-ATDVCAAGT4rWeeKw01100_130x130","ChEi3FhHtQmAZ2wqAAG9IkNIAPs72401_130x130",
        "ChEi11girCuASTv6AAMDpZCRn7M66701_130x130","ChEi11gPEMiATAIwAARuGORmOYk10101_130x130","ChEi21b1BkOAIT8PAAa56r06h1g98901_130x130",
        "ChEi21cdfsuAYf9pAAL4PfG218k52401_130x130","ChEi21g44oiAZGP3AAMiz_Yd1ok45901_130x130","ChEiBFfRF-OAeO2SAAFrzZu_zvc20001_130x130",
        "ChEiBlfQ-K-AIl_RAAKXTWcZ7fM70801_130x130","ChEiBVeukuKAO03RAARTEDDYOr812601_130x130"];
        
        
        var oBoxRightDl = $(".box_right dl"),
            oBoxRightDlDtImg = $(".box_right dl dt img"),
            oBoxRightDlDtImgOrd = $(".box_right dl dd:odd");
        for(var i=0; i<oBoxRightDlDtImg.length;i++){
        	if(i==10){
        		oBoxRightDlDtImg[10].src = "../img/dianqicheng/img/"+ arr[10]+".png";
        	}else if(i==18){
        		oBoxRightDlDtImg[18].src = "../img/dianqicheng/img/"+ arr[18]+".png";
        	}else{
        		oBoxRightDlDtImg[i].src = "../img/dianqicheng/img/"+ arr[i]+".jpg";
        	}
        }
        oBoxRightDlDtImgOrd.css("color","red");
     //对图片添加动态效果
     oBoxRightDlDtImg.hover(function(){
     	var n = oBoxRightDlDtImg.index(this);
     	oBoxRightDlDtImg.eq(n).animate({
     		width:150
     	},300)
     },function(){
     	var n = oBoxRightDlDtImg.index(this);
     	oBoxRightDlDtImg.eq(n).animate({
     		width:130
     	},300)
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
  	   var oOpenUrl = "search.html?"+"name="+oSearchGoods;
  	   window.open(oOpenUrl,"_blank");  
  });
  
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
       oBanner = $(".banner");
 function bannerChangeImg(){      
  bannerTime=setInterval(function(){
   	    oBannerLunBoImg.css("display","none");
   	    oBannerLunBoImgBtnSpan.css("background","#ccc");
   	    oBannerLunBoImg[bannerCount].style.display = "block";
   	    oBannerLunBoImgBtnSpan[bannerCount].style.background = "red";
   	  bannerCount++;
   	if(bannerCount>4){
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




})
