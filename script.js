function currentMonthYear() {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
}

const dateNow = document.getElementById("date-now");
dateNow.textContent = currentMonthYear();