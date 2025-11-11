function beforesubmit() {
    let outputDate = document.querySelector("outputData");
    let inputDate = document.querySelector("inputDate");
    
    console.log('inputDate',inputData.value);
    outputDate.value = inputData.value;
    console.log('outputDate.value',outputData.value);
}