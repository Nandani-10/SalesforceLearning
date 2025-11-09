trigger PreventActiveAccountDeletion on Account (before delete) {
    AccountTriggerHandler.preventActiveDeletion(Trigger.old);
}
