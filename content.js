const DONGENG = [
  {
    id: "kancil-buaya",
    judul: "Kancil dan Buaya",
    emoji: "🦌",
    pesan: "Jangan menipu orang lain.",
    tahap: [
      {
        tipe: "modeling",
        judul: "Tahap 1 — Contoh",
        cerita: "Kancil ingin menyeberangi sungai. Di sungai ada banyak buaya. Kancil punya ide cerdik. Ia berteriak, 'Raja menyuruhku menghitung kalian!' Buaya-buaya percaya dan berbaris rapi.",
        narasi: "Kancil ingin menyeberangi sungai. Di sungai ada banyak buaya. Kancil punya ide cerdik. Ia berteriak, Raja menyuruhku menghitung kalian! Buaya-buaya percaya dan berbaris rapi.",
        audio: null,
        perbuatan: "Kancil menipu Buaya",
        akibat: "Buaya berbaris rapi"
      },
      {
        tipe: "pilihan",
        judul: "Tahap 2 — Bersama",
        cerita: "Kancil melompat ke punggung buaya pertama. Ia menghitung, 'Satu, dua, tiga!' Ia terus melompat dari satu buaya ke buaya lain. Akhirnya Kancil sampai di seberang.",
        narasi: "Kancil melompat ke punggung buaya pertama. Ia menghitung, satu, dua, tiga! Ia terus melompat dari satu buaya ke buaya lain. Akhirnya Kancil sampai di seberang.",
        audio: null,
        pilihan: {
          perbuatan: ["Kancil melompat dari buaya ke buaya", "Kancil tidur di tepi sungai", "Kancil minum air sungai"],
          akibat: ["Kancil sampai di seberang sungai", "Kancil jatuh ke air", "Kancil pulang ke rumah"]
        },
        jawaban: { perbuatan: 0, akibat: 0 }
      },
      {
        tipe: "pilihan",
        judul: "Tahap 3 — Kelompok",
        cerita: "Kancil tertawa di seberang sungai. 'Terima kasih sudah percaya!' katanya. Buaya sadar telah ditipu. Mereka merasa malu dan kesal. Wajah mereka memerah.",
        narasi: "Kancil tertawa di seberang sungai. Terima kasih sudah percaya! katanya. Buaya sadar telah ditipu. Mereka merasa malu dan kesal. Wajah mereka memerah.",
        audio: null,
        pilihan: {
          perbuatan: ["Kancil tertawa karena berhasil menipu", "Kancil meminta maaf", "Kancil memberi makan buaya"],
          akibat: ["Buaya merasa malu dan kesal", "Buaya berterima kasih", "Buaya tidur di sungai"]
        },
        jawaban: { perbuatan: 0, akibat: 0 },
        petunjuk: ["Apa yang dilakukan Kancil setelah sampai?", "Bagaimana perasaan buaya setelah ditipu?", "Kancil tertawa, akibatnya buaya malu dan kesal."]
      },
      {
        tipe: "isian",
        judul: "Tahap 4 — Mandiri",
        cerita: "Kabar itu sampai ke seluruh hutan. Teman-teman Kancil tidak mau bermain dengannya. Kancil sedih dan menyesal. Ia meminta maaf. Buaya memaafkannya. Kancil berjanji tidak menipu lagi.",
        narasi: "Kabar itu sampai ke seluruh hutan. Teman-teman Kancil tidak mau bermain dengannya. Kancil sedih dan menyesal. Ia meminta maaf. Buaya memaafkannya. Kancil berjanji tidak menipu lagi. Sekarang tulis sendiri.",
        audio: null
      }
    ]
  }
];
