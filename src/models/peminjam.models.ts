export interface BukuDipinjam {
  id: number;
  nama: string;
}

export interface User {
  id: number;
  nama: string;
  email: string;
  kota: string;
  bukuDipinjam: BukuDipinjam;
}

export const users: User[] = [
  {
    id: 1,
    nama: "Riku Asahina",
    email: "riku@example.com",
    kota: "Tokyo",
    bukuDipinjam: { id: 1, nama: "Alya Sometimes Hides Her Feelings in Russian" }
  },
  {
    id: 2,
    nama: "Hina Yukimura",
    email: "hina@example.com",
    kota: "Osaka",
    bukuDipinjam: { id: 4, nama: "Classroom of the Elite" }
  },
  {
    id: 3,
    nama: "Kazuto Kirigaya",
    email: "kirito@example.com",
    kota: "Gunma",
    bukuDipinjam: { id: 7, nama: "Sword Art Online" }
  },
  {
    id: 4,
    nama: "Emilia Stella",
    email: "emilia@example.com",
    kota: "Sapporo",
    bukuDipinjam: { id: 5, nama: "Re:Zero" }
  },
  {
    id: 5,
    nama: "Shido Itsuka",
    email: "shido@example.com",
    kota: "Tokyo",
    bukuDipinjam: { id: 19, nama: "Date A Live" }
  },
  {
    id: 6,
    nama: "Bell Cranel",
    email: "bell@example.com",
    kota: "Orario",
    bukuDipinjam: { id: 8, nama: "DanMachi" }
  },
  {
    id: 7,
    nama: "Ayanokoji Kiyotaka",
    email: "ayanokoji@example.com",
    kota: "Kyoto",
    bukuDipinjam: { id: 4, nama: "Classroom of the Elite" }
  },
  {
    id: 8,
    nama: "Rimuru Tempest",
    email: "rimuru@example.com",
    kota: "Tempest City",
    bukuDipinjam: { id: 12, nama: "Tensei Slime" }
  },
  {
    id: 9,
    nama: "Sora",
    email: "sora@example.com",
    kota: "Ise",
    bukuDipinjam: { id: 14, nama: "No Game No Life" }
  },
  {
    id: 10,
    nama: "Mahiru Shiina",
    email: "mahiru@example.com",
    kota: "Nagoya",
    bukuDipinjam: { id: 15, nama: "The Angel Next Door Spoils Me Rotten" }
  },
  {
    id: 11,
    nama: "Kazuma Satou",
    email: "kazuma@example.com",
    kota: "Chiba",
    bukuDipinjam: { id: 9, nama: "Konosuba" }
  },
  {
    id: 12,
    nama: "Megumin",
    email: "megumin@example.com",
    kota: "Arcanlet",
    bukuDipinjam: { id: 9, nama: "Konosuba" }
  },
  {
    id: 13,
    nama: "Yumeko Jabami",
    email: "yumeko@example.com",
    kota: "Tokyo",
    bukuDipinjam: { id: 16, nama: "The Apothecary Diaries" }
  },
  {
    id: 14,
    nama: "Naofumi Iwatani",
    email: "naofumi@example.com",
    kota: "Osaka",
    bukuDipinjam: { id: 20, nama: "Shield Hero" }
  },
  {
    id: 15,
    nama: "Raphtalia",
    email: "raphtalia@example.com",
    kota: "Kyoto",
    bukuDipinjam: { id: 20, nama: "Shield Hero" }
  },
  {
    id: 16,
    nama: "Shinra Kusakabe",
    email: "shinra@example.com",
    kota: "Tokyo",
    bukuDipinjam: { id: 18, nama: "86 — Eighty-Six" }
  },
  {
    id: 17,
    nama: "Hori Kyouko",
    email: "hori@example.com",
    kota: "Yokohama",
    bukuDipinjam: { id: 17, nama: "Horimiya" }
  },
  {
    id: 18,
    nama: "Miyamura Izumi",
    email: "miyamura@example.com",
    kota: "Yokohama",
    bukuDipinjam: { id: 17, nama: "Horimiya" }
  },
  {
    id: 19,
    nama: "Ainz Ooal Gown",
    email: "ainz@example.com",
    kota: "Nazarick",
    bukuDipinjam: { id: 11, nama: "Overlord" }
  },
  {
    id: 20,
    nama: "Cid Kagenou",
    email: "cid@example.com",
    kota: "Shadow Garden",
    bukuDipinjam: { id: 10, nama: "The Eminence in Shadow" }
  }
];
