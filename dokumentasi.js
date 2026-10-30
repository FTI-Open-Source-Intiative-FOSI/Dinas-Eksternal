const galeriDokumentasi = document.getElementById("galeri-dokumentasi");
const pesanDokumentasi = document.getElementById("pesan-dokumentasi");

function tampilkanDokumentasi() {
    galeriDokumentasi.innerHTML = "";

    const dokumentasiTersedia = organisasi.filter((bem) => {
        return bem.foto && bem.foto.trim() !== "";
    });

    pesanDokumentasi.hidden = dokumentasiTersedia.length !== 0;

    dokumentasiTersedia.forEach((bem) => {
        const kartu = document.createElement("article");
        kartu.className = "documentation-card";

        const gambar = document.createElement("img");
        gambar.className = "documentation-image";
        gambar.src = bem.foto;
        gambar.alt = `Dokumentasi kunjungan ke ${bem.nama}`;
        gambar.loading = "lazy";

        gambar.addEventListener("error", () => {
            gambar.alt = "Foto dokumentasi belum tersedia";
            gambar.classList.add("image-unavailable");
        });

        const informasi = document.createElement("div");
        informasi.className = "documentation-info";

        const nama = document.createElement("h3");
        nama.textContent = bem.nama;

        const universitas = document.createElement("p");
        universitas.textContent = bem.universitas;

        const tanggal = document.createElement("p");
        tanggal.className = "documentation-date";
        tanggal.textContent = bem.tanggal;

        const tombol = document.createElement("a");
        tombol.href = `detail.html?id=${encodeURIComponent(bem.id)}`;
        tombol.className = "text-link";
        tombol.textContent = "Lihat Organisasi →";

        informasi.append(nama, universitas, tanggal, tombol);

        kartu.append(gambar, informasi);

        galeriDokumentasi.appendChild(kartu);
    });
}

tampilkanDokumentasi();