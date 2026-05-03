```javascript
function simulateGas() {
  const status = document.getElementById("status");

  status.innerHTML = "⚠ Kebocoran Gas Terdeteksi!";
  status.style.color = "red";

  setTimeout(() => {
    alert("ALARM AKTIF! Segera cek tabung LPG Anda!");
  }, 500);

  setTimeout(() => {
    status.innerHTML = "Aman — Tidak Ada Kebocoran";
    status.style.color = "#0B5ED7";
  }, 5000);
}

function scrollToSection() {
  document.getElementById("fitur").scrollIntoView({
    behavior: "smooth"
  });
}
```

---
