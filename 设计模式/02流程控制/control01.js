/**
 * ��֧
 */
(function(){
	/**
		if(����){
			//...
		}
		if(����){
			//..
		}else if(����){
			//..
		}else{
		}
	 */
	//ʵ��
	var d = new Date();
	var time = d.getHours();
	if(time >= 18){
		document.write("<b>good evening</b>")
	}else{
		document.write(time)
	}
	//ʵ��2
	if(time<10){
		document.write("<b>good ,morning</b>")
	}else if(time>=10 && time<16){
		document.write("<b>good ,day</b>")
	}else{
		document.write("<b>good evening</b>");
	}
	//ʵ��3
	//��Ŀ����� (����)?"����":"ʧ��"
	var str = "";
	str = (time>10)?"good ,day":"good evening";
	//alert(str);
	
	/**
	 * 	switch �����(n)�����Ǳ��ʽ,Ҳ�����Ǳ���
		switch(n){
			case 1:
			    //����
			   break;
			case 2:
			    //����
			    break;
			default:
				//����
				break;
		}
	 */
	document.write("<br>")
	theDay = d.getDay();
	switch(theDay){
		case 5:
			document.write("finally friday");
			break;
		case 6:
			document.write("super zhouliu");
			break;
		case 0:
			document.write("sleepy sunday");
			break ;
		default :
			document.write("xiwang һ�� zhoum");
	}
		
})()
































