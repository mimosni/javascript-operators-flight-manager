function Util() {
  const calculateTotalDistributedPassengers = (passengerDistribute) =>
    Object.values(passengerDistribute).reduce((acc, res) => acc + res, 0);

  const calculateTotalNumberOfPassengers = (passengers) =>
    passengers.reduce((acc, res) => acc + res, 0);
  const checkInput = (input) => {
    if (!input || isNaN(input)) {
      throw new Error("Fail input");
    }
  };
  const calculateTotalDistance = (distances) =>
    Object.values(distances).reduce((acc, res) => acc + (res > 0 ? res : 0), 0);
  const calculateBonusPoints = (
    businessDistances,
    economyDistances,
    businessBonus,
    economyBonus
  ) =>
    calculateTotalDistance(businessDistances) * (businessBonus / 100) +
    calculateTotalDistance(economyDistances) * (economyBonus / 100);

  return {
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
    checkInput,
    calculateTotalDistance,
    calculateBonusPoints,
  };
}

module.exports = Util();
