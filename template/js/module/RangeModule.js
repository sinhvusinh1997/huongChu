export default function RangeModule() {
    const rangeInput = document.querySelector('.range-input')
    const rangeNumber = document.querySelector('.range-number')
    if (rangeNumber && rangeInput) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        })
        rangeNumber.innerHTML = formatter.format(rangeInput.value)
        rangeInput.addEventListener('input', () => {
            rangeNumber.innerHTML = formatter.format(rangeInput.value)
        })
    }
}