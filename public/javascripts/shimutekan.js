(function($) {
	'use strict';

	var selector = {
		shimutekan: '.shimutekan',
		category: '.shimutekan .category',
		huifeng: '.shimutekan.huifeng',
		xingye: '.shimutekan.xingye',
		huarijiaju: '.shimutekan.huarijiaju',
		liangmu: '.shimutekan.liangmu',
		nanyanghushi: '.shimutekan.nanyanghushi'
	};

	var huifengContact = [{
		'col1': '招商热线',
		'col2': '4000169966'
	},{
		'col1': '联系人',
		'col2': '南区(马总):18931593150'
	},{
		'col1': '',
		'col2': '北区(成总):18931593168'
	},{
		'col1': '厂址',
		'col2': '唐山市丰润区沙流河镇汇丰实业集团'
	},{
		'col1': '公司网址',
		'col2': '<a href="http://www.hugefund.com.cn" target="_blank">www.hugefund.com.cn</a>'
	}];

	var xingyeContact = [{
		'col1': '招商热线',
		'col2': '022-26951656'
	},{
		'col1': '联系人',
		'col2': '吕湘'
	},{
		'col1': '厂址',
		'col2': '天津市北辰区青光工业区'
	},{
		'col1': '公司网址',
		'col2': '<a href="http://www.xyjj.com.cn" target="_blank">www.xyjj.com.cn</a>'
	},{
		'co1':'展位标注',
		'col2':'深圳展 9A04'
	}];

	var huarijiajuContact = [{
		'col1': '招商热线',
		'col2': '13933942999、0316-6073868'
	},{
		'col1': '联系人',
		'col2': '姜明辉'
	},{
		'col1': '厂址',
		'col2': '河北省廊坊市经济技术开发区 华日工业园'
	},{
		'col1': '公司网址',
		'col2': '<a href="http://www.myhuari.com.cn" target="_blank">www.myhuari.com.cn</a>'
	},{
		'co1':'展位标注',
		'col2':'3馆B22展位'
	}];

	var liangmuContact = [{
		'col1': '招商热线',
		'col2': '0532-87717567'
	},{
		'col1': '联系人',
		'col2': '李佰华经理'
	},{
		'col1': '厂址',
		'col2': '山东省青岛市城阳区南流路288号（青岛流亭国际机场附近）'
	},{
		'col1': '公司网址',
		'col2': '<a href="http://www.liangmu.com" target="_blank">www.liangmu.com</a>'
	}];

	var nanyanghushiContact = [{
		'col1': '杜洪涛',
		'col2': '东部总监 18920686820'
	},{
		'col1': '沈宗威',
		'col2': '中南部总监 18923804344'
	},{
		'col1': '刘襄兆',
		'col2': '西部总监 13922151029'
	},{
		'col1': '符益平',
		'col2': '北部总监 13808856201'
	},{
		'col1': '厂址',
		'col2': '天津市北辰区双口镇医药医疗器械工业园南洋胡氏维之蓝家具有限公司'
	},{
		'col1': '公司网址',
		'col2': '<a href="http://www.chinanyhs.com" target="_blank">www.chinanyhs.com</a>'
	}];

	$(document).ready(function() {		
		createShimutekan();
		$(selector.huifeng).find('div.contact').append(creatContactTable(huifengContact));
		$(selector.xingye).find('div.contact').append(creatContactTable(xingyeContact));
		$(selector.huarijiaju).find('div.contact').append(creatContactTable(huarijiajuContact));
		$(selector.liangmu).find('div.contact').append(creatContactTable(liangmuContact));
		$(selector.nanyanghushi).find('div.contact').append(creatContactTable(nanyanghushiContact));
	});

	function createShimutekan(){
		$(selector.category)
			.append($('<div class="categoryText">实木</div>'))
			.append($('<div class="categoryText">特刊</div>'))
			.append($('<div>Solid Wood Style</div>'));
	}

	function creatContactTable(contacts){
		var $table = $('<table />');
		$.each(contacts, function(){
			var $tr = $('<tr />');
			$tr.append($('<td class="contactCol1" />').html(this.col1));
			$tr.append($('<td class="contactCol2" />').html(this.col2));
			$table.append($tr);
		});

		return $table;
	};
})(jQuery);