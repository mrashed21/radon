document.addEventListener("DOMContentLoaded", function () {
  const barsIcon = document.getElementById("bars-icon");
  const dropDown = document.getElementById("drop-down");
  const studentsLink = document.getElementById("students-link");
  const dropDownMenu = document.getElementById("drop-down-menu");
  const threeDot = document.getElementById("dot-icon");
  const dropDownDot = document.getElementById("drop-down-dot");

  if (barsIcon && dropDown) {
    barsIcon.addEventListener("click", function () {
      dropDown.style.display = dropDown.style.display === "block" ? "none" : "block";
    });

    dropDown.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        dropDown.style.display = "none";
      }
    });
  }

  if (studentsLink && dropDownMenu) {
    studentsLink.addEventListener("click", function (event) {
      if (event.target.closest(".fa-sort-down")) {
        event.preventDefault();
        dropDownMenu.style.display = dropDownMenu.style.display === "block" ? "none" : "block";
      }
    });

    dropDownMenu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        studentsLink.innerHTML = `${event.target.textContent} <i class="fa-solid fa-sort-down"></i>`;
        dropDownMenu.style.display = "none";
      }
    });
  }

  if (threeDot && dropDownDot) {
    threeDot.addEventListener("click", function () {
      dropDownDot.style.display = dropDownDot.style.display === "block" ? "none" : "block";
    });

    dropDownDot.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        dropDownDot.style.display = "none";
      }
    });
  }
});

// Chart.js code to render a chart
const ctx = document.getElementById("radonChart").getContext("2d");
let radonChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Radon Level (pCi/L)",
        data: [2.4, 2.5, 2.3, 2.6, 2.4, 2.5, 2.3, 2.6, 2.4, 2.5, 2.3, 2.6],
        borderColor: "#272263",
        backgroundColor: "rgba(39, 34, 99, 0.1)",
        fill: true,
        lineTension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function updateChartData(period) {
  document
    .querySelectorAll(".footer div")
    .forEach((button) => button.classList.remove("active"));

  document.getElementById(period + "Button").classList.add("active");

  let labels = [];
  let data = [];

  switch (period) {
    case "day":
      labels = [
        "12 AM",
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
        "5 AM",
        "6 AM",
        "7 AM",
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
      ];
      data = [2.4, 2.5, 2.6, 2.5, 2.4, 2.5, 2.6, 2.5, 2.4, 2.5, 2.6, 2.5];
      break;
    case "week":
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      data = [2.4, 2.5, 2.6, 2.5, 2.4, 2.5, 2.6];
      break;
    case "month":
      labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
      data = [2.4, 2.5, 2.6, 2.5];
      break;
    case "year":
      labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      data = [2.4, 2.5, 2.3, 2.6, 2.4, 2.5, 2.3, 2.6, 2.4, 2.5, 2.3, 2.6];
      break;
  }

  radonChart.data.labels = labels;
  radonChart.data.datasets[0].data = data;
  radonChart.update();
}

function showTab(tab) {
  if (tab === "dashboard") {
    document.getElementById("dashboardContent").style.display = "block";
    document.getElementById("dataContent").style.display = "none";
    document.getElementById("dashboardTab").classList.add("active");
    document.getElementById("dataTab").classList.remove("active");
  } else if (tab === "data") {
    document.getElementById("dashboardContent").style.display = "none";
    document.getElementById("dataContent").style.display = "block";
    document.getElementById("dashboardTab").classList.remove("active");
    document.getElementById("dataTab").classList.add("active");
  }
}

// Slider logic
let currentSlide = 0;
const slides = document.querySelectorAll(".image-slider");
const totalSlides = slides.length;

function showNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector(".slider-container").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

setInterval(showNextSlide, 3000);
