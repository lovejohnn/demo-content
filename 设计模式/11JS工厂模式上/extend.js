	function extend(subClass,superClass){
		//1.������ԭ�������Ե��ڸ����ԭ������
		//��ʼ��һ���м�ն���,Ϊ��ת���������ϵ
		var F = function(){};
		F.prototype = superClass.prototype;
		//2.�����༯��F
		subClass.prototype = new F();
		subClass.prototype.constructor = subClass;
		//3.Ϊ������������superClass
		subClass.superClass = superClass.prototype;
		//4.����һ������,�������ǵ�ԭ�����ǳ���(Object) ��ôҲҪ����Ĺ��캯����������
		if(superClass.prototype.constructor == Object.prototype.constructor){
			superClass.prototype.constructor = superClass;
		}
	}