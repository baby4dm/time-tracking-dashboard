fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const cards = document.querySelectorAll(".card");
    const timeFrame = "weekly";

    data.forEach((item, index) => {
      const card = cards[index];
      if (!card) return;

      card.querySelector(".title").textContent = item.title;
      card.querySelector(".current-hours").textContent =
        item.timeframes[timeFrame].current + " hrs";
      card.querySelector(".previous-hours").textContent = 
        "Last week - " + item.timeframes[timeFrame].previous + " hours";
    });
  })
  .catch((err) => console.error("Error loading JSON: ", err));
