function Passengers() {
  const checkFlightCapacity = (capacity, passengers) => {
    const totalPassengers = passengers.reduce(
      (acc, element) => acc + element,
      0
    );
    if (totalPassengers <= capacity) return totalPassengers;
    throw Error("Too many passengers");
  };

  const distributeAllSeatsToAllPassengers = (
    vip,
    regular,
    flights,
    businessSeatsPF,
    economySeatsPF
  ) => {
    const vipPassengersWithBusinessSeats =
      businessSeatsPF * flights < vip ? businessSeatsPF * flights : vip;
    const vipPassengersWithEconomySeats =
      vipPassengersWithBusinessSeats < vip
        ? vip - vipPassengersWithBusinessSeats
        : 0;
    const regularPassengersWithBusinessSeats =
      businessSeatsPF * flights > vipPassengersWithBusinessSeats
        ? Math.min(businessSeatsPF * flights - vip, regular)
        : 0;
    const regularPassengersWithEconomySeats = Math.min(
      economySeatsPF * flights -
        regularPassengersWithBusinessSeats -
        vipPassengersWithEconomySeats,
      regular - regularPassengersWithBusinessSeats
    );
    return {
      vipPassengersWithBusinessSeats,
      vipPassengersWithEconomySeats,
      regularPassengersWithBusinessSeats,
      regularPassengersWithEconomySeats,
    };
  };
  return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();
