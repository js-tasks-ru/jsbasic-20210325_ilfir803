export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.row = '';
  }
  render() {
    for (const { name, age, salary, city } of this.data) {
      this.row += `<tr class="pane">
      <td>${name}</td>
      <td>${age}</td>
      <td>${salary}</td>
      <td>${city}</td>
      <td><button class="remove-button">X</button></td>
          </tr>
      `;
    }
    return this.row;
  }
  get elem() {
    const table = document.createElement('table');
    table.insertAdjacentHTML('beforeEnd', this.render());
    table.id = "container";
    table.onclick = function (event) {
      if (event.target.className != 'remove-button') return;
      let pane = event.target.closest('.pane');
      pane.remove();
    };
    return table;
  }
}




