/** @module Login-Scripts*/
/**
* Membuat variabel loginFormElement untuk tampilan form
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuata variabel inputPasswordElement untuk tampilan input password
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* Comment: menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email saat tombol ditekan
  * @constant {string}
  */
  const email = inputEmailElement.value;

  /**
  * Membuat variabel password untuk menyimpan nilai password saat tombol ditekan
  * @constant {string}
  */
  const password = inputPasswordElement.value;


  /* Coment: memastikan nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment: jika sesuai maka halaman home akan ditampilkan */
    goToHome();
  } else {

    /* Comment: jika tidak sesuai maka akan menampilkan informasi bahwa input salah */
    showPopUp();
    
  }
});
