// =======================================================
// GANTI URL INI dengan Web App URL hasil deploy Apps Script Anda
// Contoh: https://script.google.com/macros/s/XXXXXXXXXXXX/exec
// =======================================================
const API_URL = "PASTE_URL_WEB_APP_ANDA_DISINI";

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

function setFavicon(url) {
  if (!url) return;
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
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
