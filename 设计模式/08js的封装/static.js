/**
 * ��ͨ�����Ժͺ���������������ϵ�
 * ����̬�ĺ����Ƕ��嵽�������
 */
(function(){
	function Person(name,age){
		this.name = name;
		this.showName = function(){
			alert(this.name)
		}
	}
	//��һ�־�̬������д��
	Person.add = function(x,y){
		return x+y;
	}
	//alert(Person.add(10,20))
	//�ڶ��ַ�ʽ
	//��������ķ�ʽ���ûһ������ȫӵ����ͬ�����ԺͲ���
	var cat = (function(){
		//˽�о�̬����
		var AGE = 10;
		//˽�к���
		function add(x,y){
			return x+y;
		}
		return function(){
			this.AGE = AGE;
			this.add = function(x,y){
				return add(x,y)
			}
		}
	})()
	alert(new cat().add(1,2)+"  "+new cat().AGE);
	alert(new cat().AGE);
	/**
	 * 1.�����ڲ������������Ƿ�װһ���ô�
	 * 2.������ع���ú�����,(���û�з�װ��ж���������Ĵ�����?)
	 * 3.����ģ��ֱ�ӵ����
	 * �׶�
	 * ˽�еķ��������ú��ѽ��е�Ԫ����
	 * ʹ�÷�װ�ͻ���ζ���븴�ӵĴ���򽻵�
	 * ��������Ƿ�װ��javascript���Ǻ���ʵ�ֵ�
	 */
})()


