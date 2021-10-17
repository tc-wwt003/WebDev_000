document.write('JS !!!Hello World!!!! JS')
console.log('JS !!!Hello World!!!! JS')

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (messages.legth > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})