const encryptButton = document.getElementById('encryptButton')
const decryptButton = document.getElementById('decryptButton')
const copyButton = document.getElementById('copyButton')
const buttonThemeLight = document.getElementById('buttonThemeLight')
const buttonThemeDark = document.getElementById('buttonThemeDark')
const logoLight = document.getElementById('logoLight')
const logoDark = document.getElementById('logoDark')
const iconGitHubDark = document.getElementById('iconGitHubDark')
const iconGitHubLight = document.getElementById('iconGitHubLight')
const exclamationIconDark = document.getElementById('exclamationIconDark')
const exclamationIconLight = document.getElementById('exclamationIconLight')
const missingMessageImageDark = document.getElementById('missingMessageImageDark')
const missingMessageImageLight = document.getElementById('missingMessageImageLight')
const textareaMessage = document.getElementById('textareaMessage')
const textAreaEncryptedMessage = document.getElementById('textAreaEncryptedMessage')
const exclamationMessage = document.getElementById('exclamationMessage')
const missingMessageContainer = document.getElementById('missingMessageContainer')
const encryptedMessageFoundContainer = document.getElementById('encryptedMessageFoundContainer')

const body = document.body;
const header = document.querySelector('.header')
const encryptedMessageContainer = document.querySelector('.encrypted-message-container')
const missingMessageTitle1 = document.querySelector('.missing-message-title-1')
const missingMessageTitle2 = document.querySelector('.missing-message-title-2')

const KEYS_OF_ENCRYPTION = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}

const INITIAL_INDEX_TO_VALID_MESSAGE = 97
const FINAL_INDEX_TO_VALID_MESSAGE = 122
const INDEX_ADITIONAL = 241

const isInvalidateLetter = ({ letter }) => {
  if (!letter) return true

  return (
    letter.charCodeAt(0) < INITIAL_INDEX_TO_VALID_MESSAGE 
    || (letter.charCodeAt(0) > FINAL_INDEX_TO_VALID_MESSAGE 
      && letter.charCodeAt(0) !== INDEX_ADITIONAL
    )
  )
}

const validateMessage = ({ message }) => {
  const letters = message.trim()
    .split('')
    .filter((letter) => letter !== ' ')

  if (letters.length === 0) return false

  for (const letter of letters) {
    if (isInvalidateLetter({ letter })) return false
  }
  
  return true
}

const encryptMessage = ({ message }) => {
  const letters = message.trim().split('')
  const newMessage = letters.map((letter) => {
    if (KEYS_OF_ENCRYPTION[letter]) return KEYS_OF_ENCRYPTION[letter]

    return letter
  })

  return newMessage.join('')
}

const decryptMessage = ({ message }) => {
  const newMessage = message
    .replaceAll(KEYS_OF_ENCRYPTION.a, 'a')
    .replaceAll(KEYS_OF_ENCRYPTION.e, 'e')
    .replaceAll(KEYS_OF_ENCRYPTION.i, 'i')
    .replaceAll(KEYS_OF_ENCRYPTION.o, 'o')
    .replaceAll(KEYS_OF_ENCRYPTION.u, 'u')

  return newMessage
}

const setDisabledEncryptButton = () => {
  encryptButton.setAttribute('disabled', true)
  encryptButton.style.cursor = 'not-allowed'
  encryptButton.style.opacity = 0.5
}

const setDisabledDecryptButton = () => {
  decryptButton.setAttribute('disabled', true)
  decryptButton.style.cursor = 'not-allowed'
  decryptButton.style.opacity = 0.7
}

const setEnabledEncryptButton = () => {
  encryptButton.removeAttribute('disabled')
  encryptButton.style.cursor = 'pointer'
  encryptButton.style.opacity = 1
}

const setEnabledDecryptButton = () => {
  decryptButton.removeAttribute('disabled')
  decryptButton.style.cursor = 'pointer'
  decryptButton.style.opacity = 1
}

document.addEventListener('click', (e) => {
  if (e.target === encryptButton) {
    const message = textareaMessage.value
    const newMessage = encryptMessage({ message })

    missingMessageContainer.style.display = 'none'
    encryptedMessageFoundContainer.style.display = 'flex'

    textAreaEncryptedMessage.value = newMessage
    textareaMessage.value = ''
  }
  
  if (e.target === decryptButton) {
    const message = textareaMessage.value
    const newMessage = decryptMessage({ message })

    missingMessageContainer.style.display = 'none'
    encryptedMessageFoundContainer.style.display = 'flex'

    textAreaEncryptedMessage.value = newMessage
    textareaMessage.value = ''
  }

  if (e.target === copyButton) {
    textAreaEncryptedMessage.select()
    document.execCommand('copy')
  }

  if (e.target === buttonThemeDark) {
    body.classList.add('body-dark');
    header.classList.add('header-dark');
    encryptedMessageContainer.classList.add('encrypted-message-container-dark');
    missingMessageTitle1.classList.add('missing-message-title-1-dark');
    missingMessageTitle2.classList.add('missing-message-title-2-dark');
    decryptButton.classList.add('button-2-dark');
    copyButton.classList.add('button-2-dark');
    textareaMessage.classList.toggle('textarea-message-dark');
    textAreaEncryptedMessage.classList.toggle('textarea-encrypted-message-dark');
    exclamationMessage.classList.toggle('exclamation-message-dark');
    buttonThemeDark.style.display = 'none';
    buttonThemeLight.style.display = 'flex';
    buttonThemeDark.style.visibility = 'hidden';
    buttonThemeLight.style.visibility = 'visible';
    
    logoDark.style.display = 'none';
    logoLight.style.display = 'flex';
    logoDark.style.visibility = 'hidden';
    logoLight.style.visibility = 'visible';
    
    iconGitHubDark.style.display = 'none';
    iconGitHubLight.style.display = 'flex';
    iconGitHubDark.style.visibility = 'hidden';
    iconGitHubLight.style.visibility = 'visible';
    
    exclamationIconDark.style.display = 'none';
    exclamationIconLight.style.display = 'flex';
    exclamationIconDark.style.visibility = 'hidden';
    exclamationIconLight.style.visibility = 'visible';
    
    missingMessageImageDark.style.display = 'none';
    missingMessageImageLight.style.display = 'flex';
    missingMessageImageDark.style.visibility = 'hidden';
    missingMessageImageLight.style.visibility = 'visible';
  }
  
  if (e.target === buttonThemeLight) {
    body.classList.remove('body-dark');
    header.classList.remove('header-dark');
    encryptedMessageContainer.classList.remove('encrypted-message-container-dark');
    missingMessageTitle1.classList.remove('missing-message-title-1-dark');
    missingMessageTitle2.classList.remove('missing-message-title-2-dark');
    decryptButton.classList.remove('button-2-dark');
    copyButton.classList.remove('button-2-dark');
    textareaMessage.classList.toggle('textarea-message-dark');
    textAreaEncryptedMessage.classList.toggle('textarea-encrypted-message-dark');
    exclamationMessage.classList.toggle('exclamation-message-dark');
    buttonThemeLight.style.display = 'none';
    buttonThemeDark.style.display = 'flex';
    buttonThemeDark.style.visibility = 'visible';
    buttonThemeLight.style.visibility = 'hidden';
    
    logoLight.style.display = 'none';
    logoDark.style.display = 'flex';
    logoDark.style.visibility = 'visible';
    logoLight.style.visibility = 'hidden';
    
    iconGitHubLight.style.display = 'none';
    iconGitHubDark.style.display = 'flex';
    iconGitHubDark.style.visibility = 'visible';
    iconGitHubLight.style.visibility = 'hidden';
    
    exclamationIconLight.style.display = 'none';
    exclamationIconDark.style.display = 'flex';
    exclamationIconDark.style.visibility = 'visible';
    exclamationIconLight.style.visibility = 'hidden';
    
    missingMessageImageLight.style.display = 'none';
    missingMessageImageDark.style.display = 'flex';
    missingMessageImageDark.style.visibility = 'visible';
    missingMessageImageLight.style.visibility = 'hidden';
  }
})

textareaMessage.addEventListener('keyup', (e) => {
  const message = e.target.value

  if (!validateMessage({ message })) {
    textareaMessage.classList.add('color-danger');
    exclamationMessage.classList.add('color-danger');
    setDisabledEncryptButton()
    setDisabledDecryptButton()
  } else {
    textareaMessage.classList.remove('color-danger');
    exclamationMessage.classList.remove('color-danger');
    setEnabledEncryptButton()
    setEnabledDecryptButton()
  }
})

textAreaEncryptedMessage.addEventListener('keyup', (e) => {
  e.preventDefault()
})

document.addEventListener('DOMContentLoaded', () => {
  textareaMessage.classList.add('color-danger');
  exclamationMessage.classList.add('color-danger');
  encryptedMessageFoundContainer.style.display = 'none'
  buttonThemeLight.style.visibility = 'hidden';
  buttonThemeLight.style.display = 'none';
  logoLight.style.visibility = 'hidden';
  logoLight.style.display = 'none';
  iconGitHubLight.style.visibility = 'hidden';
  iconGitHubLight.style.display = 'none';
  exclamationIconLight.style.visibility = 'hidden';
  exclamationIconLight.style.display = 'none';
  missingMessageImageLight.style.visibility = 'hidden';
  missingMessageImageLight.style.display = 'none';
  setDisabledEncryptButton()
  setDisabledDecryptButton()
})