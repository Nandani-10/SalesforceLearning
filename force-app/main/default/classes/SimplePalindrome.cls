public class SimplePalindrome {
    public static Boolean isPalindrome(String input) {
        String Word = input.toLowerCase().replaceAll('\\s+', '');
        Boolean result = Word == Word.reverse();
        System.debug('Is "' + input + '" a palindrome? ' + result);
        return result;
    }
}