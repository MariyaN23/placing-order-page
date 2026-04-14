import {resetSelect} from "./select.js";

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    const data = Object.fromEntries(formData.entries())
    // send data
    alert('Форма отправлена')
    this.reset()
    resetSelect()
})
