define(['jquery','cookie'],function ($) {
	$('#loginBtn').click(function () {
	        $.ajax({
	            url:'/api/login',
	            type:'post',
	            dataType:'json',
	            data:$('#loginForm').serialize(),//tc_name=admin&tc_pass=123456
	            success:function (data) {
	                if (data.code==200) {
	                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
	                    location.href='/main/index'
	                };
	            }
	        })
	        return false
	    })	
})
