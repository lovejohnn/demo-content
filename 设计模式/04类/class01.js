(function(){
	//��javascript����������function��������
	function Shape(){
		var x = 1;
		var y = 2
	}
	//Ȼ�������ʵ����һ��������? ͨ��new �ؼ���
	var aShape = new Shape();
	//������ڲ�������var �������˽�б��� ��β��ܶ��干�б�����?
	function Shape2(){
		this.x = 1;
		this.y = 2;
	}
	var bShape = new Shape2();
	//����
	//alert(bShape.x)
	//������˽�б����⻹������var����˽�к���
	//private ����
	function Shape3(){
		var draw = function(){
			//˽�к���
		}
		this.draw2 = function(){
			//�����Կ����Ĺ��к���
		}
	}
	var c = new Shape3();
	c.draw2();
	//��javascriptģ��OOP���
	function Shape4(ax,ay){
		var x = 0;
		var y = 0;
		var init = function(){
			x = ax;
			y = ay;
		}
		init();
		this.getX = function(){
			return x;
		}
	}
	var d = new Shape4(2,4);
	alert(d.getX());
	//ģ��OOP��̵Ĺ��캯��,����������д��̬���Ժ;�̬����
	//JS�о�̬���������õ������ϵĶ����Ƕ���
	function Person(){this.Name = "YUNFENGCHENG"};
	//��̬����
	Person.age = 0;
	Person.showName = function(obj){
		alert(obj.Name)
	}
	Person.showName(new Person())
//	Array.each= function(){
//	}
	//���ཨ�鷽��
	var a = {};
	var array = [];
	a["name"] = "USPCAT.COM";
	alert(a.name)
})()






