
const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    mobileMenu.addEventListener('click', () => {
        navbar.classList.toggle('responsive');
    });

    const tablinks = document.querySelectorAll('.tab-link');
    const tabcontent = document.querySelectorAll('.book-content');
    const roundTripRow = document.querySelector(".round-trip-only");


    tablinks.forEach(link => {
        link.addEventListener('click', () => {
            tablinks.forEach(btn => btn.classList.remove('active'));
            tabcontent.forEach(content => content.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(link.getAttribute('data-tab')).classList.add('active');

            const selectedTab = link.getAttribute("data-tab");
            if (selectedTab === "out-station") {
              roundTripRow.style.display = "table-row"; // Show the row
            } else {
              roundTripRow.style.display = "none"; // Hide the row
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const activeTab = document.querySelector(".tab-link.active").getAttribute("data-tab");
        if (activeTab === "out-station") {
          roundTripRow.style.display = "table-row";
        } else {
          roundTripRow.style.display = "none";
        }
    }
);

// Save data to localStorage on input change

const pickup = localStorage.getItem("pickup");
const drop = localStorage.getItem("drop");
const distance = localStorage.getItem("distance");
const suvfare = localStorage.getItem("suvfare");
const sedanfare = localStorage.getItem("sedanfare");
const primefare = localStorage.getItem("primefare");
const innovafare = localStorage.getItem("innovafare");
const innovacrystafare = localStorage.getItem("innovacrystafare");

console.log(pickup, drop, distance, suvfare, sedanfare, primefare, innovafare, innovacrystafare);

// Populate fields if data exists
if (pickup) document.getElementById("pickup").value = pickup;
if (drop) document.getElementById("drop").value = drop;

document.getElementById("distance-i10").innerHTML = distance;
document.getElementById("distance-prime").innerHTML = distance;
document.getElementById("distance-innova").innerHTML = distance;
document.getElementById("distance-sedan").innerHTML = distance;
document.getElementById("distance-innova-crysta").innerHTML = distance;
document.getElementById("suv").innerHTML = suvfare;
document.getElementById("sedan").innerHTML = sedanfare;
document.getElementById("prime").innerHTML = primefare;
document.getElementById("innova").innerHTML = innovafare;
document.getElementById("innovacrysta").innerHTML = innovacrystafare;

// Optionally, clear localStorage on submission
document
  .getElementById("one-way-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Perform any update logic here (e.g., send to server)
    console.log("Updated Name:", document.getElementById("pickup").value);
    console.log("Updated Email:", document.getElementById("drop").value);

    // Clear storage if needed
    localStorage.clear();

    alert("Form updated successfully!");
  });

