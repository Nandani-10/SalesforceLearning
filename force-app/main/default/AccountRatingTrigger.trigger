trigger UpdateAccountRating on Account (before insert, before update) {
    if (Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate)) {
        AccountTriggerHandler.setAccountRating(Trigger.new);
    }
}
