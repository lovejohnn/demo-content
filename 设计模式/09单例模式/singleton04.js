/**
 * ��֧����
 * �ô�:
 * ����Ajax��ʱ����ݲ�ͬ���������ò�ͬ��XHR(XMLHttpRequest)
 * �ڲ�ͬ�ֱ��ʵ�����³�ʼ����һ���Ľ���(PCAT2)
 */
(function(){
	//�õ������ķֱ���
	var screenWidth = window.screen.width;
	var screenheigth = window.screen.heigth;
	var portalInfo = (function(){
		var $12801024 = {info:'1,2,3,5'}
		var $1024768 = {info:'4,2,1,2'}
		if(screenWidth == 1280){
			return $12801024;
		}else if(screenWidth = 1024){
			return $1024768;
		}
	})();
	alert(portalInfo.info);
})()
//��Щ���� javascript�ĸ����,������ʹ�ü���