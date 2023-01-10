let table = document.body.firstElementChild;
let afficheTr = document.querySelectorAll("tr");

for (let i = 0; i < afficheTr.length; i++) {
  let afficheRow = afficheTr[i];
  let afficheCells = afficheRow.querySelectorAll("td");

  for (let j = 0; j < afficheCells.length; j++) {
    let cell = afficheCells[j];
    if (i == j) {
      cell.style.backgroundColor = "red";
    }
  }
}
