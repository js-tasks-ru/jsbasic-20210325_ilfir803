function hideSelf() {
  let form = document.getElementsByClassName('hide-self-button')[0]
  form.onclick = function () {
    form.setAttribute('hidden', '')
  }
}
