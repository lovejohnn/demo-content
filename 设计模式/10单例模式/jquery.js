/**
 * ģ��jquery����ʽ����
 */
//Ϊ����(Function)��չ����,���Ƕ�һ�����ľ�̬����
Function.prototype.method = function(name,fn){
	this.prototype[name] = fn;
	return this;
};
(function(){
	//���ǵ�������˽�б�����д��
	function _$(els){};	
	//׼������
	_$.onready = function(obj,fn){
		if(obj){
			//������ɶ���(_$)ע�ᵽwindow��
			obj.$ = function(){
				return new _$(arguments);
			}			
		}else{
			//������ɶ���(_$)ע�ᵽwindow��
			window.$ = function(){
				return new _$(arguments);
			}
		}
		fn();
	}
	//��ʽ�Ķ���֣��jquery���ṩ�Ĳ�������
	_$.method("addEvent",function(type,fn){
		fn();
	}).method("getEvent",function(fn,e){
		fn();
	}).method("addClass",function(className){
		fn();
	}).method("removeClass",function(className){
		fn();
	}).method("replaceClass",function(oldClass,newClass){
		fn();
	}).method("getStyle",function(el,fn){
		fn();
	}).method("setStyle",function(el,fn){
		fn();
	}).method("load",function(url,fn){
		fn();
	});
	//��ʼʹ��
	var com = {};
	_$.onready(com,function(){
//		$("div01").addEvent("click",function(){
//			alert("click Event");
//		})
		com.$("div01").addEvent("click",function(){
			alert("click Event");
			com.$(this).getEvent(function(){
				alert("click getEvent");
			})
		})		
	})
})()










