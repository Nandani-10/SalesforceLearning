public class DataTypeDemo {

    // Primitive Data Types
    public Integer myInt = 10;
    public Double myDouble = 99.99;
    public Long myLong = 123456789L;
    public Boolean myBool = true;
    public String myString = 'Hello Apex';
    public Date myDate = Date.today();
    public DateTime myDateTime = DateTime.now();
    public Time myTime = Time.newInstance(12, 30, 0, 0);
    public Decimal myDecimal = 123.45;

    // Static variable
    public static String staticMessage = 'Static Hello';

    // Collections
    public List<String> stringList = new List<String>{'Apex', 'Salesforce'};
    public Set<Integer> intSet = new Set<Integer>{1, 2, 3};
    public Map<String, Integer> scoreMap = new Map<String, Integer>{'Math' => 90, 'Science' => 85};

    // Constructor
    public DataTypeDemo() {
        System.debug('Constructor called');
    }

    // Public method
    public void showPrimitiveValues() {
        System.debug('Integer: ' + myInt);
        System.debug('Double: ' + myDouble);
        System.debug('Boolean: ' + myBool);
        System.debug('String: ' + myString);
        System.debug('Date: ' + myDate);
        System.debug('DateTime: ' + myDateTime);
        System.debug('Time: ' + myTime);
        System.debug('Decimal: ' + myDecimal);
    }

    // Static method
    public static void showStaticMessage() {
        System.debug('Static Message: ' + staticMessage);
    }

    // Private method
    private void showCollections() {
        System.debug('List: ' + stringList);
        System.debug('Set: ' + intSet);
        System.debug('Map: ' + scoreMap);
    }

    // Global method with correct return type
    public void accessStandardObject() {
        List<Account> accList = [SELECT Id, Name FROM Account LIMIT 5];
        for (Account acc : accList) {
            System.debug('Account Name: ' + acc.Name);
        }
    }

    // Invocable method for Flow
    @InvocableMethod
    public static void invocableExample(List<String> inputs) {
        for (String input : inputs) {
            System.debug('Flow Input: ' + input);
        }
    }
}