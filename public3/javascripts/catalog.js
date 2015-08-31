(function($) {
	'use strict';

	var selector = {
		catalogLeft: '.catalogLeft',
		catalogRight: '.catalogRight'
	};

	$(document).ready(function() {
		$(selector.catalogLeft).append(
			createCatalogList('封面', 'fenmian')
			.append(createCatalogItem('赖氏', '01.html'))
			.append(createCatalogItem('微传媒广告', '02.html'))
			.append(createCatalogItem('舒达', '03.html'))
			.append(createCatalogItem('东莞名家具展', '10.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('趋势', 'qushi')
			.append(createCatalogItem('2016家具行业趋势发布', '04.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('精品推荐', 'jingpintuijian')
			.append(createCatalogText('按品类顺序排名,排名不分先后'))
			.append(createCatalogItem('Sleepmaker', '05.html'))
			.append(createCatalogItem('左右', '06.html'))
			.append(createCatalogItem('北美之家', '07.html'))
			.append(createCatalogItem('欧木轩', '08.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('软床床垫', 'ruanchuangchuangdian')
			.append(createCatalogItem('舒达', '09.html'))
			.append(createCatalogItem('美安娜', '11.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('沙发', 'shafa')
			.append(createCatalogItem('斯可馨', '12.html?v=1'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('板木家具', 'banmujiaju')
			.append(createCatalogItem('城市之窗', '13.html'))
			.append(createCatalogItem('艾琳娜', '14.html'))
		);


		$(selector.catalogRight).append(
			createCatalogList('儿童青少年', 'ertongqingshaonian')
			.append(createCatalogItem('蓝蓝部落', '15.html'))
			.append(createCatalogItem('洛可巴洛', '16.html'))
			.append(createCatalogItem('至优小屋', '17.html'))
			.append(createCatalogItem('杰克丹尼', '18.html'))
		);

		$(selector.catalogRight).append(
			createCatalogList('古典欧美', 'gudianoumei')
			.append(createCatalogItem('长实', '19.html'))
		);
		$(selector.catalogRight).append(
			createCatalogList('广告目录', 'guanggao')
			.append(createCatalogItem('洁维仕', '20.html'))
		);
		// $(selector.catalogRight).append(
		// 	createCatalogList('黄页信息', 'huangyexinxi')
		// 	.append(createCatalogItem('黄页目录'))
		// 	.append(createCatalogItem('黄页信息'))
		// );
	});

	function createCatalogList(listName, className) {
		var $div = $('<div class="catalogList" />').addClass(className);
		var $title = $('<div class="catalogListTitle" />').html(listName);

		$div.append($title);
		return $div;
	}

	function createCatalogItem(itemName, href) {
		return $('<a class="catalogItem" />')
			.append($('<span class="pull-left" />').html(itemName))
			.append($('<span class="pull-right" />'))
			.attr('href', href);
	}

	function createCatalogText(text) {
		return $('<div class="catalogText" />').html(text);
	}

})(jQuery);