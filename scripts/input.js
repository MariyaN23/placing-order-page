// input type range
const percentOutput = document.querySelector("#percent-output")
const percentInput = document.querySelector("#percent")
percentOutput.textContent = `${percentInput.value} %`
percentInput.addEventListener("input", (event) => {
    percentOutput.textContent = `${event.target.value} %`
})
