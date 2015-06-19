(function($) {
	'use strict';

	var selector = {
		hongmujiaju: '.hongmujiaju',
		category: '.hongmujiaju .category',

		meiting: '.hongmujiaju.meiting',
		meitingFactoryInfo: '.hongmujiaju.meiting .factoryInfo',
		meitingProductInfo: '.hongmujiaju.meiting .productInfo',
		meitingShopInfo: '.hongmujiaju.meiting .shopInfo'
	};

	var meitingData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '深圳美廷理创投资发展有限公司'
			}, {
				col1: '创办年份',
				col2: '1999年'
			}, {
				col1: '董事长姓名	',
				col2: '黄宝财'
			}, {
				col1: '生产员工数量',
				col2: '1400人'
			}, {
				col1: '工厂面积',
				col2: '15万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '纯璞'
			}, {
				col1: '产品定位人群',
				col2: '高端人群'
			}, {
				col1: '生产工艺特点',
				col2: '手工制作'
			}, {
				col1: '产品所用主材',
				col2: '花梨木'
			}, {
				col1: '产品风格类别',
				col2: '新中式'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '300-500平方米'
			}, {
				col1: '店内装修成本',
				col2: '20万'
			}, {
				col1: '店内铺货成本',
				col2: '80万'
			}, {
				col1: '店内产品摆放套数',
				col2: '床组5套、餐厅4套、沙发5套、书房2套'
			}, {
				col1: '标准店投入费用',
				col2: '100万'
			}]
		}
	};

	var meitingContact = [{
		'col1': '联系电话',
		'col2': '13823508685'
	}, {
		'col1': '联系人',
		'col2': '郑集海'
	}, {
		'col1': '厂址',
		'col2': '深圳市龙岗区横岗镇安良安华路55号'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.szmtmj.com" target="_blank">www.szmtmj.com</a>'
	}];

	$(document).ready(function() {		
		createHongmujiaju();

		if ($(selector.meiting).length !== 0) {
			$(selector.meiting).find('div.contact').append(creatContactTable(meitingContact));
			$(selector.meitingFactoryInfo).append(createInfoTable(meitingData.factory));
			$(selector.meitingProductInfo).append(createInfoTable(meitingData.product));
			$(selector.meitingShopInfo).append(createInfoTable(meitingData.shop));
		}
	});

	function createHongmujiaju() {
		$(selector.category)
			.append($('<div class="categoryText">红木</div>'))
			.append($('<div class="categoryText">家具</div>'))
			.append($('<div>Mahogany furniture</div>'));
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

	function createInfoTable(item) {
		var $div = $('<div class="infoTableDiv" />');
		var $h4 = $('<h4 />').html(item.title);
		$div.append($h4);
		if (item.subTitle) {
			var $h5 = $('<h5 />').html(item.subTitle);
			$div.append($h5);
		}
		var $table = $('<table />');
		$.each(item.table, function() {
			var $tr = $('<tr />');
			$tr.append($('<td class="infoCol1" />').html(this.col1));
			$tr.append($('<td class="infoCol2" />').html(this.col2));
			$table.append($tr);
		});

		$div.append($table);
		return $div;
	}
})(jQuery);