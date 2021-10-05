function Flights() {
  const calculateNumberOfFlights = (passengers, capacity) => {
    if (capacity <= 0 || !Number.isInteger(capacity))
      throw new Error(
        "The capacity of the flight must be a positive integer value"
      );
    if (passengers <= 0 || !Number.isInteger(passengers))
      throw new Error(
        "The number of passengers must be a positive integer value"
      );
    return capacity === 0 ? 0 : Math.ceil(passengers / capacity);
  };
  const getRevisionSentence = (months) =>
    `The revision needs to be done within the next${
      months > 1 ? " " + months : ""
    } month${months > 1 ? "s" : ""}`;
  const checkAircraftRevision = (distanceLimit, distances) => {
    const totalDistance = distances.reduce((acc, element) => acc + element, 0);
    const ratio = totalDistance / distanceLimit;
    if (ratio <= 0.5) return getRevisionSentence(3);
    if (ratio <= 0.75) return getRevisionSentence(2);
    if (ratio <= 1) return getRevisionSentence(1);
    throw Error("Too late!");
  };
  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
