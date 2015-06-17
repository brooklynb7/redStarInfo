(function($) {
	'use strict';

	var selector = {
		banmu: '.banmujiaju',
		category: '.banmujiaju .category',
		chengshi: '.banmujiaju.chengshizhichuang',
		chengshiFactoryInfo: '.banmujiaju.chengshizhichuang .factoryInfo',
		chengshiProductInfo: '.banmujiaju.chengshizhichuang .productInfo',
		chengshiShopInfo: '.banmujiaju.chengshizhichuang .shopInfo',
		chengshiCityInfo: '.banmujiaju.chengshizhichuang .cityInfo',
		chengshiBizInfo: '.banmujiaju.chengshizhichuang .bizInfo',
	};

	var chengshiData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '城市之窗'
			}, {
				col1: '创办年份',
				col2: '2002年'
			}, {
				col1: '董事长姓名',
				col2: '王东升'
			}, {
				col1: '生产员工数量',
				col2: '3500人'
			}, {
				col1: '工厂面积',
				col2: '15万平方米'
			}]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: '纯美地中海'
			}, {
				col1: '产品定位人群',
				col2: '中高阶层'
			}, {
				col1: '产品风格类别',
				col2: '地中海板木家具'
			}, {
				col1: '生产工艺特点',
				col2: '三防、绿色环保'
			}, {
				col1: '产品所用主材',
				col2: '水曲柳、实木颗粒板'
			}, {
				col1: '产品出厂城市',
				col2: '东莞'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '200-300平方米'
			}, {
				col1: '店内装修成本',
				col2: '20-30万'
			}, {
				col1: '店内铺货成本',
				col2: '15-22万'
			}, {
				col1: '店内产品摆放数量',
				col2: '8-15套'
			}, {
				col1: '标准店总投入费用',
				col2: '40-60万'
			}]
		},
		city: {
			title: '开店城市分布信息',
			table: [{
				col1: '纯美地中海',
				col2: '北京、上海、天津、广州、南京、杭州、重庆、苏州、西安、沈阳、深圳、武汉……'
			}]
		},
		biz: {
			title: '招商信息',
			table: [{
				col1: '纯美地中海',
				col2: '全国一、二级城市'
			},{
				col1: '国内营销总部',
				col2: '东莞市城市之窗家具有限公司'
			},{
				col1: '北区 联系人',
				col2: '范永宏 18676058988'
			},{
				col1: '南区 联系人',
				col2: '李世国 18676058989'
			},{
				col1: '厂址',
				col2: '广东省东莞市厚街镇宝塘第一工业区'
			},{
				col1: '网址',
				col2: '<a href="http://www.city-w.com.cn" target="_blank">www.city-w.com.cn</a>'
			},{
				col1: '全国免费热线',
				col2: '400 033 8661'
			},{
				col1: '展位标注',
				col2: '第33届国际名家具（东莞）展 3D08'
			}]
		}
	};


	$(document).ready(function() {
		createBanmu();
		if ($(selector.chengshi).length !== 0) {
			$(selector.chengshiFactoryInfo).append(createInfoTable(chengshiData.factory));
			$(selector.chengshiProductInfo).append(createInfoTable(chengshiData.product));
			$(selector.chengshiShopInfo).append(createInfoTable(chengshiData.shop));
			$(selector.chengshiCityInfo).append(createInfoTable(chengshiData.city));
			$(selector.chengshiBizInfo).append(createInfoTable(chengshiData.biz));
		}
	});

	function createBanmu() {
		$(selector.category)
			.append($('<div class="categoryText">板木</div>'))
			.append($('<div class="categoryText">家具</div>'))
			.append($('<div>Wood furniture board</div>'));
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