class Cords {
    constructor(x, y) {

        this.x = x;
        this.y = y;
    }
}

function piceIsClicked(board, x, y) {

    if (LSTcontainsCord(board.possiboleMoves, (new Cords(x, y)))) {

        movePice(board, lastCords, new Cords(x, y));

        resatPSMoves(board);

        if (board.type == "ai") {

            board.turn = "b";
            if (!networkMovePice(board, bestNetwork)) console.warn("network failed");
            board.turn = "w";
        }

        PrintBoard(board, false);
        onMove()//does nafhing anless redifend on HTML


        return;
    }

    if (board.pices[y][x] == "nn") {

        resatPSMoves(board);
        PrintBoard(board, false);
        return;
    }


    lastCords = new Cords(x, y);

    board.possiboleMoves = checkPice(board, lastCords, board.type != "freePlay");

    PrintBoard(board, false)
}

function onMove() {
    //this sepost to be remad aoutside and created to find whne a move has been made
    //i have no purepus here
}

function resatPSMoves(board) {

    lastCords = undefined;
    board.possiboleMoves = [];
    return;
}


function checkPice(board, cords, onlyColor) {

    if (board.turn != board.pices[cords.y][cords.x][0] && onlyColor == true) return []

    kingCord = findKingCords(board, board.pices[cords.y][cords.x][0])

    if (board.pices[cords.y][cords.x] == "nn") {

        return [];
    }

    switch (board.pices[cords.y][cords.x][1]) {

        case "p":
            board.possiboleMoves = pawn_possiboleMoves(board, cords);
            break;

        case "r":
            board.possiboleMoves = rook_possiboleMoves(board, cords);
            break;

        case "n":
            board.possiboleMoves = knight_possiboleMoves(board, cords);
            break;

        case "b":
            board.possiboleMoves = bishop_possiboleMoves(board, cords);
            break;

        case "k":
            board.possiboleMoves = king_possiboleMoves(board, cords);
            break;

        case "q":
            board.possiboleMoves = queen_possiboleMoves(board, cords);
            break;
    }

    removeMovesIfChecked(board, board.possiboleMoves, cords, kingCord);

    return board.possiboleMoves
}


function removeCastelIfNeed(board, cords) {
    switch (board.pices[cords.y][cords.x]) {

        case "wr":
            if (cords.x == 7) board.whiteRightCastling = false;
            if (cords.x == 0) board.whiteLeftCastling = false;
            break;

        case "br":
            if (cords.x == 7) board.blackLeftCastling = false;
            if (cords.x == 0) board.blackRightCastling = false;
            console.log(board.blackLeftCastling, board.blackRightCastling);
            break;

        case "bk":
            board.blackLeftCastling = false;
            board.blackRightCastling = false;
            break;

        case "wk":
            board.whiteRightCastling = false;
            board.whiteLeftCastling = false;
            break;
    }
}

function castel(board, startCords, endCords) {

    if (startCords.x > endCords.x) {
        board.pices[startCords.y][1] = board.pices[startCords.y][3];
        board.pices[startCords.y][3] = "nn"
        board.pices[startCords.y][2] = board.pices[startCords.y][0];
        board.pices[startCords.y][0] = "nn"
    } else {

        board.pices[startCords.y][5] = board.pices[startCords.y][3];
        board.pices[startCords.y][3] = "nn"
        board.pices[startCords.y][4] = board.pices[startCords.y][7];
        board.pices[startCords.y][7] = "nn"
    }
}


function movePice(board, startCords, endCords) {

    removeCastelIfNeed(board, startCords)

    if (board.pices[startCords.y][startCords.x][1] == "k" && Math.abs(startCords.x - endCords.x) > 1) {

        castel(board, startCords, endCords)
    } else {
        board.pices[endCords.y][endCords.x] = board.pices[startCords.y][startCords.x];
        board.pices[startCords.y][startCords.x] = "nn"
    }

    if ((endCords.y == 7 || endCords.y == 0) && board.pices[endCords.y][endCords.x][1] == "p") {
        //premote
        board.pices[endCords.y][endCords.x] = board.pices[endCords.y][endCords.x][0] + "q";
    }

    board.allMoves.push([board.pices[endCords.y][endCords.x], startCords, endCords]);

    //reportForMoveLog(board.allMoves)

    board.possiboleMoves = [];
}

function reportForMoveLog(allMoves) {

    let moves = ""

    allMoves.forEach(move => {
        moves += move[0][1] + ": " + intToChar(7 - move[1].x) + "" + (move[1].y + 1) + " > " + intToChar(7 - move[2].x) + "" + (move[2].y + 1) + " | "
    })

    document.getElementById("log").textContent = moves;
}

function LSTcontainsCord(LST, cord) {

    let contains = false;

    LST.forEach(cod => {
        if (cod.x == cord.x && cod.y == cord.y) {

            contains = true;
            return;
        }
    })

    return contains;
}

function intToChar(int) {

    const code = 'a'.charCodeAt(0);

    return String.fromCharCode(code + int);
}

function allowDrop(ev, board, x, y) {

    if (LSTcontainsCord(board.possiboleMoves, new Cords(x, y))) ev.preventDefault();
}

function drop(ev, board, x, y) {

    ev.preventDefault();
    piceIsClicked(board, x, y)
}

function drag(ev, board, x, y) {

    piceIsClicked(board, x, y)
}