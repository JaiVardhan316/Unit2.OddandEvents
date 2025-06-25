const nums = [];

const odds = [];

const evens = [];

function addNum(num) {
  nums.push(num);
  render();
}

// function addOdds(num) {
//     odds.push(num);
//     render();
// }

// function addEvens(num) {
//     evens.push(num);
//     render();
// }

function numberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label> 
      Add a number to the bank
      <input name="amount" type="number"/> 
    </label>
    <button type="submit">Add number</button>
    <button id="move1">Sort 1</button>
    <button id="moveAll">Sort All</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const amount = Number(data.get("amount"));
    console.log(amount);
    if (!isNaN(amount)) {
      addNum(amount);
    }
  });
  $form.querySelector("#sort1").addEventListener("click", () => {
    if (nums.length > 0) {
      const num = nums.shift();
      (num % 2 === 0 ? evens : odds).push(num);
      render();
    }
  });
  $form.querySelector("#moveAll").addEventListener("click", () => {
    if (nums.length > 0) {
      const num = nums.shift();
      (num % 2 === 0 ? evens : odds).push(num);
      render();
    }
  });
  return $form;
}

function numberBank() {
  const $bank = document.createElement("span");
  $bank.innerHTML = `
    <div class="number-box"></div>
    `;
  const box = $bank.querySelector(".number-box");
  box.textContent = nums.join(", ");
  return $bank;
}

function oddNums() {
  const $bank = document.createElement("span");
  $bank.innerHTML = `
    <div class="number-box">${odds.join(", ")}</div>
    `;
  return $bank;
}

function evenNums() {
  const $bank = document.createElement("span");
  $bank.innerHTML = `
    <div class="number-box">${evens.join(", ")}</div>
    `;
  return $bank;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <entry></entry>
    <h2>Bank</h2>
    <bank></bank>
    <h2>Odds</h2>
    <odd-bank></odd-bank>
    <h2>Evens</h2>
    <even-bank></even-bank>
    `;
  $app.querySelector("entry").replaceWith(numberForm());
  $app.querySelector("bank").replaceWith(numberBank());
  $app.querySelector("odd-bank").replaceWith(oddNums());
  $app.querySelector("even-bank").replaceWith(evenNums());
}
render();
