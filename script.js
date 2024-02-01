let studentCnt = document.getElementById('Studentcount');
let staffCnt = document.getElementById('Staffcount');
let eventsCnt = document.getElementById('Eventscount');
const menuExpand = document.querySelector('.menu')
const closeExpand = document.querySelector('.close')
const menuShranked = document.querySelector('#headerInfo')
const menuIconOpen = document.querySelector('.menuButtonIcon')
const menuIconClosed = document.querySelector('.menuButtonIconClose')


menuExpand.addEventListener('click' , () => {
    menuShranked.classList.remove('headerInfo');
    menuShranked.classList.add('headerInfoJS');
    document.querySelector('#menuText_list').classList.add('menuText_list')
    document.querySelector('#menuText_list').classList.remove('menuText_list_Reverse')
    setTimeout(() => {
        document.querySelector('#menuText_list').classList.remove('menuText_list_ReverseNone')
    }, 100);
    document.querySelector('#menuText_listBar').classList.remove('menuText_list_Reverse')
    document.querySelector('#menuText_listBar').classList.add('menuText_list')
    document.querySelector('#menuText_listBar').style.display = 'block'
    document.querySelector('.menuText').style.display = 'block'
    menuExpand.style.display = 'none'
    closeExpand.style.display = 'block'
    menuIconOpen.style.display = 'none'
    menuIconClosed.style.display = 'block'
    
    
    
})
closeExpand.addEventListener('click' , () => {
    menuShranked.classList.remove('headerInfoJS')
    menuShranked.classList.add('headerInfo')
    document.querySelector('#menuText_listBar').classList.remove('menuText_list')
    document.querySelector('#menuText_list').classList.remove('menuText_list')
    document.querySelector('#menuText_list').classList.add('menuText_list_Reverse')
    setTimeout(() =>{
        document.querySelector('#menuText_list').classList.add('menuText_list_ReverseNone')
    },100)
    document.querySelector('#menuText_listBar').classList.add('menuText_list_Reverse')
    closeExpand.style.display = 'none'
    menuExpand.style.display = 'block'
    menuIconClosed.style.display = 'none'
    menuIconOpen.style.display = 'block'
    document.querySelector('#menuText_ListBar').style.display = 'none'
})

let counter0 = 0;
let counter1 = 0;
let counter2 = 0;
setInterval(() => {
    if(counter0 <= 175){
     studentCnt.innerText = counter0++ + '+'
    }
},10);
setInterval(() => {
    if(counter1 <= 12){
     staffCnt.innerText = counter1++ + '+'
    }
},150);

setInterval(() => {
    if(counter2 <= 15){
     eventsCnt.innerText = counter2++ + '+'
    }
},150);