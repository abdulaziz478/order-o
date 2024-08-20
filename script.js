const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Ambil data dari formulir
  const nama = document.getElementById("companyName").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("message").value;

  // Buat pesan WhatsApp
  const whatsappMessage = `Halo, saya ${nama}. Saya tertarik dengan layanan pembuatan website. Email saya: ${email}. ${pesan}`;

  // Redirect ke URL WhatsApp
  const whatsappUrl = `https://wa.me/+6285853260316?text=${encodeURIComponent(
    whatsappMessage
  )}`; // Ganti dengan nomor WhatsApp Anda
  window.open(whatsappUrl, "_blank");
});
