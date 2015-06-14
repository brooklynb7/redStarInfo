(function($) {
	'use strict';

	var selector = {
		catalogLeft: '.catalogLeft',
		catalogRight: '.catalogRight'
	};

	$(document).ready(function() {
		$(selector.catalogLeft).append(
			createCatalogList('趋势', 'qushi')
			.append(createCatalogItem('2015家具行业趋势发布', 'qushi/qushi2015.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('实木特刊', 'shimutekan')
			.append(createCatalogItem('京津鲁现代实木家具的新看点', 'shimutekan/xinkandian.html'))
			.append(createCatalogItem('汇丰', 'shimutekan/huifeng.html'))
			.append(createCatalogItem('兴叶', 'shimutekan/xingye.html'))
			.append(createCatalogItem('华日', 'shimutekan/huarijiaju.html'))
			.append(createCatalogItem('良木', 'shimutekan/liangmu.html'))
			.append(createCatalogItem('南洋胡氏', 'shimutekan/nanyanghushi.html'))
			.append(createCatalogItem('欧木轩', 'shimutekan/oumuxuan.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('新美式特刊', 'meishitekan')
			.append(createCatalogItem('解读“新美式”家具', 'meishitekan/jiedumeishi.html'))
			.append(createCatalogItem('北美之家', 'meishitekan/beimeizhijia.html'))
			.append(createCatalogItem('永和家具', 'meishitekan/yonghe.html'))
			.append(createCatalogItem('杜莎', 'meishitekan/dusha.html'))
			.append(createCatalogItem('南洋胡氏','meishitekan/nanyanghushi-ailun.html'))
			.append(createCatalogItem('兴叶家具','meishitekan/xingye-youmei.html'))
			.append(createCatalogItem('仁豪摩迪卡','meishitekan/renhaomodika.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('板木家具', 'banmujiaju')
			.append(createCatalogItem('城市之窗', 'banmujiaju/chengshizhichuang.html'))
			.append(createCatalogItem('艾琳娜', 'banmujiaju/ailinna.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('儿童青少年', 'ertongqingshaonian')
			.append(createCatalogItem('哥伦比尼', 'ertongqingshaonian/gelunbini.html'))
			.append(createCatalogItem('七彩人生', 'ertongqingshaonian/qicaichengbao.html'))
			.append(createCatalogItem('蓝蓝部落', 'ertongqingshaonian/lanlanbuluo.html'))
			.append(createCatalogItem('洛克巴洛', 'ertongqingshaonian/luokebaluo.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('实木家具', 'shimujiaju')
			.append(createCatalogItem('澳美森', 'shimujiaju/aomeisen.html'))
			.append(createCatalogItem('莫霞', 'shimujiaju/moxia.html'))
			.append(createCatalogItem('榜样尚品','shimujiaju/bangyangshangpin.html'))
		);
		$(selector.catalogLeft).append(
			createCatalogList('新美式', 'xinmeishi')
			.append(createCatalogItem('赖氏家具', 'xinmeishi/laishi.html'))
			.append(createCatalogItem('优胜美地', 'xinmeishi/youshengmeidi.html'))
		);

		$(selector.catalogRight).append(
			createCatalogList('精品推荐', 'jingpintuijian')
			.append(createCatalogText('按品类顺序排名,排名不分先后'))
			.append(createCatalogItem('Sleepmaker', 'jingpintuijian/sleepmaker.html'))
			.append(createCatalogItem('雅兰', 'jingpintuijian/yalan.html'))
			.append(createCatalogItem('舒达', 'jingpintuijian/shuda.html'))
			.append(createCatalogItem('健威', 'jingpintuijian/jianwei.html'))
			.append(createCatalogItem('左右', 'jingpintuijian/zuoyou.html'))
			.append(createCatalogItem('澳美世家', 'jingpintuijian/aomei.html'))
			.append(createCatalogItem('柏森', 'jingpintuijian/bosen.html'))
			.append(createCatalogItem('南洋迪克', 'jingpintuijian/nanyangdike.html'))
			.append(createCatalogItem('恒信', 'jingpintuijian/henxin.html'))
			.append(createCatalogItem('百强', 'jingpintuijian/baiqiang.html'))
			.append(createCatalogItem('杜莎', 'jingpintuijian/dusha.html'))
			.append(createCatalogItem('金天拓', 'jingpintuijian/jintiantuo.html'))
			.append(createCatalogItem('仁豪', 'jingpintuijian/renhao.html'))
			.append(createCatalogItem('帝标', 'jingpintuijian/dibiao.html'))
		);
		$(selector.catalogRight).append(
			createCatalogList('软床床垫', 'ruanchuangchuangdian')
			.append(createCatalogItem('MPE', 'ruanchuangchuangdian/mpe.html'))
			.append(createCatalogItem('路福', 'ruanchuangchuangdian/lufu.html'))
		);
		$(selector.catalogRight).append(
			createCatalogList('沙发', 'shafa')
			.append(createCatalogItem('斯可馨', 'shafa/sikexin.html'))
			.append(createCatalogItem('利亚斯', 'shafa/liyasi.html'))
			.append(createCatalogItem('安曼家居', 'shafa/anman.html'))
			.append(createCatalogItem('德驰','shafa/dechi.html'))
		);
		$(selector.catalogRight).append(
			createCatalogList('红木家具', 'hongmujiaju')
			.append(createCatalogItem('美廷' , 'hongmujiaju/meiting.html'))
		);
		$(selector.catalogRight).append(
			createCatalogList('古典欧美', 'gudianoumei')
			.append(createCatalogItem('英格利', 'gudianoumei/yinggeli.html'))
			.append(createCatalogItem('长实家具', 'gudianoumei/changshi.html'))
			.append(createCatalogItem('爱丽舍宫', 'gudianoumei/ailishegong.html'))
			.append(createCatalogItem('英伦华庄', 'gudianoumei/yinglunhuazhuang.html'))
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