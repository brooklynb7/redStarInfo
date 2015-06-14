(function($) {
	'use strict';

	var selector = {
		jingpintuijian: '.jingpintuijian',
		category: '.jingpintuijian .category',

		shuda: '.jingpintuijian.shuda',
		shudaFactoryInfo: '.jingpintuijian.shuda .factoryInfo',
		shuda1ProductInfo: '.jingpintuijian.shuda1 .productInfo',
		shuda1ShopInfo: '.jingpintuijian.shuda1 .shopInfo',
		shuda1CityInfo: '.jingpintuijian.shuda1 .cityInfo',
		shuda1BizInfo: '.jingpintuijian.shuda1 .bizInfo',

		shuda2ProductInfo: '.jingpintuijian.shuda2 .productInfo',
		shuda2ShopInfo: '.jingpintuijian.shuda2 .shopInfo',
		shuda2CityInfo: '.jingpintuijian.shuda2 .cityInfo',
		shuda2BizInfo: '.jingpintuijian.shuda2 .bizInfo',

		shuda3ProductInfo: '.jingpintuijian.shuda3 .productInfo',
		shuda3ShopInfo: '.jingpintuijian.shuda3 .shopInfo',
		shuda3CityInfo: '.jingpintuijian.shuda3 .cityInfo',
		shuda3BizInfo: '.jingpintuijian.shuda3 .bizInfo',

		shuda4ProductInfo: '.jingpintuijian.shuda4 .productInfo',
		shuda4ShopInfo: '.jingpintuijian.shuda4 .shopInfo',
		shuda4CityInfo: '.jingpintuijian.shuda4 .cityInfo',
		shuda4BizInfo: '.jingpintuijian.shuda4 .bizInfo',

		aomei: '.jingpintuijian.aomei',
		aomeiFactoryInfo: '.jingpintuijian.aomei .factoryInfo',
		aomeiProductInfo: '.jingpintuijian.aomei .productInfo',
		aomeiShopInfo: '.jingpintuijian.aomei .shopInfo',

		bosen: '.jingpintuijian.bosen',
		bosenFactoryInfo: '.jingpintuijian.bosen .factoryInfo',
		bosenProductInfo: '.jingpintuijian.bosen .productInfo',
		bosenShopInfo: '.jingpintuijian.bosen .shopInfo'
	};

	var shudaData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '舒达家居用品'
			}, {
				col1: '创办年份',
				col2: '1931年'
			}, {
				col1: '董事长姓名	',
				col2: 'Robert Malin'
			}, {
				col1: '生产员工数量',
				col2: '20000人'
			}, {
				col1: '工厂面积',
				col2: '210万平方米'
			}]
		},
		product1: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: 'Serta Home'
			}, {
				col1: '建议零售价	',
				col2: '1-10万'
			}, {
				col1: '产品定位人群',
				col2: '都市精英'
			}, {
				col1: '生产工艺特点',
				col2: '舒达专利妙而扣弹簧支撑系统,舒达专利舒柔绗缝层等'
			}, {
				col1: '产品风格类别',
				col2: '美式风格'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop1: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '100-150平方米'
			}, {
				col1: '店内装修成本',
				col2: '10万'
			}, {
				col1: '店内铺货成本',
				col2: '10-12万'
			}, {
				col1: '店内饰品投入',
				col2: '15-20万'
			}, {
				col1: '店内产品摆放套数',
				col2: '8'
			}, {
				col1: '标准店投入费用',
				col2: '38-43万'
			}]
		},
		city1: {
			title: '已开店城市',
			table: [{
				col1: '',
				col2: '深圳、长沙、郑州'
			}]
		},
		biz1: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '全国'
			}]
		},
		product2: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '完美系列'
			}, {
				col1: '建议零售价	',
				col2: '5000-40000'
			}, {
				col1: '产品定位人群',
				col2: '商务精英、成功人士'
			}, {
				col1: '生产工艺特点',
				col2: '舒达专利妙而扣弹簧支撑系统,舒达专利舒柔绗缝层等'
			}, {
				col1: '产品风格类别',
				col2: '美式风格'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop2: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '200-300平方米'
			}, {
				col1: '店内装修成本',
				col2: '10万'
			}, {
				col1: '店内铺货成本',
				col2: '10-12万'
			}, {
				col1: '店内饰品投入',
				col2: '15-20万'
			}, {
				col1: '店内产品摆放套数',
				col2: '5'
			}, {
				col1: '标准店投入费用',
				col2: '30-35万'
			}]
		},
		city2: {
			title: '已开店城市',
			table: [{
				col1: '',
				col2: '北京、上海、广州、深圳、成都、天津、重庆等一百多个城市'
			}]
		},
		biz2: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '三四线城市'
			}]
		},
		product3: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: 'Serta Junior'
			}, {
				col1: '建议零售价	',
				col2: '3000-12000'
			}, {
				col1: '产品定位人群',
				col2: '青少年'
			}, {
				col1: '生产工艺特点',
				col2: '舒达专利妙而扣弹簧支撑系统,舒达专利舒柔绗缝层等'
			}, {
				col1: '产品风格类别',
				col2: '美式风格'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop3: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '80-150平方米'
			}, {
				col1: '店内装修成本',
				col2: '8万'
			}, {
				col1: '店内铺货成本',
				col2: '10-12万'
			}, {
				col1: '店内饰品投入',
				col2: '10-15万'
			}, {
				col1: '店内产品摆放套数',
				col2: '7'
			}, {
				col1: '标准店投入费用',
				col2: '25-30万'
			}]
		},
		city3: {
			title: '已开店城市',
			table: [{
				col1: '',
				col2: '北京、上海、广州、深圳、广州、厦门等城市'
			}]
		},
		biz3: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '全国'
			}]
		},
		product4: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: 'Perfect Sleeper、iSeries、iComfort'
			}, {
				col1: '建议零售价	',
				col2: '2-18万'
			}, {
				col1: '产品定位人群',
				col2: '社会上层人士'
			}, {
				col1: '生产工艺特点',
				col2: 'CoolAction凝胶记忆棉'
			},{
				col1: '生产工艺特点',
				col2: 'Duet Coil杜尔袋装弹簧'
			}, {
				col1: '生产工艺特点',
				col2: '支撑系统等多项舒尔专利'
			}, {
				col1: '产品风格类别',
				col2: '美式风格'
			}, {
				col1: '产品出厂城市',
				col2: '芝加哥、温哥华'
			}]
		},
		shop4: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '150-200平方米'
			}, {
				col1: '店内装修成本',
				col2: '20万'
			}, {
				col1: '店内铺货成本',
				col2: '10-12万'
			}, {
				col1: '店内饰品投入',
				col2: '10-15万'
			}, {
				col1: '店内产品摆放套数',
				col2: '10'
			}, {
				col1: '标准店投入费用',
				col2: '38-43万'
			}]
		},
		city4: {
			title: '已开店城市',
			table: [{
				col1: '',
				col2: '北京、上海、广州、深圳、天津、重庆、杭州、南京、西安等城市'
			}]
		},
		biz4: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '全国'
			}]
		}
	};

	var aomeiData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '澳美世家'
			}, {
				col1: '创办年份',
				col2: '2003年'
			}, {
				col1: '董事长姓名	',
				col2: 'David Niu'
			}, {
				col1: '生产员工数量',
				col2: '1000人'
			}, {
				col1: '工厂面积',
				col2: '8万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '澳美.博纳'
			}, {
				col1: '建议零售价	',
				col2: '1-10万'
			}, {
				col1: '产品所用材料',
				col2: '实木、真皮、仿古镜'
			}, {
				col1: '生产工艺特点',
				col2: '现代美式家居'
			}, {
				col1: '产品风格类别',
				col2: '现代美式家居'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '250-300平方米'
			}, {
				col1: '店内装修成本',
				col2: '10-12万'
			}, {
				col1: '店内铺货成本',
				col2: '20-25万'
			}, {
				col1: '店内饰品投入',
				col2: '4-6万'
			}, {
				col1: '装修辅材投入费用',
				col2: '8-10万'
			}, {
				col1: '店内产品摆放套数',
				col2: '8-10套'
			}, {
				col1: '标准店投入费用',
				col2: '42-53万'
			}]
		}
	};

	var bosenData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '深圳市柏森家居用品有限公司'
			}, {
				col1: '创办年份',
				col2: '2005年'
			}, {
				col1: '董事长姓名	',
				col2: '黄志辉'
			}, {
				col1: '生产员工数量',
				col2: '2600人'
			}, {
				col1: '工厂面积',
				col2: '20万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '汎美国际（费城1776）'
			}, {
				col1: '产品定位人群	',
				col2: '30-60岁有品位的成功人士'
			}, {
				col1: '产品所用材料',
				col2: '核糖木'
			}, {
				col1: '生产工艺特点',
				col2: '榫卯结构'
			}, {
				col1: '产品风格类别',
				col2: '现代美式'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '300平方米'
			}, {
				col1: '店内装修成本',
				col2: '15-20万'
			}, {
				col1: '店内铺货成本',
				col2: '35-45万'
			}, {
				col1: '店内饰品投入',
				col2: '4-6万'
			}, {
				col1: '店内饰品投入费用',
				col2: '10万'
			}, {
				col1: '店内产品摆放套数',
				col2: '客厅4 套、卧房5-6套、餐厅4、书法三套'
			}, {
				col1: '标准店投入费用',
				col2: '60-80万'
			}]
		}
	};

	var shudaContact = [{
		'col1': '项目总监：',
		'col2': ''
	}, {
		'col1': '青少年系列：',
		'col2': '王大全 18922885669'
	}, {
		'col1': '舒达.家系列：',
		'col2': '唐建华 13602553190'
	}, {
		'col1': '开拓总监：',
		'col2': ''
	}, {
		'col1': '中国北区：',
		'col2': '李英杰 18826559985'
	}, {
		'col1': '中国南区：',
		'col2': '张海平 18688926625'
	}, {
		'col1': '运营总监：',
		'col2': ''
	}, {
		'col1': '中国北区：',
		'col2': '甘链 18922885250'
	}, {
		'col1': '中国南区：',
		'col2': '朱波 13823568658'
	}, {
		'col1': '厂址：',
		'col2': '深圳市龙岗区布吉镇丹竹头工业区宝雅路5号'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.serta.com" target="_blank">www.serta.com</a>'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.serta.cn" target="_blank">www.serta.cn</a>'
	}];

	var aomeiContact = [{
		'col1': '全国免费热线：',
		'col2': '400-026-6086'
	}, {
		'col1': '联系人：',
		'col2': '刘卫 13923840486'
	}, {
		'col1': '厂址：',
		'col2': '深圳市龙岗区爱联'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.dmstyling.com" target="_blank">www.dmstyling.com</a>'
	}];

	var bosenContact = [{
		'col1': '招商热线',
		'col2': '0755-89642931'
	}, {
		'col1': '服务热线',
		'col2': '400-886-3211'
	}, {
		'col1': '联系人',
		'col2': '陈先生'
	}, {
		'col1': '厂址：',
		'col2': '深圳市龙岗区同乐吓坑大地工业园6号'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.besonfur.com" target="_blank">www.besonfur.com</a>'
	}];

	$(document).ready(function() {
		createJingpintuijian();

		if ($(selector.shuda).length !== 0) {
			$(selector.shuda).find('div.contact').append(creatContactTable(shudaContact));
			$(selector.shudaFactoryInfo).append(createInfoTable(shudaData.factory));
			$(selector.shuda1ProductInfo).append(createInfoTable(shudaData.product1));
			$(selector.shuda1ShopInfo).append(createInfoTable(shudaData.shop1));
			$(selector.shuda1CityInfo).append(createInfoTable(shudaData.city1));
			$(selector.shuda1BizInfo).append(createInfoTable(shudaData.biz1));

			$(selector.shuda2ProductInfo).append(createInfoTable(shudaData.product2));
			$(selector.shuda2ShopInfo).append(createInfoTable(shudaData.shop2));
			$(selector.shuda2CityInfo).append(createInfoTable(shudaData.city2));
			$(selector.shuda2BizInfo).append(createInfoTable(shudaData.biz2));

			$(selector.shuda3ProductInfo).append(createInfoTable(shudaData.product3));
			$(selector.shuda3ShopInfo).append(createInfoTable(shudaData.shop3));
			$(selector.shuda3CityInfo).append(createInfoTable(shudaData.city3));
			$(selector.shuda3BizInfo).append(createInfoTable(shudaData.biz3));

			$(selector.shuda4ProductInfo).append(createInfoTable(shudaData.product4));
			$(selector.shuda4ShopInfo).append(createInfoTable(shudaData.shop4));
			$(selector.shuda4CityInfo).append(createInfoTable(shudaData.city4));
			$(selector.shuda4BizInfo).append(createInfoTable(shudaData.biz4));
		}

		if ($(selector.aomei).length !== 0) {
			$(selector.aomei).find('div.contact').append(creatContactTable(aomeiContact));
			$(selector.aomeiFactoryInfo).append(createInfoTable(aomeiData.factory));
			$(selector.aomeiProductInfo).append(createInfoTable(aomeiData.product));
			$(selector.aomeiShopInfo).append(createInfoTable(aomeiData.shop));
		}

		if ($(selector.bosen).length !== 0) {
			$(selector.bosen).find('div.contact').append(creatContactTable(bosenContact));
			$(selector.bosenFactoryInfo).append(createInfoTable(bosenData.factory));
			$(selector.bosenProductInfo).append(createInfoTable(bosenData.product));
			$(selector.bosenShopInfo).append(createInfoTable(bosenData.shop));
		}
	});

	function createJingpintuijian() {
		$(selector.category)
			.append($('<div class="categoryText">精品</div>'))
			.append($('<div class="categoryText">推荐</div>'))
			.append($('<div>Recommended</div>'));
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