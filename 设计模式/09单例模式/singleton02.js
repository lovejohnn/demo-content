/**
 * ����ģʽ��JS��ʹ�÷ǳ���Ƶ��
 * ͨ��ȷ����������ֻ����һ��ʵ��,
 * ��Ϳ���ȷ���Լ������еĴ�����ʹ�õ���ȫ����Դ
 */
(function(){
	//ģ��һ��Ajax����
	function Ajax(){}
	Ajax.request = function(url,fn){
		if(true){
			fn("USPCAT.COM","EXTJS4");
		}
	}
	//����ͬ�հ���ԭ������01�����г��ֵ�����
	var UserInfo = (function(){
		//���ñհ��ǵ������Լ���˽�оֲ�����
		var name = "";
		var code = "";
		//����Ajax�������ݿ���ȡ������
		Ajax.request("WWW.USPCAT.COM",function(n,c){
			name = n;
			code = c;
		})
		return {
			name:name,
			code:code
		}
	})()
	//ʵ��
	alert(UserInfo.name)
})()



