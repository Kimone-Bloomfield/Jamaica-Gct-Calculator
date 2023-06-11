//Function to calculate GCT in Jamaica
function calculateGCT() 
{
  var inputValue = document.getElementById("txt2").value;
  var gct = 0.15; // GCT rate in Jamaica is 15% (0.15)
  var totalPrice = parseFloat(inputValue) + (parseFloat(inputValue) * gct);
  document.getElementById("txt2").value = totalPrice.toFixed(2);
}






  