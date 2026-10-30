const wadahDetail = document.getElementById("detail-organisasi");

const parameterURL = new URLSearchParams(window.location.search);
const idOrganisasi = parameterURL.get("id");

const bem = organisasi.find((item) => {
    return String(item.id) === idOrganisasi;
});

if (bem) {
    document.title = `${bem.nama} | FTI External Relations`;

    const gambar = document.createElement("img");
    gambar.className = "detail-image";
    gambar.src = bem.foto;
    gambar.alt = `Dokumentasi ${bem.nama}`;

    gambar.addEventListener("error", () => {
        gambar.alt = "Foto dokumentasi belum tersedia";
        gambar.classList.add("image-unavailable");
    });

    const informasi = document.createElement("div");
    informasi.className = "detail-information";

    const label = document.createElement("p");
    label.className = "section-label";
    label.textContent = "FTI EXTERNAL RELATIONS";

    const nama = document.createElement("h1");
    nama.textContent = bem.nama;

    const fakultas = document.createElement("p");
    fakultas.className = "detail-meta";
    fakultas.textContent = `Fakultas: ${bem.fakultas}`;

    const universitas = document.createElement("p");
    universitas.className = "detail-meta";
    universitas.textContent = `Universitas: ${bem.universitas}`;

    const tanggal = document.createElement("p");
    tanggal.className = "detail-meta";
    tanggal.textContent = `Tanggal kunjungan: ${bem.tanggal}`;

    const judulDeskripsi = document.createElement("h2");
    judulDeskripsi.textContent = "Tentang Organisasi";

    const deskripsi = document.createElement("p");
    deskripsi.className = "detail-description";
    deskripsi.textContent = bem.deskripsi;

    informasi.append(
        label,
        nama,
        fakultas,
        universitas,
        tanggal,
        judulDeskripsi,
        deskripsi
    );

    wadahDetail.replaceChildren(gambar, informasi);
} else {
    const pesan = document.createElement("div");
    pesan.className = "detail-not-found";

    const judul = document.createElement("h1");
    judul.textContent = "Organisasi Tidak Ditemukan";

    const deskripsi = document.createElement("p");
    deskripsi.textContent =
        "Data organisasi tidak tersedia atau tautan yang kamu buka tidak valid.";

    const tombol = document.createElement("a");
    tombol.href = "directory.html";
    tombol.className = "btn-primary";
    tombol.textContent = "Kembali ke Direktori";

    pesan.append(judul, deskripsi, tombol);
    wadahDetail.replaceChildren(pesan);
}