/**
 * ������Ŀ�������б�ӿ�������������ʵ����
 * ����ʵ���Ĺ��̲���new �ؼ���
 * ���մﵽ��Ч����,��̬,��������֮��������
 */
(function(){
	var Pet = new Interface("Pet",["eat","run","sing","reginster"]);
	//�����	
	var PetShop = function(){}
	PetShop.prototype = {
		//���۳���ķ���
		sellPeyShop:function(kind){
			//�������
			var pet;
			//kind ����
			switch(kind){
				case 'dog':
					pet = new Dag();
					break;
				case 'cat':
				 	pet = new Cat();
				 	break;
				case 'pig':
					pet = new Pig();
					break;
				default:
				    //��
					pet = new Bird();
			}
			//��֤�ӿ�
			Interface.ensureImplements(pet,Pet);
			pet.eat();
			pet.reginster();
			return pet;
		}
	}
	//����Ļ���
	function BasePet(){
		this.reginster = function(){
			document.write("����Ǽ�.....<br>");
		}
		this.eat = function(){
			document.write("�Զٱ���.....<br>");
		}
	}
	//ʵ��
	function��Dog(){
		Dog.superClass.constructor.call(this);
		this.run = function(){
			document.write("С���ܲ�.....<br>");
		}		
		this.sing = function(){
			document.write("С������.....<br>");
		}
	}
	function��Pig(){
		Pig.superClass.constructor.call(this);
		this.run = function(){
			document.write("С���ܲ�.....<br>");
		}		
		this.sing = function(){
			document.write("С����.....<br>");
		}
	}
	function��Cat(){
		Cat.superClass.constructor.call(this);
		this.run = function(){
			document.write("Сè�ܲ�.....<br>");
		}		
		this.sing = function(){
			document.write("Сè����.....<br>");
		}
	}
	function��Bird(){
		Bird.superClass.constructor.call(this);
		this.run = function(){
			document.write("С���ܲ�.....<br>");
		}		
		this.sing = function(){
			document.write("С�񳪸�.....<br>");
		}
	}	
	//�̳�
	extend(Dog,BasePet);
	extend(Pig,BasePet);
	extend(Cat,BasePet);
	extend(Bird,BasePet);
	
	//Pcat �����
	var pcatPetShop = new PetShop();
	var flowerPig = pcatPetShop.sellPeyShop("pig");
	flowerPig.run();
	/**
	 * ò�ƺ�����,�������ǲ�ס����ı仯
	 * ����˵�����̵��ֽ���һЩ�µ�Ʒ�ֵĳ���
	 * ���ʱ����Ŀǰ�ķ�������Ҫ�޸ĳ����̵������
	 * ��һ���򵥹�������� 
	 */
	//��̬����
	var PetFactoy = {
		sellPeyShop:function(kind){
			//�������
			var pet;
			//kind ����
			switch(kind){
				case 'dog':
					pet = new Dog();
					break;
				case 'cat':
				 	pet = new Cat();
				 	break;
				case 'pig':
					pet = new Pig();
					break;
				default:
				    //��
					pet = new Bird();
			}
			//��֤�ӿ�
			Interface.ensureImplements(pet,Pet);
			return pet;
		}		
	}
	//���ù������³����̵�
	var PetShop2 = function(){};
	PetShop2.prototype = {
		sellPeyShop:function(kind){
			var pet = PetFactoy.sellPeyShop(kind);
			pet.eat();
			pet.reginster();
			return pet;
		}
	}
	var PcatPetShop2 = new PetShop2();
	var flowerCar = PcatPetShop2.sellPeyShop("cat");
	flowerCar.sing();
	/**
	 * ò�ƺ�����
	 * 	�µ�����
	 * �����ĵ�����ĵĵ�,��Ȼȫ�ǳ����
	 * �����ص㲻һ��,��������Ҫ����ʿ��,
	 * ������Ҫ�� ���ָ�������
	 */
	
	
	
})()




