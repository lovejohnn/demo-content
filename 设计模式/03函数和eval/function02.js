/**
 * �ص�����
 */
(function(){
	//���ջص������ĺ���
	function add(x,y,fn){
		this.x = x||1;
		this.y = y||1;
		if(fn){
			fn(this.x+this.y);
		}
	}
	add(1,2,function(v){
		if(v>0){
			alert("re > 0")
		}else{
			alert("re <= 0")
		}
	})
})()