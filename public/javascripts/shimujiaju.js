(function($) {
	'use strict';

	var selector = {
		shimujiaju: '.shimujiaju',
		category: '.shimujiaju .category',

		aomeisen: '.shimujiaju.aomeisen',
		aomeisenFactoryInfo: '.shimujiaju.aomeisen .factoryInfo',
		aomeisenProductInfo: '.shimujiaju.aomeisen .productInfo',
		aomeisenShopInfo: '.shimujiaju.aomeisen .shopInfo',

		moxia: '.shimujiaju.moxia',
		moxiaFactoryInfo: '.shimujiaju.moxia .factoryInfo',
		moxiaProductInfo: '.shimujiaju.moxia .productInfo',
		moxiaShopInfo: '.shimujiaju.moxia .shopInfo'
	};

	var aomeisenData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '江苏澳美森家具有限公司'
			}, {
				col1: '创办年份',
				col2: '1985年'
			}, {
				col1: '总经理姓名',
				col2: '吴亮'
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
				col2: '澳美森'
			}, {
				col1: '',
				col2: '印象.墨尔本'
			}, {
				col1: '',
				col2: '紫金檀'
			}, {
				col1: '产品售价',
				col2: '现代实木系列：'
			}, {
				col1: '',
				col2: '均价1.3万（5件套）'
			}, {
				col1: '',
				col2: '美式新古典系列：'
			}, {
				col1: '',
				col2: '均价1.5万（ 5件套）'
			}, {
				col1: '',
				col2: '新中式系列：'
			}, {
				col1: '',
				col2: '均价2.5 万（ 5 件套）'
			}, {
				col1: '产品定位人群',
				col2: '精致生活人群'
			}, {
				col1: '产品风格类别',
				col2: '现代实木、小美式、新中式'
			}, {
				col1: '生产工艺特点',
				col2: '健康、功能性、全实木'
			}, {
				col1: '产品所用主材',
				col2: '黑檀木、奥克览、核桃楸木、橡胶木、真皮、布衣 新西兰辐射松木 意大利进口五金配件'
			}, {
				col1: '产品出厂城市',
				col2: '江苏常州'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '200-300平方米'
			}, {
				col1: '店内装修成本',
				col2: '450元/m2'
			}, {
				col1: '店内铺货成本',
				col2: '15-30万'
			}, {
				col1: '店内饰品投入费用',
				col2: '5-8万'
			}, {
				col1: '店内产品摆放数量',
				col2: '12-18套'
			}]
		}
	};

	var moxiaData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '浙江莫霞实业有限公司'
			}, {
				col1: '创办年份',
				col2: '1983年'
			}, {
				col1: '总经理姓名',
				col2: '莫惠明'
			}, {
				col1: '生产员工数量',
				col2: '800人'
			}, {
				col1: '工厂面积',
				col2: '15万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '莫霞墨客'
			}, {
				col1: '',
				col2: '莫霞兰卡威'
			}, {
				col1: '',
				col2: '莫霞悦木'
			}, {
				col1: '产品定位人群',
				col2: '中高阶层、成功人士'
			}, {
				col1: '产品风格类别',
				col2: '现代实木'
			}, {
				col1: '生产工艺特点',
				col2: '精雕细琢、端正持重、绿色环保、现代工艺'
			}, {
				col1: '产品所用主材',
				col2: '实木 新西兰辐射松木 意大利进口五金配件'
			}, {
				col1: '产品出厂城市',
				col2: '湖州'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '200-280平方米'
			}, {
				col1: '店内装修成本',
				col2: '15-30万'
			}, {
				col1: '店内铺货成本',
				col2: '20-40万'
			}, {
				col1: '店内饰品投入费用',
				col2: '4-8万'
			}, {
				col1: '店内产品摆放数量',
				col2: '10-18套'
			}, {
				col1: '店内产品摆放数量',
				col2: '45-80万'
			}]
		}
	};

	var aomeisenContact = [{
		'col1': '招商热线',
		'col2': '400-0096-056'
	}, {
		'col1': '厂址：',
		'col2': '江苏常州武进区湖塘城东纺织工业杨区路15号'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.ripe-f.com" target="_blank">www.ripe-f.com</a>'
	}];

	var moxiaContact = [{
		'col1': '招商热线',
		'col2': '400-926-3377'
	}, {
		'col1': '联系人',
		'col2': '莫惠明'
	}, {
		'col1': '厂址：',
		'col2': '浙江省湖州市德清县经济开发区回山路377号莫霞实业有限公司'
	}, {
		'col1': '网址：',
		'col2': '<a href="http://www.chinamoxia.com" target="_blank">www.chinamoxia.com</a>'
	}];

	$(document).ready(function() {
		createShimujiaju();

		if ($(selector.aomeisen).length !== 0) {
			$(selector.aomeisen).find('div.contact').append(creatContactTable(aomeisenContact));
			$(selector.aomeisenFactoryInfo).append(createInfoTable(aomeisenData.factory));
			$(selector.aomeisenProductInfo).append(createInfoTable(aomeisenData.product));
			$(selector.aomeisenShopInfo).append(createInfoTable(aomeisenData.shop));
		}

		if ($(selector.moxia).length !== 0) {
			$(selector.moxia).find('div.contact').append(creatContactTable(moxiaContact));
			$(selector.moxiaFactoryInfo).append(createInfoTable(moxiaData.factory));
			$(selector.moxiaProductInfo).append(createInfoTable(moxiaData.product));
			$(selector.moxiaShopInfo).append(createInfoTable(moxiaData.shop));
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