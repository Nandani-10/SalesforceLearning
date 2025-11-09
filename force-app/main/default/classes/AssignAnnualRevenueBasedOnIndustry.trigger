trigger AssignAnnualRevenueBasedOnIndustry on Account (before insert, before update) {
    AccountTriggerHandler.setAnnualRevenue(Trigger.new);
}
