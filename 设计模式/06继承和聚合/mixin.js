/**
 * ��Ԫ��
 * �е��ʺϲ���Ҫ�ϸ�ļ̳�,����������Ҫ����һ����(����)�еĵ�һЩ����
 * 
 */
(function(){
	//����׼����Ҫ���ۺϵĺ���
	var JSON = {
		toJSONString :function(){
			var outPut = [];
			for(key in this){
				outPut.push(key+" --> "+this[key])
			}
			return outPut;
		}
	};
	/**
	 * �ۺϺ���
	 */
	function mixin(receivingClass,givingClass){
		for(methodName in givingClass){
			if(!receivingClass.__proto__[methodName]){
				receivingClass.__proto__[methodName] = givingClass[methodName]
			}
		}
	}
	var o = {name:"YUN",age:27}
	mixin(o,JSON);
	document.write(o.toJSONString().join(","))
//	JSON.prototype = {
//		toJSONString :function(){
//			var outPut = [];
//			for(key in this){
//				outPut.push(key+" --> "+this[key])
//			}
//			return outPut;
//		}
//	}
//	//�����ۺϺ���
//	function mixin(receivingClass,givingClass){
//		for(methodName in givingClass.prototype){
//			//������û�������������������ھۺ�,��������
//			if(!receivingClass.prototype[methodName]){
//				receivingClass.prototype[methodName] = givingClass.prototype[methodName]
//			}
//		}
//	}
//	//var o = {name:"YUN",age:27}
//	var o = function(){
//		this.name = "YUN";
//		this.age = 17
//	}
//	mixin(o,JSON);
//	var a = new o();
//	document.write(a.toJSONString().join(","))
})()

