import {create_hanger, draw_functions} from './draw.js';
import { State_Manager, create_start_state } from './game.js';




function create_main_menu(start_state=create_start_state()){
    let main_menu = document.createElement('div');
    main_menu.classList.add('main-menu');
    main_menu.innerHTML = `<h1 class="title">HANGMAN</h1>
    <button class="nav new-game">New Game</button>
    <button class="nav game-instructions">Instructions</button>`;
    main_menu.classList.add('--transition');
    
    document.querySelector('div')?.classList.add('--transition');
    setTimeout(() => {
        document.body.innerHTML = '';
        document.body.appendChild(main_menu);
        setTimeout(() => main_menu.classList.remove('--transition'),100) 
        document.querySelector('.game-instructions').addEventListener('click', () => {
        create_intructions();
    });
        document.querySelector('.new-game').addEventListener('click', () => {
        let app = new State_Manager(start_state, {
                draw_functions,
                dispatch(change){
                    app.sync_state(change);
                }
        })
    });
    },200)
    
}

function create_intructions(){
    let instructions = document.createElement('div');
    instructions.classList.add('instructions');
    instructions.classList.add('.--transition');
    instructions.innerHTML = `<h1 class="title">Hangman</h1>
    <ul class="rules">
        <li class="rule">WHEN YOU START A NEW GAME, THE GAME WILL AUTOMATICALLY CHOOSE A RANDOM WORD FOR YOU.
        </li>
        <li class="rule">YOUR JOB IS TO GUESS THE CHOSEN WORD WITHIN 7 TRIES...</li>
        <li class="rule">IF YOU WIN, YOU GET TO LIVE, ELSE... YOU WILL BE HANGED TO DEATH! (WELL... NOT REALLY,
            LOL.)</li>
    </ul>
    <button class="nav to-main-menu">Main Menu</button>`;
    
    document.querySelector('div')?.classList.add('--transition');
    setTimeout(() => {
        document.body.innerHTML = '';
        document.body.appendChild(instructions);
        setTimeout(() => instructions.classList.remove('--transition'),100) 
        document.querySelector('.to-main-menu').addEventListener('click', event => {
            create_main_menu();
        });
    },200);

}


function create_game_page(word) {
    const game_div = document.createElement('div');
    game_div.classList.add('game');
    let blanks = (() => {
        let s = '';
        for (let i =0; i < word.word.length; i++){
            s += '_';
        };
        return s
    })()
    game_div.innerHTML = `<h1 class="title">Hangman</h1>
    <canvas width="250" height="250"></canvas>
    </div>
    <div class='word-component'>
    <div class='blanks'>${blanks}</div>
    <p class="hint">Hint: ${word.hint}</p>
    <h3 class="tip">PICK A LETTER, TRY TO GUESS THE WORD...</h3>
    <div class="letters"></div>
    </div>
    <button class="nav to-main-menu">Main Menu</button>`;
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    game_div.classList.add('--transition');
    const letters = game_div.querySelector('.letters');
    for (let c of alphabet){
        let p = document.createElement('p');
        p.classList.add('letter');
        p.textContent = c;
        letters.appendChild(p);
    }
    document.body.appendChild(game_div)
    document.querySelector('div')?.classList.add('--transition');
    setTimeout(() => {
    document.body.innerHTML = '';
    document.body.appendChild(game_div);
    setTimeout(() => game_div.classList.remove('--transition'),100) 
    },200)
    document.querySelector('.to-main-menu').addEventListener('click', () => {
        create_main_menu();
    });
    create_hanger();
    return game_div
}

create_main_menu()

export {create_main_menu, create_intructions, create_game_page}
