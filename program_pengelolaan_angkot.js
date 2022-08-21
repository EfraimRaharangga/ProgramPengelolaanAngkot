var angkot = [];

//tambah penumpang

var tambahPenumpang = function (namaPenumpang, angkot) {
  if (angkot.length == 0) {
    angkot.push(namaPenumpang);
    return angkot;
  } else {
    for (var i = 0; i < angkot.length; i++) {
      if (angkot[i] == undefined) {
        angkot[i] = namaPenumpang;
        return angkot;
        //jika tidak
      } else if (angkot[i] == namaPenumpang) {
        console.log(namaPenumpang + "sudah masuk kedalam angkot");
        return angkot;
      } else if (i == angkot.length - 1) {
        angkot.push(namaPenumpang);
        return angkot;
      }
    }
  }
};

// hapus penumpang

var hapusPenumpang = function (namaPenumpang, angkot) {
  if (angkot.length == 0) {
    console.log("maaf penumpang dalam angkot sedang kosong");
    return angkot;
  } else {
    for (var i2 = 0; i2 < angkot.length; i++) {
      if (angkot[i2] == namaPenumpang) {
        angkot[i2] = undefined;
        return angkot;
      } else {
        console.log("maaf " + namaPenumpang + " tidak ada di dalam angkot");
        return angkot;
      }
    }
  }
};
