(function(){
	//eval ���ǰ�һ���ַ���������һ���������ҵ���
	var str = "var show = function(){alert(100)}()";
	//eval(str)
	//���ݿ�᷵��һ���ַ���(������javaScrpit����)
	var a = "[1,2]";
	var array = eval(a);
	for (var i = 0; i < array.length; i++) {
		alert(array[i])
	}
})()