/**
 * �������ͺ�����ת��
 */
(function(){
/**
 * ������������(3��)
 * (1)���� number
 *   ���� 3.1415927 ,0.251,.2,100,1.478E
 * (2)�ַ���
 *   string
 * (3)���� booble
 */
 //������ת�ַ���
 var num1 = 3.1415927;
 var str1 = Number.toString(num1); 
 document.write(typeof str1 == "string");//true
 document.write("<br>")
 //��������
 var num2 = num1.toFixed(2);
 document.write(num2);
 document.write("<br>")
 //����ָ����Ϊ��������
 var num3 = num1.toPrecision(4);
 document.write(num3);
 document.write("<br>")
 //(Math) ����һ�㷽��
 //��������round
 document.write(Math.round(4.7));
 document.write("<br>")
 //���������0~1
 document.write(Math.random());
 document.write("<br>")
 //0~10�������
 document.write(Math.floor((Math.random()*11)));
 document.write("<br>")
 document.write("-------------------------------<br>")
 
 //�ַ���
 //ע��(ת��) pca't  Ҫ���� pca\'t \n ���� 
 /**
	\' \" \& �ͺ�+ \\ \n \r �س� 
	\t \b \f ��ҳ
  */
 //���� length indexof substring chartAt(����)
 //���ת������
 var str2 = "USPCAT.COM";
 var str3 = "3.14";
 var number = Number(str3);
 document.write(typeof number == "number");
 document.write("<br>")
 document.write((str2 - 0)+"<br>");//NaN ����ֵ
 document.write((str3 - 1)+"<br>");//����Ǽ��������Զ����ַ���ת������
 document.write((str3 + 1)+"<br>");//�ӷ��ᵱ���ַ�����ƴ�Ӳ���
 //��������(boolean)
 //true | false
 var s = "";
 var o = {};//true
 var l = [];//true
 var n = null;
 var f = false;
 var u = undefined;
 document.write("-------------------------------<br>")
 if(!s){
 	document.write("s is false<br>")
 }
 if(!o){
 	document.write("o is false<br>")
 }
 if(!l){
 	document.write("l is false<br>")
 }
 if(!n){
 	document.write("n is false<br>")
 } 
 if(!f){
 	document.write("f is false<br>")
 }
 if(!u){
 	document.write("u is false<br>")
 }
 /**
s is false
f is false
u is false
n is false
  */
 if(str != "" && str != null && str != undefined){
 	//...
 }
 if(str){
 	//...
 }
 /**
  * 2��������
  * (1)����-->����ļ���(array):�±�(index) �Ǵ�0��ʼ��
  * ����
  * var arr = new Array();
  * (2)����Ķ���-->����(function)
  */
 /**
  * ����ֵ
  * (1)null ������Ч�Ķ���\����\����\�ַ���  ����Ϊ�� 
  * (2)undefined ���Ǵ���û�ж��� �Ϳղ���һ������
  * [û��] ���������� ��һ�����ӵ��Ǻ�������û�ж���
  * undefined ������Ҳû��
  */
 /**
  * �����������
  * Data����
  * Error�������
  * ReExp����
  */
})()






