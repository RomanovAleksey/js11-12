$(function(){

	var html = $('#resume').html();

	var articles = [
		{
			name : 'Романов Алексей Влавимирович',
			profision : 'Логист, Снабженец, Водитель и там еще много чего',
			desire :
				[
				{
					title : 'Хочу учить фронтэнд, потому что:',
					content : 
					[
						{
							title : 'Мне это нравиться',
						},
						{
							title : 'Сейчас зарплата так себе',
						},
						{
							title : 'Да и график тоже так себе',
						},	
					],
				}],
			
			title : 'Мой контактный телефон',
			number : '0932879914',
			page : 'Моя страничка в вк',
			myFeedback : 'Мой фидбэк',
			feedback : 'Готов учиться до потери пульса :)',


	}];

	var content = tmpl(html,{
		data:articles
		});


	$('body').append(content);
});