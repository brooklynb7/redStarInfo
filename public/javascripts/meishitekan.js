(function($) {
	'use strict';

	var selector = {
		shimutekan: '.meishitekan',
		category: '.meishitekan .category',
		beimeizhijia: '.meishitekan.beimeizhijia',
		yonghe: '.meishitekan.yonghe',
		nanyanghushiAilun: '.meishitekan.nanyanghushi-ailun',
		xingyeYoumei: '.meishitekan.xingye-youmei',
		renhaomodika: '.meishitekan.renhaomodika'
	};

	var beimeizhijiaContact = [{
		'col1': '招商热线',
		'col2': '4008-300-969'
	}, {
		'col1': '联系人',
		'col2': '郭小武'
	}, {
		'col1': '地址',
		'col2': '广东省东莞市东城区温塘管区大玉岭路18号 铭晋家具公司'
	}];

	var yongheContact = [{
		'col1': '招商热线',
		'col2': '4008816328; 13903035510'
	}, {
		'col1': '品牌负责人',
		'col2': '周礼平'
	}, {
		'col1': '厂址',
		'col2': '广东省东莞市虎门镇路东东环一路57号（永和家具）'
	}, {
		'col1': '公司网址',
		'col2': '<a href="http://www.hetthi.com.cn" target="_blank">www.hetthi.com.cn</a>'
	},{
		'col1': '展位标注',
		'col2': '国际名家具（东莞）展 3 号馆 3E13.'
	}];

	var nanyanghushiAilunContact = [{
		'col1': '招商热线',
		'col2': '0755-36699901'
	}, {
		'col1': '联系人',
		'col2': '营销总监 唐生'
	}, {
		'col1': '厂址',
		'col2': '天津市北辰区双口镇医药医疗器械工业园南洋胡氏维之蓝家具制造有限公司'
	}, {
		'col1': '公司网址',
		'col2': '<a href="http://www.chinanyhs.com" target="_blank">www.chinanyhs.com</a>'
	}];

	var xingyeYoumeiContact = [{
		'col1': '招商热线',
		'col2': '022-26951656'
	}, {
		'col1': '联系人',
		'col2': '吕湘'
	}, {
		'col1': '厂址',
		'col2': '天津市北辰区青光工业区'
	}, {
		'col1': '公司网址',
		'col2': '<a href="http://www.xyjj.com.cn" target="_blank">www.xyjj.com.cn</a>'
	},{
		'col1': '展位标注',
		'col2': '深圳展 9A04'
	}];

	var renhaomodikaContact = [{
		'col1': '招商热线',
		'col2': '400-029-1999'
	}, {
		'col1': '联系电话',
		'col2': '0755-84898688'
	}, {
		'col1': '厂址',
		'col2': '深圳市龙岗街道办同乐居委会水流田工业区'
	}, {
		'col1': '公司网址',
		'col2': '<a href="http://www.modika.net.cn" target="_blank">www.modika.net.cn</a>'
	}];

	$(document).ready(function() {	
		createMeishitekan();
		$(selector.beimeizhijia).find('div.contact').append(creatContactTable(beimeizhijiaContact));
		$(selector.yonghe).find('div.contact').append(creatContactTable(yongheContact));
		$(selector.nanyanghushiAilun).find('div.contact').append(creatContactTable(nanyanghushiAilunContact));
		$(selector.xingyeYoumei).find('div.contact').append(creatContactTable(xingyeYoumeiContact));
		$(selector.renhaomodika).find('div.contact').append(creatContactTable(renhaomodikaContact));
	});

	function createMeishitekan() {
		$(selector.category)
			.append($('<div class="categoryText">新美式</div>'))
			.append($('<div class="categoryText">特刊</div>'))
			.append($('<div>New American Style</div>'));
	}

	function creatContactTable(contacts) {
		var $table = $('<table />');
		$.each(contacts, function() {
			var $tr = $('<tr />');
			$tr.append($('<td class="contactCol1" />').html(this.col1));
			$tr.append($('<td class="contactCol2" />').html(this.col2));
			$table.append($tr);
		});

		return $table;
	};
})(jQuery);