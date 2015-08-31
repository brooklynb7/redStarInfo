(function($) {
	'use strict';

	var selector = {
		qingshaonian: '.qingshaonian',
		category: '.qingshaonian .category',
		gelunbini: '.qingshaonian.gelunbini',
		gelunbiniFactoryInfo: '.qingshaonian.gelunbini .factoryInfo',
		gelunbiniProductInfo: '.qingshaonian.gelunbini .productInfo',
		gelunbiniShopInfo: '.qingshaonian.gelunbini .shopInfo',
		gelunbiniCityInfo: '.qingshaonian.gelunbini .cityInfo',
		gelunbiniBizInfo: '.qingshaonian.gelunbini .bizInfo',

		qicaichengbao: '.qingshaonian.qicaichengbao',
		qicaichengbaoFactoryInfo: '.qingshaonian.qicaichengbao .factoryInfo',
		qicaichengbaoProductInfo: '.qingshaonian.qicaichengbao .productInfo',
		qicaichengbaoShopInfo: '.qingshaonian.qicaichengbao .shopInfo',

		lanlanbuluo: '.qingshaonian.lanlanbuluo',
		lanlanbuluoFactoryInfo: '.qingshaonian.lanlanbuluo .factoryInfo',
		lanlanbuluoProductInfo: '.qingshaonian.lanlanbuluo .productInfo',
		lanlanbuluoShopInfo: '.qingshaonian.lanlanbuluo .shopInfo',

		luokebaluo: '.qingshaonian.luokebaluo',
		luokebaluoFactoryInfo: '.qingshaonian.luokebaluo .factoryInfo',
		luokebaluoProductInfo: '.qingshaonian.luokebaluo .productInfo',
		luokebaluoShopInfo: '.qingshaonian.luokebaluo .shopInfo'
	};

	var gelunbiniData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '哥仑比尼家具（中国）有限公司'
			}, {
				col1: '创办年份',
				col2: '2005年'
			}, {
				col1: '总经理',
				col2: '罗瑞泽马克'
			}, {
				col1: '生产员工数量',
				col2: '150人'
			}, {
				col1: '工厂面积',
				col2: '2万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: 'KITE凯特（多彩系列）'
			}, {
				col1: '',
				col2: 'LIFE生活（实木系列）'
			}, {
				col1: '',
				col2: 'Arcadia（国际系列）'
			}, {
				col1: '产品售价',
				col2: '多彩系列：'
			}, {
				col1: '',
				col2: '1-4万（3件套）'
			},{
				col1: '',
				col2: '实木系列：'
			},{
				col1: '',
				col2: '2-5万（3件套）'
			},{
				col1: '',
				col2: '国际系列：'
			},{
				col1: '',
				col2: '3-10万（3件套）'
			}, {
				col1: '产品定位人群',
				col2: '精致生活人群'
			}, {
				col1: '产品风格类别',
				col2: '多彩儿童家具及简约青少年成长家具'
			}, {
				col1: '生产工艺特点',
				col2: '意大利原创设计'
			}, {
				col1: '产品所用主材',
				col2: '意大利进口板材饰面 新西兰辐射松木 意大利进口五金配件'
			}, {
				col1: '产品出厂城市',
				col2: '北京'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '120-180平方米'
			}, {
				col1: '店内装修成本',
				col2: '500元/m2'
			}, {
				col1: '店内铺货成本',
				col2: '8-12万'
			},{
				col1: '店内饰品投入费用',
				col2: '3万'
			}, {
				col1: '店内产品摆放数量',
				col2: '10-15套'
			}]
		},
		city: {
			title: '已开店城市',
			table: [{
				col1: '多彩系列：',
				col2: '北京、上海、深圳、西安、南京、宁波、太原、石家庄、沈阳、哈尔滨、宝鸡、呼和浩特、青岛、烟台、临沂、天津、蚌埠、合肥、重庆、大连、临汾、晋城、济南、宁海、东营'
			},{
				col1: '实木系列：',
				col2: '北京、上海、深圳、西安、成都、长治、济南'
			},{
				col1: '国际系列：',
				col2: '北京、上海'
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

	var qicaichengbaoData = {
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

	var lanlanbuluoData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '廊坊华日家具有限公司'
			}, {
				col1: '创办年份',
				col2: '1992年'
			}, {
				col1: '总经理姓名',
				col2: '周旭恩'
			}, {
				col1: '生产员工数量',
				col2: '3000人'
			}, {
				col1: '工厂面积',
				col2: '50万平方米'
			}]
		},		
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '蓝蓝部落'
			},{
				col1: '产品风格类别',
				col2: '现代家具'
			}, {
				col1: '生产工艺特点',
				col2: '实木工艺、最新国标标准'
			}, {
				col1: '产品所用主材',
				col2: '新西兰松木 新西兰辐射松木 意大利进口五金配件'
			}, {
				col1: '产品出厂城市',
				col2: '廊坊'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '160-220平方米'
			}, {
				col1: '店内装修成本',
				col2: '10-15万'
			}, {
				col1: '店内铺货成本',
				col2: '10-15万'
			},{
				col1: '店内饰品投入费用',
				col2: '6-9万'
			},{
				col1: '店内产品摆放数量',
				col2: '10-16套'
			},{
				col1: '标准店总投入费用',
				col2: '30-40万'
			}]
		}
	};

	var luokebaluoData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '廊坊华日家具有限公司'
			}, {
				col1: '创办年份',
				col2: '1992年'
			}, {
				col1: '总经理姓名',
				col2: '周旭恩'
			}, {
				col1: '生产员工数量',
				col2: '3000人'
			}, {
				col1: '工厂面积',
				col2: '50万平方米'
			}]
		},		
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '洛可巴洛'
			},{
				col1: '产品风格类别',
				col2: '现代家具'
			}, {
				col1: '生产工艺特点',
				col2: '实木工艺、最新国标标准'
			}, {
				col1: '产品所用主材',
				col2: '泰国橡胶木'
			}, {
				col1: '产品出厂城市',
				col2: '廊坊'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '160-220平方米'
			}, {
				col1: '店内装修成本',
				col2: '10-15万'
			}, {
				col1: '店内铺货成本',
				col2: '10-15万'
			},{
				col1: '店内饰品投入费用',
				col2: '6-9万'
			},{
				col1: '店内产品摆放数量',
				col2: '10-16套'
			},{
				col1: '标准店总投入费用',
				col2: '30-40万'
			}]
		}
	};

	var gelunbiniContact = [{
		'col1': '招商热线',
		'col2': '010-82934208'
	}, {
		'col1': '联系人',
		'col2': '张国英 13901055440'
	}];

	var qicaichengbaoContact = [{
		'col1': '招商热线',
		'col2': '1351081382'
	}, {
		'col1': '联系人',
		'col2': '肖立军'
	},{
		'col1': '厂址：',
		'col2': '深圳市龙岗区坪地街道中心社区深惠路48号A9'
	},{
		'col1': '网址：',
		'col2': '<a href="http://www.7cjj.com" target="_blank">www.7cjj.com</a>'
	}];

	var lanlanbuluoContact = [{
		'col1': '招商热线',
		'col2': '0316-7012074'
	}, {
		'col1': '联系人',
		'col2': '张本卫 18630696456'
	},{
		'col1': '厂址：',
		'col2': '河北省廊坊市开发区华日第二工业园'
	},{
		'col1': '展位标注：',
		'col2': '3号馆B22'
	}];

	var luokebaluoContact = [{
		'col1': '招商热线',
		'col2': '0316-7012074'
	}, {
		'col1': '联系人',
		'col2': '张本卫 18630696456'
	},{
		'col1': '厂址：',
		'col2': '河北省廊坊市开发区华日第二工业园'
	},{
		'col1': '展位标注：',
		'col2': '3号馆B22'
	}];

	$(document).ready(function() {
		createQingshaonian();
		if ($(selector.gelunbini).length !== 0) {
			$(selector.gelunbini).find('div.contact').append(creatContactTable(gelunbiniContact));
			$(selector.gelunbiniFactoryInfo).append(createInfoTable(gelunbiniData.factory));
			$(selector.gelunbiniProductInfo).append(createInfoTable(gelunbiniData.product));
			$(selector.gelunbiniShopInfo).append(createInfoTable(gelunbiniData.shop));
			$(selector.gelunbiniCityInfo).append(createInfoTable(gelunbiniData.city));
			$(selector.gelunbiniBizInfo).append(createInfoTable(gelunbiniData.biz));
		}

		if ($(selector.qicaichengbao).length !== 0) {
			$(selector.qicaichengbao).find('div.contact').append(creatContactTable(qicaichengbaoContact));
			$(selector.qicaichengbaoFactoryInfo).append(createInfoTable(qicaichengbaoData.factory));
			$(selector.qicaichengbaoProductInfo).append(createInfoTable(qicaichengbaoData.product));
			$(selector.qicaichengbaoShopInfo).append(createInfoTable(qicaichengbaoData.shop));
		}

		if ($(selector.lanlanbuluo).length !== 0) {
			$(selector.lanlanbuluo).find('div.contact').append(creatContactTable(lanlanbuluoContact));
			$(selector.lanlanbuluoFactoryInfo).append(createInfoTable(lanlanbuluoData.factory));
			$(selector.lanlanbuluoProductInfo).append(createInfoTable(lanlanbuluoData.product));
			$(selector.lanlanbuluoShopInfo).append(createInfoTable(lanlanbuluoData.shop));
		}

		if ($(selector.luokebaluo).length !== 0) {
			$(selector.luokebaluo).find('div.contact').append(creatContactTable(luokebaluoContact));
			$(selector.luokebaluoFactoryInfo).append(createInfoTable(luokebaluoData.factory));
			$(selector.luokebaluoProductInfo).append(createInfoTable(luokebaluoData.product));
			$(selector.luokebaluoShopInfo).append(createInfoTable(luokebaluoData.shop));
		}
	});

	function createQingshaonian() {
		$(selector.category)
			.append($('<div class="categoryText">儿童</div>'))
			.append($('<div class="categoryText">青少年</div>'))
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