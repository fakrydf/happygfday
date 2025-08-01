const teks = "Halo maniskuu, maaff yaa mas telat buat ngucapin dede but, Happy girlfriend day yaa cantik. i hope we can stay together until the end. walau kita sering gelud dan g selalu lancar, tp inget kalau soal kita yang sudah susah susah untuk sampai ke fase ini. jangan lupakan itu yaa. aku juga minta maaf yaa sayang jika selama ini aku sering bikin kamu marah marah terus. i hope for the best for the two of us. jangan pernah nyerah untuk kita berdua. apapun tantangannya inget kalau di depan kita ada reward yang menanti kita. jangan pernah berpikir untuk selesaiin hubungan ini atau gimana. kalau emang sudah buruk dan sudah keterlaluan, kita bicarain baik baik okay? dan jangan pernah berpikir kalau kamu itu sendiri okay? aku bakal selalu ada untuk kamu, aku bakal selalu ada di sisi kamu untuk dukung kamu. walau satu dunia memusuhi kamu pun aku tetep dukung kamu. don't be afraid to be yourself. as always, i love you more than you know, cantik.";
const target = document.getElementById("typing");

let i = 0;
function ketik() {
  if (i < teks.length) {
    const char = teks.charAt(i);
    if (char === '\n') {
      target.innerHTML += '<br>';
    } else {
      target.innerHTML += char;
    }
    i++;
    setTimeout(ketik, 50); 
  }
}

ketik();
