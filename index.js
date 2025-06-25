const nums = [];

function addNum(num) {
  nums.push(num);
  render();
}

function numberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label> 
      Add a number to the bank
      <input name="amount" type="number"/> 
    </label>
    <button>Add number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const amount = data.get("amount");
    console.log(amount);
    addNum(amount);
  });
  return $form;
}

function numberBank() {
  const $bank = document.createElement("span");
  $bank.innerHTML = `
    <div class="number-box"></div>
    `;
  $bank.textContent = nums;
  return $bank;
}

function oddNums() {
  const $bank = document.createElement("span");
  $bank.innerHTML = `
    <div class="number-box"></div>
    `;
  return $bank;
}

function evenNums() {
  const $bank = document.createElement("span");
  $bank.innerHTML = `
    <div class="number-box"></div>
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
