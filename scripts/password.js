let input = document.querySelector('#input-pass')
let icon  = document.querySelector('#show-pass')

icon.addEventListener('click', (e)=>{
    e.preventDefault()
    //console.log(input.type)
    input.type = input.type == 'text' ? 'password' : 'text'
})
