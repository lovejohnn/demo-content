/**
 * ��һ��ʵ����������ʱ���õ�����
 */
(function(){
	//����һ��cat
	function Cat(name){
		this.name = name;
		this.run = function(){
			document.write(name+ " start run");
			return this;
		}
		this.stopRun = function(){
			document.write(name+ " stop run");
			return this;
		}
		this.sing = function(){
			document.write(name+ " start sing");
			return this;
		}
		this.StopSing = function(){
			document.write(name+ " stop sing");
			return this;
		}		
	}
	//����
	var c = new Cat("USPCAT");
	c.run().stopRun().sing().StopSing();
})()