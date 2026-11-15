/**
 * ============================================================
 * ECOMEDIA RADEC — script.js
 * Senior Frontend Architecture: Vanilla JS Client-Side SPA
 * Model Pembelajaran RADEC & Ecoliteracy Kelas V SD
 * ============================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. DATA REPOSITORY: MATERI & KONTEN EDUKASI
  // ============================================================
  const MATERI_DATA = {
    1: {
      id: 1,
      badge: 'MATERI 1',
      judul: 'Cuaca, Iklim, dan Musim',
      icon: '🌤️',
      durasi: '2:38',
      videoTitle: 'Mengenal Cuaca, Iklim, dan Siklus Musim di Nusantara',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      ringkasan: 'Cuaca adalah keadaan atmosfer di suatu tempat dalam waktu singkat (harian). Iklim adalah pola cuaca rata-rata di wilayah luas dalam periode puluhan tahun. Di Indonesia, kita mengalami dua musim: kemarau dan hujan karena letak geografis khatulistiwa.',
      panduanLensa: {
        cerita: 'Apa cerita utama dalam video ini? Nilai atau pesan penting apa yang ingin disampaikan tentang keteraturan iklim dan kehidupan sehari-hari?',
        peran: 'Siapa saja yang berperan dalam video? Bagaimana petani, nelayan, atau warga beradaptasi dengan perubahan cuaca dan musim?',
        limbah: 'Sumber daya alam atau energi apa yang diamati? Apakah ada pemborosan bahan atau pengaruh perubahan musim terhadap sumber air dan pangan?',
        pengalaman: 'Pernahkah kamu merasakan cuaca ekstrem di sekitar rumah atau sekolahmu? Bagaimana cuaca memengaruhi kegiatan belajarmu?'
      },
      placeholderLensa: {
        cerita: 'Tuliskan pesan moral dan cerita mengenai keteraturan cuaca dan alam...',
        peran: 'Sebutkan orang atau profesi yang sangat bergantung pada cuaca...',
        limbah: 'Tuliskan sumber daya alam (air, sinar matahari) dan dampaknya...',
        pengalaman: 'Ceritakan pengalamanmu saat terjadi hujan lebat atau panas terik...'
      }
    },
    2: {
      id: 2,
      badge: 'MATERI 2',
      judul: 'Atmosfer, Efek Rumah Kaca, dan Pemanasan Global',
      icon: '🌡️',
      durasi: '3:15',
      videoTitle: 'Bagaimana Efek Rumah Kaca Menjaga dan Memanaskan Bumi',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ringkasan: 'Atmosfer adalah lapisan gas yang menyelimuti bumi. Efek rumah kaca alami berguna menjaga suhu bumi tetap hangat dan nyaman. Namun, penumpukan gas rumah kaca berlebih (seperti karbon dioksida dan metana) menyebabkan panas terperangkap, memicu pemanasan global.',
      panduanLensa: {
        cerita: 'Pesan apa yang kamu tangkap tentang bagaimana atmosfer bekerja bagai selimut bumi? Mengapa keseimbangan selimut itu penting dijaga?',
        peran: 'Siapa yang paling berperan menyebabkan peningkatan gas rumah kaca, dan siapa saja yang merasakan dampaknya?',
        limbah: 'Gas atau asap apa yang paling banyak dihasilkan dari pabrik, kendaraan, dan pembakaran sampah yang merusak atmosfer?',
        pengalaman: 'Apakah udara di kotamu terasa semakin panas dari tahun ke tahun? Apa yang biasanya kamu rasakan saat terik matahari berlebihan?'
      },
      placeholderLensa: {
        cerita: 'Tuliskan analisismu tentang efek rumah kaca yang menjaga bumi...',
        peran: 'Jelaskan peran manusia dan industri dalam kenaikan gas atmosfer...',
        limbah: 'Catat jenis gas buang, limbah pembakaran, dan energi fosil yang diamati...',
        pengalaman: 'Tuliskan kesanmu tentang suhu udara yang kian menghangat...'
      }
    },
    3: {
      id: 3,
      badge: 'MATERI 3',
      judul: 'Penyebab Perubahan Iklim',
      icon: '🏭',
      durasi: '2:54',
      videoTitle: 'Aktivitas Manusia dan Jejak Emisi Karbon di Bumi',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      ringkasan: 'Penyebab utama percepatan perubahan iklim adalah aktivitas antropogenik (manusia), seperti pembakaran bahan bakar fosil (batu bara, minyak bumi), deforestasi atau penggundulan hutan, serta pengelolaan sampah yang buruk di tempat pembuangan akhir.',
      panduanLensa: {
        cerita: 'Kisah apa yang diangkat dalam video mengenai hutan yang ditebang atau asap kendaraan di perkotaan?',
        peran: 'Siapa pihak yang bertanggung jawab mengurangi polusi? Bagaimana peran masyarakat, pengusaha, dan anak sekolah?',
        limbah: 'Bahan bakar minyak, plastik, dan sampah apa saja yang kamu lihat sebagai sumber pencemar lingkungan dalam video?',
        pengalaman: 'Aktivitas sehari-hari apa di rumah atau lingkunganmu yang tanpa disadari menghasilkan emisi atau asap polusi?'
      },
      placeholderLensa: {
        cerita: 'Tuliskan pemahamanmu tentang akar penyebab perubahan iklim...',
        peran: 'Jelaskan siapa yang berperan dalam menghasilkan dan mengatasi polusi...',
        limbah: 'Identifikasi bahan bakar, sampah plastik, dan emisi yang menjadi limbah...',
        pengalaman: 'Hubungkan dengan kendaraan bermotor atau sampah di lingkunganmu...'
      }
    },
    4: {
      id: 4,
      badge: 'MATERI 4',
      judul: 'Dampak Perubahan Iklim',
      icon: '🌊',
      durasi: '3:40',
      videoTitle: 'Dampak Nyata Perubahan Iklim Bagi Kehidupan dan Makhluk Hidup',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      ringkasan: 'Dampak perubahan iklim terasa di seluruh dunia: es kutub mencair, permukaan laut naik menenggelamkan pulau kecil, pola hujan tak menentu memicu banjir bandang, kekeringan berkepanjangan merusak panen, serta terancamnya habitat flora dan fauna.',
      panduanLensa: {
        cerita: 'Bagaimana perasaanmu melihat hewan liar kehilangan habitat atau pulau terancam tenggelam dalam video?',
        peran: 'Siapa korban yang paling menderita akibat bencana iklim? Apakah hewan, tumbuhan, dan masyarakat rentan mendapatkan keadilan?',
        limbah: 'Bagaimana limbah bencana atau rusaknya ekosistem memperburuk kualitas air bersih dan tanah di lingkungan sekitar?',
        pengalaman: 'Pernahkah daerah sekitarmu mengalami banjir, rob, atau musim kemarau yang sangat panjang? Bagaimana warga mengatasinya?'
      },
      placeholderLensa: {
        cerita: 'Tuliskan pesan moral mengenai dampak perubahan iklim pada makhluk hidup...',
        peran: 'Analisis siapa saja korban dan pihak yang perlu dilindungi...',
        limbah: 'Amati kerusakan air, udara, tanah akibat dampak perubahan iklim...',
        pengalaman: 'Refleksikan bencana lingkungan yang pernah kamu saksikan atau dengar...'
      }
    },
    5: {
      id: 5,
      badge: 'MATERI 5',
      judul: 'Tindakan Ramah Lingkungan',
      icon: '♻️',
      durasi: '2:45',
      videoTitle: 'Aksi Nyata Sahabat Bumi: Langkah Kecil Berdampak Besar',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ringkasan: 'Setiap anak bisa menjadi Sahabat Bumi dengan melakukan aksi sederhana: menghemat listrik dan air, memilah dan mendaur ulang sampah, menanam pohon di pekarangan, serta memilih jalan kaki atau bersepeda untuk perjalanan jarak dekat.',
      panduanLensa: {
        cerita: 'Inspirasi dan nilai kebaikan apa yang kamu peroleh dari anak-anak yang melakukan aksi peduli lingkungan?',
        peran: 'Peran apa yang bisa kamu dan teman-teman sekelasmu ambil untuk menciptakan sekolah hijau (green school)?',
        limbah: 'Bagaimana cara video ini memperlihatkan pemanfaatan kembali barang bekas dan penghematan energi listrik?',
        pengalaman: 'Tindakan ramah lingkungan apa yang sudah atau ingin segera kamu lakukan mulai hari ini di rumah atau sekolah?'
      },
      placeholderLensa: {
        cerita: 'Tuliskan nilai inspiratif tentang gotong royong merawat bumi...',
        peran: 'Jelaskan peranmu sebagai pelajar pejuang lingkungan...',
        limbah: 'Sebutkan ide pemilahan sampah organik, anorganik, dan hemat energi...',
        pengalaman: 'Komitmen aksimu: aksi nyata apa yang akan kamu mulai besok pagi?...'
      }
    }
  };

  // ============================================================
  // 2. STORAGE MANAGER (UML COMPLIANT)
  // ============================================================
  const StorageManager = {
    STORAGE_KEY: 'ecomedia_data',

    loadData() {
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (err) {
        console.error('Gagal membaca data dari localStorage:', err);
        return null;
      }
    },

    saveData(data) {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      } catch (err) {
        console.error('Gagal menyimpan data ke localStorage:', err);
      }
    },

    createInitialData(nama = '', kelas = '', sekolah = '') {
      return {
        siswa: {
          nama: nama.trim(),
          kelas: kelas.trim(),
          sekolah: sekolah.trim()
        },
        sesiAktif: {
          tahapRadec: 'READ',
          materiId: 1
        },
        dataLensa: [1, 2, 3, 4, 5].map(id => ({
          materiId: id,
          cerita: '',
          peran: '',
          limbah: '',
          pengalaman: '',
          pertanyaan: ''
        }))
      };
    }
  };

  // ============================================================
  // 3. APPLICATION STATE CONTROLLER
  // ============================================================
  class AppController {
    constructor() {
      this.appData = StorageManager.loadData();
      this.currentLensa = 'cerita';
      this.activePage = 'page-home';
      this.typingTimer = null;
    }

    init() {
      this.bindDOMReferences();
      this.bindEvents();
      this.restoreSessionIfAvailable();
    }

    bindDOMReferences() {
      // Pages
      this.pages = document.querySelectorAll('.page');

      // Home Elements
      this.formMulai = document.getElementById('form-mulai');
      this.inputNama = document.getElementById('input-nama');
      this.inputKelas = document.getElementById('input-kelas');
      this.inputSekolah = document.getElementById('input-sekolah');

      // Orientasi Elements
      this.namaOrientasi = document.getElementById('nama-orientasi');
      this.btnBackHome = document.getElementById('btn-back-home');
      this.kembaliKeOrientasi = document.getElementById('kembali-ke-orientasi');
      this.btnToJourney = document.getElementById('btn-to-journey');
      this.btnBottomToJourney = document.getElementById('btn-bottom-to-journey');

      // Read Elements
      this.namaNavbar = document.getElementById('nama-navbar');
      this.materiCards = document.querySelectorAll('.materi-item-card');

      // Ecomedia Elements
      this.namaNavbarEco = document.getElementById('nama-navbar-eco');
      this.btnBackMateri = document.getElementById('btn-back-materi');
      this.ecoMateriPill = document.getElementById('eco-materi-pill');
      this.ecoActiveMateriTag = document.getElementById('eco-active-materi-tag');
      this.summaryMateriTitle = document.getElementById('summary-materi-title');
      this.summaryMateriText = document.getElementById('summary-materi-text');
      this.videoPlayer = document.getElementById('eco-video-player');
      this.videoSource = document.getElementById('eco-video-source');
      this.videoOverlay = document.getElementById('video-custom-overlay');
      this.btnOverlayPlay = document.getElementById('btn-overlay-play');
      this.overlayVideoTitle = document.getElementById('overlay-video-title');
      this.overlayVideoDuration = document.getElementById('overlay-video-duration');

      // Lensa & Curiosity Elements
      this.lensaTabs = document.querySelectorAll('.lensa-tab-btn');
      this.lensaGuideText = document.getElementById('lensa-guide-text');
      this.lensaTextarea = document.getElementById('lensa-textarea');
      this.charCount = document.getElementById('char-count');
      this.saveIndicator = document.getElementById('save-indicator');
      this.penasaranTextarea = document.getElementById('penasaran-textarea');
      this.curiositySaveBadge = document.getElementById('curiosity-save-badge');

      // Ecomedia Navigation Buttons
      this.btnPrevMateri = document.getElementById('btn-prev-materi');
      this.btnNextMateri = document.getElementById('btn-next-materi');

      // Modals
      this.modalPanduan = document.getElementById('modal-panduan');
      this.modalPeta = document.getElementById('modal-peta');
      this.modalInfoTahap = document.getElementById('modal-info-tahap');
      this.modalTahapIcon = document.getElementById('modal-tahap-icon');
      this.modalTahapName = document.getElementById('modal-tahap-name');
      this.modalTahapDesc = document.getElementById('modal-tahap-desc');

      // Toast
      this.toast = document.getElementById('app-toast');
      this.toastMessage = document.getElementById('toast-message');
    }

    bindEvents() {
      // 1. Form Mulai Belajar (Homepage)
      if (this.formMulai) {
        this.formMulai.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleStartLearning();
        });
      }

      // 2. Orientasi Navigation
      if (this.btnBackHome) {
        this.btnBackHome.addEventListener('click', () => {
          this.navigateTo('page-home');
        });
      }

      if (this.kembaliKeOrientasi) {
        this.kembaliKeOrientasi.addEventListener('click', () => {
          this.navigateTo('page-orientasi');
        });
      }

      const goToRead = () => {
        this.navigateTo('page-read');
      };
      if (this.btnToJourney) this.btnToJourney.addEventListener('click', goToRead);
      if (this.btnBottomToJourney) this.btnBottomToJourney.addEventListener('click', goToRead);

      // 3. Selection of Materi Cards (Read Page)
      this.materiCards.forEach(card => {
        card.addEventListener('click', () => {
          const materiId = parseInt(card.getAttribute('data-materi'), 10);
          this.openMateri(materiId);
        });

        // Accessible keyboard selection (Enter / Space)
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const materiId = parseInt(card.getAttribute('data-materi'), 10);
            this.openMateri(materiId);
          }
        });
      });

      // 4. Ecomedia Back Button
      if (this.btnBackMateri) {
        this.btnBackMateri.addEventListener('click', () => {
          this.saveCurrentLensaText();
          this.saveCurrentPenasaranText();
          this.navigateTo('page-read');
          this.updateMateriCardsStatus();
        });
      }

      // 5. Video Custom Overlay Play Button
      if (this.btnOverlayPlay) {
        this.btnOverlayPlay.addEventListener('click', () => {
          this.startVideoPlayback();
        });
      }

      if (this.videoOverlay) {
        this.videoOverlay.addEventListener('click', () => {
          this.startVideoPlayback();
        });
      }

      // 6. 4 Lensa Tabs
      this.lensaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const selectedLensa = tab.getAttribute('data-lensa');
          this.switchLensa(selectedLensa);
        });
      });

      // 7. Auto-save Textarea on input
      if (this.lensaTextarea) {
        this.lensaTextarea.addEventListener('input', () => {
          this.handleLensaInput();
        });
      }

      if (this.penasaranTextarea) {
        this.penasaranTextarea.addEventListener('input', () => {
          this.handlePenasaranInput();
        });
      }

      // 8. Prev / Next Materi Navigation
      if (this.btnPrevMateri) {
        this.btnPrevMateri.addEventListener('click', () => {
          this.navigateMateriStep(-1);
        });
      }

      if (this.btnNextMateri) {
        this.btnNextMateri.addEventListener('click', () => {
          this.navigateMateriStep(1);
        });
      }

      // 9. Navbar Pills Navigation (Read & Ecomedia)
      document.querySelectorAll('.nav-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const navAction = btn.getAttribute('data-nav');
          this.handleNavbarAction(navAction);
        });
      });

      // 10. User profile click
      const userClick = () => {
        if (this.appData && this.appData.siswa && this.appData.siswa.nama) {
          const s = this.appData.siswa;
          this.showToast(`👤 Siswa: ${s.nama} | Kelas: ${s.kelas || '-'} | ${s.sekolah || '-'}`);
        }
      };
      const userBadgeRead = document.getElementById('btn-user-profile');
      const userBadgeEco = document.getElementById('btn-user-profile-eco');
      if (userBadgeRead) userBadgeRead.addEventListener('click', userClick);
      if (userBadgeEco) userBadgeEco.addEventListener('click', userClick);

      // 11. Modal Close Buttons
      document.querySelectorAll('[data-close-modal]').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
          const modalId = closeBtn.getAttribute('data-close-modal');
          const modalEl = document.getElementById(modalId);
          if (modalEl) modalEl.classList.remove('active');
        });
      });

      // Close modal on click outside
      [this.modalPanduan, this.modalPeta, this.modalInfoTahap].forEach(modal => {
        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) {
              modal.classList.remove('active');
            }
          });
        }
      });
    }

    restoreSessionIfAvailable() {
      if (this.appData && this.appData.siswa && this.appData.siswa.nama) {
        // Pre-fill form inputs
        if (this.inputNama) this.inputNama.value = this.appData.siswa.nama;
        if (this.inputKelas) this.inputKelas.value = this.appData.siswa.kelas || '';
        if (this.inputSekolah) this.inputSekolah.value = this.appData.siswa.sekolah || '';

        this.updateNameDisplays(this.appData.siswa.nama);
        this.updateMateriCardsStatus();
      }
    }

    // ============================================================
    // NAVIGATION METHODS
    // ============================================================
    navigateTo(pageId) {
      this.pages.forEach(p => p.classList.remove('active'));
      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.classList.add('active');
        this.activePage = pageId;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Pause video if navigating away from ecomedia
        if (pageId !== 'page-ecomedia' && this.videoPlayer) {
          this.videoPlayer.pause();
        }
      }
    }

    updateNameDisplays(nama) {
      const displayName = nama || 'Sahabat Bumi';
      if (this.namaOrientasi) this.namaOrientasi.textContent = displayName;
      if (this.namaNavbar) this.namaNavbar.textContent = displayName;
      if (this.namaNavbarEco) this.namaNavbarEco.textContent = displayName;
    }

    handleStartLearning() {
      const nama = this.inputNama ? this.inputNama.value.trim() : '';
      const kelas = this.inputKelas ? this.inputKelas.value.trim() : '';
      const sekolah = this.inputSekolah ? this.inputSekolah.value.trim() : '';

      if (!nama) {
        this.showToast('⚠️ Silakan masukkan nama siswa terlebih dahulu!');
        if (this.inputNama) this.inputNama.focus();
        return;
      }

      // Update or create data
      if (!this.appData) {
        this.appData = StorageManager.createInitialData(nama, kelas, sekolah);
      } else {
        this.appData.siswa.nama = nama;
        this.appData.siswa.kelas = kelas;
        this.appData.siswa.sekolah = sekolah;
      }

      StorageManager.saveData(this.appData);
      this.updateNameDisplays(nama);
      this.showToast(`🎉 Selamat datang, ${nama}! Ayo mulai petualangan!`);
      this.navigateTo('page-orientasi');
    }

    // ============================================================
    // MATERI & ECOMEDIA METHODS
    // ============================================================
    openMateri(materiId) {
      if (!MATERI_DATA[materiId]) return;

      if (!this.appData) {
        this.appData = StorageManager.createInitialData('fona', 'V-A', 'SD Negeri');
      }

      this.appData.sesiAktif.materiId = materiId;
      StorageManager.saveData(this.appData);

      const data = MATERI_DATA[materiId];

      // Update UI Header
      if (this.ecoMateriPill) {
        this.ecoMateriPill.textContent = `Materi ${materiId} dari 5`;
      }
      if (this.ecoActiveMateriTag) {
        this.ecoActiveMateriTag.textContent = `${data.badge}: ${data.judul}`;
      }

      // Update Summary
      if (this.summaryMateriTitle) {
        this.summaryMateriTitle.textContent = `📌 Intisari Materi: ${data.judul}`;
      }
      if (this.summaryMateriText) {
        this.summaryMateriText.textContent = data.ringkasan;
      }

      // Update Video Player
      if (this.videoSource && this.videoPlayer) {
        this.videoSource.src = data.videoUrl;
        this.videoPlayer.load();
      }
      if (this.overlayVideoTitle) {
        this.overlayVideoTitle.textContent = data.videoTitle;
      }
      if (this.overlayVideoDuration) {
        this.overlayVideoDuration.textContent = data.durasi;
      }
      if (this.videoOverlay) {
        this.videoOverlay.classList.remove('hidden');
      }

      // Reset to Lensa 'cerita'
      this.currentLensa = 'cerita';
      this.loadLensaUI(materiId, this.currentLensa);
      this.loadPenasaranUI(materiId);

      // Update Prev / Next Buttons
      if (this.btnPrevMateri) {
        this.btnPrevMateri.style.visibility = (materiId === 1) ? 'hidden' : 'visible';
      }
      if (this.btnNextMateri) {
        if (materiId === 5) {
          this.btnNextMateri.textContent = 'Selesai READ & Lanjut ANSWER →';
        } else {
          this.btnNextMateri.textContent = 'Materi Berikutnya →';
        }
      }

      this.navigateTo('page-ecomedia');
    }

    startVideoPlayback() {
      if (this.videoOverlay) {
        this.videoOverlay.classList.add('hidden');
      }
      if (this.videoPlayer) {
        this.videoPlayer.play().catch(err => {
          console.log('Video autoplay prevented or source not loaded:', err);
        });
      }
    }

    switchLensa(lensaKey) {
      // 1. Save current textarea content
      this.saveCurrentLensaText();

      // 2. Update active tab
      this.currentLensa = lensaKey;
      this.lensaTabs.forEach(tab => {
        const isMatch = tab.getAttribute('data-lensa') === lensaKey;
        tab.classList.toggle('active', isMatch);
        tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      // 3. Load content for new tab
      const currentMateriId = this.appData ? this.appData.sesiAktif.materiId : 1;
      this.loadLensaUI(currentMateriId, lensaKey);
    }

    loadLensaUI(materiId, lensaKey) {
      const materi = MATERI_DATA[materiId];
      if (!materi) return;

      // Update prompt guide
      if (this.lensaGuideText && materi.panduanLensa[lensaKey]) {
        this.lensaGuideText.textContent = materi.panduanLensa[lensaKey];
      }

      // Update textarea placeholder
      if (this.lensaTextarea && materi.placeholderLensa[lensaKey]) {
        this.lensaTextarea.placeholder = materi.placeholderLensa[lensaKey];
      }

      // Get saved answer from appData
      const lensaRecord = this.getLensaRecord(materiId);
      const savedText = lensaRecord ? (lensaRecord[lensaKey] || '') : '';

      if (this.lensaTextarea) {
        this.lensaTextarea.value = savedText;
        this.updateCharCounter(savedText.length);
      }
    }

    loadPenasaranUI(materiId) {
      const lensaRecord = this.getLensaRecord(materiId);
      const savedText = lensaRecord ? (lensaRecord.pertanyaan || '') : '';
      if (this.penasaranTextarea) {
        this.penasaranTextarea.value = savedText;
      }
    }

    getLensaRecord(materiId) {
      if (!this.appData || !this.appData.dataLensa) return null;
      let record = this.appData.dataLensa.find(r => r.materiId === materiId);
      if (!record) {
        record = {
          materiId: materiId,
          cerita: '',
          peran: '',
          limbah: '',
          pengalaman: '',
          pertanyaan: ''
        };
        this.appData.dataLensa.push(record);
      }
      return record;
    }

    handleLensaInput() {
      if (!this.lensaTextarea) return;
      const text = this.lensaTextarea.value;
      this.updateCharCounter(text.length);

      // Debounced save
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => {
        this.saveCurrentLensaText();
        this.showSaveIndicator('Tersimpan di browser');
      }, 400);
    }

    handlePenasaranInput() {
      clearTimeout(this.penasaranTimer);
      this.penasaranTimer = setTimeout(() => {
        this.saveCurrentPenasaranText();
      }, 400);
    }

    saveCurrentLensaText() {
      if (!this.lensaTextarea || !this.appData) return;
      const currentMateriId = this.appData.sesiAktif.materiId;
      const record = this.getLensaRecord(currentMateriId);
      if (record) {
        record[this.currentLensa] = this.lensaTextarea.value;
        StorageManager.saveData(this.appData);
      }
    }

    saveCurrentPenasaranText() {
      if (!this.penasaranTextarea || !this.appData) return;
      const currentMateriId = this.appData.sesiAktif.materiId;
      const record = this.getLensaRecord(currentMateriId);
      if (record) {
        record.pertanyaan = this.penasaranTextarea.value;
        StorageManager.saveData(this.appData);
        if (this.curiositySaveBadge) {
          this.curiositySaveBadge.textContent = 'Pertanyaan tersimpan ✅';
          setTimeout(() => {
            if (this.curiositySaveBadge) {
              this.curiositySaveBadge.textContent = 'Pertanyaan disimpan';
            }
          }, 1800);
        }
      }
    }

    updateCharCounter(count) {
      if (this.charCount) {
        this.charCount.textContent = count;
      }
    }

    showSaveIndicator(text) {
      if (this.saveIndicator) {
        const textEl = this.saveIndicator.querySelector('.save-text');
        if (textEl) textEl.textContent = text;
        this.saveIndicator.style.opacity = '1';
      }
    }

    navigateMateriStep(direction) {
      this.saveCurrentLensaText();
      this.saveCurrentPenasaranText();

      const currentId = this.appData ? this.appData.sesiAktif.materiId : 1;
      const targetId = currentId + direction;

      if (targetId >= 1 && targetId <= 5) {
        this.openMateri(targetId);
      } else if (targetId > 5) {
        // Finished all 5 materi!
        this.showToast('🎉 Hebat! Kamu sudah menyelesaikan seluruh materi Tahap READ!');
        this.openTahapModal('answer');
      }
    }

    updateMateriCardsStatus() {
      if (!this.appData || !this.appData.dataLensa) return;

      this.appData.dataLensa.forEach(item => {
        const statusEl = document.getElementById(`status-materi-${item.materiId}`);
        if (!statusEl) return;

        // Check if any lenses are answered
        const hasAnswers = Boolean(item.cerita || item.peran || item.limbah || item.pengalaman);
        if (hasAnswers) {
          statusEl.textContent = 'Sudah Diamati ✅';
          statusEl.style.color = '#15803d';
        } else {
          statusEl.textContent = 'Mulai Belajar →';
          statusEl.style.color = '#1d68c9';
        }
      });
    }

    // ============================================================
    // NAVBAR ACTIONS & MODALS
    // ============================================================
    handleNavbarAction(navKey) {
      switch (navKey) {
        case 'panduan':
          if (this.modalPanduan) this.modalPanduan.classList.add('active');
          break;
        case 'peta':
          if (this.modalPeta) this.modalPeta.classList.add('active');
          break;
        case 'read':
          this.navigateTo('page-read');
          break;
        case 'answer':
        case 'discuss':
        case 'explain':
        case 'create':
          this.openTahapModal(navKey);
          break;
        default:
          break;
      }
    }

    openTahapModal(tahapKey) {
      const tahapInfo = {
        answer: {
          icon: '✏️',
          name: 'Tahap 2: ANSWER (Menjawab)',
          desc: 'Pada tahap ini kamu akan menjawab pertanyaan-pertanyaan pemantik secara mandiri untuk menguji pemahaman dan analisis ecomedia yang telah kamu pelajari.'
        },
        discuss: {
          icon: '💬',
          name: 'Tahap 3: DISCUSS (Berdiskusi)',
          desc: 'Waktunya berdiskusi dengan kelompok! Cocokkan hasil analisis 4 lensa ecomedia kamu dengan sudut pandang temanmu untuk merumuskan ide bersama.'
        },
        explain: {
          icon: '🗣️',
          name: 'Tahap 4: EXPLAIN (Menjelaskan)',
          desc: 'Sampaikan pemikiran kelompokmu ke depan kelas. Jelaskan hubungan timbal balik antara manusia, emisi, dan kelestarian iklim.'
        },
        create: {
          icon: '🎨',
          name: 'Tahap 5: CREATE (Berkreasi)',
          desc: 'Wujudkan kepedulianmu menjadi karya nyata! Buat poster, video kampanye mini, atau rencana aksi lingkungan sekolah.'
        }
      };

      const info = tahapInfo[tahapKey];
      if (!info || !this.modalInfoTahap) return;

      if (this.modalTahapIcon) this.modalTahapIcon.textContent = info.icon;
      if (this.modalTahapName) this.modalTahapName.textContent = info.name;
      if (this.modalTahapDesc) this.modalTahapDesc.textContent = info.desc;

      this.modalInfoTahap.classList.add('active');
    }

    // ============================================================
    // TOAST NOTIFICATION
    // ============================================================
    showToast(message) {
      if (!this.toast || !this.toastMessage) return;
      this.toastMessage.textContent = message;
      this.toast.classList.add('show');

      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast.classList.remove('show');
      }, 3200);
    }
  }

  // ============================================================
  // 4. INSTANTIATE & INITIALIZE
  // ============================================================
  const app = new AppController();
  app.init();

  // Expose to window for testing or inspection
  window.EcomediaApp = app;
});
