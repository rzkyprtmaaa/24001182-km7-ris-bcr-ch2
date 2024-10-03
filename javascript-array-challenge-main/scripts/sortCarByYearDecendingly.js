function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const sortedCars = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < sortedCars.length; i++) {
    for (let j = 0; j < sortedCars.length - 1 - i; j++) {
      // membandingkan tahun dari mobil saat ini dengan mobil selanjutnya
      if (sortedCars[j].year < sortedCars[j + 1].year) {
        // tukar urutan mobil nya jika tidak sesuai
        const temp = sortedCars[j];
        sortedCars[j] = sortedCars[j + 1];
        sortedCars[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return sortedCars;
}
