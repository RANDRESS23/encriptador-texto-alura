const encryptButton = document.getElementById('encryptButton')
const decryptButton = document.getElementById('decryptButton')
const textareaMessage = document.getElementById('textareaMessage')
const exclamationMessage = document.getElementById('exclamationMessage')
const missingMessageContainer = document.getElementById('missingMessageContainer')
const encryptedMessageFoundContainer = document.getElementById('encryptedMessageFoundContainer')

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
    
  }
})

textareaMessage.addEventListener('keyup', (e) => {
  const message = e.target.value

  if (!validateMessage({ message })) {
    exclamationMessage.style.color = '#dc3545'
    setDisabledEncryptButton()
    setDisabledDecryptButton()
  } else {
    exclamationMessage.style.color = '#495057'
    setEnabledEncryptButton()
    setEnabledDecryptButton()
  }
})

document.addEventListener('DOMContentLoaded', () => {
  encryptedMessageFoundContainer.style.display = 'none'
  exclamationMessage.style.color = '#dc3545'
  setDisabledEncryptButton()
  setDisabledDecryptButton()
})