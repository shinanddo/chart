const members = [
  { name: "신유", img: "https://i.imgur.com/5L6wDru.png" },
  { name: "도훈", img: "https://i.imgur.com/hPrDoAd.png" },
  { name: "영재", img: "https://i.imgur.com/jaBqdU9.png" },
  { name: "한진", img: "https://i.imgur.com/dlN47CT.png" },
  { name: "지훈", img: "https://i.imgur.com/3jElNXL.png" },
  { name: "경민", img: "https://i.imgur.com/0qLTCdv.png" }
];

const STEP = 10;
const FIXED_WIDTH = 50;
const MAX_CHARS = 100;
const TEXT_FONT_PX = 20;
const CAPTURE_W = 1200;
const CAPTURE_H = 900;

const inputs = document.getElementById("inputs");
const resultList = document.getElementById("resultList");

members.forEach((m, i) => {
  inputs.insertAdjacentHTML("beforeend", `
    <div class="member-control">
      <div class="member-header">
        <img src="${m.img}">
        <strong>${m.name}</strong>
      </div>

      <div class="range-row">
        <span class="side">공 <b id="gPct${i}">50%</b></span>
        <input type="range" min="0" max="100" value="50" step="${STEP}" id="range${i}">
        <span class="side">수 <b id="sPct${i}">50%</b></span>
      </div>

      <textarea id="text${i}" placeholder="텍스트 작성"></textarea>
    </div>
  `);

  resultList.insertAdjacentHTML("beforeend", `
    <div class="card">
      <img src="${m.img}">
      <div class="content">
        <div class="bar-wrap">
          <div class="sidecol">
            <div class="label">공</div>
            <div class="num" id="gNum${i}">50</div>
          </div>

          <div class="bar">
            <div class="bar-inner" id="bar${i}"></div>
          </div>

          <div class="sidecol">
            <div class="label">수</div>
            <div class="num" id="sNum${i}">50</div>
          </div>
        </div>

        <div class="result-text" id="resultText${i}"></div>
      </div>
    </div>
  `);
});

function generate() {
  members.forEach((_, i) => {
    const g = Number(document.getElementById(`range${i}`).value);
    const s = 100 - g;

    document.getElementById(`gNum${i}`).textContent = g;
    document.getElementById(`sNum${i}`).textContent = s;

    const bar = document.getElementById(`bar${i}`);
    bar.style.width = `${FIXED_WIDTH}%`;
    bar.style.left = `${(100 - g) / 2}%`;

    document.getElementById(`resultText${i}`).textContent =
      document.getElementById(`text${i}`).value || " ";
  });

  document.getElementById("controls").style.display = "none";
  document.getElementById("result").style.display = "block";
}
