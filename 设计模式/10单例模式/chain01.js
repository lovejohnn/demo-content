/**
 * ��һ��ʵ����������ʱ���õ�����
 */
(function(){
	//����һ��cat
	function Cat(name){
		this.name = name;
		this.run = function(){
			document.write(name+ " start run");
		}
		this.stopRun = function(){
			document.write(name+ " stop run");
		}
		this.sing = function(){
			document.write(name+ " start sing");
		}
		this.StopSing = function(){
			document.write(name+ " stop sing");
		}		
	}
	//����
	var c = new Cat("USPCAT");
	c.run();
	c.sing();
	c.StopSing();
	c.stopRun();
})()