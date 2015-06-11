(function($) {
	'use strict';

	var selector = {
		shimujiaju: '.shimujiaju',
		category: '.shimujiaju .category',

		aomeisen: '.shimujiaju.aomeisen',
		aomeisenFactoryInfo: '.shimujiaju.aomeisen .factoryInfo',
		aomeisenProductInfo: '.shimujiaju.aomeisen .productInfo',
		aomeisenShopInfo: '.shimujiaju.aomeisen .shopInfo'
	};

	var aomeisenData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '七彩人生'
			}, {
				col1: '创办年份',
				col2: '1999年'
			}, {
				col1: '董事长姓名',
				col2: '黄锦标'
			}, {
				col1: '生产员工数量',
				col2: '1200人'
			}, {
				col1: '工厂面积',
				col2: '8万平方米'
			}]
		},		
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '七彩城堡'
			},{
				col1: '产品定位人群',
				col2: '精致生活人群'
			}, {
				col1: '产品风格类别',
				col2: '欧美'
			}, {
				col1: '生产工艺特点',
				col2: '人工高精度打磨'
			}, {
				col1: '产品所用主材',
				col2: '北美进口黄杨木、俄罗斯进口樟子松、欧洲E1级板材 新西兰辐射松木 意大利进口五金配件'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '200平方米'
			}, {
				col1: '店内装修成本',
				col2: '6万'
			}, {
				col1: '店内铺货成本',
				col2: '8万'
			},{
				col1: '店内产品摆放数量',
				col2: '10套'
			},{
				col1: '标准店总投入费用',
				col2: '20-25万'
			}]
		},
		city: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '杭州、合肥、乐从、石家庄、昆明、重庆、南昌、乌鲁木齐、大连、西安、银川、烟台'
			}]
		},
		biz: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '一、二、三线城市'
			}]
		}
	};

	var aomeisenContact = [{
		'col1': '招商热线',
		'col2': '400-0096-056'
	}, {
		'col1': '厂址：',
		'col2': '江苏常州武进区湖塘城东纺织工业杨区路15号'
	},{
		'col1': '网址：',
		'col2': '<a href="http://www.ripe-f.com" target="_blank">www.ripe-f.com</a>'
	}];

	$(document).ready(function() {
		createShimujiaju();

		if ($(selector.aomeisen).length !== 0) {
			$(selector.aomeisen).find('div.contact').append(creatContactTable(aomeisenContact));
			$(selector.aomeisenFactoryInfo).append(createInfoTable(aomeisenData.factory));
			$(selector.aomeisenProductInfo).append(createInfoTable(aomeisenData.product));
			$(selector.aomeisenShopInfo).append(createInfoTable(aomeisenData.shop));
		}
	});

	function createShimujiaju() {
		$(selector.category)
			.append($('<div class="categoryText">实木</div>'))
			.append($('<div class="categoryText">家具</div>'))
			.append($('<div>Children and Adolescents</div>'));
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
		var $table = $('<table />');
		$.each(item.table, function() {
			var $tr = $('<tr />');
			$tr.append($('<td class="infoCol1" />').html(this.col1));
			$tr.append($('<td class="infoCol2" />').html(this.col2));
			$table.append($tr);
		});

		$div.append($h4).append($table);
		return $div;
	}
})(jQuery);