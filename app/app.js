let MainAdvice = document.getElementById('advice')
let adviceId = document.getElementById("advice-id")
let button = document.getElementById('genQuote')

button.addEventListener("click",() => {
    const URL = 'https://api.adviceslip.com/advice'
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const {id , advice} = data.slip
        adviceId.textContent = ` ADVICE #${id}`
        MainAdvice.textContent = `"${advice}"`
        console.log(MainAdvice.textContent)
    
    })
})

