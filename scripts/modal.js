
function createPasswordModal(){
    /* Criando Elementos do modal */
    const modalContainer       = document.createElement('div')
    const contentContainer     = document.createElement('div')
    const modalHeader          = document.createElement('div')
    const headerTitle          = document.createElement('h3')
    const headerButton         = document.createElement('button')
    const headerClose          = document.createElement('img')
    const modalBody            = document.createElement('div')
    const bodyTitle            = document.createElement('p')
    const bodyForm             = document.createElement('form')
    const formInput            = document.createElement('input')
    const formButton           = document.createElement('button')

    /* Atribuindo os atributos/classes aos elementos */
    modalContainer.classList.add('modal-wrapper')
    modalContainer.id          = 'modal-password'

    contentContainer.classList.add('modal')
    modalHeader.classList      = 'modal-header'

    headerTitle.classList.add('txt-grey-6')
    headerTitle.innerText      = 'Solicitar redefinição de senha'

    headerButton.classList     = 'modal-close btn'
    headerButton.id            = 'close-modal'
    headerButton.setAttribute('data-control-modal', 'modal-password')

    headerClose.classList.add('modal-close-img')
    headerClose.src            = '/src/close-svgrepo-com.svg'

    modalBody.classList        = 'modal-body flex gap-20 flex-column'

    bodyTitle.classList        = 'txt-grey-2 txt-p'
    bodyTitle.innerText        = 'Insira os dados necessários para redefinir a sua senha.'

    bodyForm.classList         = 'flex flex-column gap-20'
    
    formInput.classList        = 'input-form width-100'
    formInput.type             = 'email'
    formInput.placeholder      = 'Digite seu e-mail'


    formButton.classList       = 'btn flex justify-center btn-primary btn-lg'
    formButton.type            = 'submit'
    formButton.innerText       = 'Enviar'


    headerButton.append(headerClose)
    modalHeader.append(headerTitle, headerButton)
    bodyForm.append(formInput, formButton)
    modalBody.append(bodyTitle, bodyForm)
    contentContainer.append(modalHeader, modalBody)
    modalContainer.append(contentContainer)

    return modalContainer
}
createPasswordModal()


function showModal(){
    const mainContent            = document.getElementById('main-content')
    const buttonsControllerModal = document.querySelectorAll('[data-control-modal]')

    for( let i = 0; i < buttonsControllerModal.length; i++ ){
        buttonsControllerModal[i].addEventListener('click', (e)=>{
            e.preventDefault()
            const modal = createPasswordModal()
            //console.log('Click', i)
            let modalId = buttonsControllerModal[i].getAttribute('data-control-modal')
            //console.log(modalId)
            mainContent.appendChild(modal)
            document.getElementById(modalId).classList.toggle('show-modal')
            closeModal()
        })
    }
}

function closeModal(){
    const buttonsControllerModal = document.querySelectorAll('[data-control-modal]')

    for( let i = 0; i < buttonsControllerModal.length; i++ ){
        buttonsControllerModal[i].addEventListener('click', (e)=>{
            e.preventDefault()
            //console.log('Click', i)
            let modalId = buttonsControllerModal[i].getAttribute('data-control-modal')
            const modalContent = document.getElementById(modalId)
            //console.log(modalId)
            document.getElementById(modalId).classList.toggle('show-modal')
            modalContent.remove()
            showModal()
        })
    }
}
    
showModal()



/*
const buttonsControllerModal = document.querySelectorAll('[data-control-modal]')

for( let i = 0; i < buttonsControllerModal.length; i++ ){
    buttonsControllerModal[i].addEventListener('click', (e)=>{
        e.preventDefault()
        //console.log('Click', i)
        let modalId = buttonsControllerModal[i].getAttribute('data-control-modal')
        //console.log(modalId)
        document.getElementById(modalId).classList.toggle('show-modal')
    })
}
*/