/**
 * javascriptԭ��ģʽ(prototype)
 * 1.ԭ����һ������,�����Ķ������ͨ����ʵ�����Եļ̳�
 * ���еĶ�����Ĭ�ϵ�����¶���һ��ԭ��,��Ϊԭ�ͱ���Ҳ�Ƕ�������һ���������
 * ԭ���Ǳ�����ڲ���[Prototype]������ָ��.
 * 2.ʲô���Գ�֮Ϊ����
 * ��javascriptһ����������κε�����ļ�ֵ�Եļ��� function var a = {}
 * ���������һ������������(undefined,null,boolean,number,String)
 * ������ͨͨ��������
 */
(function(){
	/**
	 * javascript�е�ԭ��(prototype)�Ǻͺ���(function�������ӵ�)
	 * var o = {} ��������function ����ԭ����?
	 * ��:
	 * �����
	 * ÿһ��ͨ��new���������ɳ����Ķ��󶼳���һ������__proto__,
	 * ������Ա����˴������ĸ��캯����prototype��ԭ�͵�����
	 */
	function person(){}//����һ���ն���
	person.prototype.name = "USPCAT.COM";
	person.prototype.showName = function(){
		//���this��ʾ���ñ�������һ������ʵ��������
		alert(this.name);
	}
	new person().showName();
	
	var cat = {};//cat����
	//Ĭ�����صĵ�������Ĵ���
	Object.getPrototypeOf(cat).name = "MAOMI";
	cat.__proto__.master = "USPCAT.COM";
	//����
	cat.age = 2;
	cat["sex"] = "MAN";
	alert(cat.name +"  "+cat.age+" "+cat["sex"]+" "+cat.master)
	
	/**
	 * ����ԭ��ģʽʵ�ּ��ļ���
	 * 
	 */
	function per(){
		this.getName = function(str){
			alert(str)
		}
	}
	per.prototype.getAge = function(age){
		alert(age)
	}
	var a = {};//����
	a.__proto__ = per.prototype;
	a.getAge(2);
	//a.getName("YUNFENGCHENG")
	
	
	/**
	 * �򵥷�ʽʵ�ּ̳�
	 * JS�����޷���ʵ�ֶ�̳�
	 */
	var b = {};
	b.__proto__ = new per();
	//�ı�constructor����
	b.__proto__.constructor = b;
	b.getAge(1)
	b.getName("JAVASCRIPT")
//	class a{
//	}
//	class B extend A{
//		public B(){
//			usper()
//		}
//	}
	/**
	 * ��������
	 */
	function m(){
		this.showM = function(){
			alert("IM IS M")
		}
	}
	function n(){
		this.showN = function(){
			alert("IM IS n")
		}
	}	
	function k(){};
	n.prototype = new m();
	n.prototype.constructor = n;
	
	k.prototype = new n();
	k.prototype.constructor = k;
	
	var boo = new k();
	boo.showM();
	boo.showN();
})()















