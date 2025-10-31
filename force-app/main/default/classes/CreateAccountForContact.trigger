trigger CreateAccountForContact on Contact (after insert) {
    if (Trigger.isAfter && Trigger.isInsert) {
        ContactTriggerHandler.createAccountForContacts(Trigger.new);
    }
}
