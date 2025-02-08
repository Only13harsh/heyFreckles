const febHolidays = [
  "It all started when I saw her for the first time in college, always wearing a mask. Despite never seeing her face, something about her drew me in.",
      "I kept admiring her from afar, too scared to talk because of a past heartbreak that left me cautious.",
      "I would ask people about her, what she liked, what she didn’t, but never had the courage to ask her directly.",
      "As semesters passed, I realized no other girl caught my attention the way she did. I feared she’d never know I existed.",
      "In my fourth semester, I messaged her from a fake ID, telling her everything except who I was. Eventually, I revealed my identity, and we started talking.",
      "Our conversations were scattered, but as time went on, we started talking more frequently, especially in our last semester.",
      "We planned a day together at my place. I decorated my room, got a simple cake for her birthday, but she didn’t show up that day.",
      "After some time, we finally spent a day together—laughing, cooking, watching movies. It felt surreal.",
      "In the heat of the moment, I spoke about my past heartbreak, not realizing how much it would hurt her.",
      "The next morning, I hugged her tightly, not wanting her to leave. But eventually, I dropped her back at her PG.",
      "Later, she told me how my words made her feel like just a distraction, filling a void from my past.",
      "Her messages made me realize the pain I caused. All I could do was ask for her forgiveness.",
      "Now, I just hope she knows I never meant to hurt her. I was just a fool stuck in the past, unable to embrace the present."
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
  