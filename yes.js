const febHolidays = [
"That day, we both planned to meet. It wasn't sure if you would come; But you did.",
    "We spent the entire night together, talking, laughing, and feeling the time slip away.",
    "I wished the night would never end, but morning came too soon.",
    "Before I dropped you back, I hugged you tightly. Cause i never wanted you to leave.",
    "Even in my half-asleep state, I managed to say something stupid. And it hurt you.",
    "I am really sorry for it .",
    "Every moment with you was worth it.That time i could say whatever my heart wanted",
    "Even the things i couldnt hear ,sorry for being so stupid that i said that.",
    "But beleive me it not what i really wanted to say it was just something",
    "in my heart from very long and that day it came out",
    "i know i messed it all up , i messed it all up so bad but",
    "But if you choose to stay i will try my best to get over with her.",
    "And i sure will , not going to even take her name",
    "just keep me in your life even as a friend",
    "No matter what happens, I will always be there for you.",
    "You’re my favorite, my everything, my home.",
    "The way you look at me, the way you laugh—it makes my world better.",
    "One day, we'll look back at all these moments and smile.",
    "Because love isn't just about grand gestures. It's about the small moments that stay forever.",
    "So, will you want to give me some more time from your precious life, so that we could have 3 kids—2 girls & 1 boy? As far as I remember, that way they won’t fight for property. 😌"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  