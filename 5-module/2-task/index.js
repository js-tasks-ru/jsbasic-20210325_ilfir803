function toggleText() {
  let form = document.getElementsByClassName('toggle-text-button')[0]
  form.addEventListener('click', function () {
    text.hidden = !text.hidden;
  })
}
