(function($) {
	'use strict';

	var selector = {
		part1: '#part1',
		p2block1: '#part2 #block1',
		p2block2: '#part2 #block2',
		p2block3: '#part2 #block3',
	};

	var part1Items = [{
		badge: '趋势一',
		badgeText: 'Globalization 全球化',
		text: '随着第22 届APEC 峰会在北京的成功举行，亚太自贸区的启动和关税取消，大量国外品牌进驻中国市场，国际间的交流和融合将发生在我们身边。如今的全球化不再一味是中国对西方文化的COPY，而是双向融合后产生的全新风格。一方面，美国和欧洲越来越简约的设计趋势，将影响中国家具设计；另一方面，中式文化的复兴，中国设计正以全新的姿态融入世界并影响世界。',
		pic: ['qushi-1.jpg']
	}, {
		badge: '趋势二',
		badgeText: 'Mix & Match 混搭',
		text: '源于2001 年日本时装界的混搭，已经很难考证是谁把它引入建筑、室内装修、美食等领域。如今随着欧美风格的大热和中式的复苏，混搭继续在家具行业“得宠”，并进行得更加彻底和深入。最终由企业的真正硬实力和软实力，来保证产品混搭的整体效果。',
		pic: ['qushi-2.jpg']
	}, {
		badge: '趋势三',
		badgeText: 'Crossover 跨界',
		text: '“苹果的Mac 之所以伟大，正是因为它的创意源于一群音乐家、诗人、艺术家和历史学家。”如今越来越多产品、室内、建筑、软装等行业设计师的跨界，以及大量出国攻读设计专业留学生的归国，不仅为家具行业带来更先进成熟的研发模式，而且提升了整个行业的品质。不少汽车、奢侈品品牌也都跨界进入家具行业，如Armani、Aston martin 等。',
		pic: ['qushi-3.jpg']
	}, {
		badge: '趋势四',
		badgeText: 'Segmentation 消费群体细分',
		text: '从全球范围来看Female shift 大趋势，平衡了以男性为主导的社会结构形式，女性的特质和潜力被更多关注和开发，并已经在时尚、服装等领域大放异彩。过去我们一直强调主流消费群体的需求，但随着80、90 后新兴消费群体和“千禧一代”的崛起，以及60、70 后主流消费群体年龄逐渐增长，他们的消费特征和新需求不容忽视。',
		pic: ['qushi-4.jpg']
	}, {
		badge: '趋势五',
		badgeText: 'Custom-made 全屋定制',
		text: '从高端定制到全屋定制，定制已经成为未来的大趋势。全屋定制更是从传统的活动家具延展到定制衣柜、橱柜、鞋柜，以及门、楼梯、门厅、飘窗等，帮助消费者解决所有装修问题，实现拎包入住的理念，统一的风格调性获得最佳的搭配效果。',
		pic: ['qushi-5.jpg']
	}, {
		badge: '趋势六',
		badgeText: 'Intelligent 智能',
		text: '国际智能家居市场，引来互联网巨头谷歌和世界最顶尖的科技公司苹果的强势介入，智能家居也被称为下一个亿美金规模的市场。随着物联网、云计算等战略性产业的迅速发展，小米和美的的牵手，TCL 与京东、海尔与阿里巴巴的战略合作，“工业4.0”概念的提出，智能必将成为家具行业未来发展的大趋势。',
		pic: ['qushi-6.jpg']
	}, {
		badge: '趋势七',
		badgeText: 'Environment &health 环保健康',
		text: 'APEC 峰会期间，北京市政府对污染企业的整顿，让环保成为消费者看重的生活方式。消费者对“健康”概念的全新认识和关注，让环保产品成为新消费热点，也给企业带来良好的品牌价值。如曲美新品万物放弃传统的板材和实木，采用更环保和可持续发展的竹钢。',
		pic: ['qushi-7.jpg']
	}, {
		badge: '趋势八',
		badgeText: 'Experience 终端情境体验',
		text: '家具行业先后经历了卖材料、卖商品、卖服务的阶段，正好对应人类经济生活发展的三个阶段“农业经济、工业经济和服务经济”。进入2014 年，美式家具的兴起，苹果体验店、OTO 销售模式的大热，家具行业也迎来了体验经济的时代。通过互动式的、触发情感的和印象深刻的终端情境体验，让消费者参与进来。',
		pic: ['qushi-8.jpg']
	}, {
		badge: '趋势九',
		badgeText: 'Internet thinking 互联网思维',
		text: '互联网思维是对市场、用户、产品、传统企业价值链乃至整个商业生态进行重新审视的思考方式。小米的迅速崛起，彻底颠覆传统企业的营销模式和盈利模式；林氏木业、商品宅配、索菲亚等的OTO 模式，通过线下实体店体验，线上购买的方式正在大热和流行，互联网思维必将成为未来企业竞争的主要手段。',
		pic: []
	}];

	var p2block1Items = [{
		badge: '趋势一',
		badgeText: '时尚·艺术·意式风格',
		text: '2014 年全屋定制的大肆兴起，以实用为主的定制家具只解决了功能和储物问题。市场需要偏艺术和个性的产品来平衡功能与审美的双重需求。意式风格素来以有机形态和高超的实木工艺著称，时尚的、偏艺术的意式风格给现代实木市场注入新的朝气。',
		pic: ['qushi-9.jpg']
	}, {
		badge: '趋势二',
		badgeText: '年轻化·轻量化·北欧风格',
		text: '当前正处于80、90 后结婚生子、首次置业的高峰期，面对一二线城市居高不下的房价，两房和小三房紧俏的现状，以往大体量、价值感强的现代实木不再适合他们的户型需求。追求年轻化、轻量化和高性价比的北欧风格因为更接近年轻人的DNA而受到青睐。',
		pic: ['qushi-10.jpg']
	}, {
		badge: '趋势三',
		badgeText: '文化塑造产品核心竞争力',
		text: '文化塑造是“体验经济”时代的主要特征，如迪士尼主题游乐园、欢乐海岸主题休闲广场、实木家具主题和品牌故事等。文化赋予产品鲜明的“主题和基调”和无限的创作源泉，带给消费者新鲜的、统一的、深刻的、扑面而来的情感体验，构成产品的核心竞争力。',
		pic: ['qushi-11.jpg']
	}, {
		badge: '趋势四',
		badgeText: '多材质混搭增添时尚感',
		text: '材料的创新一直以来都是现代实木关注的焦点之一。从木材的选择，软包面料、皮革的搭配，到金属、大理石、玻璃、藤、竹的点缀，多材料多材质的混搭已经成为一种潮流。2015 则更倾向于通过多材料不同质感的细腻表达，增加现代实木的时尚感。',
		pic: ['qushi-12.jpg']
	}, {
		badge: '趋势五',
		badgeText: '新功能和智能提升生活品质',
		text: '基于现代生活节奏和使用方式，经过细心而周到考量后的新功能和智能的融入，成为未来家居发展的必然趋势。它不仅能给生活带来极大的便利性，提升生活品质，更是带给消费者前所未有的情境体验。',
		pic: ['qushi-13.jpg']
	}];

	var p2block2Items = [{
		badge: '趋势一',
		badgeText: '新中式',
		text: '“新中式”并不是家具行业的一个新名词，可以理解为“中国当代的传统文化表现”，在不同的时代背景下，对传统文化的解读也会有细微的差别。处于新世界格局的2015年，新中式将以更加自信的姿态，通过现代的工艺与材质，中式元素重组创新，继续演绎中式文化的精髓。',
		pic: ['qushi-14.jpg']
	}, {
		badge: '趋势二',
		badgeText: '禅意中式',
		text: '《乔布斯传》关于东方禅意生活的描述，让东方禅意生活受到国际创意设计界的高度关注。禅意中式正是将东方禅意美学与西方现代简洁设计趋势相结合，使家具既具备东方意境，又采用国际化的设计语言，符合现代国际审美。',
		pic: ['qushi-15.jpg']
	}, {
		badge: '趋势三',
		badgeText: '时尚中式',
		text: '80、90 后新兴消费群体的崛起，他们对中式文化的解读和对中式家具的需求催生新的市场需求。年轻人对时尚文化的敏感度，要求中式家具通过新材料的运用、现代时尚造型元素的融合，以及流行色和软包布艺的搭配，营造符合时代特征的时尚中式家具。',
		pic: ['qushi-16.jpg']
	}, {
		badge: '趋势四',
		badgeText: '中西结合',
		text: 'APEC 峰会后，中美成为时事热点和讨论最多的话题。美式家具的适时流行和中式的复兴，消费者既想追逐潮流又不愿舍弃骨子里对中式的喜爱。不管是欧美形体的融入，还是美式造型中式氛围，都是对现代中式家具发展方向的新探讨。',
		pic: ['qushi-17.jpg']
	}, {
		badge: '趋势五',
		badgeText: '现代家居新体验',
		text: '现代家居更加注重空间氛围的营造，中式家具也开始吸收这种新的理念。如今的现代中式家具设计更像是一个系统工程，包括空间中的所有物品，天花板、墙壁、地板；吊灯、墙纸、挂画、软包、饰品、地毯等，都要经过悉心设计和规划，从而能带给消费者一致的、丰富的情感体验。',
		pic: ['qushi-18.jpg']
	}];

	var p2block3Items = [{
		badge: '趋势一',
		badgeText: '新生代- 青春萌动·清新文艺',
		keywords: '关键词：年轻化、简约、舒适、性价比…<br/>风格：美式乡村、地中海、小风格盛行（小法式、小美式、LOFT 风格...）',
		text: '“现代家居更加注重空间氛围的营造，中式家具也开始吸收这种新的理念。如今的现代中式家具设计更像是一个系统工程，包括空间中的所有物品，天花板、墙壁、地板；吊灯、墙纸、挂画、软包、饰品、地毯等，都要经过悉心设计和规划，从而能带给消费者一致的、丰富的情感体验。',
		pic: ['qushi-19.jpg']
	}, {
		badge: '趋势二',
		badgeText: '生活家- 自然·品质·温馨',
		keywords: '关键词：低碳环保、真实、感性、自然主义…<br/>风格：美式乡村、青少年儿童、现代美式、简美、现代经典',
		text: '“清逸起于浮世，纷扰止于内心”。现今，摆脱羁绊、重获自由成为人们崇尚的最高生活品质，实质与自然，物质与审美趋向平衡。简约、质朴的设计风格是众多人群所喜爱的，人们渴望温暖的物事，太过尖锐的造型以及冰冷的材质或暗沉色调、深色涂装不适宜大范围出现，营造一种静心、深思、顿悟的栖居氛围。',
		pic: ['qushi-20.jpg']
	}, {
		badge: '趋势三',
		badgeText: '冒险家- 艺术·创新·品质',
		keywords: '关键词：感知、亚文化、装饰艺术、精品质…<br/>风格：ArtDeco 新装饰艺术、Chinoiserie（中国风）、新美式',
		text: '人们开始排斥工业化所带来的一成不变，他们属于“亚文化”微社群的一支，他们拥有自身独特的信念与追求，对“时尚”有着独特的理解。<br/>好的产品需要有艺术美学以及文化审美的支撑，品质与美感需要艺术的手法去塑造，时尚离不开艺术，艺术需要文化衬托，艺术与文化可以创造时尚。',
		pic: ['qushi-21.jpg', 'qushi-22.jpg'],
		subBlock: [{
			title: '① ArtDeco 新装饰艺术',
			text: '独具奢华艺术魅力的AreDeco 装饰风格便是这一意识流派的产物，奢华、摩登、优雅、时尚而高冷的机械美学，兼容华贵典雅与时尚现代，抗拒工业量产，追求个性与独立的美学观点和文化品位。充分展现年轻一代的多元面孔同时洋溢着艺术情怀和叛逆不羁。'
		}, {
			title: '② Chinoiserie（中西结合）',
			text: '随着东西方文化的逐渐融合，Chinoiserie 艺术风格将再一次被人们所想起。Chinoiserie 是欧洲所塑造的一个“假想”的中国，充满了神秘、浪漫与奇遇。而今，随着时代的变迁，Chinoiserie 将以全新的姿态再次回归，东方题材、欧式情怀两者相互交融，感悟、提取、创造全新时尚生活艺术。'
		}]
	}, {
		badge: '趋势四',
		badgeText: '“她”时代- 时尚雅致·典雅奢华',
		keywords: '关键词：女性审美、“雅”奢复古、时尚温馨…<br/>风格：浪漫新古典、时尚美式、简美、法式(洛可可)',
		text: '这是一个女性和女性化主体消费的时代，无论是新一代职业女性，或是典雅居家富太，都具有足够的消费能力及权力。她们优雅、浪漫、时尚，对美的需求更加极致细腻。“她”同时也代表了一种女性消费思维模式，即“感性”消费。设计上有更多柔化的线条和细节上的装饰处理，柔软的面料搭配丝绒垂幔，展示了一种奢华、贵气、自在浪漫情调的生活方式。',
		pic: ['qushi-23.jpg']
	}, {
		badge: '趋势五',
		badgeText: '“实木”定制 - 中国意识流',
		keywords: '关键词：对称、大气、饱满、渗透、融合…<br/>风格：现代美式、现代经典、美式新古典、中西结合...',
		text: '对部分观念守旧人群及不少60、70 后消费群来说，“实木、对称、大气、饱满...”的中国式审美意识根深蒂固，为了抓住这一部分主力消费群，不少实木转型企业尝试结合“中国式审美”需求，将其与现代实木风格相结合，着力于设计适合中国人使用的具有东方韵味的现代经典美式家具，并逐步形成较强的市场生命力。<br/>我们不再一味地膜拜、复制西方历史上那些经典的设计元素, 而是更深层次的融合，通过对经典原型的提炼和转化，来表达对传统的尊重。',
		pic: ['qushi-24.jpg']
	}, {
		badge: '趋势六',
		badgeText: '“体验”消费- 色彩·空间·故事',
		keywords: '关键词：用户体验、感性消费、情境故事演绎、空间氛围、软包配色等',
		text: '我们谈美式家具设计，最大特色便是休闲自在的美式家居文化理念，“从美的角度出发，延伸到色彩、物件、空间，每件家具散发的灵气都传递出不同的生活方式与文化底蕴”。对美式家居而言，“情景”互动，用户体验更是至关重要，而“体验”不仅限于优质的售前售后服务，更是一个个故事与情景的表达，对生活方式的全新演绎，帮助大众更好地理解设计、感知生活。',
		pic: ['qushi-25.jpg']
	}];

	$(document).ready(function() {
		$.each(part1Items, function() {
			$(selector.part1).append(createQushiItem(this));
			$(selector.part1).append(createQushiItemPics(this.pic));
		});

		$.each(p2block1Items, function() {
			$(selector.p2block1).append(createQushiItem(this));
			$(selector.p2block1).append(createQushiItemPics(this.pic));
		});

		$.each(p2block2Items, function() {
			$(selector.p2block2).append(createQushiItem(this));
			$(selector.p2block2).append(createQushiItemPics(this.pic));
		});

		$.each(p2block3Items, function() {
			$(selector.p2block3).append(createQushiItem(this));
			$(selector.p2block3).append(createQushiItemPics(this.pic, this.subBlock));
		});
	});

	function createQushiItem(item) {
		var $qushiItem = $('<div class="row qushiItem" />');
		var $badge = $('<div class="col-xs-4" />')
			.append($('<div class="partBadge" />').html(item.badge))
			.append($('<div class="partBadgeText" />').html(item.badgeText));
		if (item.keywords) {
			$badge.append($('<div class="keywords" />').html(item.keywords));
		}
		var $text = $('<div class="col-xs-8 partText" />').html(item.text);
		$qushiItem.append($badge).append($text);

		return $qushiItem;
	}

	function createQushiItemPics(pics, subBlocks) {
		var $picContainer = $('<div class="picContainer" />');
		$.each(pics, function(idx, val) {
			if ($.isArray(subBlocks) && subBlocks[idx]) {
				$picContainer.append(createSubBlock(subBlocks[idx]));
			}
			$picContainer.append($('<div />').append($('<img class="brandPic">').attr('src', '../../images/materials/' + this)));
		});

		return $picContainer;
	}

	function createSubBlock(item) {
		var $subBlock = $('<div class="subBlock" />');
		var $title = $('<p class="subBlockTitle" />').html(item.title);
		var $text = $('<p class="subBlockText" />').html(item.text);
		$subBlock.append($title).append($text);

		return $subBlock;
	}

})(jQuery);