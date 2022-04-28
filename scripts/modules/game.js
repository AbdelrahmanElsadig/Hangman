import {create_game_page} from './pages.js'

const words = [{hint: 'The Game Your Playing Right Now', word: 'HANGMAN'},
               {hint: 'THEY LIVE FREELY AND CONTROL THE WORLD', word: 'RICH'},
               {hint: 'Its a complete waste of time and will put you in debt', word:'COLLEGE'},
               {hint: 'The best Frontend Library', word: 'REACT'},
               {hint: 'The Best Programming Language', word: 'JAVASCRIPT'}];

function create_start_state(){
    const start_state = {
        word: words[Math.round(Math.random() * 4)],
        tries: 0
    }
    function get_blanks(word){
        let s = '';
        for(let i =0; i < word.word.length; i++){
            s += '_';
        };
        return s;
    };
    
    return Object.assign({} ,start_state,{blanks: get_blanks(start_state.word)})
}


class Game{
    constructor(state, word){
        this.dom = create_game_page(word);
        this.state = state;
        this.blanks =this.dom.querySelector('.blanks');
    };
    sync_state(change){
        this.state = Object.assign(this.state, change);
        this.blanks.textContent = this.state.blanks
    };
    
}


class State_Manager{
    constructor(state, config){
        let {draw_functions, dispatch} = config;
        this.state = state;
        this.dispatch = dispatch
        this.game = new Game(state, state.word);
        this.draw_functions = draw_functions;
        this.letter_events()
    };
    sync_state(change){
        this.state = Object.assign(this.state, change);
        this.game.sync_state(change);
    };
    draw(){
        this.draw_functions[this.state.tries](this.dispatch);
        if (this.state.tries >= 7) game_over(this.game.dom, this.state.word.word);
    };


    letter_events(){
        let letters = document.querySelectorAll('.letter');
        let word_arr = this.state.word.word.split('');
        let blanks = this.game.blanks.textContent.split('')
        letters.forEach(letter => {
            letter.addEventListener('click', () => {
                letter.classList.add('--transition')
                let char = letter.textContent;
                if (word_arr.indexOf(char) !== -1){
                    word_arr.forEach((c,i) => {
                        if (c == char){
                            blanks[i] = c
                        }
                    });
                    this.game.blanks.textContent = blanks.join('');
                    this.sync_state({blanks: this.game.blanks.textContent})
                    if (blanks.every(c => c !== '_')) you_win(document.querySelector('.game'),this.state.word.word)
                    return
                }  
                this.draw();
            })
        })
    }
}

function game_over(game_div, word){
    game_div.querySelector('.word-component').innerHTML = `<h1 class='title'> You Lost</h1>
    <h1 class='title'>The Word is: ${word}</h1>`; 
};

function you_win(game_div, word){
    game_div.querySelector('.word-component').innerHTML = `<h1 class='title'> You Won</h1>
    <h1 class='title'>The Word is: ${word}</h1>`; 
}

export {State_Manager, Game, game_over, create_start_state}