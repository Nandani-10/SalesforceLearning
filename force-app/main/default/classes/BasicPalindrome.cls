public class BasicPalindrome {
    public static void checkPalindrome(String input) {
        Integer left = 0;
        Integer right = input.length() - 1;
        Boolean isPalindrome = true;

        while (left < right) {
            if (input.charAt(left) != input.charAt(right)) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }

        if (isPalindrome) {
            System.debug(input + ' is a palindrome.');
        } else {
            System.debug(input + ' is not a palindrome.');
        }
    }
}