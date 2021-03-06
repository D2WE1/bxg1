define(['jquery','template','cookie'],function ($,template) {
	NProgress.start();
	NProgress.done();
	
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	
	//实现退出功能,后台会删除登陆信息的sessionId
	$('#logoutBtn').click(function () {
		$.ajax({
			url: '/api/logout',
			type: 'post',
			dataType:'json',
			success:function (data) {
				if (data.code==200) {
					location.href='/main/login'
				}
			}
		})
	})
	
	//返回PHPSESSID 和 loginInfo 两个属性
	//console.log($.cookie())
	
	//检测是否登陆，没登陆信息直接login页面
	var flag=$.cookie('PHPSESSID')
	//pathname返回的是域名后的路径名字，不返回?后的参数
	//当无登陆和login页面之外时
	if (!flag&&location.pathname!='/main/login') {
		location.href='/main/login'
	}
	
	//从cookie获取头像信息
	var loginInfo=$.cookie('loginInfo')
	loginInfo=loginInfo&&JSON.parse(loginInfo)
	// console.log(loginInfo)
	

	var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>'
	var html = template.render(tpl,loginInfo)
	$('.aside .profile').html(html)
	// $('.aside .profile img').attr('src',loginInfo.tc_avatar)
	// $('.aside .profile h4').html(loginInfo.tc_name)
})

