trigger EnsureContactAssociatedWithAccount on Contact (before insert, before update) {
    ContactTriggerHandler.ensureAccountAssociation(Trigger.new);
}
