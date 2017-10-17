$(function() {
	var counter = 0;
	// 每页展示4个
	var num = 4;
	var pageStart = 0,
		pageEnd = 0;

	// dropload
	$('.content').dropload({
		scrollArea: window,
		loadDownFn: function(me) {
			$.ajax({
				type: 'GET',
				async: false,
				url: 'json/product.json?page=' + counter,
				dataType: 'json',
				success: function(data) {
					var result = '';
					counter++;
					pageEnd = num * counter;
					pageStart = pageEnd - num;

					for(var i = pageStart; i < pageEnd; i++) {

						result += '<li>' +
							'<figure class="example" style="background-image: url(' + data.lists[i].pic + ');"><a href="productchild.html"><img src="' + data.lists[i].pic + '" class="img-rounded" alt="" ></a><figure class="closebtn"></figure><figure class="bigimg"></figure></figure>' +
							'<figure class="righttext">' +
							'	<figure class="righttoptext">' +
							'		<h1>12345678</h1>' +
							'		<h2>' + data.lists[i].name + '</h2>' +
							'		<h3>' + data.lists[i].title + '</h3>' +
							'	</figure>' +
							'	<figure class="clearfix"></figure>' +
							'	<figure class="rightdowntext">' +
							'		<a class="follow"></a>' +
							'		<p>123666</p>' +
							'	</figure>' +
							'</figure>' +
							'</li>';
							
						/*result += '<li>' +
							'<figure class="topimg">' +
							'	<figure class="topinin"><img src="' + data.lists[i].pic + '" class="topinimg" id="img1"></figure>' +
							'</figure>' +
							'<figure class="downtext">' +
							'	<h1>' + data.lists[i].title + '</h1>' +
							'	<span>' + data.lists[i].title + '</span><span>' + data.lists[i].name + '</span>' +
							'</figure>' +
							'</li>';*/
						if((i + 1) >= data.lists.length) {
							// 锁定
							me.lock();
							// 无数据
							me.noData();
							break;
						}
					}
					// 为了测试，延迟1秒加载
					setTimeout(function() {
						$('.lists').append(result);
						// 每次数据加载完，必须重置
						me.resetload();

					

						/*var owidth = $(".topinimg").width();
						var ohei = $(".topinimg").height();
						if(owidth > ohei) {
							$(".topinimg").parent().parent().addClass("hover");
							$(".topinimg").parent().addClass("hover");

						}*/

					}, 400);

				},
				error: function(xhr, type) {
					alert('Ajax error!');
					// 即使加载出错，也得重置
					me.resetload();
				}
			});
		}
	});

});