// set typing speed and wait times
const timeInit = 700; // initial wait before typing first line
const timeGap = 500; // wait time between each line
const timeChar = 20; // time until next letter

const cursorChar = '&#9608;';

const originId = ['line1', 'line2', 'line3', 'line4', 'line5', 'line6'];
const originText = new Array();
for (let i = 0; i < originId.length; i++) {
  originText.push(document.getElementById(originId[i]).innerHTML);
}

let cursorLine = document.getElementById('cursor-line');

let currentTimeout;
let showCursor;

const typeWriter = function (index) {
  let loc = document.getElementById(originId[index]);
  let fullText = originText[index];
  let letterCount = 0;

  let typeLetter = function () {
    currentTimeout = setTimeout(function () {
      loc.className = 'visible';
      letterCount += 1;
      let showText = fullText.substring(0, letterCount);

      if (letterCount === fullText.length) {
        loc.innerHTML = '&gt; ' + showText;
      } else {
        loc.innerHTML =
          '&gt; ' +
          showText +
          '<span class="typed-cursor">' +
          cursorChar +
          '</span>';
        typeLetter();
      }
    }, timeChar);
  };

  typeLetter();
};

// calculated time delays
let delayTime = [timeInit];
let cumulativeDelayTime = [timeInit];
for (let i = 0; i < originId.length; i++) {
  let elapsedTimeLine =
    originText[i].length * timeChar + timeGap + timeChar * 2;
  delayTime.push(elapsedTimeLine);
  let sum = 0;
  for (let j = 0; j < delayTime.length; j++) {
    sum += delayTime[j];
  }
  cumulativeDelayTime.push(sum);
}

// calls setTimeout for each line
let typeLineTimeout = new Array();
for (let i = 0; i < originId.length; i++) {
  typeLineTimeout[i] = setTimeout(
    (function (index) {
      return function () {
        typeWriter(index);
      };
    })(i),
    cumulativeDelayTime[i]
  );
}

let redirect_Page = () => {
    let tID = setTimeout(function () {
        window.location.href = "./index.html";
        window.clearTimeout(tID);
    }, 5500);
}

redirect_Page();