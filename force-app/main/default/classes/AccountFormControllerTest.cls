@IsTest
public class AccountFormControllerTest {

    @IsTest
    static void testInsertAccount() {
        // Create a new Account (Id will be null)
        Account acc = new Account(Name = 'Test Account Insert');

        // Call the method
        Account result = AccountFormController.insertOrUpdateAccount(acc);

        // Verify that the account was inserted
        Account insertedAcc = [SELECT Id, Name FROM Account WHERE Id = :result.Id];
        System.assertNotEquals(null, insertedAcc.Id, 'Account should be inserted');
        System.assertEquals('Test Account Insert', insertedAcc.Name, 'Account Name should match');
    }

    @IsTest
    static void testUpdateAccount() {
        // First, insert an account to update
        Account acc = new Account(Name = 'Original Name');
        insert acc;

        // Modify the account
        acc.Name = 'Updated Name';

        // Call the method
        Account result = AccountFormController.insertOrUpdateAccount(acc);

        // Verify that the account was updated
        Account updatedAcc = [SELECT Id, Name FROM Account WHERE Id = :result.Id];
        System.assertEquals('Updated Name', updatedAcc.Name, 'Account Name should be updated');
    }

    @IsTest
    static void testNullAccountThrowsException() {
        // Expect an exception when null is passed
        try {
            AccountFormController.insertOrUpdateAccount(null);
            System.assert(false, 'Exception should have been thrown for null Account');
        } catch (AuraHandledException e) {
            System.assertEquals('Account record is null.', e.getMessage(), 'Exception message should match');
        }
    }
}
