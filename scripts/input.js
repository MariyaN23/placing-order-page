// input type range
const percentOutput = document.querySelector("#percent-output")
const percentInput = document.querySelector("#percent")
percentOutput.textContent = `${percentInput.value} %`
percentInput.addEventListener("input", (event) => {
    percentOutput.textContent = `${event.target.value} %`
})

//input type file
const wrapper = document.getElementById('fileWrapper')
const fileInput = document.getElementById('attachment')
wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        fileInput.click()
    }
})
