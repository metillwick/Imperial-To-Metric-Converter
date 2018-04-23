// User Input
let lbsInput = document.getElementById("lbsInput");
// Select Input
let unit     = document.getElementsByTagName("select")[0];
// Output Values
let gOutput = document.getElementById("gOutput");
let kgOutput = document.getElementById("kgOutput");
let ozOutput = document.getElementById("ozOutput");
let valueCards = [gOutput, kgOutput, ozOutput];
// Label Array
let title = ["Grams:", "Kilograms:", "Ounces:", "Meters:", "Kilometers:", "Feet:", "Celsius:", "Kelvin:", "Hidden", "Pascal:", "Torr:", "Bar:", "Liters:", "Mililiters:", "Cubic Meters:"]
// Output Labels
let h41 = document.querySelector("h4");
let h42 = document.querySelectorAll("h4")[1];
let h43 = document.querySelectorAll("h4")[2];
let h4Arr = [h41, h42, h43];
// Value Card 3
let card3 = document.getElementsByClassName("bg-danger")[0];

const equat = {
  grams: 0.0022046,
  kilograms: 0.453592,
  ounces: 16,
  meters: 1609.34,
  kilometers: 1.60933999997549,
  feet: 5280,
  // celsius: ,
  // kelvin: ,
  // hidden: ,
  pascals: 101325,
  torr: 760,
  bar: 1.01325,
  liters: 3.78541,
  mililiters: 3785.41,
  cubicMeters: 0.00378541
}
const abbr = {
  grams: " g",
  kilograms: " kg",
  ounces: " oz",
  meters: " m",
  kilometers: " km",
  feet: " ft",
  pascals: " Pa",
  torr: " Torr",
  bar: "bar",
  liters: " L",
  mililiters: " ml",
  cubicMeters: " m^3"
}

// Hide card all cards on initialization
document.getElementById("output").style.visibility = 'hidden';

unit.addEventListener("input", runT);
lbsInput.addEventListener('input', runT);

function runT(e){
  document.getElementById("output").style.visibility = 'visible';
  let num = e.target.value;

  switch(unit.value) {
    case "1": //Mass
      // show card 3
      card3.style.visibility = "visible";
      // Match Output labels with unit labels
      for(i = 0; i < valueCards.length; i++) {
        h4Arr[i].innerHTML = title[i]
      }
      // Calculate conversions
      gOutput.innerHTML = num * equat.grams + abbr.grams;  //Lbs to Grams
      kgOutput.innerHTML = num * equat.kilograms + abbr.kilograms;  //Lbs to kliograms
      ozOutput.innerHTML = num * equat.ounces + abbr.ounces;  //Lbs to ounces
      // Change placeholder text to appropriate unit of measurement
      lbsInput.placeholder = "Enter pounds";
      break;

    case "2": //Distance
      // show card 3
      card3.style.visibility = "visible";
      // Match Output Labels with unit labels
      h = 3
      for(i = 0; i < valueCards.length; i++) {
        h4Arr[i].innerHTML = title[h]
        h = h + 1;
      }
      // Calculate conversions
      gOutput.innerHTML = num * equat.meters + abbr.meters// miles to meters
      kgOutput.innerHTML = num * equat.kilometers + abbr.kilometers;  //miles to km
      ozOutput.innerHTML = num * equat.feet + abbr.feet;  //miles to ft
      // Change placeholder text to appropriate unit of measurement
      lbsInput.placeholder = "Enter miles";
      break;

    case "3": //Temperature
      // show card 3
      card3.style.visibility = "hidden";
      // Match Output labels with unit labels
      h = 6
      for(i = 0; i < valueCards.length; i++) {
        h4Arr[i].innerHTML = title[h]
        h = h + 1;
      }
      // Calculate conversions
      gOutput.innerHTML = (num - 32) * 5/9 + " C"// F to Celsius
      kgOutput.innerHTML = (num + 459.67) * 5/9 + " K";  //F to Kelvin
      ozOutput.innerHTML = num + " F";
      // Change placeholder text to appropriate unit of measurement
      lbsInput.placeholder = "Enter Fahrenheit";

      break;

    case "4": //Pressure
      // show card 3
      card3.style.visibility = "visible";
      // Match Output labels with unit labels
      h = 9
      for(i = 0; i < valueCards.length; i++) {
        h4Arr[i].innerHTML = title[h]
        h = h + 1;
      }
      // Calculate conversions
      gOutput.innerHTML = num * equat.pascals + abbr.pascals //atm to Pascal
      kgOutput.innerHTML = num * equat.torr + abbr.torr// atm to Torr
      ozOutput.innerHTML = num * equat.bar + abbr.bar //atm to Bar
      // Change placeholder text to appropriate unit of measurement
      lbsInput.placeholder = "Enter atmospheres";
      break;

    case "5": //Volume
      // show card 3
      card3.style.visibility = "visible";
      // Match Output labels with unit labels
      h = 12
      for(i = 0; i < valueCards.length; i++) {
        h4Arr[i].innerHTML = title[h]
        h = h + 1;
      }
      // Calculate conversions
      gOutput.innerHTML = num * equat.liters + abbr.liters //US liquid gal to Liter
      kgOutput.innerHTML = num * equat.mililiters + abbr.mililiters // gal to mililiter
      ozOutput.innerHTML = num * equat.cubicMeters + abbr.cubicMeters //gal to cubic meter
      // Change placeholder text to appropriate unit of measurement
      lbsInput.placeholder = "Enter US liquid gallons";
      break;
    default:
      card3.style.visibility = "hidden";
      document.getElementById("output").style.visibility = 'hidden';
      console.log("this isn't right...select a measurement");
  }
};
