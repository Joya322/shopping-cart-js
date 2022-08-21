function updateCountOfComponents(isIncrease, componentCountFeildId) {
  const componentCountFeild = document.getElementById(componentCountFeildId);
  const componentCountString = componentCountFeild.value;
  const componentCount = parseInt(componentCountString);

  let totalComponents;
  if (isIncrease) {
    totalComponents = componentCount + 1;
  } else {
    totalComponents = componentCount - 1;
  }

  componentCountFeild.value = totalComponents;
  return totalComponents;
}

function updatePriceOfComponents(
  totalComponents,
  pricePerOne,
  componentPriceElementId
) {
  const currentTotalPrice = totalComponents * pricePerOne;
  const componentPriceElement = document.getElementById(
    componentPriceElementId
  );
  componentPriceElement.innerText = currentTotalPrice;
}

function getTextElementValueById(elementId) {
  const componentPriceElement = document.getElementById(elementId);
  const componentPriceString = componentPriceElement.innerText;
  const componentPrice = parseInt(componentPriceString);

  return componentPrice;
}
function setTextElementValueById(elementId, value) {
     
    const subTotalPriceElement = document.getElementById(elementId);
    subTotalPriceElement.innerText = value;
}
function calculateSubTotal() {

    //calculate sub-total
  const phoneTotalPrice = getTextElementValueById("phone-price");
  const caseTotalPrice = getTextElementValueById("case-price");

    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    setTextElementValueById("sub-total", subTotalPrice);
    //calculate tax
    const taxAmount = parseFloat((subTotalPrice * 0.1).toFixed(2));
    setTextElementValueById("tax-amount", taxAmount);

    const finalAmount = subTotalPrice + taxAmount;
    setTextElementValueById("final-total", finalAmount);
}
