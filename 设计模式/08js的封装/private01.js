/**
 * ��Ϣ�����������յ�Ŀ��,��װֻ���������ص�һ�ַ��� 
 */
(function(){
	/**
	 * 1.�Ż�������
	 * 2.�������淶����˽�к͹��еķ�ʽ
	 * 3.�հ�
	 */
	//�Ż�����
	function Person(age,name){
		this.name = name;
		if(!this.checkAge(age)){
			throw new Error("���������0��150֮��");
		}
		this.age = age;
	}
	//var p = new Person(-10,"JIM");
	//alert(p.age)
	//�����������
	Person.prototype = {
		checkAge:function(age){
			if(age>0 && age < 150){
				return true;
			}else{
				return false;
			}
		}
	}
	Person.prototype["getName"] = function(){
		return this.name || "USPCAT.COM";	
	}
	//var p = new Person(-10,"JIM");
	var p = new Person(27,"JIM");
	var p2 = new Person(27);
	alert(p2.getName());
	
	
	
	
	
	
	
	
	
	
	
	
})()