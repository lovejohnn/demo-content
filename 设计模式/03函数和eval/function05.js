/**
 * ����ʹ�ü���
 */
(function(){
	//������-->�ó������������ص��µĺ���(����һ�����������ĺ���)
	//ģ�����ݿ�
	var person = {"jim":"m","lili":"w"}
	var test = function(name){
		if(person[name] == "m"){
		
			/**
			 * �ڿ�,���
			 */
			return function(nk,wk){
				alert(nk+"  "+wk)
			}
			
		}else if(person[name] == "w"){
			/**
			 * �ڿ�,���,����
			 */
			return function(nk,wk,fk){
				alert(nk+"  "+wk+" "+fk)
			}			
		}
	}
	test("jim")("ok","ok")
	test("lili")("ok","ok","no")
})()







