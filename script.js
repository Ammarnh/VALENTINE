// Kunci jawaban untuk tanggal jadian
const correctDate = "2024-09-14";

document.addEventListener('DOMContentLoaded', function() {
  // Tampilkan splash screen selama 7 detik, lalu tampilkan pertanyaan
  setTimeout(function() {
    // Sembunyikan tulisan animasi awal sehingga hanya pertanyaan yang muncul
    document.getElementById('splash-message').classList.add('hidden');
    const splashQuestion = document.getElementById('splash-question');
    splashQuestion.classList.remove('hidden');
    setTimeout(function(){
      splashQuestion.classList.add('show');
    }, 50);
  }, 7000);

  // Hapus pesan error saat user mengubah input
  document.getElementById('jadian-date').addEventListener('input', function(){
    document.getElementById('error-message').classList.add('hidden');
  });

  // Tangani event submit
  document.getElementById('submit-date').addEventListener('click', function(){
    const dateInput = document.getElementById('jadian-date').value;
    if(dateInput === correctDate) {
      // Jika jawaban benar, hilangkan splash screen
      hideSplash();
    } else {
      // Jika jawaban salah, tampilkan pesan error
      document.getElementById('error-message').classList.remove('hidden');
    }
  });
});

// Fungsi untuk menyembunyikan splash screen
function hideSplash() {
  document.getElementById('splash').style.display = "none";
}

/***** TOGGLE ENLARGEMENT (Instagram-Style In-Place) *****/
// Tangkap semua figure (polaroid) di galeri
const polaroids = document.querySelectorAll('.gallery .polaroid');

// Tambahkan event listener untuk toggle kelas 'active' pada setiap figure
polaroids.forEach(figure => {
  figure.addEventListener('click', function() {
    // Toggle kelas active
    this.classList.toggle('active');
    // Ubah caption berdasarkan status aktif
    const img = this.querySelector('img');
    const caption = this.querySelector('figcaption');
    const defaultText = img.getAttribute('data-default');
    const detailedText = img.getAttribute('data-detailed');
    if(this.classList.contains('active')) {
      caption.textContent = detailedText || defaultText;
    } else {
      caption.textContent = defaultText;
    }
  });
  // Cegah munculnya context menu (misalnya saat long press)
  figure.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});

/***** CLOCK ANNIVERSARY *****/
function updateClock() {
  const anniversary = new Date("2024-09-14T00:00:00");
  const now = new Date();
  let diff = now - anniversary;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById('clock').textContent =
    `${days} hari, ${hours.toString().padStart(2, '0')} jam, ${minutes.toString().padStart(2, '0')} menit, ${seconds.toString().padStart(2, '0')} detik`;
}
updateClock();
setInterval(updateClock, 1000);

/***** STATIC ROMANTIC QUOTES (Masa SMA & First Experience) *****/
const quotes = [
  "Waktu SMA itu, kayak petualangan pertama yang seru abis!",
  "Ingat nggak, pertama kali naksir di bangku kelas? Bikin deg-degan parah!",
  "Masa SMA itu simple, tapi penuh cerita kocak dan momen manis.",
  "Cinta pertama di sekolah tuh, rasanya campur aduk antara deg-degan dan bahagia.",
  "SMA itu tempat di mana kita belajar, nggak cuma pelajaran, tapi juga tentang cinta yang polos.",
  "Pertama kali jatuh cinta di sekolah tuh, kenangan yang selalu bikin kita tersenyum.",
  "Masa SMA penuh warna; tawa, air mata, dan canda ria yang nggak akan pernah terlupakan.",
  "Pengalaman pertama jatuh cinta itu, walaupun sederhana, tapi bikin hidup terasa lebih hidup.",
  "Setiap hari di sekolah punya cerita, dan cinta pertama itu cerita paling seru!",
  "Bicara soal SMA, kenangan manis dan gila bareng teman selalu jadi topik favorit."
];
const newQuoteBtn = document.getElementById('new-quote');
const quoteDisplay = document.getElementById('quote');
newQuoteBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
