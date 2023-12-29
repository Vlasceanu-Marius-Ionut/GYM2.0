'use strict'

//FUNCTIONS FOR NAV

const HOME = document.getElementById('HOME');
HOME.addEventListener('click', function() {
    window.location.href = 'index.html'
})

const ABOUT = document.getElementById('ABOUT');
ABOUT.addEventListener('click', () =>{
    window.location.href = 'about.html'
})

const PROGRAM = document.getElementById('PROGRAM');
PROGRAM.addEventListener('click', () =>{
    PROGRAM.window.location.href = ''
})
const TRAINER = document.getElementById('TRAINERS');
TRAINER.addEventListener('click', () =>{
    TRAINER.window.location.href = 'trainers.html'
})

const CONTACT = document.getElementById('CONTACT');
CONTACT.addEventListener('click', () =>{
    CONTACT.window.location.href = 'contact.html'
})
//FUNCTIONS FOR NAV END