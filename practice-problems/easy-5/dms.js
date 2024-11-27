
function dms(num) {
  while (num < 0) {
    num += 360;
  }
  while (num > 360) {
    num -= 360;
  }

  let degrees = Math.floor(num);
  let decimal = (num - degrees) * 100;
  let totalSeconds = Math.floor(decimal * 36);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - (minutes * 60);

  console.log(`${degrees}°${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}

function padZeroes(num) {
  let numStr = String(num);
  return numStr.length < 2 ? "0" + numStr : numStr;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(400);
dms(400.56);
dms(-450.45);