public class CandidateTriggerHandler {
    public static void preventDuplicateCandidates(List<Candidate__c> newCandidates) {
        Set<String> names = new Set<String>();
        for (Candidate__c cand : newCandidates) {
            names.add(cand.Name);
        }
        Map<String, Integer> existing = new Map<String, Integer>();
        for (AggregateResult ar : [SELECT Name name, COUNT(Id) cnt FROM Candidate__c WHERE Name IN :names GROUP BY Name]) {
            existing.put((String)ar.get('name'), (Integer)ar.get('cnt'));
        }
        for (Candidate__c cand : newCandidates) {
            if (existing.containsKey(cand.Name)) {
                cand.addError('Duplicate record found, cannot create record with same candidate name.');
            }
        }
    }
}
