(function($) {
	'use strict';

	var selector = {
		catalogLeft: '.catalogLeft',
		catalogRight: '.catalogRight'
	};

	$(document).ready(function() {
		$(selector.catalogLeft).append(
			createCatalogList('趋势', 'qushi')
			.append(createCatalogItem('2015家具行业趋势发布'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('实木特刊', 'shimutekan')
			.append(createCatalogItem('京津鲁现代实木家具的新看点'))
			.append(createCatalogItem('汇丰', 'shimutekan/huifeng.html'))
			.append(createCatalogItem('兴叶', 'shimutekan/xingye.html'))
			.append(createCatalogItem('华日', 'shimutekan/huarijiaju.html'))
			.append(createCatalogItem('良木', 'shimutekan/liangmu.html'))
			.append(createCatalogItem('南洋胡氏', 'shimutekan/nanyanghushi.html'))
			.append(createCatalogItem('欧木轩', 'shimutekan/oumuxuan.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('新美式特刊', 'meishitekan')
			.append(createCatalogItem('解读“新美式”家具'))
			.append(createCatalogItem('北美之家', 'meishitekan/beimeizhijia.html'))
			.append(createCatalogItem('永和家具', 'meishitekan/yonghe.html'))
			.append(createCatalogItem('杜莎', 'meishitekan/dusha.html'))
			.append(createCatalogItem('南洋胡氏','meishitekan/nanyanghushi-ailun.html'))
			.append(createCatalogItem('兴叶家具','meishitekan/xingye-youmei.html'))
			.append(createCatalogItem('仁豪摩迪卡','meishitekan/renhaomodika.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('板木家具', 'banmujiaju')
			.append(createCatalogItem('城市之窗'))
			.append(createCatalogItem('艾琳娜'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('儿童青少年', 'ertongqingshaonian')
			.append(createCatalogItem('哥伦比尼'))
			.append(createCatalogItem('七彩人生'))
			.append(createCatalogItem('蓝蓝部落'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('实木家具', 'shimujiaju')
			.append(createCatalogItem('澳美森'))
			.append(createCatalogItem('莫霞'))
			.append(createCatalogItem('榜样尚品'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('新美式', 'xinmeishi')
			.append(createCatalogItem('赖氏'))
			.append(createCatalogItem('优胜美地'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('古典欧美', 'gudianoumei')
			.append(createCatalogItem('英格兰'))
			.append(createCatalogItem('长实'))
			.append(createCatalogItem('爱丽舍宫'))
			.append(createCatalogItem('英伦华庄'))
		);



		$(selector.catalogRight).append(
			createCatalogList('精品推荐', 'jingpintuijian')
			.append(createCatalogText('按品类顺序排名,排名不分先后'))
			.append(createCatalogItem('Sleepmaker', 'jingpintuijian/sleepmaker.html'))
			.append(createCatalogItem('雅兰'))
			.append(createCatalogItem('舒达'))
			.append(createCatalogItem('健威'))
			.append(createCatalogItem('左右'))
			.append(createCatalogItem('健威'))
			.append(createCatalogItem('澳美'))
			.append(createCatalogItem('柏森'))
			.append(createCatalogItem('南洋迪克'))
			.append(createCatalogItem('恒信'))
			.append(createCatalogItem('百强'))
			.append(createCatalogItem('杜莎'))
			.append(createCatalogItem('金天拓'))
			.append(createCatalogItem('仁豪'))
			.append(createCatalogItem('帝标'))
		);
		$(selector.catalogRight).append(
			createCatalogList('软床床垫', 'ruanchuangchuangdian')
			.append(createCatalogItem('MPE', '../ruanchuangchuangdian/mpe.html'))
			.append(createCatalogItem('路福'))
		);
		$(selector.catalogRight).append(
			createCatalogList('沙发', 'shafa')
			.append(createCatalogItem('斯可馨'))
			.append(createCatalogItem('利亚斯'))
			.append(createCatalogItem('安曼'))
			.append(createCatalogItem('德驰'))
		);
		$(selector.catalogRight).append(
			createCatalogList('红木家具', 'hongmujiaju')
			.append(createCatalogItem('美廷'))
		);
		$(selector.catalogRight).append(
			createCatalogList('黄页信息', 'huangyexinxi')
			.append(createCatalogItem('黄页目录'))
			.append(createCatalogItem('黄页信息'))
		);



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