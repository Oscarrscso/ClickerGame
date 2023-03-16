// Game state variables
let waavVal = 0;
let waavPC = 1;
let waavPS = 0;

// Helper functions
const updateWaavDisplay = () => {
  document.getElementById("waav").innerHTML = `waav: ${waavVal}`;
};

const updateUpgradeCost = (elementId, currentCost) => {
  const newCost = Math.floor(currentCost * 1.5);
  document.getElementById(elementId).innerHTML = newCost;
  return newCost;
};

const animateText = (elementId, property, start, end, duration) => {
  const element = document.getElementById(elementId);
  element.style[property] = start;
  setTimeout(() => {
    element.style[property] = end;
  }, duration);
};

const canAffordUpgrade = (cost) => {
  if (waavVal >= cost) {
    waavVal -= cost;
    updateWaavDisplay();
    return true;
  }
  return false;
};

const changeButtonColor = (elementId, color, duration) => {
  const btn = document.getElementById(elementId);
  btn.style.background = color;
  setTimeout(() => {
    btn.style.background = "rgb(31, 31, 31)";
  }, duration);
};

// Main functions
const waavBTN = () => {
  waavVal += waavPC;
  updateWaavDisplay();

  const critical = Math.floor(Math.random() * 350);
  if (critical === 1) {
    const critReward = waavPC * 50;
    waavVal += critReward;
    document.getElementById("critical").innerHTML = `Critical Hit! +${critReward} waav!`;
    animateText("critical", "opacity", 1, 0, 2000);
  }
};

const upgradeClick = (upgradeAmount, costElementId, buttonElementId) => {
  const cost = parseInt(document.getElementById(costElementId).innerHTML, 10);
  if (canAffordUpgrade(cost)) {
    waavPC += upgradeAmount;
    updateUpgradeCost(costElementId, cost);
    document.getElementById("clickAmount").innerHTML = `${waavPC} waav per click.`;
    animateText("clickAmount", "scale", 1.04, 1, 200);
  } else {
    changeButtonColor(buttonElementId, 'firebrick', 200);
  }
};

const add1 = () => upgradeClick(1, "item1Cost", "add1Click");
const add10 = () => upgradeClick(10, "item2Cost", "add10Click");
const add100 = () => upgradeClick(100, "item4Cost", "add100Click");
const add500 = () => upgradeClick(500, "item6Cost", "add500Click");

const addWaavPS = (waavToAdd, costElementId, buttonElementId) => {
    const cost = parseInt(document.getElementById(costElementId).innerHTML, 10);
    if (canAffordUpgrade(cost)) {
      waavPS += waavToAdd;
      document.getElementById("clickPS").style.visibility = "visible";
      document.getElementById("clickPS").innerHTML = `${waavPS} waav per second.`;
      animateText("clickPS", "scale", 1.04, 1, 200);
  
      // Only set up the interval if it hasn't been set up before
      if (!window.waavInterval) {
        window.waavInterval = setInterval(() => {
          waavVal += waavPS;
          updateWaavDisplay();
        }, 1000);
      }
  
      updateUpgradeCost(costElementId, cost);
    } else {
      changeButtonColor(buttonElementId, 'firebrick', 200);
    }
  };
  
  const onePS = () => addWaavPS(1, "item3Cost", "onePS");
  const tenPS = () => addWaavPS(10, "item5Cost", "tenPS");