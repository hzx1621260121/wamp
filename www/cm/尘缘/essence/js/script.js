$(function() {
	var counter = 0;
	// 每页展示4个
	var num = 3;
	var pageStart = 0,
		pageEnd = 0;

	// dropload
	$('.content').dropload({
		scrollArea: window,
		loadDownFn: function(me) {
			$.ajax({
				type: 'GET',
				async: false,
				url: 'json/more.json?page=' + counter,
				dataType: 'json',
				success: function(data) {
					var result = '';
					counter++;
					pageEnd = num * counter;
					pageStart = pageEnd - num;

					for(var i = pageStart; i < pageEnd; i++) {

						
						result += '<li>' +
							'<figure class="topimg">' +
							'	<figure class="topinin"><img src="' + data.lists[i].pic + '" class="topinimg"></figure>' +
							'</figure>' +
							'<figure class="downtext">' +
							'	<h1>' + data.lists[i].title + '</h1>' +
							'	<span>' + data.lists[i].title + '</span><span>' + data.lists[i].name + '</span>' +
							'</figure>' +
							'</li>';
							

						if((i + 1) >= data.lists.length) {
							// 锁定
							me.lock();
							// 无数据
							me.noData();
							break;

						};

					}
					// 为了测试，延迟1秒加载
					setTimeout(function() {
						$('.lists').append(result);
						// 每次数据加载完，必须重置
						me.resetload();
						

					}, 400);
					

				},
				error: function(xhr, type) {
					alert('Ajax error!');
					// 即使加载出错，也得重置
					me.resetload();
				}
				
			});
			
			
			setTimeout(function() {
				$(".topinimg").each(function(){//each：为每个匹配元素规定运行的函数。
					h=$(this).height();
					w=$(this).width();
					if(w < h) {
						//console.log('宽<高');
						$(this).parent().parent().addClass("hover");
						$(this).parent().addClass("hover");
					}else{
						//console.log('宽>高');
						$(this).parent().parent().removeClass("hover");
						$(this).parent().removeClass("hover");
					}
				});
			}, 500);
		}
		
	});
	
	
	
});