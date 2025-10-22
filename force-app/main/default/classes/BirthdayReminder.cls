public class BirthdayReminder {

    public static void createBirthdayReminders() {
        Integer currentMonth = Date.today().month();

        List<Contact> birthdayContacts = [
            SELECT Id, FirstName, LastName, Birthdate 
            FROM Contact 
            WHERE CALENDAR_MONTH(Birthdate) = :currentMonth
        ];

        List<Task> reminders = new List<Task>();

        for (Contact c : birthdayContacts) {
            Task t = new Task(
                Subject = 'Wish Happy Birthday to ' + c.FirstName,
                WhatId = c.Id,
                Status = 'Not Started',
                Priority = 'Normal',
                ActivityDate = Date.today()
            );
            reminders.add(t);
        }

        if (!reminders.isEmpty()) {
            insert reminders;
            System.debug('Created '+ reminders + ' birthday reminders.');
        } else {
            System.debug('No Birthday this month !');
        }
    }
}