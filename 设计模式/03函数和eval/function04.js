/**
 * �����ݹ�
 */
(function(){
	//�����ı���� 1~100 �õݹ��㷨����ۼ�
	function add(start,end){
		var num = 0;
		num = num + start;
		if(start < end){
			num = num + add(start+1,end);
		}
		return num;
	}
	
	alert(add(1,100));
})()







