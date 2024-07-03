const encryptButton = document.getElementById('encryptButton')
const decryptButton = document.getElementById('decryptButton')
const textareaMessage = document.getElementById('textareaMessage')

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

const validateMessage = (message) => {
  const letters = message.trim()
    .split('')
    .filter((letter) => letter !== ' ')

  if (letters.length === 0) return false

  for (const letter of letters) {
    if (letter.charCodeAt(0) < INITIAL_INDEX_TO_VALID_MESSAGE 
    || (letter.charCodeAt(0) > FINAL_INDEX_TO_VALID_MESSAGE 
      && letter.charCodeAt(0) !== INDEX_ADITIONAL)) {
      return false
    } 
  }
  
  return true
}

document.addEventListener('click', (e) => {
  if (e.target === encryptButton) {
    const message = textareaMessage.value
    const isValidateMessage = validateMessage(message)

    if (!isValidateMessage) {
      console.log('Mensage INVALIDO')
    } else {
      console.log('Mensage VALIDO')
    }
  }
})