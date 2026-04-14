import {resetSelect} from "./select.js";
import {resetFileInput} from "./input.js";

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    const data = Object.fromEntries(formData.entries())
    // send data
    this.reset()
    resetSelect()
    resetFileInput()
    alert('Форма отправлена')
})
