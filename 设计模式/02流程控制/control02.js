/**
 * ѭ��
 */
(function(){
	/**
		for(���� = ��ʼ��ֵ;����<=����ֵ;����=����+����){
		}
	 */
	var arr = [1,2,3,45,6,5];
	for (var i = 0; i < arr.length; i++) {
		document.write(arr[i]+"<br>")
	}
	/**
		while(����<=����ֵ){
		}
	 */
	var i = arr.length-1;
	while(i>=0){
		document.write(i+"-->"+arr[i]+"<br>");
		i--;
	}
	/**
	 * for(���� in ����){
	 * }
	 */
	var o = {name:"USPCAT",age:1};
	for(k in o){
		document.write(k+"-->"+o[k]+"<br>");
	}
})()
































