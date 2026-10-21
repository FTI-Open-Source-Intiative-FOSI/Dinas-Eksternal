// ================================
// PREVIEW DOKUMENTASI DI BERANDA
// ================================

const previewDokumentasi = document.getElementById("preview-dokumentasi");

if (previewDokumentasi && typeof organisasi !== "undefined") {
    // Ambil maksimal 3 organisasi yang memiliki foto
    const dataPreview = organisasi
        .filter((bem) => bem.foto)
        .slice(0, 3);

    dataPreview.forEach((bem) => {
        // Buat kartu
        const card = document.createElement("article");
        card.className = "bem-card";

        // Buat gambar
        const gambar = document.createElement("img");
        gambar.src = bem.foto;
        gambar.alt = `Dokumentasi ${bem.nama}`;
        gambar.loading = "lazy";

        // Buat bagian informasi
        const konten = document.createElement("div");
        konten.className = "bem-card-content";

        const judul = document.createElement("h3");
        judul.textContent = bem.nama;

        const universitas = document.createElement("p");
        universitas.textContent = bem.universitas;

        // Buat tombol detail
        const tautan = document.createElement("a");
        tautan.href = `detail.html?id=${encodeURIComponent(bem.id)}`;
        tautan.className = "text-link";
        tautan.textContent = "Lihat Detail →";

        // Susun kartu
        konten.append(judul, universitas, tautan);
        card.append(gambar, konten);
        previewDokumentasi.appendChild(card);
    });
}
// Tombol Kembali ke Atas
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}