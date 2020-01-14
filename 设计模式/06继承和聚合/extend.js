/**
 * �̳�
 */
(function(){
	//����һ����Ա��
	function Person(name){
		this.name = name;
	}
	//������ʦ��
	function Teacher(name,books){
		//call�������Խ�һ�������Ķ��������Ĵӳ�ʼ�������this������
		//����Person�Ĺ��캯��,��ΪPersonû��new �������Ǹ��ն���
		//�൱��java�е�super����
		Person.call(this,name);
		this.books = books;
	}
	//ʹ��ʦ��̳���Ա��
	Teacher.prototype = new Person();
	Teacher.prototype.constructor = Teacher;
	Teacher.prototype.getBook = function(){
		return this.name +" "+ this.books;
	}
	//����
	var jim = new Teacher("JIM","EXTJS4");
	//alert(jim.getBook());
	
	/**
	 * ����Extend����Ϊ�˳�����ʯ���еļ��ɲ���
	 */
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
	//����
	function Author(name,books){
		Author.superClass.constructor.call(this,name);
		//Person.call(this,name);
		this.books = books;
		this.getBook = function(){
			return this.name +" "+ this.books;
		}
	}
	//�̳�
	extend(Author,Person);
	//�˵�
	var peter = new Author("YUNFENGCHENG","JAVASCIPT");
	alert(peter.getBook())
})()












