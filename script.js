const sounds = ['Applause', 'Boo', 'Yay', 'Tada' ,'Victory', 'Wrong', 'Alarm','BuDumTss', 'Woof','Laugh','TskTsk','Sneeze', 'Orchestra','Yawn', 'Trumpets', 'Crunch', 'Mystery', 'WarHorn', 'Thunder', 'Horror']


sounds.forEach(sound=>{
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText = sound

    btn.addEventListener('click', ()=>{
        
        const soundClass = "." + sound //To use querySelector to select elememts with class-name
        stopSongs()
        document.querySelector(soundClass).play()
    })

    document.querySelector('.buttons')
    .appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound =>{
        const soundClass = "." + sound
        const song = document.querySelector(soundClass)
        song.pause()
        song.currentTime = 0
    })
}