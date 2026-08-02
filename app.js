// =======================================================
// GANTI URL INI dengan Web App URL hasil deploy Apps Script Anda
// Contoh: https://script.google.com/macros/s/XXXXXXXXXXXX/exec
// =======================================================
const API_URL = "https://script.google.com/macros/s/AKfycbyZe228fNkfk7K1fvXGbbLxEsoSHgqXgze046OBKzMqkX0VLJUcJoDkMHlzsO2Yalbs/exec";

async function apiCall(action, params = {}) {
  const payload = Object.assign({ action }, params);
  const res = await fetch(API_URL, {
    method: "POST",
    // pakai text/plain supaya tidak kena CORS preflight dari Apps Script
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

function requireLogin(expectedRole) {
  const role = sessionStorage.getItem("role");
  if (!role || role !== expectedRole) {
    window.location.href = "index.html";
    return null;
  }
  return {
    nama: sessionStorage.getItem("nama"),
    username: sessionStorage.getItem("username"),
    role: role
  };
}

function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}
