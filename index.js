tictactoeGame = {
    gameArray: [
    ['','',''],
    ['','',''],
    ['','','']
    ],
    winningConditions: [
        //horizonal wins
        
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
        
        //vertical wins
        
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
        
        //diagonal wins
        
            [[0,0], [1,1], [2,2]],
            [[0,2], [1,1], [2,0]]
        
    ], 
    init: function(){
        const box1 = document.getElementById('b1');
        const box2 = document.getElementById('b2');
        const box3 = document.getElementById('b3');
        const box4 = document.getElementById('b4');
        const box5 = document.getElementById('b5');
        const box6 = document.getElementById('b6');
        const box7 = document.getElementById('b7');
        const box8 = document.getElementById('b8');
        const box9 = document.getElementById('b9');
        const allboxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

        const win1 = document.getElementById('h1');
        const win2 = document.getElementById('h2');
        const win3 = document.getElementById('h3');
        const win4 = document.getElementById('v1');
        const win5 = document.getElementById('v2');
        const win6 = document.getElementById('v3');
        const win7 = document.getElementById('d1');
        const win8 = document.getElementById('d2');
        const allWins = [win1, win2, win3, win4, win5, win6, win7, win8];


        const cross = document.getElementsByClassName('cross');
        const elipse = document.getElementsByClassName('elipse');

        let p1Score = 0;
        let p2Score = 0;

        const ScoreDiv = document.getElementById("score")
        const p1ScorePost = document.getElementById('p1Score');
        const p2ScorePost = document.getElementById('p2Score');
        
        const xWins = document.createElement('H1');
        xWins.innerHTML = 'P1 WINS!';
        const oWins = document.createElement('H1');
        oWins.innerHTML = 'P2 WINS!';
        const draw = document.createElement('H1');
        draw.innerHTML = "ITS A DRAW!"

        xWinsThisGame = false;
        oWinsThisGame = false;
        count = 0;

        this.resetButton(allboxes, allWins, cross, elipse, xWins, oWins, draw );
        
        allboxes.forEach(box =>{
            box.addEventListener('click', () =>{
                console.log(count)
                console.log(xWinsThisGame)
                let lastPlayed = '';

                box.className = 'box played';
                box.style.pointerEvents = 'none';

                const index = allboxes.indexOf(box);
                let row = Math.floor(index/3);
                let col = index %3;

                if (count %2 == 0){
                    this.gameArray[row][col] = 'X';
                    cross[index].style.display = 'block';
                    lastPlayed = 'X'
                }
                else if (count %2 == 1){
                    this.gameArray[row][col] = 'O';
                    elipse[index].style.display = 'block';
                    lastPlayed = 'O'
                }
                count ++;

                    for (let i = 0; i <=8; i ++){

                        if (!(i == 8)){
                            if (this.gameArray[this.winningConditions[i][0][0]][this.winningConditions[i][0][1]] == 'X' && this.gameArray[this.winningConditions[i][1][0]][this.winningConditions[i][1][1]]== 'X' && this.gameArray[this.winningConditions[i][2][0]][this.winningConditions[i][2][1]] == 'X'){
                                console.log("X WINS!");
                                allboxes.forEach(box =>{ box.style.pointerEvents = 'none';})
                                xWinsThisGame = true;
                                console.log(xWinsThisGame)
                                p1Score ++;
                                p1ScorePost.innerHTML = `P1 Wins: ${p1Score}`;
                                p2ScorePost.innerHTML = `P2 Wins: ${p2Score}`;
                                ScoreDiv.append(p1ScorePost, p2ScorePost);
                                document.body.appendChild(xWins);
                                allWins[i].style.display = 'block';
                            }
                            else if (this.gameArray[this.winningConditions[i][0][0]][this.winningConditions[i][0][1]] == 'O' && this.gameArray[this.winningConditions[i][1][0]][this.winningConditions[i][1][1]]== 'O' && this.gameArray[this.winningConditions[i][2][0]][this.winningConditions[i][2][1]] == 'O'){
                                console.log("O WINS!");
                                allboxes.forEach(box =>{ box.style.pointerEvents = 'none';})
                                oWinsThisGame = true;
                                p2Score ++;
                                p1ScorePost.innerHTML = `P1 Wins: ${p1Score}`;
                                p2ScorePost.innerHTML = `P2 Wins: ${p2Score}`;
                                ScoreDiv.append(p1ScorePost, p2ScorePost);
                                document.body.appendChild(oWins);
                                allWins[i].style.display = 'block';
                            }
                        }
                        else if (i == 8){
                            if ((xWinsThisGame == false) && (oWinsThisGame == false) && (count === 9)){
                                document.body.appendChild(draw);
                            }
                        }
                    } 

            })
        }) 
       
    }, 
    resetButton: function(allboxes, allWins, cross, elipse, xWins, oWins, draw){
        const resetButton = document.getElementById('resetButton')
        
        resetButton.addEventListener('click', ()=>{
            allboxes.forEach(box =>{
                box.className = 'box';
                box.style.pointerEvents = 'auto';         
            })
            allWins.forEach(win =>{
                win.style.display = 'none'
            })

            for (let i = 0 ; i < cross.length; i ++){
                cross[i].style.display = 'none'
                elipse[i].style.display = 'none'  
            }
            count = 0;

            xWinsThisGame = false;
            oWinsThisGame = false;
            xWins.remove();
            oWins.remove();
            draw.remove();

            this.gameArray = [
                ['','',''],
                ['','',''],
                ['','','']
                ];
        })
    }
}

tictactoeGame.init();
