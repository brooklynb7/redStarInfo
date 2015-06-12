(function($) {
	'use strict';

	var selector = {
		xinmeishi: '.xinmeishi',
		category: '.xinmeishi .category',

		laishi: '.xinmeishi.laishi',
		laishiFactoryInfo: '.xinmeishi.laishi .factoryInfo',
		laishiProductInfo: '.xinmeishi.laishi .productInfo',
		laishiShopInfo: '.xinmeishi.laishi .shopInfo',

		youshengmeidi: '.xinmeishi.youshengmeidi',
		youshengmeidiFactoryInfo: '.xinmeishi.youshengmeidi .factoryInfo',
		youshengmeidiProductInfo: '.xinmeishi.youshengmeidi .productInfo',
		youshengmeidiShopInfo: '.xinmeishi.youshengmeidi .shopInfo'
	};

	var laishiData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '山东欧克家具有限公司'
			}, {
				col1: '创办年份',
				col2: '1999年'
			}, {
				col1: '董事长姓名	',
				col2: '赖鹏程'
			}, {
				col1: '生产员工数量',
				col2: '1500人'
			}, {
				col1: '工厂面积',
				col2: '15万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '北美壹号'
			}, {
				col1: '建议零售价区间',
				col2: '2.5-3万'
			}, {
				col1: '产品定位人群',
				col2: '80、90人群'
			}, {
				col1: '产品风格类别',
				col2: '新美式家具'
			}, {
				col1: '生产工艺特点',
				col2: '八遍油漆、八遍打磨'
			}, {
				col1: '产品所用主材',
				col2: '白蜡木'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '240-300平方米'
			}, {
				col1: '店内装修成本',
				col2: '20万'
			}, {
				col1: '店内铺货成本',
				col2: '25万'
			}, {
				col1: '店内饰品投入费用',
				col2: '10万'
			}, {
				col1: '店内产品摆放数量',
				col2: '4套客厅、4套餐厅、4套卧房、2套书房'
			}, {
				col1: '标准店总投入费用',
				col2: '55万'
			}]
		}
	};

	var youshengmeidiData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '深圳市永佳家具制品有限公司'
			}, {
				col1: '创办年份',
				col2: '1989年'
			}, {
				col1: '工厂员工数量',
				col2: '1000人'
			}, {
				col1: '工厂面积',
				col2: '10万平方米'
			},{
				col1: '广告投入费用',
				col2: '500万'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '优胜美地'
			}, {
				col1: '建议零售价区间',
				col2: '2.5-3万'
			}, {
				col1: '产品定位人群',
				col2: '中高端成功人士'
			}, {
				col1: '产品风格类别',
				col2: '现代美式'
			}, {
				col1: '生产工艺特点',
				col2: '百分百全实木'
			}, {
				col1: '',
				col2: '自然主义设计灵感'
			}, {
				col1: '',
				col2: '经典仿古涂装'
			}, {
				col1: '',
				col2: '现代美式多元情景展示'
			}, {
				col1: '',
				col2: '多色混搭通配'
			}, {
				col1: '产品所用主材',
				col2: '桃花芯'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '280平方米'
			}, {
				col1: '店内装修成本',
				col2: '20万'
			}, {
				col1: '店内铺货成本',
				col2: '40万'
			}, {
				col1: '店内饰品投入费用',
				col2: '20万'
			}, {
				col1: '店内产品摆放数量',
				col2: '沙发5套 床组5套 餐厅2套 书房2套'
			}, {
				col1: '标准店总投入费用',
				col2: '80万'
			}]
		}
	};

	var laishiContact = [{
		'col1': '招商热线',
		'col2': '0531-67602997'
	}, {
		'col1': '厂址',
		'col2': '山东省济南市济阳县济北经济开发区赖式家具工业园'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.laishi.com.cn" target="_blank">www.laishi.com.cn</a>'
	}, {
		'col1': '参展展位：',
		'col2': '2C11'
	}];

	var youshengmeidiContact = [{
		'col1': '招商热线',
		'col2': '13824332831'
	}, {
		col1: '联系人',
		col2: '黄耀辉'
	},{
		'col1': '厂址',
		'col2': '深圳龙岗同乐社区新布工业区'
	}, {
		'col1': '展位标注',
		'col2': '深圳国际会展中心1号馆12展位'
	}, {
		'col1': '',
		'col2': '（2015年3月深圳展1B12展位）'
	}];

	$(document).ready(function() {
		createXinmeishi();

		if ($(selector.laishi).length !== 0) {
			$(selector.laishi).find('div.contact').append(creatContactTable(laishiContact));
			$(selector.laishiFactoryInfo).append(createInfoTable(laishiData.factory));
			$(selector.laishiProductInfo).append(createInfoTable(laishiData.product));
			$(selector.laishiShopInfo).append(createInfoTable(laishiData.shop));
		}

		if ($(selector.youshengmeidi).length !== 0) {
			$(selector.youshengmeidi).find('div.contact').append(creatContactTable(youshengmeidiContact));
			$(selector.youshengmeidiFactoryInfo).append(createInfoTable(youshengmeidiData.factory));
			$(selector.youshengmeidiProductInfo).append(createInfoTable(youshengmeidiData.product));
			$(selector.youshengmeidiShopInfo).append(createInfoTable(youshengmeidiData.shop));
		}
	});

	function createXinmeishi() {
		$(selector.category)
			.append($('<div class="categoryText">新美式</div>'))
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