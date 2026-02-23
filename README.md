# Portofolio React (Vite)

Struktur proyek ada di `porto-react/`.

Menjalankan lokal:

```bash
cd c:/laragon/www/porto-react
npm install
npm run dev
```

Buka http://localhost:5173 (atau URL yang dicetak oleh Vite).

## Kontak Siap Pakai

Form kontak sekarang kirim langsung ke FormSubmit, jadi tombol **Kirim Pesan** tidak membuka Outlook.

Default endpoint sudah otomatis dibentuk dari email profil Anda di `src/App.jsx`.
Saat pengiriman pertama, FormSubmit biasanya mengirim email aktivasi sekali ke inbox tujuan.

## Opsi Override Endpoint (Opsional)

Jika ingin ganti layanan endpoint, buat file `.env` di root project:

```bash
VITE_CONTACT_ENDPOINT=https://your-endpoint.example.com
```

## Ubah Data Portofolio

1. Data profil utama: `src/App.jsx`
2. Data proyek: `src/components/Projects.jsx`
3. Form dan teks kontak: `src/components/Contact.jsx`
