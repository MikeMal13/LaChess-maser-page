function findAllMovesPerPice(board, turn) {

    let kingIsAlive = false;
    let moves = [];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            if (findInBoard(board, new Cords(i, j))[0] == turn) {

                let piceMoves = checkPice(board, new Cords(i, j));

                piceMoves.forEach(move => {
                    moves.push([new Cords(i, j), move])
                })

                if (findInBoard(board, new Cords(i, j))[1] == "k") kingIsAlive = true;
            }
        }
    }

    if (kingIsAlive) return moves;
    else return false;
}


function setBoardAsList(board, allMoves) {
    allMoves.forEach(move => {
        movePice(board, move[1], move[2])
    });
}


function playRrandomovesToBoards(name_s, name_e, boardsCount) {


    for (let i = 0; i < boardsCount; i++) {

        const board = window[name_s + i + name_e]

        if (playRandomMoves(board) == false) {

            board.creatBoard()
            board.turn = "b"
        }

        board.turn = board.turn == "w" ? "b" : "w"

        PrintBoard(board, true)
    }

    window.requestAnimationFrame(playRrandomovesToBoards)
}


function playRandomMoves(board) {

    console.log(board);

    let allMoves = findAllMovesPerPice(board, board.turn);
    let m;

    if (allMoves == false) return false;

    m = allMoves[Math.floor(allMoves.length * Math.random())]

    movePice(board, m[0], m[1]);
}