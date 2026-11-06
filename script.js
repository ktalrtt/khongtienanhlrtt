const $ = (id) => document.getElementById(id);
const setLines = (id, value) => { $(id).innerHTML = String(value || "").split("|").map(s => s.trim()).join("<br><em>") + (String(value || "").includes("|") ? "</em>" : ""); };
document.title = CONFIG.siteTitle || "Thư mời kỷ yếu";
$("gateEyebrow").textContent = CONFIG.gateEyebrow;
setLines("gateTitle", CONFIG.gateTitle);
$("gateCopy").textContent = CONFIG.gateCopy;
$("mainEyebrow").textContent = CONFIG.mainEyebrow;
setLines("mainTitle", CONFIG.mainTitle);
$("mainMessage").textContent = CONFIG.mainMessage;
$("eventDate").textContent = CONFIG.eventDate;
$("eventPlace").textContent = CONFIG.eventPlace;
$("footerNote").textContent = CONFIG.footerNote;
$("coverImage").src = CONFIG.coverImage;
$("rsvpLink").href = "mailto:" + encodeURIComponent(CONFIG.rsvpEmail) + "?subject=" + encodeURIComponent("Xác nhận tham gia chụp kỷ yếu");
$("gallery").innerHTML = CONFIG.gallery.map((item, i) => `
  <figure class="gallery-item">
    <img src="${item.image}" alt="Khoảnh khắc kỷ yếu ${i + 1}">
    <figcaption><span>0${i + 1}</span>${item.caption}</figcaption>
  </figure>`).join("");

$("nameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("guestName").value.trim();
  if (!name) return;
  $("helloLine").textContent = `Gửi ${name},`;
  $("gate").classList.add("hidden");
  $("invitation").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("backBtn").addEventListener("click", () => {
  $("invitation").classList.add("hidden");
  $("gate").classList.remove("hidden");
  $("guestName").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});