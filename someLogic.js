const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const calculateButton = document.getElementById('calculateButton')
const result = document.getElementById('result')
const resetButton = document.getElementById('resetButton')

calculateButton.addEventListener('click', () => {
    result.innerHTML = Number(input1.value) + Number(input2.value)
})

resetButton.addEventListener('click', () => {
input1.value = null
input2.value = null
result.innerHTML = 0
})

