const daftarBem = document.getElementById("daftar-bem");
const kolomPencarian = document.getElementById("search-bem");
const jumlahOrganisasi = document.getElementById("jumlah-organisasi");
const pesanKosong = document.getElementById("pesan-kosong");

function tampilkanOrganisasi(data) {
    daftarBem.innerHTML = "";

    jumlahOrganisasi.textContent =
        `${data.length} organisasi terdaftar`;

    pesanKosong.hidden = data.length !== 0;

    data.forEach((bem) => {
        const kartu = document.createElement("article");
        kartu.className = "bem-card";

        const gambar = document.createElement("img");
        gambar.className = "bem-image";
        gambar.src = bem.foto;
        gambar.alt = `Dokumentasi ${bem.nama}`;
        gambar.loading = "lazy";

        const isiKartu = document.createElement("div");
        isiKartu.className = "bem-card-content";

        const nama = document.createElement("h3");
        nama.textContent = bem.nama;

        const fakultas = document.createElement("p");
        fakultas.className = "bem-faculty";
        fakultas.textContent = bem.fakultas;

        const universitas = document.createElement("p");
        universitas.className = "bem-university";
        universitas.textContent = bem.universitas;

        const tanggal = document.createElement("p");
        tanggal.className = "bem-date";
        tanggal.textContent = `BEM Visit: ${bem.tanggal}`;

        const tombol = document.createElement("a");
        tombol.className = "bem-button";
        tombol.href = `detail.html?id=${encodeURIComponent(bem.id)}`;
        tombol.textContent = "Lihat Detail →";

        isiKartu.append(
            nama,
            fakultas,
            universitas,
            tanggal,
            tombol
        );

        kartu.append(gambar, isiKartu);
        daftarBem.appendChild(kartu);
    });
}

kolomPencarian.addEventListener("input", () => {
    const kataKunci = kolomPencarian.value.trim().toLowerCase();

    const hasilPencarian = organisasi.filter((bem) => {
        return (
            bem.nama.toLowerCase().includes(kataKunci) ||
            bem.fakultas.toLowerCase().includes(kataKunci) ||
            bem.universitas.toLowerCase().includes(kataKunci)
        );
    });

    tampilkanOrganisasi(hasilPencarian);
});

tampilkanOrganisasi(organisasi);