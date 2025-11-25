public with sharing class OpportunityDataController {

    @AuraEnabled(cacheable=true)
    public static Integer getTotalCount() {
        return [SELECT COUNT() FROM Opportunity];
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(Integer pageSize, Integer pageNumber) {
        Integer offsetVal = (pageNumber - 1) * pageSize;
        return [
            SELECT Id, Name, StageName, Amount, CloseDate
            FROM Opportunity
            ORDER BY CreatedDate DESC
            LIMIT :pageSize OFFSET :offsetVal
        ];
    }

    @AuraEnabled
    public static String saveOpportunities(List<Opportunity> oppList){
        try {
            upsert oppList;
            return 'SUCCESS';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String deleteOpportunity(Id oppId){
        try {
            // FIXED: Delete expects an SObject
            delete [SELECT Id FROM Opportunity WHERE Id = :oppId];
            return 'DELETED';
        } catch (Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}
