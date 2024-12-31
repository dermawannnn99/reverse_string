function reverseString() {
    // Meminta input dari pengguna
    const input = prompt("Masukkan sebuah kata atau kalimat:");
  
    // Validasi input
    if (!input) {
      console.log("Input tidak boleh kosong!");
      return;
    }
  
    // Membalik string
    const reversed = input.split('').reverse().join('');
  
    // Menampilkan hasil
    console.log(`Hasil: ${reversed}`);
    alert(`Hasil setelah dibalik: ${reversed}`);
  }
  
  // Panggil fungsi
  reverseString();
  