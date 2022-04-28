



function create_hanger(){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.fillStyle = '#ffffff';
    cx.strokeStyle = '#ffffff';
    cx.lineWidth = 4
    cx.moveTo(50, 250);
    cx.lineTo(0, 250);
    cx.moveTo(25, 250);
    cx.lineTo(25, 0);
    cx.lineTo(150, 0);
    cx.stroke();

};


function create_carrier(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.beginPath();
    cx.moveTo(150, 0);
    cx.lineTo(150, 30);
    cx.stroke();
    dispatch({tries: 1})
};

function create_head(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.lineWidth = 1
    cx.moveTo(170, 50);
    cx.arc(150, 30 + 20, 20, 0, 7);
    cx.stroke();
    dispatch({tries: 2})
};

function create_body(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.moveTo(150, 70);
    cx.lineTo(150, 150);
    cx.stroke();
    dispatch({tries: 3});
};


function create_left_hand(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.moveTo(150, 100);
    cx.lineTo(120, 80);
    cx.stroke();
    dispatch({tries: 4});
};

function create_right_hand(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.moveTo(150, 100);
    cx.lineTo(180, 80);
    cx.stroke();
    dispatch({tries: 5});
};

function create_left_leg(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.moveTo(150, 150);
    cx.lineTo(120, 180);
    cx.stroke();
    dispatch({tries: 6})
};

function create_right_leg(dispatch){
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');
    cx.moveTo(150, 150);
    cx.lineTo(180, 180);
    cx.stroke();
    dispatch({tries: 7})
}



const draw_functions = [create_carrier, create_head, create_body,
    create_left_hand, create_right_hand, create_left_leg, create_right_leg]



export {draw_functions, create_hanger};