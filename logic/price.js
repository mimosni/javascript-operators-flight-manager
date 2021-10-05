function Prices() {
  const calculateFinalPrice = (
    basePrice,
    passengerVariation,
    flightVariation
  ) => {
    const pricePassenger =
      parseFloat(basePrice) + (passengerVariation / 100) * basePrice;
    return (
      Math.round(
        (pricePassenger + (flightVariation / 100) * pricePassenger) * 100
      ) / 100
    );
  };

  const calculateDefaultFinalPrice = (basePrice, passengerType, flightType) => {
    let passengerVar = 0;
    switch (passengerType.toUpperCase()) {
      case "REGULAR":
        passengerVar = -5;
        break;
      case "VIP":
        passengerVar = 5;
        break;
      default:
        passengerVar = 0;
    }
    let flightVar = 0;
    switch (flightType.toUpperCase()) {
      case "ECONOMY":
        flightVar = -3;
        break;
      case "BUSINESS":
        flightVar = 10;
        break;
      default:
        flightVar = 0;
    }
    return calculateFinalPrice(basePrice, passengerVar, flightVar);
  };

  const calculateTotalFinalPrice = (
    seats,
    passengerType,
    flightType,
    basePrice
  ) => calculateDefaultFinalPrice(basePrice, passengerType, flightType) * seats;

  return {
    calculateFinalPrice,
    calculateDefaultFinalPrice,
    calculateTotalFinalPrice,
  };
}

module.exports = Prices();
