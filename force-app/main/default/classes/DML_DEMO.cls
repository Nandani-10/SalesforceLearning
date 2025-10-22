public class DML_DEMO {
    Public static void insertDemo(){
     
    List<account> acclist = new list<Account>();
        try{
        for(integer i =0 ; i<200 ; i++){
            Account acc = new account();
            Acc.Name='Test Acc'+ i;
            Acc.Phone='1234567'+i;
            acclist.add(acc);
        }
   insert acclist;
}


    catch(DmlException e){
        System.debug(e.getmessage());
    }
    }
    public static void UpdateDemo(){
      List<account> accList1= new list<Account>();
        accList1=[select id , Name , Rating From account where Rating ='Hot'];
        for (Account acc:accList1){
            acc.Rating='Hot';
            acc.Industry='Media';
        }
        update acclist1;
    }
    Public static void DeleteDemo(){
        list<Account> acclist=new List<Account>();
        acclist= [select id , name from account where name like '%Test%'];
        delete acclist;
}
    public static void DtabseDemo(){
      Contact c = new Contact(FirstName = 'Nandani', LastName = 'Vyas');
      Contact c1 = new Contact(FirstName = 'Prashanth', LastName = 'Vyas');

       Database.insert(c);
Database.SaveResult results = Database.insert(c1) ; 
    }
         
}