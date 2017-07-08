
$(function(){
	
//验证是否保存了Cookes
//当cookes保存了的时候应该执行的函数,将登陆注册替换

$(function(){
	  var oNewUrl;
	  function aa(){
           var oUrl = location.search;
           var s = oUrl.indexOf("=");
            oNewUrl =  oUrl.slice(s+1);
        $.get("http://10.35.164.185:8080/myWeb/getGoodsInfo.jsp",
		{
			stuId:764790954,
			goodsId:oNewUrl
		},function(data){
			var newObj = eval("("+data+")");
			var oGoodsImgSrc = $(".goods_img>img"),
	            oGoodsName =$(".goodsname"),
	            oGoodsContent=$(".goodscontent"),
	            oGoodsPrice=$(".goodsprice"),
	            oGoodsNote=$(".goodsnote");
				oGoodsImgSrc[0].src ="../img/goodsimg/"+newObj.goodsImg;
				oGoodsName.html(newObj.goodsName) ;
				oGoodsContent.html(newObj.goodsContent);
				oGoodsPrice.html(newObj.goodsPrice);
				oGoodsNote.html(newObj.goodsNote); 
		})	
           
       }
       aa();
	var oExit =  $("#exit");
	oExit.click(function(){
		removeCookie("user","/");
		window.open("HomePage.html", "_self")
	})
	//增加商品的数量
	 var oGoodsCount =  $(".goodscount");
	$("#add").click(function(){
		var iGoodsCount = oGoodsCount.text();
		iGoodsCount++;
		oGoodsCount.text(iGoodsCount);
	})
	//减少商品的数量
	$("#reduce").click(function(){
		var iGoodsCount = oGoodsCount.text();
		iGoodsCount--;
		if(iGoodsCount<2){
			iGoodsCount=1;
		}
		oGoodsCount.text(iGoodsCount);
	})
	
	//将商品添加进入购物车
	var oAddShopCar = $("#add_shopcar");
	oAddShopCar.click(function(){
		//对字符串去掉前后的空格与空白空间
		 var iCount = $.trim(oGoodsCount.text())
		//向服务器传送数据
		$.get("http://10.35.164.185:8080/myWeb/addShoppingCart.jsp",
		{
			stuId:764790954,
			userName:"study",
			goodsId:oNewUrl,
			goodsCount:iCount
		},function(data){
			if(data.indexOf("true")>-1){
				alert("添加成功！");
			}else{
				alert("添加失败！");
			}
		});
	});	
	function checkCookes(){
	var oTopLeftEnterState = $("#top_left_enter_state");
	if($.cookie("user").length!=0){
		var s=$.parseJSON($.cookie("user"));
		oTopLeftEnterState.html("Hi,"+s.name+"<span id='exit'>退出</span>").css("color","black");
		} 	
		
	}
	checkCookes();
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
//地图的显示与隐藏
   var oMap = $("#map"),
       oBigBox = $("#big_box"),
       oMapClose = $("#map_close"),
       oMapTxt = $("#map_txt"),
       oMapBox = $("#map_box");
//给遮罩层赋值高度
     var oHeight = document.documentElement.clientHeight;
         oBigBox.height(oHeight);
    oMap.click(function(){
    	oBigBox.css("display","block");
    	oMapBox.css("display","block");
    })
    oMapClose.click(function(){
    	oBigBox.css("display","none");
    	oMapBox.css("display","none");
    	oMapTxt.val("");
    })
 //地图搜索事件
    var oMapSearch = $("#map_search");
    oMapSearch.click(function(){
    var oCity = $("#map_txt").val();
       toLocation(oCity);	
    })
	var map = new BMap.Map("map_show",{minZoom:0,maxZoom:20});// 创建Map实例
    var point = new BMap.Point(116.331398,39.897445);    
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	function toLocation(city){
	if(oMapTxt.val()==""){
		map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
	}else{
		map.centerAndZoom(city,11);// 设置地图显示的城市 此项是必须设置的
	}
   }
   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	 });