// Zmienne
// ----Galeria
const slider = document.querySelector('.items')
const slides = document.querySelectorAll('.item')
const button = document.querySelectorAll('.button')
// ----Formularz
let btn = document.querySelector('.btn')
let services_select = document.querySelector('#services-select')
let phoneNumber = document.getElementById('inputPhone')
let hiddenDiv = document.getElementById('hidden_div')
let hiddenRange = document.getElementById('hidden_range')
let hiddenDate = document.getElementById('hidden_date')

// Obsługa galerii
let current = 0
let prev = 6
let next = 1

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click', () => (i == 0 ? gotoPrev() : gotoNext()))
}

let gotoPrev = () => (current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1))
let gotoNext = () => (current < 6 ? gotoNum(current + 1) : gotoNum(0))

let gotoNum = number => {
	current = number
	prev = current - 1
	next = current + 1
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active')
		slides[i].classList.remove('prev')
		slides[i].classList.remove('next')
	}
	if (next == 7) {
		next = 0
	}
	if (prev == -1) {
		prev = 6
	}
	slides[current].classList.add('active')
	slides[prev].classList.add('prev')
	slides[next].classList.add('next')
}

// Obecny dzien w data min (formularz)
let today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
dateID.min = tomorrow.toISOString().slice(0, tomorrow.toISOString().lastIndexOf(':'))

// Obsługa selecta
services_select.addEventListener('change', function () {
	let style = this.value
	let budget = document.getElementById('myRange')

	if (style == 'przeglad') {
		hiddenRange.style.display = 'none'
		hiddenDiv.style.display = 'block'
		hiddenDate.style.display = 'block'
		budget.value = 100
	} else {
		sliderForm()
		hiddenDiv.style.display = 'none'
		hiddenRange.style.display = 'block'
		hiddenDate.style.display = 'block'
	}
})

// Działanie slidera od budżetu (forumlarz)
function sliderForm() {
	var sliderForm = document.getElementById('myRange')
	var output = document.getElementById('demo')
	output.innerHTML = sliderForm.value

	sliderForm.oninput = function () {
		output.innerHTML = this.value
	}
}
