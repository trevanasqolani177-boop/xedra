document.getElementById("waPopup").addEventListener("click", function () {

    // Ganti nomor WA kamu (format internasional)
    const phone = "6281234567890";

    const message = "Halo! Saya tertarik dengan layanan Anda.";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});