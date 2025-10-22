public class DayMessage {
    public static void showMessage(String day) {
        switch on day {
            when 'Monday' {
                System.debug('It’s the start of the week! 😅');
            }
            when 'Friday' {
                System.debug('Weekend is coming! 😍');
            }
            when 'Sunday' {
                System.debug('It’s a holiday! 🎉');
            }
            when else {
                System.debug('Just another day! 🙂');
            }
        }
    }
}