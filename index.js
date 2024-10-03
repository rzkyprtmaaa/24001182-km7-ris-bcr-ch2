// melakukan import data json
import carsData from "/data/cars.json" with { type: "json"};

// mendapatkan id dari elemen html agar dapat dimanipulasi
const carContent = document.getElementById("cars-content");
const searchBtn = document.getElementById("search-btn");
const passengerInput = document.getElementById("passenger-input");
const dateInput = document.getElementById("date-input");

// function untuk mengecek apakah user menginput tanggal dan jumlah penumpang
function enableBtn() {
    if (dateInput.value && passengerInput.value > 0) {
        searchBtn.disabled = false; // jika ya maka tombol bisa diklik
    } else {
        searchBtn.disabled = true; // jika tidak maka tombol tetap disabled
    }
}

// trigger untuk menjalankan function enableBtn
passengerInput.addEventListener("input", enableBtn);
dateInput.addEventListener("input", enableBtn);

// membuat event ketika tombol cari di klik maka akan menjalankan kode didalamnya
searchBtn.addEventListener("click", function(e) {
  e.preventDefault(); 

  // mendapatkan data input tanggal yang diinput user dan merubah nya menjadi object
  const dateValue = new Date(dateInput.value);
  console.log(dateValue);

  // mendapatkan data jumlah penumpang yang diinput user dan merubah nya menjadi integer
  const passengerValue = parseInt(passengerInput.value);
  console.log(passengerValue);

  let carContentHTML = "";

  // mencari mobil sesuai dengan filter data yang dilakukan
  const filteredCars = carsData.filter((car) => {
    const availableDate = new Date(car.availableAt);  // mengubah value availableAt yang ada di json menjadi object
    return car.capacity >= passengerValue && availableDate > dateValue; // syarat filter datanya
});

  // jika mobil yang dicari ada maka akan dilakukan rendering data
  if (filteredCars.length > 0) {
    filteredCars.map((car) => {
      const carContent = `<div class="col-4 d-flex justify-content-center">
            <div class="card mb-5" style="width: 18rem">
              <img class="card-img-top" src="/image/car-search.png" alt="Card image cap" />
              <div class="card-body">
                <h6 class="card-title"> ${car.manufacture}/${car.model} </h6>
                <h5 class="card-title"> ${car.rentPerDay} / hari</h5>
                <p class="card-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nihil
                  ipsum accusantium dolorum natus voluptatum eius necessitatibus. Nemo
                  dicta animi perspiciatis modi assumenda cupiditate, nobis voluptatibus
                  recusandae accusamus quis sed? </p>
                  <p class="card-text"> ${car.capacity} orang</p>
                  <p class="card-text"> ${car.transmission}</p>
                  <p class="card-text"> Tahun ${car.year}</p>
                <a href="#" class="btn btn-primary">Pilih Mobil</a>
              </div>
            </div>
          </div>`;
          carContentHTML += carContent;
    });
  } else {
    // jika mobil yang dicari tidak ada maka akan menjalankan else
    carContentHTML = `<h3 class="h3-else">Tidak ada mobil yang tersedia.</h3>`;
  }
  carContent.innerHTML = carContentHTML;
});