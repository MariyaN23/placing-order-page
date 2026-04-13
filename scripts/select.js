const selectContainer = document.querySelector('.custom-select')
const btn = document.getElementById('select-btn')
const list = document.getElementById('select-list')
const hiddenInput = document.getElementById('system-type-value')
const options = Array.from(list.querySelectorAll('.custom-select__option'))

const toggleList = () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!isOpen))
    list.classList.toggle('active')
    if (!isOpen) {
        const selected = list.querySelector('[aria-selected="true"]') || options[0]
        selected.focus()
    }
}

btn.addEventListener('click', toggleList)

list.addEventListener('click', (e) => {
    const target = e.target.closest('.custom-select__option')
    if (!target) return

    selectOption(target)
    toggleList()
    btn.focus()
})

function selectOption(el) {
    options.forEach(opt => opt.setAttribute('aria-selected', 'false'))
    el.setAttribute('aria-selected', 'true')
    btn.textContent = el.textContent

    if (hiddenInput) {
        hiddenInput.value = el.dataset.value || el.textContent.trim()
    }
}

list.addEventListener('keydown', (e) => {
    const currentIndex = options.indexOf(document.activeElement)

    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            (options[currentIndex + 1] || options[0]).focus()
            break
        case 'ArrowUp':
            e.preventDefault();
            (options[currentIndex - 1] || options[options.length - 1]).focus()
            break
        case 'Enter':
            e.preventDefault();
            if (currentIndex !== -1) {
                selectOption(options[currentIndex])
                toggleList()
                btn.focus()
            }
            break;
        case 'Escape':
            toggleList()
            btn.focus()
            break
        default:
            break
    }
})

document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !list.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false')
        list.classList.remove('active')
    }
})

selectContainer.addEventListener('focusout', (e) => {
    if (!selectContainer.contains(e.relatedTarget)) {
        btn.setAttribute('aria-expanded', 'false')
        list.classList.remove('active')
    }
})

export function resetSelect() {
    options.forEach(opt => opt.setAttribute('aria-selected', 'false'))
    btn.textContent = 'Выберите тип системы'
    if (hiddenInput) {
        hiddenInput.value = ''
    }
    list.classList.remove('active')
    btn.setAttribute('aria-expanded', 'false')
}
