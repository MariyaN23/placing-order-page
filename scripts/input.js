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
const fileText = document.getElementById('file-text')
const initialText = "Прикрепить файл"
wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        fileInput.click()
    }
})

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileText.textContent = `Файл: ${fileInput.files[0].name}`
        wrapper.classList.add('has-file')
    } else {
        fileText.textContent = initialText
        wrapper.classList.remove('has-file')
    }
})

export function resetFileInput() {
    fileInput.value = ''
    fileText.textContent = initialText
    wrapper.classList.remove('has-file')
}
