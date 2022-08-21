document.getElementById("phone-plus-btn").addEventListener("click", function () {
    const totalComponents = updateCountOfComponents(true, "phone-number");

    updatePriceOfComponents(totalComponents, 1219, "phone-price");

    

    calculateSubTotal();
    // console.log(phoneTotalPrice, caseTotalPrice)
});
  
document.getElementById("phone-minus-btn").addEventListener("click", function () {
    const totalComponents = updateCountOfComponents(false, "phone-number");

    updatePriceOfComponents(totalComponents, 1219, "phone-price");

    calculateSubTotal();
});
  
document.getElementById("case-plus-btn").addEventListener("click", function () {
    const totalComponents = updateCountOfComponents(true, "case-number");
    
    updatePriceOfComponents(totalComponents, 59, "case-price");

    calculateSubTotal();
});

document.getElementById("case-minus-btn").addEventListener("click", function () {
    const totalComponents = updateCountOfComponents(false, "case-number");

    updatePriceOfComponents(totalComponents, 59, "case-price");

    calculateSubTotal();
  });
