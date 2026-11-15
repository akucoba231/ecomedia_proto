// Data 5 Materi Perubahan Iklim
const dataMateri = [
    { id: 1, icon: "☀️", title: "Cuaca, Iklim, dan Musim" },
    { id: 2, icon: "🌡️", title: "Atmosfer, Efek Rumah Kaca, dan Pemanasan Global" },
    { id: 3, icon: "🏭", title: "Penyebab Perubahan Iklim" },
    { id: 4, icon: "🌊", title: "Dampak Perubahan Iklim" },
    { id: 5, icon: "♻️", title: "Tindakan Ramah Lingkungan" }
];

// Fungsi untuk me-render daftar materi ke DOM
function renderMateri() {
    const container = document.getElementById('materi-container');
    if (!container) return;
    
    container.innerHTML = ''; // Kosongkan kontainer
    
    dataMateri.forEach(materi => {
        const card = document.createElement('div');
        card.className = 'materi-card';
        
        // Gunakan fungsi openMateri saat diklik
        card.onclick = () => openMateri(materi.id, materi.title);
        
        card.innerHTML = `
            <span class="materi-label">MATERI ${materi.id}</span>
            <h4>${materi.icon} ${materi.title}</h4>
        `;
        
        container.appendChild(card);
    });
}

// Fungsi terhubung: Menyimpan state materi yang dipilih lalu navigasi
function openMateri(id, title) {
    // Simpan informasi materi ke localStorage (opsional, sangat berguna untuk halaman selanjutnya)
    localStorage.setItem('radec_active_materi_id', id);
    localStorage.setItem('radec_active_materi_title', title);
    
    // Navigasi ke halaman Ecomedia
    navigateTo('page-ecomedia');
}

document.addEventListener('DOMContentLoaded', () => {
    muatDataUser();
    muatDataJawaban();

    // 1. Form Pendaftaran (Homepage)
    const startForm = document.getElementById('start-form');
    if(startForm) {
        startForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nama = document.getElementById('nama').value.trim();
            const kelas = document.getElementById('kelas').value.trim();
            const sekolah = document.getElementById('sekolah').value.trim();
            
            if(nama) {
                localStorage.setItem('radec_user_name', nama);
                localStorage.setItem('radec_user_class', kelas);
                localStorage.setItem('radec_user_school', sekolah);
                updateNameDisplays(nama);
                navigateTo('page-orientation');
            }
        });
    }

    // 2. Tab Lensa Ecomedia (Dalam Halaman Ecomedia)
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
            });
            
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if(targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('active');
            }
        });
    });
});

// Fungsi Routing SPA Utama
function navigateTo(targetPageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(targetPageId);
    if(targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Menampilkan Nama di Seluruh Navbar
function updateNameDisplays(nama) {
    document.querySelectorAll('.user-name-display').forEach(el => {
        el.textContent = nama;
    });
}

function muatDataUser() {
    const savedName = localStorage.getItem('radec_user_name');
    if(savedName) updateNameDisplays(savedName);
}

// --- FUNGSI PENYIMPANAN DATA FORM RADEC ---

function simpanData(tahap) {
    let toastId = `toast-${tahap}`;
    
    if (tahap === 'ecomedia') {
        localStorage.setItem('radec_lensa1', document.getElementById('val_lensa1').value);
        localStorage.setItem('radec_lensa2', document.getElementById('val_lensa2').value);
        localStorage.setItem('radec_lensa3', document.getElementById('val_lensa3').value);
        localStorage.setItem('radec_lensa4', document.getElementById('val_lensa4').value);
    } else {
        const val = document.getElementById(`val_${tahap}`).value;
        localStorage.setItem(`radec_${tahap}`, val);
    }

    // Tampilkan Toast Notifikasi
    const toast = document.getElementById(toastId);
    toast.classList.remove('hidden');
    setTimeout(() => { toast.classList.add('hidden'); }, 2500);
}

function muatDataJawaban() {
    // Muat Ecomedia
    if(localStorage.getItem('radec_lensa1')) document.getElementById('val_lensa1').value = localStorage.getItem('radec_lensa1');
    if(localStorage.getItem('radec_lensa2')) document.getElementById('val_lensa2').value = localStorage.getItem('radec_lensa2');
    if(localStorage.getItem('radec_lensa3')) document.getElementById('val_lensa3').value = localStorage.getItem('radec_lensa3');
    if(localStorage.getItem('radec_lensa4')) document.getElementById('val_lensa4').value = localStorage.getItem('radec_lensa4');
    
    // Muat Tahapan RADEC Lainnya
    const tahapan = ['answer', 'discuss', 'explain', 'create'];
    tahapan.forEach(t => {
        const saved = localStorage.getItem(`radec_${t}`);
        if(saved && document.getElementById(`val_${t}`)) {
            document.getElementById(`val_${t}`).value = saved;
        }
    });

renderMateri();
}