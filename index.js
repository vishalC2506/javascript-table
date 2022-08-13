let mytable = document.querySelector("#table");
fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    products[0].forEach((element) => {
      let header = document.createElement("th");
      let headerData = document.createTextNode(element);
      header.appendChild(headerData);
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    let Row1 = document.createElement("tr");
    products[1].forEach((element) => {
      let cell = document.createElement("td");
      let cellData = document.createTextNode(element);
      cell.appendChild(cellData);
      Row1.appendChild(cell);
    });
    table.appendChild(Row1);

    let Row2 = document.createElement("tr");
    products[2].forEach((element) => {
      let cell = document.createElement("td");
      let cellData = document.createTextNode(element);
      cell.appendChild(cellData);
      Row2.appendChild(cell);
    });
    table.appendChild(Row2);
    mytable.appendChild(table);
  })
  .catch((err) => {
    console.log(err);
    alert(err);
  });
