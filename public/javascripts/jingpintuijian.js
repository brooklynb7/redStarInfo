(function($) {
	'use strict';

	var selector = {
		shimutekan: '.jingpintuijian',
		category: '.jingpintuijian .category'
	};

	$(document).ready(function() {
		createJingpintuijian();
	});

	function createJingpintuijian() {
		$(selector.category)
			.append($('<div class="categoryText">精品</div>'))
			.append($('<div class="categoryText">推荐</div>'))
			.append($('<div>Recommended</div>'));
	}
})(jQuery);