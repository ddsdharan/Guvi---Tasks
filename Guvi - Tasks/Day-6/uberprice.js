const distance = 30; 
const surgeMultiplier = 1.5;

class UberCalculator {
    constructor(distance, surgeMultiplier) {
      this.distance = distance;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice() {
      const baseFare = 95;
      const costPerKm = 25;
      const surgePrice = this.surgeMultiplier * (baseFare + costPerKm * this.distance);
      return surgePrice.toFixed(2);
    }
  }

  const calculator = new UberCalculator(distance, surgeMultiplier);
  const price = calculator.calculatePrice();
      
  console.log("Uber Price for " + distance + "Kilometer is ₹" + price);
  