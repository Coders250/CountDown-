const EndDate = "9 August 2024 1:00 PM";
document.getElementById("EndDate").innerText = EndDate;
const inputs = document.querySelectorAll("input")

// create a function
function clock(params) {
  const end = new Date(EndDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;
  inputs[0].value =(Math.floor(diff / 3600 / 24));
  inputs[1].value =(Math.floor(diff / 3600 % 24));
  inputs[2].value =(Math.floor(diff / 60 % 60));
  inputs[3].value =(Math.floor(diff % 60));
}

clock();

setInterval(() => {
    clock()
}, 1000);
// * 1day = 24hr
// * 1hr = 60min
// * 60min = 3600sec
