const name1 = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const form = docuement.getElementById('form')
const submit = document.getElementById('submit')
const errorElement = document.getElementById('error')



form.addEventListener('submit', (e) => {
    let messages = []
    if (name1.value === '' || name1.value == null){
        messages.push('Name is required')
    }
    if (phone.value === phone.value || phone.value == null){
        messages.push('Name is required')
    }
    if (email.value.length <= 10) {
        messages.push('Email must be longer than 10 characters')
    }
    if (form.value === '' || form.value == null){
        messages.push('Name is required')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }    
})