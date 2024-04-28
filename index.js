const qrFormEl = document.getElementById("qrform");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generateBtn");
const renderQRCode = (url) => {
  if (!url) return;
  generateBtnEl.innerText = "Generating QR Code...";
  qrImageEl.src = url;

  const imageLoad = () => {
    const time = setInterval(() => {
      qrContainerEl.classList.add("show");
      clearInterval(time);
      generateBtnEl.innerText = "Generate QR Code";
    }, 500);
  };

  qrImageEl.addEventListener("load", imageLoad);
};

qrFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrFormEl);
  const text = formData.get("qrText");
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  renderQRCode(qrCodeUrl);
});

qrInputTextEl.addEventListener("keyup", () => {
  if (!qrInputTextEl.value.trim()) {
    qrContainerEl.classList.remove("show");
  }
});
