var SSP_TEMPLATE = {
	'loadingBox':
		'<div id="ssp-loading" class="hide">'+
			'<div id="ssp-loading-box"></div>'+
		'</div>',
	'alertBox' :
		'<div class="modal fade alert-box ssp-tips-box">'+
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
				
					'<div class="modal-header">'+
						'<a type="button" class="close icon icon-delete" data-dismiss="modal" aria-hidden="true"></a>'+
						'<h3 class="modal-title" id="myModalLabel">{{title}}</h3>'+
					'</div>'+
				
					'<div class="modal-body">'+
						'<p>{{message}}</p>'+
						'{{#messageList}}' +
						'<p>{{.}}</p>'+
						'{{/messageList}}' +
					'</div>'+
					'<div class="modal-footer">'+
				        '<button type="button" class="btn btn-default" data-dismiss="modal">{{close}}</button>'+
				        '<button type="button" class="btn btn-success" onclick="{{fn}}">{{confirm}}</button>'+
				    '</div>'+
				'</div>'+
			'</div>'+
		'</div>',
	'adjustBox' :
		'<div class="modal fade adjust-box ssp-tips-box">'+
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
				
					'<div class="modal-header">'+
						'<a type="button" class="close icon icon-delete" data-dismiss="modal" aria-hidden="true"></a>'+
						'<h3 class="modal-title" id="myModalLabel">{{title}}</h3>'+
					'</div>'+
				
					'<div class="modal-body">'+
						'<div class="edit-container">'+
							'<form class="form-horizontal" id="modifyForm" action="{{action}}" ref="adjust" method="post">'+
								'{{#id}}' +
									'<input name="id" value="{{id}}" type="hidden">'+
								'{{/id}}' +
								
								'{{#params}}' +
								'{{#input}}' +
								'<div class="control-group">'+
									'<label class="control-label" style="width:120px;">{{label}}</label>'+
									'<div class="controls" style="margin-left:120px;">'+
										'<div class="clearfix">'+
											'<input type="text" value="" name="{{name}}">'+
										'</div>'+
										'<div class="error-message hide">'+
							            	'<span class="glyphicon glyphicon-alert"></span>'+
							            	'<div class="clearfix"></div>'+
							            '</div>'+
									'</div>'+
								'</div>'+
								'{{/input}}'+
								'{{#amountInput}}' +
								'<div class="control-group">'+
									'<label class="control-label" style="width:120px;">{{label}}</label>'+
									'<div class="controls" style="margin-left:120px;">'+
										'<div class="clearfix">'+
											'<div class="input-append">'+
												'<input type="text" value="" style="width:313px;" class="align_right numeric valid" name="{{name}}">'+
												'<span class="add-on">{{append}}</span>'+
											'</div>'+
										'</div>'+
										'<div class="error-message hide">'+
							            	'<span class="glyphicon glyphicon-alert"></span>'+
							            	'<div class="clearfix"></div>'+
							            '</div>'+
									'</div>'+
								'</div>'+
								'{{/amountInput}}'+
								'{{#select}}' +
								'<div class="control-group">'+
									'<label class="control-label" style="width:120px;">{{label}}</label>'+
									'<div class="controls" style="margin-left:120px;">'+
										'<div class="dropdown">'+
											'<input name="{{name}}" type="hidden" value="" title="">'+
										  '<button class="btn  dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{{default}}<span class="caret arrow-down"></span></button>'+
										  '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
										  		'{{#lis}}'+
										    		'<li data-value="{{dvalue}}"><a href="javascript:;">{{title}}</a></li>'+
									    		'{{/lis}}'+
										  '</ul>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'{{/select}}'+
								'{{#textarea}}' +
								'<div class="control-group">'+
									'<label class="control-label" style="width:120px;">{{label}}</label>'+
									'<div class="controls" style="margin-left:120px;">'+
										'<div class="clearfix">'+
											'<textarea class="input-xlarge span4" style="width:360px!important;height:90px!important;" rows"5" cols="20" value="" name="{{name}}"></textarea>'+
										'</div>'+
										'<div class="error-message hide">'+
							            	'<span class="glyphicon glyphicon-alert"></span>'+
							            	'<div class="clearfix"></div>'+
							            '</div>'+
									'</div>'+
								'</div>'+
								'{{/textarea}}'+
								'{{/params}}' +
								
							'</form>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
				        '<button type="button" class="btn btn-default" data-dismiss="modal">{{close}}</button>'+
				        '<button type="button" class="btn btn-success" onclick="{{fn}}">{{confirm}}</button>'+
				    '</div>'+
				'</div>'+
			'</div>'+
		'</div>',
	'notificationBox' :
		'<div id="notifications" onclick="$(this).remove()" class="notification-box message-{{type}}">'+
			'<div class="notification-bar-container">'+
			    '<div class="notification-bar">'+
			        '<div class="notification-bar-contents">'+
			            '<div class="notification-msg heading1">{{{message}}}</div>'+
			        '</div>'+
			    '</div>'+
			'</div>'+
		'</div>',
	'submitForm' :
		'<div class="hide">'+
			'<form method="{{method}}" action="{{url}}" id="{{id}}">'+
				'{{#params}}' +
				'<input type="hidden" name="{{name}}" value="{{value}}" />'+
				'{{/params}}' +
			'</form>'+
		'</div>',
	'adTag':
		'<script type="text/javascript">\r'+
			'pubid={{cid}};\r'+
			'unitid={{uid}};\r'+
			'w={{width}};\r'+
			'h={{height}};\r'+
		'</script>\r'+
		'<script language="javascript" src="{{url}}" ></script>',
	'seatExpand':
		'<div class="controls expand-div">'+
		  '<input type="hidden" name="id" value="{{id}}" />'+
		  '<div class="clearfix">'+
		  	  '<div class="label-input" style="padding-top: 5px; margin-top: 0px; line-height: 18px;">'+
		        '{{seatNameTitle}}'+
		      '</div>'+
		  '</div>'+
		  '<div class="modifylabel" style="position:relative">'+
		  	'<input type="text" name="seatName" value="{{seatName}}" style="width:339px;"/>'+
		  	'<div class="error-message hide" style="left:430px;">'+
			    '<span class="glyphicon glyphicon-alert"></span>'+
			    '<div class="clearfix"></div>'+
			  '</div>'+
		  '</div>'+
		  '<div class="clearfix">'+
		  	  '<div class="label-input" style="padding-top: 5px; margin-top: 0px; line-height: 18px;">'+
		        '{{seatIdTitle}}'+
		      '</div>'+
		  '</div>'+
		  '<div class="modifylabel" style="position:relative">'+
		  	'<input type="text" name="seatId" value="{{seatId}}" style="width:339px;"/>'+
		  	'<div class="error-message hide" style="left:430px;">'+
			    '<span class="glyphicon glyphicon-alert"></span>'+
			    '<div class="clearfix"></div>'+
			  '</div>'+
		  '</div>'+
		  '<a href="javascript:void(0);" onclick="cloneSeat(this)" style="position: absolute;bottom: -9px;right: -9px;height:18px;"><span class="expand-ico glyphicon glyphicon-plus-sign"></span></a>'+
		  '<a href="javascript:void(0);" onclick="delSeat(this)" style="position: absolute;top: -9px;right: -9px;height:18px;"><span class="expand-ico glyphicon glyphicon-minus-sign"></span></a>'+
		'</div>',
	'allowedExpand':
		'<div class="controls expand-div" id="expandDiv-{{contentId}}">'+
		  '<div class="clearfix">'+
		  	  '<div class="label-input" style="padding-top: 5px; margin-top: 0px; line-height: 18px;">'+
		        '{{buyerTitle}}'+
		      '</div>'+
		  '</div>'+
		  '<div class="modifylabel" style="position:relative">'+
			 '<select class="select" id="buyers" multiple name="buyers" disname="chosen下拉" style="width: 360px">'+
			 	'{{#buyerList}}'+
		          '<option value="{{id}}">{{name}}</option>'+
		        '{{/buyerList}}'+
		     '</select>'+
		     '<div class="error-message hide" style="left:430px;">'+
			    '<span class="glyphicon glyphicon-alert"></span>'+
			    '<div class="clearfix"></div>'+
			  '</div>'+
		  '</div>'+
		  '<div class="infolabel hide" style="width:340px;">{{buyers}}</div>'+
		  '<div class="clearfix">'+
		  	  '<div class="label-input" style="padding-top: 5px; margin-top: 0px; line-height: 18px;">'+
		        '{{priceTitle}}'+
		      '</div>'+
		  '</div>'+
		  '<div class="input-append selection-unit"  style="position:relative">'+
	        '<input type="text" value="{{decimalPrice}}" style="width: 269px;" class="align_right numeric modifylabel" name="decimalPrice">'+
	        '<div class="dropdown" style="width:360px;">'+
	          '<input name="rateId" type="hidden" value="1" title="{{defaultRate}}">'+
	          '<button class="btn modifylabel dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+
	            '{{defaultRate}}'+
	            '<span class="caret arrow-down"></span>'+
	          '</button>'+
	          '<ul class="dropdown-menu" id="rateul" aria-labelledby="dropdownMenu1" style="left:289px!important">'+
	          	'{{#rateList}}'+
	               '<li data-value="{{id}}"><a href="javascript:;">{{code}}</a></li>'+
	            '{{/rateList}}'+
	          '</ul>'+
	        '</div>'+
	        '<div class="clearfix infolabel hide" style="width: 267px; float: left; text-align: right">{{decimalPrice}}</div>'+
	        '<span class="add-on infolabel hide" style="width: 50px;"> {{code}} </span>'+
	        '<div class="error-message hide" style="left:430px;">'+
			    '<span class="glyphicon glyphicon-alert"></span>'+
			    '<div class="clearfix"></div>'+
			  '</div>'+
	      '</div>'+
		  '<a href="javascript:void(0);" onclick="delAllowed(this)" style="position: absolute;top: -9px;right: -9px;height:18px;"><span class="expand-ico glyphicon glyphicon-minus-sign"></span></a>'+
		'</div>'
		
}
