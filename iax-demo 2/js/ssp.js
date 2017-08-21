var SSP= 
{	
	//全局loading
	loading: function (type)
	{
		if (!$('#ssp-loading').length)
		{
			$('#ssp-ajax-box').append(SSP_TEMPLATE.loadingBox);
		}

		if (type == 'show')
		{
			if ($('#ssp-loading').css('display') == 'block')
			{
				return false;
			}

			$('#ssp-loading').fadeIn();

			SSP.G.loading_timer = setInterval(function ()
			{
				SSP.G.loading_bg_count -= 1;

				$('#ssp-loading-box').css('background-position', '0px ' + SSP.G.loading_bg_count * 40 + 'px');

				if (SSP.G.loading_bg_count == 1)
				{
					SSP.G.loading_bg_count = 12;
				}
			}, 100);
		}
		else
		{
			$('#ssp-loading').fadeOut();

			clearInterval(SSP.G.loading_timer);
		}
	},
	// 警告弹窗 SSP.alert({message:"确认删除吗？",title:"确认框",fn:"alert(1)",close:"关闭",confirm:"确定"})
	alert: function (paramsJson)
	{
		if(!paramsJson) return false;
		if ($('.alert-box').length)
		{
			$('.alert-box').modal('hide');
			$('.alert-box').remove();
		}
		
		$('body').append(Hogan.compile(SSP_TEMPLATE.alertBox).render(
			paramsJson
		));

		$(".alert-box").modal('show');
	},
	// 余额修改弹窗 SSP.adjust({message:"确认删除吗？",title:"确认框",fn:"alert(1)",close:"关闭",confirm:"确定"})
	adjust: function (paramsJson)
	{
		if(!paramsJson) return false;
		if ($('.adjust-box').length)
		{
			$('.adjust-box').modal('hide');
			$('.adjust-box').remove();
		}
		
		$('body').append(Hogan.compile(SSP_TEMPLATE.adjustBox).render(
			paramsJson
		));

		$(".adjust-box").modal('show');
	},
	//表单消息
	notification: function(text,type,delay)
	{
		if($('.notification-box').length){
			$('.notification-box').remove();
		}
		delay = delay || 15000; 
		type = type || "info";
		$('body').append(Hogan.compile(SSP_TEMPLATE.notificationBox).render(
		{
			message: text,
			type:type
		}));
		
		if (SSP.G.notification_timer) {
	        clearTimeout(SSP.G.notification_timer);
	    }
		SSP.G.notification_timer = setTimeout(function() { 
	        $(".notification-box").fadeOut();
	        $('.notification-box').remove();
	    }, delay);
		
	},
	//伪造提交表单提交
	asFormSubmit:function(url,params,method){
		if(!url) return false;
		if(!method) method="post";
		var id = "asForm"+new Date().getTime();
		$('body').append(Hogan.compile(SSP_TEMPLATE.submitForm).render(
		{	
			id:id,
			url: url,
			params:params,
			method:method
		}));
		$("#"+id).submit();
	},
	ajax_post: function(formEl, processer, type) // 表单对象，用 jQuery 获取，回调函数名
	{

		if (typeof (processer) != 'function')
		{
			var processer = SSP.ajax_processer;

			SSP.loading('show');
		}

		if (!type)
		{
			var type = 'default';
		}

		var custom_data = {
			_post_type: 'ajax'
		};

		formEl.ajaxSubmit(
		{
			dataType: 'json',
			data: custom_data,
			success: function (result)
			{
				processer(type, result);
			},
			error: function (error)
			{
				console.log(error);
				if ($.trim(error.responseText) != '')
				{
					SSP.loading('hide');

					alert(_t('发生错误, 返回的信息:') + ' ' + error.responseText);
				}
				else if (error.status == 0)
				{
					SSP.loading('hide');

					alert(_t('网络链接异常'));
				}
				else if (error.status == 500)
				{
					SSP.loading('hide');

					alert(_t('内部服务器错误'));
				}
			}
		});
	},

	// ajax提交callback
	ajax_processer: function (type, result)
	{
		SSP.loading('hide');

		switch (type)
		{
			case 'default':
				SSP.alert(result.err);
				$('.btn-success').removeClass('disabled');
				break;

			case 'ajax_post_alert':
			case 'ajax_post_modal':
			case 'error_message':
				if (!$('.error_message').length)
				{
					SSP.alert(result.err);
				}
				else if ($('.error_message em').length)
				{
					$('.error_message em').html(result.err);
				}
				else
				{
					 $('.error_message').html(result.err);
				}

				if ($('.error_message').css('display') != 'none')
				{
					SSP.shake($('.error_message'));
				}
				else
				{
					$('.error_message').fadeIn();
				}
				break;
		}
	},
	shake: function(selector)
	{
		var length = 6;
		selector.css('position', 'relative');
		for (var i = 1; i <= length; i++)
		{
			if (i % 2 == 0)
			{
				if (i == length)
				{
					selector.animate({ 'left': 0 }, 50);
				}
				else
				{
					selector.animate({ 'left': 10 }, 50);
				}
			}
			else
			{
				selector.animate({ 'left': -10 }, 50);
			}
		}
	},
	//数字格式化
	formatNum:function(str,len){
		var newStr = "";
		var count = 0;
		len || (len=2);
		var zero = "";
		for(var j =0 ;j<len;j++){
			zero += "0";
		}
		if(str.indexOf(".")==-1){
		   for(var i=str.length-1;i>=0;i--){
			 if(count % 3 == 0 && count != 0){
			   newStr = str.charAt(i) + "," + newStr;
			 }else{
			   newStr = str.charAt(i) + newStr;
			 }
			 count++;
		   }
		   str = newStr + "."+zero; //自动补小数点后len位
		}
		else
		{
		   for(var i = str.indexOf(".")-1;i>=0;i--){
			 if(count % 3 == 0 && count != 0){
			   newStr = str.charAt(i) + "," + newStr;
			 }else{
			   newStr = str.charAt(i) + newStr; //逐个字符相接起来
			 }
			 count++;
		   }
		   str = newStr + (str + zero).substr((str + zero).indexOf("."),len+1);
		 }
		return str;
	}
	
}
//全局变量
SSP.G={
		loading_bg_count:12,
		loading_timer: '',
		notification_timer:''
}

function _t(string, replace)
{
	if (typeof (ssp_lang) != 'undefined')
	{
		if (typeof (ssp_lang[string]) != 'undefined')
		{
			string = ssp_lang[string];
		}
	}

	if (replace)
	{
		string = string.replace('%s', replace);
	}

	return string;
};