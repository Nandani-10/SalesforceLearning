public class CatFactAPICaller {

    public static void getAndInsertCatFact() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        
        // API endpoint
        request.setEndpoint('https://catfact.ninja/fact');
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200) {
            Map<String, Object> catData = 
                (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            
            String fact = (String) catData.get('fact');
            
            Cat_Fact__c catRecord = new Cat_Fact__c(
                Fact__c = fact
            );
            
            insert catRecord;
            
            System.debug('✅ Cat Fact inserted successfully: ' + fact);
        } else {
            System.debug('❌ API call failed: ' + response.getStatusCode() + ' - ' + response.getBody());
        }
    }
}