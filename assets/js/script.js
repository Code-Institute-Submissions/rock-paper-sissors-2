const selectionButton = document.querySelectorAll('[data-selection]');
const finalcolumn = document.querySelector('[data-final-column]');
const computerscorespan = document.querySelector('[data-computer-score]');
const yourscorespan = document.querySelector('[data-your-score]');
const SELECTIONS = [

    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors'
    },

    {
        name: 'paper',
        emoji: '📰',
        beats: 'rock'
    },

    {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper'
    }


];

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);

    });
});


function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);


    addselectionresult(computerSelection, computerWinner);
    addselectionresult(selection, yourWinner);



if (yourWinner) incrementscore(yourscorespan);
if (computerWinner) incrementscore(computerscorespan);
}
function incrementscore(scorespan) {
    scorespan.innertext = parseInt(scorespan.innertext) + 1;
}


function addselectionresult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalcolumn.after(div);
}

function isWinner(selection, opponentselection) {
    return selection.beats === opponentselection.name;

}


function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}



