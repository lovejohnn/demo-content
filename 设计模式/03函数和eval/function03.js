/**
 * ��������
 */
(function(){
	//1.�������ݵ�������
	function add(x,y,z){
		this.x = x||0;
		this.y = y||0;
		this.z = z||0;
		alert(this.x+this.y+this.z)
	}
	//add(12,3,5)
	//add(14,5)
	//�׶� : �޷���java�ȸ߼��������� �к�����ȷ��д������
	//���� : �����������ǹ�����������,��û����յĲ�������Ƕ���
	/**
	 * conf = {gridName:"",gridCode:"",gridSize:""}
	 */
	function gridUtil(conf){
		alert(conf["gridName"]+" "+conf["gridSize"]);
	}
	gridUtil({gridName:"YUNFENGCHENG",gridSize:10});
	//��ֵ���Ǵ�ַ
	var i = 100;
	var s = "one";
	function add3(i,s){
		i++;
		s+="--"
	}
	//alert(i);//100 or 101
	//alert(s);//"one" or one--
	/**
	 * ֤�� : ���������Ǵ�����ֵ��
	 * �Զ���ԵĴ��η�ʽ�Ǵ���"��ַ"
	 */
	//����
	var o = {name:"YUNFENGCHENG"}
	function change(o){
		o["name"] = "USPCAT.COM"
	}
	change(o);
	alert(o.name)
})()







