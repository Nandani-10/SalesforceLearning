
public with sharing class MyClientsController {

    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getApplicationStats() {

        List<Map<String, String>> stats = new List<Map<String, String>>();

        stats.add(new Map<String, String>{
            'id' => '1',
            'title' => 'All applications',
            'count' => '6',
            'dateText' => 'Since 1 August 2023',
            'color' => '#1d4ed8',
            'statusFilter' => 'ALL'
        });

        stats.add(new Map<String, String>{
            'id' => '2',
            'title' => 'In progress',
            'count' => '3',
            'dateText' => 'Since 5 October 2023',
            'color' => '#2563eb',
            'statusFilter' => 'IN_PROGRESS'
        });

        stats.add(new Map<String, String>{
            'id' => '3',
            'title' => 'Approved',
            'count' => '2',
            'dateText' => 'Since 10 August 2023',
            'color' => '#22c55e',
            'statusFilter' => 'APPROVED'
        });

        stats.add(new Map<String, String>{
            'id' => '4',
            'title' => 'Declined',
            'count' => '1',
            'dateText' => 'Since 1 August 2023',
            'color' => '#ef4444',
            'statusFilter' => 'DECLINED'
        });

        return stats;
    }
}
