(function($) {
	'use strict';

	var selector = {
		gudianoumei: '.gudianoumei',
		category: '.gudianoumei .category',

		yinggeli: '.gudianoumei.yinggeli',
		yinggeliFactoryInfo: '.gudianoumei.yinggeli .factoryInfo',
		yinggeliProductInfo: '.gudianoumei.yinggeli .productInfo',
		yinggeliShopInfo: '.gudianoumei.yinggeli .shopInfo',

		ailishegong: '.gudianoumei.ailishegong',
		ailishegongFactoryInfo: '.gudianoumei.ailishegong .factoryInfo',
		ailishegongProductInfo: '.gudianoumei.ailishegong .productInfo',
		ailishegongShopInfo: '.gudianoumei.ailishegong .shopInfo',

		yinglunhuazhuang: '.gudianoumei.yinglunhuazhuang',
		yinglunhuazhuangFactoryInfo: '.gudianoumei.yinglunhuazhuang .factoryInfo',
		yinglunhuazhuangProductInfo: '.gudianoumei.yinglunhuazhuang .productInfo',
		yinglunhuazhuangShopInfo: '.gudianoumei.yinglunhuazhuang .shopInfo',

		changshi: '.gudianoumei.changshi',
		changshiFactoryInfo: '.gudianoumei.changshi .factoryInfo',
		changshiProductInfo: '.gudianoumei.changshi .productInfo',
		changshiShopInfo: '.gudianoumei.changshi .shopInfo',
		changshiShop2Info: '.gudianoumei.changshi .shop2Info',
		changshiCityInfo: '.gudianoumei.changshi .cityInfo',
		changshiBizInfo: '.gudianoumei.changshi .bizInfo'
	};

	var yinggeliData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '英格利家具'
			}, {
				col1: '创办年份',
				col2: '1990年'
			}, {
				col1: '董事长姓名	',
				col2: '黄开元'
			}, {
				col1: '生产员工数量',
				col2: '1600人'
			}, {
				col1: '工厂面积',
				col2: '20万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '纪梵希-伯爵'
			}, {
				col1: '产品定位人群',
				col2: '高阶成功人士'
			}, {
				col1: '生产工艺特点',
				col2: '环保、纯手工'
			}, {
				col1: '产品所用主材',
				col2: '榉木'
			}, {
				col1: '产品风格类别',
				col2: '新法式'
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
				col2: '800元/m2'
			}, {
				col1: '店内铺货成本',
				col2: '1700元/m2'
			}, {
				col1: '店内饰品投入',
				col2: '500元/m2'
			}, {
				col1: '标准店投入费用',
				col2: '3000元/m2'
			}]
		}
	};

	var ailishegongData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '爱丽舍宫家具'
			}, {
				col1: '创办年份',
				col2: '1973年'
			}, {
				col1: '执行董事总裁姓名',
				col2: '黄诗山'
			}, {
				col1: '生产员工数量',
				col2: '800人'
			}, {
				col1: '工厂面积',
				col2: '8万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '爱丽舍宫家具'
			}, {
				col1: '建议零售价',
				col2: '4-5万'
			}, {
				col1: '产品定位人群',
				col2: '中高阶层'
			}, {
				col1: '生产工艺特点',
				col2: '进口实木、手工雕刻'
			}, {
				col1: '产品所用主材',
				col2: '箔金工艺、绿色环保'
			}, {
				col1: '产品风格类别',
				col2: '法式宫廷'
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
				col2: '4－5万'
			}]
		}
	};

	var yinglunhuazhuangData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '广东万恒通家居制品有限公司'
			}, {
				col1: '创办年份',
				col2: '1982年'
			}, {
				col1: '董事长姓名',
				col2: '王健文'
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
				col1: '品牌系列名',
				col2: '英伦华庄-新法式'
			}, {
				col1: '建议零售价',
				col2: '1-8万'
			}, {
				col1: '产品定位人群',
				col2: '中高阶层、成功人士'
			}, {
				col1: '生产工艺特点',
				col2: '纯手工雕刻'
			}, {
				col1: '产品所用主材',
				col2: '高档全实木'
			}, {
				col1: '产品风格类别',
				col2: '法式古典'
			}, {
				col1: '产品出厂城市',
				col2: '东莞'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '250平方米以上'
			}, {
				col1: '店内装修成本',
				col2: '15万'
			}, {
				col1: '店内铺货成本',
				col2: '35万'
			},{
				col1: '店内饰品投入费用',
				col2: '18万'
			},{
				col1: '店内产品摆放套数',
				col2: '12套左右'
			},{
				col1: '标准店总投入费用',
				col2: '65万左右'
			}]
		}
	};

	var changshiData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '东莞市长实家具有限公司'
			}, {
				col1: '创办年份',
				col2: '1993年'
			}, {
				col1: '董事长姓名	',
				col2: '陈润洪'
			}, {
				col1: '生产员工数量',
				col2: '1000余人'
			}, {
				col1: '工厂面积',
				col2: '10万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名',
				col2: '长实－帕特丽夏——简欧新美式风格'
			}, {
				col1: '',
				col2: '长实－北欧——简欧新古典（偏后现代）风格'
			}, {
				col1: '',
				col2: '长实－阿默斯特——简美新古典风格'
			}, {
				col1: '',
				col2: '长实－比达尔——简约现代实木风格'
			}, {
				col1: '产品定位人群',
				col2: '30岁以上白领阶层及以上人群'
			}, {
				col1: '生产工艺特点',
				col2: '采用传统实木榫卯结构，坚固，耐用'
			}, {
				col1: '产品所用主材',
				col2: '长实－帕特丽夏／长实－北欧／长实－阿默斯特——欧洲进口毛榉'
			}, {
				col1: '',
				col2: '长实－比达尔——北美黑胡桃木'
			}, {
				col1: '产品出厂城市',
				col2: '东莞市'
			}]
		},
		shop: {
			title: '标准店投入信息',
			subTitle: '品牌：长实帕特丽夏／长实－北欧／长实阿默斯特',
			table: [{
				col1: '开店面积',
				col2: '250平方米以上（单品牌）'
			}, {
				col1: '店内装修成本',
				col2: '700元/m2'
			}, {
				col1: '店内铺货成本',
				col2: '1100元/m2'
			}, {
				col1: '店内产品摆放套数',
				col2: '4套卧室，5套客厅，6套餐厅，1套书房'
			}, {
				col1: '标准店总投入费用',
				col2: '60万－100万不等'
			}]
		},
		shop2: {
			title: '标准店投入信息',
			subTitle: '品牌：长实－比达尔',
			table: [{
				col1: '开店面积',
				col2: '250平方米以上'
			}, {
				col1: '店内装修成本',
				col2: '700元/m2'
			}, {
				col1: '店内铺货成本',
				col2: '1200元/m2'
			}, {
				col1: '店内产品摆放套数',
				col2: '2套卧室，7套客厅，7套餐厅，2套书房'
			}, {
				col1: '标准店总投入费用',
				col2: '70万－100万不等'
			}]
		},
		city: {
			title: '已开店城市',
			table: [{
				col1: '',
				col2: '北京、杭州、南京、苏州、昆山、芜湖、成都、太原、呼和浩特、武汉、深圳等全国200多家专卖店'
			}]
		},
		biz: {
			title: '重点招商城市',
			table: [{
				col1: '',
				col2: '武汉，重庆，广州，沈阳，长春等全国一、二线城市'
			}]
		}
	};

	var yinggeliContact = [{
		'col1': '招商热线',
		'col2': '400-888-8478'
	}, {
		'col1': '东北大区',
		'col2': '张子康 18948768581'
	}, {
		'col1': '华北大区',
		'col2': '陈鹏君 13632891627'
	}, {
		'col1': '华南大区',
		'col2': '黄种斌 13686889880'
	}, {
		'col1': '营销中心',
		'col2': '深圳市坪山新区深汕33号'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.ingrid-furniture.com" target="_blank">www.ingrid-furniture.com</a>'
	}];

	var changshiContact = [{
		'col1': '招商热线',
		'col2': '0769-89271222-828'
	}, {
		'col1': '联系人',
		'col2': '金经理 15899651040'
	}, {
		'col1': '厂址',
		'col2': '东莞市厚街镇新塘工业区'
	}, {
		'col1': '网址',
		'col2': '<a href="http://www.chang-shi.com" target="_blank">www.chang-shi.com</a>'
	}, {
		'col1': '展位标注',
		'col2': '2015年3月东莞家具展'
	}, {
		'col1': '',
		'col2': 'L1C06-22（9号馆／世博园）'
	}];

	var ailishegongContact = [{
		'col1': '产销总代理',
		'col2': '深圳市爱丽舍宫家具有限公司'
	}, {
		'col1': '联系人',
		'col2': '黄诗山 13502809976'
	}, {
		'col1': '厂址',
		'col2': '广东省惠州市惠阳区秋长三角塘工业区嘉盛家具'
	}, {
		'col1': '网址',
		'col2': '<a href="http://www.ais1808.com" target="_blank">www.ais1808.com</a>'
	}, {
		'col1': '全国免费热线',
		'col2': '400-0755－847'
	}];

	var yinglunhuazhuangContact = [{
		'col1': '招商热线',
		'col2': '0138 2919 3707'
	}, {
		'col1': '联系人',
		'col2': '陈玉伟'
	}, {
		'col1': '厂址',
		'col2': '东莞市常平镇港建大道8号'
	}, {
		'col1': '网址',
		'col2': '<a href="http://www.whtjt.com" target="_blank">www.whtjt.com</a>'
	}, {
		'col1': '展位标注',
		'col2': '东莞市厚街镇恒锋家具博览中心二楼'
	}];

	$(document).ready(function() {
		createGudianoumei();

		if ($(selector.yinggeli).length !== 0) {
			$(selector.yinggeli).find('div.contact').append(creatContactTable(yinggeliContact));
			$(selector.yinggeliFactoryInfo).append(createInfoTable(yinggeliData.factory));
			$(selector.yinggeliProductInfo).append(createInfoTable(yinggeliData.product));
			$(selector.yinggeliShopInfo).append(createInfoTable(yinggeliData.shop));
		}

		if ($(selector.ailishegong).length !== 0) {
			$(selector.ailishegong).find('div.contact').append(creatContactTable(ailishegongContact));
			$(selector.ailishegongFactoryInfo).append(createInfoTable(ailishegongData.factory));
			$(selector.ailishegongProductInfo).append(createInfoTable(ailishegongData.product));
			$(selector.ailishegongShopInfo).append(createInfoTable(ailishegongData.shop));
		}

		if ($(selector.yinglunhuazhuang).length !== 0) {
			$(selector.yinglunhuazhuang).find('div.contact').append(creatContactTable(yinglunhuazhuangContact));
			$(selector.yinglunhuazhuangFactoryInfo).append(createInfoTable(yinglunhuazhuangData.factory));
			$(selector.yinglunhuazhuangProductInfo).append(createInfoTable(yinglunhuazhuangData.product));
			$(selector.yinglunhuazhuangShopInfo).append(createInfoTable(yinglunhuazhuangData.shop));
		}

		if ($(selector.changshi).length !== 0) {
			$(selector.changshi).find('div.contact').append(creatContactTable(changshiContact));
			$(selector.changshiFactoryInfo).append(createInfoTable(changshiData.factory));
			$(selector.changshiProductInfo).append(createInfoTable(changshiData.product));
			$(selector.changshiShopInfo).append(createInfoTable(changshiData.shop));
			$(selector.changshiShop2Info).append(createInfoTable(changshiData.shop2));
			$(selector.changshiCityInfo).append(createInfoTable(changshiData.city));
			$(selector.changshiBizInfo).append(createInfoTable(changshiData.biz));
		}
	});

	function createGudianoumei() {
		$(selector.category)
			.append($('<div class="categoryText">古典</div>'))
			.append($('<div class="categoryText">欧美</div>'))
			.append($('<div>Classical Europe</div>'));
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