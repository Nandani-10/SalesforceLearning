public class ConditionalStmt {
    
    public static void Max(integer num1 ,integer num2){
     //Integer num1= 20 , num2= 40 ;
        if (num1>num2){
            System.debug('Greater num');
        }
        else{
             system.debug('smaller num');

            }
        }
    public static void Vote(Integer Age){
        if (Age>=18){
system.debug('A person can vote');
        }
        else {
            system.debug('a person cant vote; beloe 18 ');
        }
    }
    public static void Evennumber(integer num){
        if(math.mod(num , 2)==0){
            system.debug('Even number');
            system.debug(math.log10(23.0));
        }
        else {
            system.debug('Odd number');
        }
    }
    public static void CheckInteger(integer num){
        if (num <0){
            System.debug('Negative number');
           if(num ==0) {
            System.debug('Zero');
        }
        }
        else{
            System.debug('Postive number');
        }
    }
    public static void Logicopp(Integer num1 , integer num2){
        if (num1 >50 && num2<20){
            system.debug('True');
        }
        else
            System.debug('False');
        
    }
    public static void LoopDemo(){
    for(integer i = 1 ; i<5 ; i++){
        System.debug(i);
    }
        }
    public static void table(integer n){
        for (integer i = 1 ; 1<=10; i++){
            System.debug(n*i);
        }
    }
    public static void SumofNaturalNumber(Integer n ){
        integer j , sum = 0;
        for(j= 1; j<=n ;j++){
            sum= sum +j;
        }
       System.debug(sum);
    }
    Public static void TestWhile(integer n){
        integer z=1;
        while(z<10){
            System.debug(z);
z++;
        }
    }
    Public static void LoopForeach(){
        list<integer> Listint= new list<integer>{1,2,3,4,5};
        for(integer i : listint){
System.debug(i);
        }
     }
    public static void AccountList(){
        List<Account> acclist = new list<Account>();
        acclist = [select name,id  from Account limit 10];
        if(acclist.size()>0){
            for(Account acc: acclist){
system.debug(acc.name + acc.id);
            } 
         }        
    }
    Public static void QueryDemo(){
        List<account> AccList= [select id , Name from Account where industry='Education' order by id];
        System.debug(AccList);
    }
   
}