// Tempel URL hasil "Deploy > Web app" dari Apps Script Anda di sini.
const API_URL = "https://script.google.com/macros/s/AKfycbwbpEVi3owy3MVDokk0nflCVdhQsR9AZlAfBuCRZuaiH-zjLA7LzQL_KfTRvIXjGwcj4g/exec";

// Nama sheet untuk data login (kolom: A=username, B=password, C=nama, D=kelas, E=role)
const SHEET_LOGIN = "AKUN";

// Nama sheet untuk data nilai (kolom A = NINDUK, dipakai oleh fungsi Cari di Code.gs)
const SHEET_NILAI = "Nilai";

// Label kolom hasil fungsi "Cari" (20 kolom, mulai dari kolom C sheet Nilai).
// SESUAIKAN urutan & nama ini dengan kolom asli di sheet Nilai Anda.
const KOLOM_NILAI = [
  "Nama", "Kelas", "Semester",
  "Mapel 1", "Mapel 2", "Mapel 3", "Mapel 4", "Mapel 5",
  "Mapel 6", "Mapel 7", "Mapel 8", "Mapel 9",
  "Kolom 12", "Kolom 13", "Kolom 14", "Kolom 15",
  "Kolom 16", "Kolom 17", "Kolom 18", "Wali Kelas"
];
