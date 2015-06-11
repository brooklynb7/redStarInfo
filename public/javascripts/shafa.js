(function($) {
	'use strict';

	var selector = {
		shafa: '.shafa',
		category: '.shafa .category',
		sikexin: '.shafa.sikexin',
		sikexinFactoryInfo: '.shafa.sikexin .factoryInfo',
		sikexinProductInfo: '.shafa.sikexin .productInfo',
		sikexinHotlineInfo: '.shafa.sikexin .hotlineInfo',
		anman: '.shafa.anman',
		anmanFactoryInfo: '.shafa.anman .factoryInfo',
		anmanProductInfo: '.shafa.anman .productInfo',
		anmanShopInfo: '.shafa.anman .shopInfo',
		dechi: '.shafa.dechi',
		dechiFactoryInfo: '.shafa.dechi .factoryInfo',
		dechiProductInfo: '.shafa.dechi .productInfo',
		dechiShopInfo: '.shafa.dechi .shopInfo'
	};

	var sikexinContact = [{
		'col1': '招商热线',
		'col2': '0512-66101999'
	}, {
		'col1': '厂址',
		'col2': '江苏省苏州市相城北桥家具制造中心天台山路1号'
	}, {
		'col1': '公司网址',
		'col2': '<a href="http://www.sikexin.com" target="_blank">www.sikexin.com</a>'
	}];

	var anmanContact = [{
		'col1': '招商热线',
		'col2': '18689319988 刘先生'
	}, {
		'col1': '',
		'col2': '13415732888 刘先生'
	}, {
		'col1': '厂址',
		'col2': '佛山市龙江镇官田福中路7号'
	}, {
		'col1': '网址',
		'col2': '<a href="http://www.anman.com" target="_blank">www.anman.com</a>'
	}, {
		'col1': '邮箱',
		'col2': '<a href="mailto:am@anman.cn">am@anman.cn</a>'
	}, {
		'col1': 'QQ',
		'col2': '1181186368'
	}];

	var dechiContact = [{
		'col1': '招商热线',
		'col2': '13501036818'
	}, {
		'col1': '联系人',
		'col2': '张令魁'
	}, {
		'col1': '厂址',
		'col2': '北京市通州区台湖镇北火垈工业区'
	}, {
		'col1': '网址',
		'col2': '<a href="http://www.deecci.com" target="_blank">www.deecci.com</a>'
	}, {
		'col1': '展位标注',
		'col2': '东莞名家具展9号馆D06、D07展位'
	}];


	var sikexinData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '斯可馨家具股份有限公司'
			}, {
				col1: '创办年份',
				col2: '1999年'
			}, {
				col1: '五大基地',
				col2: '华东（苏州）生产基地'
			}, {
				col1: '',
				col2: '华东（海安）生产基地'
			}, {
				col1: '',
				col2: '华北（香河）生产基地'
			}, {
				col1: '',
				col2: '华西（成都）生产基地'
			}, {
				col1: '',
				col2: '华南（佛山）生产基地'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '旗下品牌',
				col2: '时尚'
			}, {
				col1: '',
				col2: '艾库'
			}, {
				col1: '',
				col2: '北欧系朗克品家'
			}, {
				col1: '',
				col2: '馨舍'
			}, {
				col1: '',
				col2: '北美e家'
			}, {
				col1: '',
				col2: '沃图'
			}, {
				col1: '',
				col2: '纳斯卡'
			}, {
				col1: '',
				col2: '家和'
			}]
		},
		hotline: {
			title: '招商热线',
			table: [{
				col1: '华东（苏州）生产基地',
				col2: '0512-66101999'
			}, {
				col1: '华北（佛山）生产基地',
				col2: '0757-81860999'
			}, {
				col1: '华西（香河）生产基地',
				col2: '0316-8597888'
			}, {
				col1: '华南（成都）生产基地',
				col2: '028-36066122'
			}]
		}
	};

	var anmanData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '佛山市安曼家具有限公司'
			}, {
				col1: '创办年份',
				col2: '2004年'
			}, {
				col1: '董事长姓名',
				col2: '刘名湖'
			}, {
				col1: '生产员工数量',
				col2: '500人'
			}, {
				col1: '工厂面积',
				col2: '5万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '安曼—现代品位系列'
			}, {
				col1: '',
				col2: '法伊曼—时尚系列'
			}, {
				col1: '',
				col2: '尼曼迪—健康睡眠系列'
			}, {
				col1: '建议零售价',
				col2: '现代品位系列：'
			}, {
				col1: '',
				col2: '3-6万	（8件套系）'
			}, {
				col1: '',
				col2: '时尚系列：'
			}, {
				col1: '',
				col2: '2-5万（8件套系） '
			}, {
				col1: '',
				col2: '健康睡眠系列：'
			}, {
				col1: '',
				col2: '1.5-3万（8件套系）'
			}, {
				col1: '产品定位人群',
				col2: '精英人群'
			}, {
				col1: '产品风格类别',
				col2: '现代品位'
			}, {
				col1: '生产工艺特点',
				col2: '羽绒不锈钢'
			}, {
				col1: '产品所用主材',
				col2: '不锈钢、羽绒、乳胶、棉麻布'
			}, {
				col1: '产品出厂城市',
				col2: '佛山'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '200-300平方米'
			}, {
				col1: '店内装修成本',
				col2: '500元/m2'
			}, {
				col1: '店内铺货成本',
				col2: '15-20万'
			}, {
				col1: '店内产品摆放数量',
				col2: '10-15套'
			}, {
				col1: '标准店总投入费用',
				col2: '25-35万'
			}]
		}
	};

	var dechiData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '北京德驰家居用品有限公司'
			}, {
				col1: '创办年份',
				col2: '2006年'
			}, {
				col1: '董事长姓名',
				col2: '陈驰'
			}, {
				col1: '生产员工数量',
				col2: '350-500人'
			}, {
				col1: '工厂面积',
				col2: '3万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '德驰家居（第一系列）'
			}, {
				col1: '',
				col2: '宝泊家居（第二系列）'
			}, {
				col1: '建议零售价',
				col2: '第一系列：2-10万'
			}, {
				col1: '',
				col2: '第二系列：1-8万'
			}, {
				col1: '产品定位人群',
				col2: '中高端人士'
			}, {
				col1: '产品风格类别',
				col2: '意大利极简风格'
			}, {
				col1: '生产工艺特点',
				col2: '德国、意大利原装进口设备'
			}, {
				col1: '产品所用主材',
				col2: '钢架、实木、进口牛皮、进口布料'
			}, {
				col1: '产品出厂城市',
				col2: '北京'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '第一系列：300-400平方米'
			}, {
				col1: '',
				col2: '第二系列：200-300平方米'
			},{
				col1: '标准店总投入费用',
				col2: '第一系列：70-80万'
			},{
				col1: '',
				col2: '第二系列：40-50万'
			}]
		}

	};


	$(document).ready(function() {
		createShafa();
		if ($(selector.dechi).length !== 0) {
			$(selector.dechi).find('div.contact').append(creatContactTable(dechiContact));
			$(selector.dechiFactoryInfo).append(createInfoTable(dechiData.factory));
			$(selector.dechiProductInfo).append(createInfoTable(dechiData.product));
			$(selector.dechiShopInfo).append(createInfoTable(dechiData.shop));
		}

		if ($(selector.anman).length !== 0) {
			$(selector.anman).find('div.contact').append(creatContactTable(anmanContact));
			$(selector.anmanFactoryInfo).append(createInfoTable(anmanData.factory));
			$(selector.anmanProductInfo).append(createInfoTable(anmanData.product));
			$(selector.anmanShopInfo).append(createInfoTable(anmanData.shop));
		}

		if ($(selector.length !== 0)) {
			$(selector.sikexin).find('div.contact').append(creatContactTable(sikexinContact));
			$(selector.sikexinFactoryInfo).append(createInfoTable(sikexinData.factory));
			$(selector.sikexinProductInfo).append(createInfoTable(sikexinData.product));
			$(selector.sikexinHotlineInfo).append(createInfoTable(sikexinData.hotline));
		}
	});

	function createShafa() {
		$(selector.category)
			.append($('<div class="categoryText">沙发</div>'))
			.append($('<div>The sofa</div>'));
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