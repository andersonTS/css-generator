let borderThikness = document.getElementById('borderThikness')
let boxChange = document.getElementById('boxChange')
let borderType = document.getElementById('borderType')
let borderColor = document.getElementById('borderColor')
let cssCode = document.getElementById('cssCode')
let offsetX = document.getElementById('offsetX')
let offsetY = document.getElementById('offsetY')
let blurRadius = document.getElementById('blurRadius')
let spreadRadius = document.getElementById('spreadRadius')
let shadowColor = document.getElementById('shadowColor')
let boxSize = document.getElementById('boxSize')
let textSize = document.getElementById('textSize')
let letterSp = document.getElementById('letterSp')
let textColor = document.getElementById('textColor')
let box = document.getElementById('box')
let boxFlex = document.getElementById('boxFlex')
let btnFlex = document.getElementById('btnFlex')
let boxContainerFlex = document.getElementById('boxContainerFlex')
let typeDisplay = document.getElementById('typeDisplay')
let direction = document.getElementById('direction')
let justifyContent = document.getElementById('justifyContent')
let alignItems = document.getElementById('alignItems')
let boxScale = document.getElementById('boxScale')
let boxRotate = document.getElementById('boxRotate')
let boxTranslateX = document.getElementById('boxTranslateX')
let boxTranslateY = document.getElementById('boxTranslateY')
let boxSkewX = document.getElementById('boxSkewX')
let boxSkewy = document.getElementById('boxSkewy')
let boxTranslate = document.getElementById('boxTranslate')
let boxChangeTranslate = document.getElementById('boxChangeTranslate')
let openBtn1 = document.getElementById('open-button-1')
let openBtn2 = document.getElementById('open-button-2')
let openBtn3 = document.getElementById('open-button-3')
let openBtn4 = document.getElementById('open-button-4')
let openBtn5 = document.getElementById('open-button-5')
let acordColapse = document.getElementsByClassName('accordion-collapse')
let openButton = document.getElementById('open-button')

openBtn1.addEventListener('click', function(){
    for (const iterator of acordColapse) {
        iterator.classList.remove('show')
    }
    boxTranslate.style.display = 'none'
    boxFlex.style.display = 'none'
    box.style.display ='block'
    cssCode.innerText = ''
})
openBtn2.addEventListener('click', function(){
    for (const iterator of acordColapse) {
        iterator.classList.remove('show')
    }
    boxTranslate.style.display = 'none'
    boxFlex.style.display = 'none'
    box.style.display ='block' 
    cssCode.innerText = ''

})
openBtn3.addEventListener('click', function(){
    for (const iterator of acordColapse) {
        iterator.classList.remove('show')
    }
    boxTranslate.style.display = 'none'
    boxFlex.style.display = 'none'
    box.style.display ='block' 
    cssCode.innerText = ''

})
// Flex content
btnFlex.addEventListener('click', function(){
    for (const iterator of acordColapse) {
        iterator.classList.remove('show')
    }
    
    boxFlex.style.display = 'block'
    box.style.display ='none' 
    boxTranslate.style.display = 'none'
    cssCode.innerText = ''

})

openBtn5.addEventListener('click', function(){
    for (const iterator of acordColapse) {
        iterator.classList.remove('show')
    }

    boxFlex.style.display = 'none'
    box.style.display ='none' 
    boxTranslate.style.display = 'block'
    cssCode.innerText = ''

})

// Transform content
let tranformBox = function(){
    boxChangeTranslate.style.transform = 'scale(' + boxScale.value +') rotate('+ boxRotate.value +'deg) translate('+boxTranslateX.value+'px, '+ boxTranslateY.value +'px) skew('+ boxSkewX.value +'deg, ' + boxSkewY.value + 'deg)';
    cssCode.innerText = 'transform: scale(' + boxScale.value +') rotate('+ boxRotate.value +'deg) translate('+boxTranslateX.value+'px, '+ boxTranslateY.value +'px) skew('+ boxSkewX.value +'deg, ' + boxSkewY.value + 'deg);';
}

boxScale.oninput = tranformBox
boxRotate.oninput = tranformBox
boxTranslateX.oninput = tranformBox
boxTranslateY.oninput = tranformBox
boxSkewX.oninput = tranformBox
boxSkewY.oninput = tranformBox

// Flex content
let flexChange = function(){
    boxContainerFlex.style.display = typeDisplay.value
    boxContainerFlex.style.flexDirection = direction.value
    boxContainerFlex.style.justifyContent = justifyContent.value
    boxContainerFlex.style.alignItems = alignItems.value
    
    if(typeDisplay.value == 'flex'){
        cssCode.innerHTML = `display: flex; <br> flex-direction: ${direction.value}; <br> justify-content: ${justifyContent.value}; <br> align-items: ${alignItems.value};`
    } else {
        cssCode.innerText = ''
    }
    
}
typeDisplay.onchange = flexChange
direction.onchange = flexChange
justifyContent.onchange = flexChange
alignItems.onchange = flexChange



//// Border
let borderBox = function(){
    boxChange.style.border= borderThikness.value + 'px ' + borderType.value + ' ' + borderColor.value
    cssCode.innerText = 'border: ' + borderThikness.value + 'px ' + borderType.value + ' ' + borderColor.value + ';'
}
borderThikness.oninput = borderBox 
borderType.oninput = borderBox 
borderColor.oninput = borderBox 



//// Box shadow
let boxShadow = function(){
    boxChange.style.boxShadow = offsetX.value + 'px ' + offsetY.value + 'px ' + blurRadius.value + 'px ' + spreadRadius.value + 'px ' + shadowColor.value
    boxChange.style.width = boxSize.value + 'px'
    boxChange.style.height = boxSize.value + 'px'
    cssCode.innerHTML = 'height: ' + boxSize.value + 'px;' + '<br>' + 'width: ' + boxSize.value + 'px;' + '<br>' +'box-shadow: ' + offsetX.value + 'px ' + offsetY.value + 'px ' + blurRadius.value + 'px ' + spreadRadius.value + 'px ' + shadowColor.value + ';'
}
offsetX.oninput = boxShadow 
offsetY.oninput = boxShadow 
blurRadius.oninput = boxShadow 
spreadRadius.oninput = boxShadow 
shadowColor.oninput = boxShadow 
boxSize.oninput = boxShadow


// font
let fontChange = function(){
    boxChange.style.fontSize = textSize.value + 'px'
    boxChange.style.color = textColor.value
    boxChange.style.letterSpacing = letterSp.value + 'px'
    cssCode.innerHTML = 'font-size:' + textSize.value + 'px;' + '<br>' + 'color:' + textColor.value +';' + '<br>' + 'letter-spacing:' + letterSp.value + 'px;'
    
}

textSize.oninput = fontChange
letterSp.oninput = fontChange
textColor.oninput = fontChange


let clipboard = new ClipboardJS('.js-copy-btn')