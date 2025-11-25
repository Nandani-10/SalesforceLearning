function beforesubmit() {
    let outputDate = document.querySelector("outputData");
    let inputDate = document.querySelector("inputDate");
    
    console.log('inputDate',inputData.value);
    outputDate.value = inputData.value;
    console.log('outputData.value',outputData.value);
    let formattedDate = new Date(inputDate.value).toLocaleDateString('en-IN');
    outputdata.value = formattedDate;
     
}