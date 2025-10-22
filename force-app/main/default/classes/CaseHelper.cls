public class CaseHelper {
    public static void assignPriority(Case c) {
        switch on c.Type {
            when 'Technical Issue' {
                c.Priority = 'High';
            }
            when 'Billing' {
                c.Priority = 'Medium';
            }
            when 'General Inquiry' {
                c.Priority = 'Low';
            }
            when else {
                c.Priority = 'Normal';
            }
        }
    }
}