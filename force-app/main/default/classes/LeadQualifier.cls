public class LeadQualifier {
    public static void qualifyLeads() {
        List<Lead> leadsToQualify = [
            SELECT Id, FirstName, LastName, Company, Email, IsConverted 
            FROM Lead 
            WHERE IsConverted = false AND Email != null
        ];

        for (Lead lead : leadsToQualify) {
            if (lead.Company != null && (lead.Company.contains('Tech') || lead.Email.endsWith('@example.com'))) {
                try {
                    Database.LeadConvert lc = new Database.LeadConvert();
                    lc.setLeadId(lead.Id);
                    lc.setDoNotCreateOpportunity(false);
                    lc.setOpportunityName(lead.FirstName + ' Opportunity');

                    Database.LeadConvertResult result = Database.convertLead(lc);
                    if (result.isSuccess()) {
                        System.debug('✅ Lead converted: ' + lead.FirstName);
                    } else {
                        System.debug('❌ Failed to convert lead: ' + lead.FirstName);
                    }
                } catch (Exception e) {
                    System.debug('⚠️ Error converting lead: ' + e.getMessage());
                }
            } else {
                System.debug('ℹ️ Lead not qualified: ' + lead.FirstName);
            }
        }
    }
}