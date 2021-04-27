function highlight(table) {
  let rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i]
    let gender = row.cells[2]
    if (gender.textContent === 'm') {
      row.classList.add('male')
    } else if (gender.textContent === 'f') {
      row.classList.add('female')
    }
    let stat = row.cells[3]
    if (stat.getAttribute('data-available') === 'true') {
      row.classList.add('available')
    } else if (stat.getAttribute('data-available') === 'false') {
      row.classList.add('unavailable')
    } else {
      row.setAttribute('hidden', '')
    }
    if (row.cells[1].textContent < '18') {
      row.setAttribute('style', 'text-decoration: line-through')
    }
  }
}
