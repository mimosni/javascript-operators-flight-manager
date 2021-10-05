function Util() {
  const calculateTotalDistributedPassengers = (passengerDistribute) =>
    Object.values(passengerDistribute).reduce((acc, res) => acc + res, 0);

  const calculateTotalNumberOfPassengers = (passengers) =>
    passengers.reduce((acc, res) => acc + res, 0);
  return {
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
  };
}

module.exports = Util();
