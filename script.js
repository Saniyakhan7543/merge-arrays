// function mergeAndRemoveDuplicates(){
//     const a = document.getElementById('array1').value.split(',').map(item => parseInt(item.trim()));
//     const b = document.getElementById('array2').value.split(',').map(item => parseInt(item.trim()));


//     const mergedArray = a.concat(b);
//     const uniqueArray = [...new set(mergedArray)];


//     const reasultElement = document.getElementById('result');
//     reasultElement.textContent = 'merged and unique array: ' + uniqueArray.join(',');
// }



function mergeAndRemoveDuplicates() {
    // Get input values and convert them to arrays
    const inputArray1 = document.getElementById('array1').value.split(',').map(item => parseInt(item.trim()));
    const inputArray2 = document.getElementById('array2').value.split(',').map(item => parseInt(item.trim()));

    // Merge arrays
    const mergedArray = inputArray1.concat(inputArray2);

    // Remove duplicates using Set
    const uniqueArray = [...new Set(mergedArray)];

    // Display the result on the webpage
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Merged and Unique Array: ' + uniqueArray.join(', ');
  }