
(function(){
	//�������淶������˽�к͹��б���
	function Person(name,age,email){
		//����˽�б���
		this._name;//˽��
		this._age;//˽��
		this.setName(name);
		this.setAge(age);
		this.email = email;//����
		
	}
	Person.prototype = {
		setName:function(name){
			this._name = name;
		},
		setAge :function(age){
			if(age>0 && age < 150){
				this._age = age;
			}else{
				throw new Error("���������0��150֮��");
			}			
		}
	}
	var p = new Person("JIM",-1,"JIM@USPCAT.COM");
})()