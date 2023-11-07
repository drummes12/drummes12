function getRandomWord(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function animateWord(wordElement: HTMLElement, wordList: string[]) {
  const randomWord = getRandomWord(wordList)
  const wordLength = randomWord.length

  wordElement.style.width = '0px'
  wordElement.classList.remove('animate-typing')
  wordElement.style.animation = 'none'
  wordElement.style.width = `${wordLength}.1ch`
  
  setTimeout(() => {
    wordElement.classList.add('animate-typing')
    wordElement.innerText = randomWord
    wordElement.style.animation = `typing 1s steps(${wordLength}), blink 0.5s infinite step-end alternate`
  }, 10)
}