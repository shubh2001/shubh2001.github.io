window.onscroll = function () {scrollfunction()};

function scrollfunction () {
    if (document.body.scrollTop > 6200 || document.documentElement.scrollTop > 620) {
        $('nav').addClass('bg-blue');
        
        
    }
    else {
        $('nav').removeClass('bg-blue');
          }
}

function init () {

    wait(1000).then(() => {
      clearText()
      typeText('I am ').then(typeLoop)
    })
    
    function typeLoop() {
      typeText('a Mechaninal Engineer')
        .then(() => wait(2000))
        .then(() => removeText('a Mechanical Engineer'))
        .then(() => typeText('an A.I Researcher'))
        .then(() => wait(2000))
        .then(() => removeText('an A.I Researcher'))
        .then(() => typeText('a Data Science enthusiast'))
        .then(() => wait(2000))
        .then(() => removeText('a Data Science enthusiast'))
        .then(typeLoop)
    }
    
  }
  
  
  const elementNode = document.getElementById('type-text')
  let text = ''
  
  function updateNode () {
    elementNode.innerText = text
  }
  
  function pushCharacter (character) {
    text += character
    updateNode()
  }
  
  function popCharacter () {
    text = text.slice(0, text.length -1)
    updateNode()
  }
  
  function clearText () {
    text = ''
    updateNode()
  }
  
  
  function wait (time) {
    if (time === undefined) {
      const randomMsInterval = 100 * Math.random()
      time = randomMsInterval < 50 ? 10 : randomMsInterval
    }
    
    return new Promise(resolve => {
      setTimeout(() => {
        requestAnimationFrame(resolve)
      }, time)
    })
  }
  
  function typeCharacter (character) {
    return new Promise(resolve => {
      pushCharacter(character)
      wait().then(resolve)
    })
  }
  
  function removeCharacter () {
    return new Promise(resolve => {
      popCharacter()
      wait().then(resolve)
    })
  }
  
  function typeText (text) {
    return new Promise(resolve => {
      
      function type ([ character, ...text ]) {
        typeCharacter(character)
          .then(() => {
            if (text.length) type(text)
            else resolve()
          })
      }
      
      type(text)
    })
  }
  
  function removeText ({ length:amount }) {
    return new Promise(resolve => {
      
      function remove (count) {
        removeCharacter()
          .then(() => {
            if (count > 1) remove(count - 1)
            else resolve()
          })
      }
      
      remove(amount)
    })
  }
  
  
  init()
  
