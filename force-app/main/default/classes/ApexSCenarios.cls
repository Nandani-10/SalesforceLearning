public class ApexSCenarios {

    Public static void APexSCenario1(){
        List<Account> accList = new List<Account>();
        acclist = [select id ,Name , (select Id from contacts)
                 from Account where Phone != null];
        if(!acclist.isEmpty()){
            for (account acc : acclist){
                System.Debug(acc.Name +' has ' + acc.Contacts.size()+ 'contacts related');
            }
        
        }
    }
        Public static void Apexscenario2(){
            List<account> acclist1= new list<account>();
            acclist1= [select Name ,(select id , Amount ,name from opportunities) from Account where Phone != null];
            For(account acc: acclist1){
                Decimal total = 0;
                for(opportunity opp : acc.opportunities){
                    if(opp.Amount != Null){
                        total = total + opp.amount;
                }
                System.debug(acc.Name + 'has'+ total +'worth opportunities');
            }
        }
    }
}