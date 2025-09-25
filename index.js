document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".date-range");
  const cards = document.querySelectorAll(".card:not(.card-main)");

  async function fetchData(range) {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();

      data.forEach((item, index) => {
        const card = cards[index];
        if (!card) return;

        card.querySelector(".title").textContent = item.title;
        card.querySelector(".current-hours").textContent =
          item.timeframes[range].current + "hrs";
        card.querySelector(".previous-hours").textContent =
          "Last week - " + item.timeframes[range].previous + "hrs";
      });
    } catch (error) {
      console.error("Error loading JSON: ", error);
    }
  }

  fetchData("weekly");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((o) => o.classList.remove("active"));
      option.classList.add("active");

      fetchData(option.dataset.range);
    });
  });
});
