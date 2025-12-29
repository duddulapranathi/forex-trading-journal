document.getElementById("tradeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let entry = Number(entry.value);
  let exit = Number(document.getElementById("exit").value);
  let sl = Number(document.getElementById("sl").value);
  let qty = Number(document.getElementById("qty").value);
  let type = document.getElementById("type").value;

  let pl = type === "BUY"
    ? (exit - entry) * qty
    : (entry - exit) * qty;

  let result = pl > 0 ? "WIN" : "LOSS";

  fetch("https://docs.google.com/spreadsheets/d/1whxQ0qrxqXWLRfVcYaP8d23fCRkH0mstgh8PxaHj8lI/edit?gid=0#gid=0", {
    method: "POST",
    body: JSON.stringify({
      date: date.value,
      pair: pair.value,
      type,
      setup: setup.value,
      timeframe: timeframe.value,
      entry,
      sl,
      target: target.value,
      qty,
      exit,
      pl,
      result,
      emotion: emotion.value,
      notes: notes.value,
      screenshot: screenshot.value
    })
  }).then(() => {
    alert("Trade Saved ✅");
    document.getElementById("tradeForm").reset();
  });
});

