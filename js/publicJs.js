 $(function(){
 	
  //对top中的城市选项
    var oCity = $("#city");
    oCity.mouseover(function(){
    	var oCityIcon = $("#city_icon"),
    	    oCityList = $("#city_list"),
    	    oCityListDd = $("#city_list dd");
    	oCityIcon.css("background-position","-330px 5px");
    	oCityList.css("display","block").mouseover(function(){
    		oCityIcon.css("background-position","-330px 5px");
    		oCityList.css("display","block");
    		oCityListDd.mouseover(function(){
    			var n = oCityListDd.index(this);
    			oCityListDd.css("background","#fff")[n].style.background = "orange";
    		oCityListDd.click(function(){
    			var n = oCityListDd.index(this); 
    			$("#city b").html(oCityListDd[n].innerHTML+"<span></span>");
    			oCityList.css("display","none");
    		});
    		});
    	});
    	oCityList.mouseout(function(){
    		oCityIcon.css("background-position","-315px 5px");
    		oCityList.css("display","none");
    	});
    });
    oCity.mouseout(function(){
    	$("#city_list").css("display","none");
    	$("#city_icon").css("background-position","-315px 5px");
    });
//对我的1号店
    var oTopRightMyshop = $("#top_right_myshop");
     oTopRightMyshop.mouseover(function(){

     $("#top_right_myshop span").css("background-position","-210px 0px")
   	 $("#top_right_myshop_list").css("display","block");
   	 	 $("#top_right_myshop_list a").mouseover(function(){
   	 	 var n = $("#top_right_myshop_list a").index(this);
   	 	 $("#top_right_myshop_list a").css("color","#000")[n].style.color = "red";
   	 	 })
   	 	 $("#top_right_myshop_list a").mouseout(function(){
   	 	 	$("#top_right_myshop_list a").css("color","black");
   	 	 });
   });
     oTopRightMyshop.mouseout(function(){
     	 $("#top_right_myshop span").css("background-position","-190px 0px")
   	   $("#top_right_myshop_list").css("display","none");  
     });

//对收藏夹
   var oTopRightCollect = $("#top_right_collect"),
       oTopRiClLiA =   $("#top_right_collect_list a"),
       oTopRiClLi  =   $("#top_right_collect_list");
     oTopRightCollect.mouseover(function(){
     	 $("#top_right_collect span").css("background-position","-210px 0px")
     	oTopRiClLi.css("display","block");
     	 oTopRiClLiA.mouseover(function(){
   	 	 var n = oTopRiClLiA.index(this);
   	 	 oTopRiClLiA.css("color","#000")[n].style.color = "red";
   	 	 })
   	 	 oTopRiClLiA.mouseout(function(){
   	 	 	oTopRiClLiA.css("color","black");
   	 	 });
     });
      oTopRightCollect.mouseout(function(){
      	     $("#top_right_collect span").css("background-position","-190px 0px")
      		oTopRiClLi.css("display","none");
      });

//对掌上一号店
    var   oTopRtPhone = $("#top_right_phone"),
          oTopRtPhoneContent = $("#top_right_phone_content");
          oTopRtPhone.mouseover(function(){
            $("#top_right_phone span").css("background-position","-210px 0px");
          	oTopRtPhoneContent.css("display","block");
          });
          oTopRtPhone.mouseout(function(){
            $("#top_right_phone span").css("background-position","-190px 0px");
          	oTopRtPhoneContent.css("display","none");
          });

//对企业采购
     var oTopRightBusiness = $("#top_right_business"),
       oTopRiBusLiA =   $("#top_right_business_list a"),
       oTopRiBusLi  =   $("#top_right_business_list");
     oTopRightBusiness.mouseover(function(){
     	 $("#top_right_business span").css("background-position","-210px 0px")
     	oTopRiBusLi.css("display","block");
     	 oTopRiBusLiA.mouseover(function(){
   	 	 var n = oTopRiBusLiA.index(this);
   	 	 oTopRiBusLiA.css("color","#000")[n].style.color = "red";
   	 	 })
   	 	 oTopRiBusLiA.mouseout(function(){
   	 	 	oTopRiBusLiA.css("color","black");
   	 	 });
     	
     });
      oTopRightBusiness.mouseout(function(){
      	     $("#top_right_business span").css("background-position","-190px 0px")
      		oTopRiBusLi.css("display","none");
      });

//对客户服务
     var oTopRightClient = $("#top_right_client"),
       oTopRiClientLiA =   $("#top_right_client_list a"),
       oTopRiClientLi  =   $("#top_right_client_list");
     oTopRightClient.mouseover(function(){
     	 $("#top_right_client span").css("background-position","-210px 0px")
     	oTopRiClientLi.css("display","block");
     	 oTopRiClientLiA.mouseover(function(){
   	 	 var n = oTopRiClientLiA.index(this);
   	 	 oTopRiClientLiA.css("color","#000")[n].style.color = "red";
   	 	 })
   	 	 oTopRiClientLiA.mouseout(function(){
   	 	 	oTopRiClientLiA.css("color","black");
   	 	 });
     	
     });
      oTopRightClient.mouseout(function(){
      	     $("#top_right_client span").css("background-position","-190px 0px")
      		oTopRiClientLi.css("display","none");
      });
      
//对网站导航
       var oTopRightNav = $("#top_right_nav"),
       oTopRightNavLiA =   $("#top_right_nav_list a"),
       oTopRightNavLi  =   $("#top_right_nav_list");
     oTopRightNav.mouseover(function(){
     	 $("#top_right_nav span").css("background-position","-210px 0px")
     	oTopRightNavLi.css("display","block");
     	 oTopRightNavLiA.mouseover(function(){
   	 	 var n = oTopRightNavLiA.index(this);
   	 	 oTopRightNavLiA.css("color","#000")[n].style.color = "red";
   	 	 })
   	 	 oTopRightNavLiA.mouseout(function(){
   	 	 	oTopRightNavLiA.css("color","black");
   	 	 });
     	
     });
      oTopRightNav.mouseout(function(){
      	     $("#top_right_nav span").css("background-position","-190px 0px")
      		oTopRightNavLi.css("display","none");
      });
      
 //对购物车按钮
     var oShopCar = $("#shopcar"),
         oShopCarContent = $("#shopcar_content");
     oShopCar.mouseover(function(){
     	oShopCarContent.css("display","block");
     	oShopCarContent.mouseover(function(){
     		oShopCarContent.css("display","block")
     	});
     	oShopCarContent.mouseout(function(){
     		oShopCarContent.css("display","none")
     	});
     });
    oShopCar.mouseout(function(){
    	oShopCarContent.css("display","none")
    });
    
//对搜索框和对搜索框弹出框
      var oSearchTxt = $("#search_txt"),
          oTimeout,
       oSearchPro    = $("#search_prompt"),
       oSearchProHot = $("#search_prompt_hot a");
   oSearchTxt.click(function(){
   		 oSearchPro.css("display","block");	 
   	oSearchPro.mouseover(function(){
   		clearTimeout(oTimeout);
   		oSearchPro.css("display","block");
   	});
   	oSearchPro.mouseout(function(){
   		oSearchPro.css("display","none");
   	});
   	oSearchProHot.mouseover(function(){
   		oSearchProHot.css("color","#333333");
   		oSearchProHot.css("borderColor","#e1e1e1")
   		var n = oSearchProHot.index(this);
   		oSearchProHot[n].style.color = "red";
   		oSearchProHot[n].style.borderColor = "red";
   	});
   	oSearchProHot.mouseout(function(){
   	   oSearchProHot.css("color","#333333");
   	   oSearchProHot.css("borderColor","#e1e1e1");
   	})
   });
    oSearchTxt.mouseout(function(){
    oTimeout = setTimeout(function(){
    	 oSearchPro.css("display","none");
    	 },500)
    });
   
//对历史记录
  var oSearchBtn = $("#search_btn"),
      oSearchDelHist = $("#search_delete_history") ,
      oSearchProHL  = $("#search_prompt_history_list "),
      oSearchProHLLi = $("#search_prompt_history_list li");
   oSearchBtn.click(function(){
   	  oSearchProHL.append("<li>"+oSearchTxt.val()+"</li>")   
   });
   oSearchDelHist.click(function(){
   	if(confirm("您确定删除历史记录么？")){
   		oSearchProHL.html("");
   	}
   });
 
 //对导航条
  var oNavInnerUl = $("#nav_inner_ul a");
     oNavInnerUl.slice(4).css("color","#333385");
     oNavInnerUl.slice(4).mouseover(function(){
     	var n =  oNavInnerUl.slice(4).index(this);
     	 oNavInnerUl.slice(4)[n].style.color = "red";
     });
      oNavInnerUl.slice(4).mouseout(function(){
     	oNavInnerUl.slice(4).css("color","#333385");
     });     
      
 })