// فعال‌سازی تم تلگرام
const tg = window.Telegram.WebApp;

// باز کردن صفحه در حالت تمام‌صفحه
tg.expand();

document.getElementById("startBtn").addEventListener("click", () => {
    tg.showAlert("شروع می‌کنیم!");
});