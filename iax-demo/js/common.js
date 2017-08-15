
$(function(){

	//对Date的扩展，将 Date 转化为指定格式的String   
	//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
	//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
	//例子：   
	//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
	//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
	Date.prototype.Format = function(fmt)   
	{ //author: meizz   
	 var o = {   
	   "M+" : this.getMonth()+1,                 //月份   
	   "d+" : this.getDate(),                    //日   
	   "h+" : this.getHours(),                   //小时   
	   "m+" : this.getMinutes(),                 //分   
	   "s+" : this.getSeconds(),                 //秒   
	   "q+" : Math.floor((this.getMonth()+3)/3), //季度   
	   "S"  : this.getMilliseconds()             //毫秒   
	 };   
	 if(/(y+)/.test(fmt))   
	   fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	 for(var k in o)   
	   if(new RegExp("("+ k +")").test(fmt))   
	 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	 return fmt;   
	}  
	
	$('[data-toggle="tooltip"]').tooltip();
      $('.x-user-con').on('click',':not(a)',function(event){
        var event = event || window.event;

        if($(this)[0].tagName!="I"){

          if($(this).parents(".x-user-main").find(".x-user-list").css("visibility")=="hidden"){
        	  $(".x-user-main").find(".x-user-list").css("visibility","hidden");
              $(".x-user-main").find(".x-user-list").css("opacity","0");
            $(this).parents(".x-user-main").find(".x-user-list").css("visibility","visible");
              $(this).parents(".x-user-main").find(".x-user-list").css("opacity","1");
          }else{
            $(this).parents(".x-user-main").find(".x-user-list").css("visibility","hidden");
              $(this).parents(".x-user-main").find(".x-user-list").css("opacity","0");
          }
        }
         event.stopPropagation();
      });
      $(".x-user-main").hover(function(){
        $('body').unbind('mousedown');
        },function(){
        $('body').bind('mousedown', function(){
            $(".x-user-main").find(".x-user-list").css("visibility","hidden");
            $(".x-user-main").find(".x-user-list").css("opacity","0");
            
          }); 
      });
      

    $(document).on("click","[class=dropdown-menu] li:not(.divider)",function(){
        $(".dropdown-toggle",$(this).parent().parent()).html($(this).children().text()+"<span class='caret arrow-down'></span>");
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        var value= $(this).attr("value");
        if(typeof(value)!="object"){
        }else{
          value=value.context.value;
        }
        var data_value=$(this).attr("data-value");
        if(typeof(data_value)!="undefined"){
          value=data_value;
        }
        $(this).parent().parent().find("input").first().attr("value",value);
        $(this).parent().parent().find("input").first().attr("title",($(this).children().text()));
        $(this).parent().parent().find("input").first().change();
        $(this).parent().parent().removeClass("open");
    });

    $("input",".x-search-search").keyup(function(event){
        var this_val= $.trim($(this).val());
        var isTree = $(".x-left-content").find(".x-left-tree").length>0;
        //两种左侧菜单栏
        if (isTree) {
          if(this_val!=""){
             var reg = new RegExp(this_val,"gi");
             var searchResult=$(".x-left-content").find("li").find("a").map(function(){
                return {"obj":$(this).parent(),"text":$(this).text()};
              }).get();
              $(".x-left-tree").find("li").hide();
              $(".x-left-tree").find("label").hide();
             for (var i = 0; i < searchResult.length; i++) {
                if(reg.test(searchResult[i]["text"])){
                    //向上的对应父元素也要显示
                    search_doUpShow(searchResult[i]["obj"],true);
                }
                reg.lastIndex=0;
              };
          }else{
             $(".x-left-tree-child").hide();
              $(".x-left-tree").find("li").show();
              $(".x-left-tree").find("label").show();
              $(".x-left-tree").find(".ren").attr("class","add");
          }
        }else{
          if(this_val!=""){
            var reg = new RegExp(this_val,"gi");
            var searchResult=$(".x-left-content").find("li").find("a").map(function(){
              return {"obj":$(this).parent(),"text":$(this).text()};
            }).get();
            $(".x-left-content").find("li").hide();
            for (var i = 0; i < searchResult.length; i++) {
              if(reg.test(searchResult[i]["text"])){
                searchResult[i]["obj"].show();
              }
              reg.lastIndex=0;
            };

          }else{
            $(".x-left-content").find("li").show();
          }
        }
    })
  
   $("input",".x-top-search-search").keyup(function(event){
        var this_val= $.trim($(this).val());
        var isTree = $(".x-top-result").find(".x-top-tree").length>0;
        //两种左侧菜单栏
        if (isTree) {
          if(this_val!=""){
             var reg = new RegExp(this_val,"gi");
             var searchResult=$(".x-top-result").find("li").find("a").map(function(){
                return {"obj":$(this).parent(),"text":$(this).text()};
              }).get();
              $(".x-top-tree").find("li").hide();
              $(".x-top-tree").find("label").hide();
             for (var i = 0; i < searchResult.length; i++) {
                if(reg.test(searchResult[i]["text"])){
                    //向上的对应父元素也要显示
                    search_doUpShow(searchResult[i]["obj"],true);
                }
                reg.lastIndex=0;
              };
          }else{
             $(".x-top-tree-child").hide();
              $(".x-top-tree").find("li").show();
              $(".x-top-tree").find("label").show();
              $(".x-top-tree").find(".ren").attr("class","add");
          }
        }else{
          if(this_val!=""){
            var reg = new RegExp(this_val,"gi");
            var searchResult=$(".x-top-result").find("li").find("a").map(function(){
              return {"obj":$(this).parent(),"text":$(this).text()};
            }).get();
            $(".x-top-result").find("li").hide();
            for (var i = 0; i < searchResult.length; i++) {
              if(reg.test(searchResult[i]["text"])){
                searchResult[i]["obj"].show();
              }
              reg.lastIndex=0;
            };

          }else{
            $(".x-top-result").find("li").show();
          }
        }
    })
    function search_doUpShow(node,isFirst){
      node.show();
      node.parent().show();
      if (node.prev().length>0) {
        node.prev().attr("class","ren");
        node.next().show();
        if (isFirst) {
          node.next().find("li").show();
          node.next().find("label").show();
        }
      }
      if (node.parent().parent().hasClass("x-left-tree-child")) {
        node.parent().parent().show();
        search_doUpShow(node.parent().parent().prev(),false);
      }else{
        node.parent().parent().prev().show();
      }
    }
    //树形菜单
    var trees = $(".x-left-tree");
    for (var j = 0; j < trees.length; j++) {
      var labels = trees[j].getElementsByTagName("label"); 
      for(var i=1;i<labels.length;i++){ 
        var span = document.createElement('span'); 
        span.style.cssText ='display:inline-block;*display:inline;zoom:1;width:8px;height:8px;margin-right:3px;margin-bottom:5px;cursor:pointer;'; 
        span.className="add";
        span.innerHTML = ' ' ;
        if(nextnode(labels[i].nextSibling)&&nextnode(labels[i].nextSibling).nodeName == 'UL') 
          labels[i].parentNode.insertBefore(span,labels[i]); 
        else 
          labels[i].className = 'rem' 
      } 
    }
    function nextnode(node){//寻找下一个兄弟并剔除空的文本节点 
      if(!node)return ; 
      if(node.nodeType == 1) 
        return node; 
      if(node.nextSibling) 
        return nextnode(node.nextSibling); 
    } 
    function prevnode(node){//寻找上一个兄弟并剔除空的文本节点 
      if(!node)return ; 
      if(node.nodeType == 1) 
        return node; 
      if(node.previousSibling) 
        return prevnode(node.previousSibling); 
    } 
  
  $(".x-left-tree").on('click',function(e){//绑定input点击事件，使用root根元素代理 
    e = e||window.event; 
    var target = e.target||e.srcElement; 
    var tp = nextnode(target.parentNode.nextSibling); 
    switch(target.nodeName){ 
      case 'A'://点击A标签展开和收缩树形目录

        if(tp&&tp.nodeName == 'UL'){ 
          if(tp.style.display != 'block' ){ 
            tp.style.display = 'block'; 
            prevnode(target.parentNode.previousSibling).className = 'ren' ;
            target.parentNode.parentNode.className="selected";
          }else{ 
            tp.style.display = 'none'; 
            prevnode(target.parentNode.previousSibling).className = 'add' ;
            target.parentNode.parentNode.className="";
          } 

        } 
        break; 
      case 'SPAN'://点击图标只展开或者收缩 
        var ap = nextnode(nextnode(target.nextSibling).nextSibling); 
        if(ap.style.display != 'block' ){ 
          ap.style.display = 'block'; 
          target.className = 'ren' ;
          target.parentNode.className="selected";
        }else{ 
          ap.style.display = 'none'; 
          target.className = 'add' ;
          target.parentNode.className="";
        } 
        break; 
    } 
  }); 
  

  
});
 
function selectable_with_all(ele_id, all_val){
	  var option_all_selected = true;
	  $("body").on("change",ele_id,function(){
	    var is_all = false;
	    $(ele_id + " option:selected").each(function(i , l){
	      if($(l).val() == all_val) is_all = true;
	    });

	    if($(ele_id + " option:selected").length == 1){
	      $(ele_id).trigger("liszt:updated");
	      option_all_selected = is_all;
	      return false;
	    }

	    if(option_all_selected && is_all){
	      $(ele_id +" option[value=" + all_val + "]").removeAttr('selected');
	        option_all_selected = false;
	    }else if(!option_all_selected && is_all){
	      $(ele_id + " option:selected").each(function(i, l) {
	        if ($(l).val() != all_val) { $(l).removeAttr('selected'); }
	      });
	      option_all_selected = true;
	    }
	    $(ele_id).trigger("liszt:updated");
	    $(ele_id).valid();
	  });
	}
