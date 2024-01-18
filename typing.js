const words = 'in one good real one not school set they state Are Information is this that never should Have Happened and this is how it should work elephant ant blue red green alpha Symmetrical magenta colour so beautiful elegant Just Looking like a Wow typing code hash Engineering Career yellow pink If you are looking for random words to add to your writing check out our list of random words below Expanding your vocabulary with different English words is essential to comprehend better how they can be used in sentences See the list below to familiarize yourself with random words you can incorporate in conversation and writing Knowing common English words is necessary for everyday activities and usual questions However if you want to make your writing fun you have to improve your lexicon In creative writing English professors and authors add random words to avoid boring the readers with repetitive terms or phrases Random words are perfect for upgrading how you speak and write Random words are uncommon and fun words in the English language They also come in handy when you participate in Pictionary and scrabble when socializing with others '.split(' ');
const wordsCount = words.length;

function addClass(el, name){
    el.className += ' '+name;
}

function removeClass(el, name){
    el.className = el.className.replace(name, ' ');
}
function randomWord(){
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex];
}

function formatWord(word){
    return `<div class="word">
    <span class = "letter">${word.split('').join('</span><span class="letter">')}</span> 
    <div>`   

    //above between every alphabet in a letter we are closing a span which contains previous alphabet and we open new span for next alphabet
}

function newGame(){
    document.getElementById('words').innerHTML='';
    for(let i =0; i<200; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
   addClass(document.querySelector('.word'), 'current');
   addClass(document.querySelector('.letter'), 'current');
}

document.getElementById('game').addEventListener('keyup', ev=>{
    const key = ev.key;
    const curLetter = document.querySelector('.letter.current');
    const expected = curLetter.innerHTML;
    console.log({key, expected, curLetter})
})

newGame();