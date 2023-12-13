// Rock Paper Scissors game.

const rps = ['paper', 'scissors', 'rock']


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const taskContainer = document.getElementById('bx');
const tc = document.getElementById('px');
const stuff = document.querySelectorAll('div#box')
const element = document.getElementsByClassName('box');
const can = document.getElementsByClassName('can');

const yup = document.getElementById('n');
const pal = document.getElementById('dud');
const v = document.getElementById('ai');
const con = document.getElementById('bye');
const cn = document.getElementById('by');
const h = document.getElementById('here');
const got = document.getElementsByClassName('got');
const reload = document.getElementById('here');



let rck = false;
let ppr = false;
let scrs = false;

let ply = 0;
let hal = 0;
let cmp = '';

let games = 0;

let arr = [];
let g = [];
let f = [];
let pl = [];

// function for computer choice.
function getComputerChoice(){
    let ai_choice = rps[Math.floor(Math.random() * rps.length)];
    
    return ai_choice;
}


// function for player choice.
function player() {
    rock.addEventListener('click', function(){
        
        
            let r = document.createElement('p');
            r.classList.add('box')
            r.innerText = 'rock';
            taskContainer.appendChild(r)
            f.push('rock')
            console.log(`before ${pal.children.length}`)

            
            
            
            
            console.log(`before ${pal.children.length}`)
           
            
            let b = document.createElement('p');
            b.classList.add('can');
            b.innerText = getComputerChoice();
            tc.appendChild(b);
            
            g.push(b.innerText);

            arr.push(1);
            if(pal.children.length >= 1){
                pal.removeChild(pal.firstChild)
                v.removeChild(v.firstChild)
                
            }

            
            
            
            if(f.includes('rock') && g.includes('scissors')){
                r.style.color = 'white';
                r.style.backgroundColor = 'green';
                b.style.color = 'white';
                b.style.backgroundColor = 'red';
                
                ply += 1;
                hal += 0;
                let rs = document.createElement('p');
                rs.classList.add('gui');
                rs.innerText = ply;
                pal.appendChild(rs)

                let bs = document.createElement('p');
                bs.classList.add('gui');
                bs.innerText = hal;
                v.appendChild(bs);
                
            } 
            if (f.includes('rock') && g.includes('rock')){
                r.style.backgroundColor = 'grey';
                r.style.color = 'white';
                b.style.backgroundColor = 'grey';
                b.style.color = 'white';
                let rs = document.createElement('p');
                rs.classList.add('gui');
                rs.innerText = ply;
                pal.appendChild(rs)

                let bs = document.createElement('p');
                bs.classList.add('gui');
                bs.innerText = hal;
                v.appendChild(bs);
                
            } 
            if (f.includes('rock') && g.includes('paper')) {
                r.style.color = 'white';
                b.style.color = 'white';
                r.style.backgroundColor = 'red';
                b.style.backgroundColor = 'green';
                hal += 1;
                ply += 0;
                let bs = document.createElement('p');
                bs.classList.add('gui');
                bs.innerText = hal;
                v.appendChild(bs);
                let rs = document.createElement('p');
                rs.classList.add('gui');
            
                rs.innerText = ply;
                pal.appendChild(rs)

            }
            
            console.log('player', f)
            console.log('computer', g)
            g.pop()
            f.pop()
            console.log('poop ',hal);

            if(ply == 5){
                con.remove();
                cn.remove();
                let over = document.createElement('div');
                over.classList.add('go');
                h.appendChild(over)
                let win = document.createElement('h1');
                win.style.color = 'green';
                win.innerText = 'Player Wins!!!!';
                over.appendChild(win);
            }
            if(hal == 5){
                con.remove();
                cn.remove();
                let over = document.createElement('div');
                over.classList.add('go');
                h.appendChild(over)
                let win = document.createElement('h1');
                win.style.color = 'green';
                win.innerText = 'Computer Wins!!!!';
                over.appendChild(win);

            }

            if(ply == 5 || hal == 5){
                let again = document.createElement('button');
                again.classList.add('go')
                again.setAttribute('id','new')
                again.innerText = 'play again';
                h.appendChild(again)
                reload.addEventListener('click', function(){
                    location.reload()
                })
            }

    })
    paper.addEventListener('click', function(){
       
        
        let p = document.createElement('p');
        p.classList.add('box')
        p.innerText = 'paper';
        taskContainer.appendChild(p)
        f.push('paper')

        let b = document.createElement('p');
        b.classList.add('can');
        b.innerText = getComputerChoice();
        tc.appendChild(b);
        g.push(b.innerText);

        if(pal.children.length >= 1){
            pal.removeChild(pal.firstChild)
            v.removeChild(v.firstChild)
        }

        

        

        arr.push(1);
        console.log(f)

        if(f.includes('paper') && g.includes('rock')){
            p.style.color = 'white';
            p.style.backgroundColor = 'green';
            b.style.color = 'white';
            b.style.backgroundColor = 'red';
            ply += 1;
            hal += 0;
            let rs = document.createElement('p');
            rs.classList.add('gui');
            rs.innerText = ply;
            pal.appendChild(rs)

            let bs = document.createElement('p');
            bs.classList.add('gui');
            bs.innerText = hal;
            v.appendChild(bs);

        } else if (f.includes('paper') && g.includes('paper')){
            p.style.backgroundColor = 'grey';
            p.style.color = 'white';
            b.style.backgroundColor = 'grey';
            b.style.color = 'white';
            let rs = document.createElement('p');
            rs.classList.add('gui');
            rs.innerText = ply;
            pal.appendChild(rs)

            let bs = document.createElement('p');
            bs.classList.add('gui');
            bs.innerText = hal;
            v.appendChild(bs);
                
        } else if (f.includes('paper') && g.includes('scissors')) {
            p.style.color = 'white';
            b.style.color = 'white';
            p.style.backgroundColor = 'red';
            b.style.backgroundColor = 'green';
            hal += 1;
            ply += 0;

            let bs = document.createElement('p');
            bs.classList.add('gui');
            bs.innerText = hal;
            v.appendChild(bs);

            let rs = document.createElement('p');
            rs.classList.add('gui');    
            rs.innerText = ply;
            pal.appendChild(rs)
            }

        g.pop()
        f.pop()
        if(ply == 5){
            con.remove();
            cn.remove();
            let over = document.createElement('div');
            over.classList.add('go');
            h.appendChild(over)
            let win = document.createElement('h1');
            win.style.color = 'green';
            win.innerText = 'Player Wins!!!!';
            over.appendChild(win);
        }
        if(hal == 5){
            con.remove();
            cn.remove();
            let over = document.createElement('div');
            over.classList.add('go');
            h.appendChild(over)
            let win = document.createElement('h1');
            win.style.color = 'green';
            win.innerText = 'Computer Wins!!!!';
            over.appendChild(win);

        }
        if(ply == 5 || hal == 5){
            let again = document.createElement('button');
            again.classList.add('go')
            again.setAttribute('id','new')
            again.innerText = 'play again';
            h.appendChild(again)
            reload.addEventListener('click', function(){
                location.reload()
            })
        }


            
    })
    
    scissors.addEventListener('click', function(){
        
        
            let s = document.createElement('p');
            s.classList.add('box')
            s.innerText = 'scissors';
            taskContainer.appendChild(s)
            f.push('scissors')

            let b = document.createElement('p');
            b.classList.add('can');
            b.innerText = getComputerChoice();
            tc.appendChild(b);
            g.push(b.innerText);


            if(pal.children.length >= 1){
                pal.removeChild(pal.firstChild)
                v.removeChild(v.firstChild)
            }

            

            arr.push(1);
            

            if(f.includes('scissors') && g.includes('paper')){
                s.style.color = 'white';
                s.style.backgroundColor = 'green';
                b.style.color = 'white';
                b.style.backgroundColor = 'red';
                ply += 1;
                hal += 0;
                let rs = document.createElement('p');
                rs.classList.add('gui');
                rs.innerText = ply;
                pal.appendChild(rs)

                let bs = document.createElement('p');
                bs.classList.add('gui');
                bs.innerText = hal;
                v.appendChild(bs);
                
            } else if (f.includes('scissors') && g.includes('scissors')){
                s.style.backgroundColor = 'grey';
                s.style.color = 'white';
                b.style.backgroundColor = 'grey';
                b.style.color = 'white';
                let rs = document.createElement('p');
                rs.classList.add('gui');
                rs.innerText = ply;
                pal.appendChild(rs)

                let bs = document.createElement('p');
                bs.classList.add('gui');
                bs.innerText = hal;
                v.appendChild(bs);
                
            } else if (f.includes('scissors') && g.includes('rock')){
                s.style.color = 'white';
                b.style.color = 'white';
                s.style.backgroundColor = 'red';
                b.style.backgroundColor = 'green';
                hal += 1;
                ply += 0;
                let bs = document.createElement('p');
                bs.classList.add('gui');
                bs.innerText = hal;
                v.appendChild(bs);
                let rs = document.createElement('p');
                rs.classList.add('gui');
            
                rs.innerText = ply;
                pal.appendChild(rs)
            }

            
            g.pop()
            f.pop()
            if(ply == 5){
                con.remove();
                cn.remove();
                let over = document.createElement('div');
                over.classList.add('go');
                h.appendChild(over)
                let win = document.createElement('h1');
                win.style.color = 'green';
                win.innerText = 'Player Wins!!!!';
                over.appendChild(win);
            }
            if(hal == 5){
                con.remove();
                cn.remove();
                let over = document.createElement('div');
                over.classList.add('go');
                h.appendChild(over)
                let win = document.createElement('h1');
                win.style.color = 'green';
                win.innerText = 'Computer Wins!!!!';
                over.appendChild(win);

            }

            if(ply == 5 || hal == 5){
                let again = document.createElement('button');
                again.classList.add('go')
                again.setAttribute('id','new')
                again.innerText = 'play again';
                h.appendChild(again)
                reload.addEventListener('click', function(){
                    location.reload()
                })
            }

            
    })
    
    }


// funtion for round.

function round(){
    getComputerChoice()
    player()
    
    
}

// function for game.
function game() {
    round()
}

game()