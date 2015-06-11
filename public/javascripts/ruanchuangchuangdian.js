(function($) {
	'use strict';

	var selector = {
		chuangdian: '.ruanchuangchuangdian',
		category: '.ruanchuangchuangdian .category',
		mpe: '.ruanchuangchuangdian.mpe',
		mpeFactoryInfo: '.ruanchuangchuangdian.mpe .factoryInfo',
		mpeProductInfo: '.ruanchuangchuangdian.mpe .productInfo',
		mpeShopInfo: '.ruanchuangchuangdian.mpe .shopInfo'
	};

	var mpeContact = [{
		'col1': '招商热线',
		'col2': '13600159066'
	}, {
		'col1': '联系人',
		'col2': '彭先生'
	}, {
		'col1': '厂址',
		'col2': '深圳市龙岗区宝龙'
	}, {
		'col1': '公司网址',
		'col2': '<a href="http://www.mpebedding.com" target="_blank">www.mpebedding.com</a>'
	}, {
		'col1': '展位标注',
		'col2': '1A-15'
	}];

	var mpeData = {
		factory: {
			title: '工厂信息',
			table: [{
				col1: '公司名称',
				col2: '美亚实业'
			}, {
				col1: '创办年份',
				col2: '2003 年'
			}, {
				col1: '董事长姓名',
				col2: '罗成'
			}, {
				col1: '生产员工数量',
				col2: '800 人'
			}, {
				col1: '工厂面积',
				col2: '5 万平方米'
			}, ]
		},
		product: {
			title: '产品信息',
			table: [{
				col1: '品牌系列名称',
				col2: 'MPE智能睡床'
			}, {
				col1: '建议零售价',
				col2: '3-10万'
			}, {
				col1: '产品定位人群',
				col2: '中高端'
			}, {
				col1: '产品风格类别',
				col2: '航天科技智能睡床'
			}, {
				col1: '生产工艺特点',
				col2: '全球首创智能遥控'
			}, {
				col1: '产品出厂城市',
				col2: '深圳'
			}]
		},
		shop: {
			title: '标准店投入信息',
			table: [{
				col1: '开店面积',
				col2: '150-200平方米'
			}, {
				col1: '店内装修成本',
				col2: '15-20万'
			}, {
				col1: '店内铺货成本',
				col2: '20万'
			}, {
				col1: '店内饰品投入费用',
				col2: '2万'
			}, {
				col1: '店内产品摆放数量',
				col2: '10-15套'
			}, {
				col1: '标准店总投入费用',
				col2: '35-40万'
			}]
		}
	}

	$(document).ready(function() {
		createChuangdian();
		$(selector.mpe).find('div.contact').append(creatContactTable(mpeContact));
		$(selector.mpeFactoryInfo).append(createInfoTable(mpeData.factory));
		$(selector.mpeProductInfo).append(createInfoTable(mpeData.product));
		$(selector.mpeShopInfo).append(createInfoTable(mpeData.shop));
	});

	function createChuangdian() {
		$(selector.category)
			.append($('<div class="categoryText">软床</div>'))
			.append($('<div class="categoryText">床垫</div>'))
			.append($('<div>The soft bed mattress</div>'));
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
			$tr.append($('<td class="infoCol1" />').html(this.col1 + ':'));
			$tr.append($('<td class="infoCol2" />').html(this.col2));
			$table.append($tr);
		});

		$div.append($h4).append($table);
		return $div;
	}
})(jQuery);