const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('lenght')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper:getRandomUpper,
    Number: getRandomNumber,
    symbol:getRandomSymbol
}

clipboardEl.addEventListener('click',() =>{
    const textarea = document.createElement('textarea')
    const password = result.innerText
    if(!password)
    {
        return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () =>{
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked

    resultEl.innerText =generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

function generatePassword(lower,upper,number,symbol,length)
{
    let generatePassword = ''
    const typecount = lower+upper+symbol+number
    const typeArr = [{lower},{upper},{Number},{symbol}].filter(item => Object.values(item)[0])
  
    
    if(typecount === 0) {
        return ''
    }
    for(let i =0 ;i< length;i+= typecount)
    {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatePassword += randomFunc[funcName]()
            
        });
    }
    
    const finalPassword = generatePassword.slice(0, length)

    return finalPassword
}
function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}


