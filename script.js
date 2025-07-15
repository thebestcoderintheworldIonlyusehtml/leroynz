const statusDot = document.getElementById("statusDot");
const toggleBtn = document.getElementById("toggleStatus");

let isOnline = false;

toggleBtn.addEventListener("click", () => {
  isOnline = !isOnline;
  if (isOnline) {
    statusDot.classList.remove("offline");
    statusDot.classList.add("online");
    toggleBtn.textContent = "Go Offline";
  } else {
    statusDot.classList.remove("online");
    statusDot.classList.add("offline");
    toggleBtn.textContent = "Go Online";
  }
});
