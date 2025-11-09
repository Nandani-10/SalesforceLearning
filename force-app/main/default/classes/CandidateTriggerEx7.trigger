trigger CandidateTriggerEx7 on Candidate__c (before insert, before update) {
    CandidateTriggerHandler1.preventDuplicateCandidates(Trigger.new);
}
