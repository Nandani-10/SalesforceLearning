public class IntegrationProgram {

    public static void getAddress(String inputPincode) {
        Http httpObj = new Http();
        HttpRequest httpRequest = new HttpRequest();

        httpRequest.setEndpoint('https://api.postalpincode.in/pincode/' + inputPincode);
        httpRequest.setMethod('GET');

        HttpResponse httpResponse = httpObj.send(httpRequest);

        List<WrapperPlaces> responseList = 
            (List<WrapperPlaces>) JSON.deserialize(httpResponse.getBody(), List<WrapperPlaces>.class);

        System.debug(responseList);

        for (WrapperPlaces eachResponse : responseList) {
            System.debug('Message: ' + eachResponse.Message);
            System.debug('Status: ' + eachResponse.Status);

            if (eachResponse.PostOffice != null) {
                for (Address postOfficeDetails : eachResponse.PostOffice) {
                    System.debug('Name: ' + postOfficeDetails.Name);
                    System.debug('Description: ' + postOfficeDetails.Description);
                    System.debug('BranchType: ' + postOfficeDetails.BranchType);
                    System.debug('Branch: ' + postOfficeDetails.BranchType);
                    System.debug('DeliveryStatus: ' + postOfficeDetails.DeliveryStatus);
                    System.debug('Circle: ' + postOfficeDetails.Circle);
                    System.debug('District: ' + postOfficeDetails.District);
                    System.debug('Division: ' + postOfficeDetails.Division);
                    System.debug('Region: ' + postOfficeDetails.Region);
                    System.debug('Block: ' + postOfficeDetails.Block);
                    System.debug('State: ' + postOfficeDetails.State);
                    System.debug('Country: ' + postOfficeDetails.Country);
                    System.debug('Pincode: ' + postOfficeDetails.Pincode);
                }
            }
        }
    }

    public class WrapperPlaces {
        public String Message;
        public String Status;
        public List<Address> PostOffice;
    }

    public class Address {
        public String Name;
        public String Description;
        public String BranchType;
        public String DeliveryStatus;
        public String Circle;
        public String District;
        public String Division;
        public String Region;
        public String Block;
        public String State;
        public String Country;
        public String Pincode;
    }
}