function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const availCars = [];

  // Tulis code-mu disini
  for (var i = 0; i < cars.length; i++) {
    const availableCars = cars[i].available;
    if (availableCars == true) {
      availCars.push(cars[i]);
    }
  }
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return availCars;
}
