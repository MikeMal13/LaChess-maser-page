function pawn_possiboleMoves(board, startCords) {

    let possiboleMoves = [];

    if (findInBoard(board, startCords) == "wp") {

        if (findInBoard(board, new Cords(startCords.x, startCords.y + 1), startCords) == "nn") {

            possiboleMoves.push(new Cords(startCords.x, startCords.y + 1));

            if (startCords.y == 1 && findInBoard(board, new Cords(startCords.x, startCords.y + 2), startCords) == "nn") {
                possiboleMoves.push(new Cords(startCords.x, startCords.y + 2));
            }
        }

        if (findInBoard(board, new Cords(startCords.x + 1, startCords.y + 1), startCords)[0] == "b") {
            possiboleMoves.push(new Cords(startCords.x + 1, startCords.y + 1));
        }

        if (findInBoard(board, new Cords(startCords.x - 1, startCords.y + 1), startCords)[0] == "b") {
            possiboleMoves.push(new Cords(startCords.x - 1, startCords.y + 1));
        }
    }
    if (findInBoard(board, startCords) == "bp") {

        if (findInBoard(board, new Cords(startCords.x, startCords.y - 1), startCords) == "nn") {
            possiboleMoves.push(new Cords(startCords.x, startCords.y - 1));

            if (startCords.y == 6 && findInBoard(board, new Cords(startCords.x, startCords.y - 2), startCords) == "nn") {
                possiboleMoves.push(new Cords(startCords.x, startCords.y - 2));
            }
        }

        if (findInBoard(board, new Cords(startCords.x + 1, startCords.y - 1), startCords)[0] == "w") {
            possiboleMoves.push(new Cords(startCords.x + 1, startCords.y - 1));
        }

        if (findInBoard(board, new Cords(startCords.x - 1, startCords.y - 1), startCords)[0] == "w") {
            possiboleMoves.push(new Cords(startCords.x - 1, startCords.y - 1));
        }
    }

    oppasiteColor = board.pices[startCords.y][startCords.x][0] == "w" ? "b" : "w";
    kingCord = findKingCords(board, oppasiteColor == "w" ? "b" : "w");
    ltk = findLineToPice(startCords, kingCord);

    if (ltk != false && isLineToKingEmpty(board, startCords, kingCord, p_to_m(ltk[0]), p_to_m(ltk[1]))) {

        pinCords = findIfPinedInDirection(board, oppasiteColor, startCords, ltk[0], ltk[1])

        if (pinCords != false) {

            allMovesInLine(pinCords, kingCord, ltk);

            for (let i = 0; i < possiboleMoves.length; i++) {

                if (!LSTcontainsCord(possiboleMovesInLine, possiboleMoves[i])) {
                    possiboleMoves.splice(i, 1);
                    i--;
                }
            }
        }
    }

    return possiboleMoves;
}


function rook_possiboleMoves(board, startCords) {

    possiboleMoves = [];
    oppasiteColor = board.pices[startCords.y][startCords.x][0] == "w" ? "b" : "w";


    kingCord = findKingCords(board, oppasiteColor == "w" ? "b" : "w");

    if (findLineToPice(startCords, kingCord) != false) {

        let ltkX = findLineToPice(startCords, kingCord)[0];
        let ltkY = findLineToPice(startCords, kingCord)[1];

        let n = findIfPinedInDirection(board, oppasiteColor, startCords, ltkX, ltkY);

        if (n != false) {

            if (!(ltkX == " " || ltkY == " ")) {
                return [];
            }

            possiboleMoves.push(...(continoUntilPice(board, ltkX, ltkY, startCords, oppasiteColor)));
            possiboleMoves.push(...(continoUntilPice(board, p_to_m(ltkX), p_to_m(ltkY), startCords, oppasiteColor)));

            return possiboleMoves;
        }
    }


    possiboleMoves.push(...(continoUntilPice(board, "+", " ", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "-", " ", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, " ", "+", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, " ", "-", startCords, oppasiteColor)));


    return possiboleMoves;
}




function knight_possiboleMoves(board, startCords) {

    possiboleMoves = [];
    oppasiteColor = board.pices[startCords.y][startCords.x][0] == "w" ? "b" : "w";


    kingCord = findKingCords(board, oppasiteColor == "w" ? "b" : "w");

    ltk = findLineToPice(startCords, kingCord);

    if (ltk != false && isLineToKingEmpty(board, startCords, kingCord, p_to_m(ltk[0]), p_to_m(ltk[1]))) {

        ltk = findLineToPice(startCords, kingCord);

        if (findIfPinedInDirection(board, oppasiteColor, startCords, ltk[0], ltk[1]) != false) {

            return [];
        }
    }

    if (isCordsValid(board, new Cords(startCords.x + 2, startCords.y + 1), startCords)) possiboleMoves.push(new Cords(startCords.x + 2, startCords.y + 1));
    if (isCordsValid(board, new Cords(startCords.x + 2, startCords.y - 1), startCords)) possiboleMoves.push(new Cords(startCords.x + 2, startCords.y - 1));
    if (isCordsValid(board, new Cords(startCords.x - 2, startCords.y + 1), startCords)) possiboleMoves.push(new Cords(startCords.x - 2, startCords.y + 1));
    if (isCordsValid(board, new Cords(startCords.x - 2, startCords.y - 1), startCords)) possiboleMoves.push(new Cords(startCords.x - 2, startCords.y - 1));
    if (isCordsValid(board, new Cords(startCords.x + 1, startCords.y + 2), startCords)) possiboleMoves.push(new Cords(startCords.x + 1, startCords.y + 2));
    if (isCordsValid(board, new Cords(startCords.x + 1, startCords.y - 2), startCords)) possiboleMoves.push(new Cords(startCords.x + 1, startCords.y - 2));
    if (isCordsValid(board, new Cords(startCords.x - 1, startCords.y + 2), startCords)) possiboleMoves.push(new Cords(startCords.x - 1, startCords.y + 2));
    if (isCordsValid(board, new Cords(startCords.x - 1, startCords.y - 2), startCords)) possiboleMoves.push(new Cords(startCords.x - 1, startCords.y - 2));

    return possiboleMoves;
}

function bishop_possiboleMoves(board, startCords) {

    possiboleMoves = [];
    oppasiteColor = board.pices[startCords.y][startCords.x][0] == "w" ? "b" : "w";


    kingCord = findKingCords(board, oppasiteColor == "w" ? "b" : "w");
    ltk = findLineToPice(startCords, kingCord);

    if (ltk != false && isLineToKingEmpty(board, startCords, kingCord, p_to_m(ltk[0]), p_to_m(ltk[1]))) {



        if (findIfPinedInDirection(board, oppasiteColor, startCords, ltk[0], ltk[1]) != false) {

            if (ltk[0] == " " || ltk[1] == " ") {
                return [];
            }

            possiboleMoves.push(...(continoUntilPice(board, ltk[0], ltk[1], startCords, oppasiteColor)));
            possiboleMoves.push(...(continoUntilPice(board, p_to_m(ltk[0]), p_to_m(ltk[1]), startCords, oppasiteColor)));

            return possiboleMoves;
        }
    }

    possiboleMoves.push(...(continoUntilPice(board, "+", "+", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "+", "-", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "-", "+", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "-", "-", startCords, oppasiteColor)));

    return possiboleMoves;
}


function king_possiboleMoves(board, startCords) {

    possiboleMoves = [];

    if (isKingMovePossible(board, new Cords(startCords.x + 1, startCords.y + 1), startCords)) possiboleMoves.push(new Cords(startCords.x + 1, startCords.y + 1));
    if (isKingMovePossible(board, new Cords(startCords.x + 1, startCords.y - 1), startCords)) possiboleMoves.push(new Cords(startCords.x + 1, startCords.y - 1));
    if (isKingMovePossible(board, new Cords(startCords.x - 1, startCords.y + 1), startCords)) possiboleMoves.push(new Cords(startCords.x - 1, startCords.y + 1));
    if (isKingMovePossible(board, new Cords(startCords.x - 1, startCords.y - 1), startCords)) possiboleMoves.push(new Cords(startCords.x - 1, startCords.y - 1));
    if (isKingMovePossible(board, new Cords(startCords.x + 1, startCords.y), startCords)) possiboleMoves.push(new Cords(startCords.x + 1, startCords.y));
    if (isKingMovePossible(board, new Cords(startCords.x - 1, startCords.y), startCords)) possiboleMoves.push(new Cords(startCords.x - 1, startCords.y));
    if (isKingMovePossible(board, new Cords(startCords.x, startCords.y + 1), startCords)) possiboleMoves.push(new Cords(startCords.x, startCords.y + 1));
    if (isKingMovePossible(board, new Cords(startCords.x, startCords.y - 1), startCords)) possiboleMoves.push(new Cords(startCords.x, startCords.y - 1));

    if (board.pices[startCords.y][startCords.x][0] == "w") {

        if (board.whiteRightCastling && isLineToKingEmpty(board, new Cords(7, 0), new Cords(3, 0), "-", " ") && findIfKingIsChecked(board, new Cords(5, 0), "w") == false && findIfKingIsChecked(board, new Cords(4, 0), "w") == false) possiboleMoves.push(new Cords(5, 0))
        if (board.whiteLeftCastling && isLineToKingEmpty(board, new Cords(0, 0), new Cords(3, 0), "+", " ") && findIfKingIsChecked(board, new Cords(1, 0), "w") == false && findIfKingIsChecked(board, new Cords(2, 0), "w") == false) possiboleMoves.push(new Cords(1, 0))

    } else {
        console.log(board.blackRightCastling, board.blackLeftCastling);
        if (board.blackLeftCastling && isLineToKingEmpty(board, new Cords(7, 7), new Cords(3, 7), "-", " ") && findIfKingIsChecked(board, new Cords(5, 7), "b") == false && findIfKingIsChecked(board, new Cords(4, 7), "b") == false) possiboleMoves.push(new Cords(5, 7))
        if (board.blackRightCastling && isLineToKingEmpty(board, new Cords(0, 7), new Cords(3, 7), "+", " ") && findIfKingIsChecked(board, new Cords(1, 7), "b") == false && findIfKingIsChecked(board, new Cords(2, 7), "b") == false) possiboleMoves.push(new Cords(1, 7))
    }

    return possiboleMoves;
}

function isKingMovePossible(board, endCords, startCords) {

    return (isCordsValid(board, endCords, startCords) && findIfKingIsChecked(board, endCords, board.pices[startCords.y][startCords.x][0]).length == 0)
}


function queen_possiboleMoves(board, startCords) {

    possiboleMoves = [];
    oppasiteColor = board.pices[startCords.y][startCords.x][0] == "w" ? "b" : "w";


    kingCord = findKingCords(board, oppasiteColor == "w" ? "b" : "w");
    ltk = findLineToPice(startCords, kingCord);

    if (ltk != false && isLineToKingEmpty(board, startCords, kingCord, p_to_m(ltk[0]), p_to_m(ltk[1]))) {

        n = findIfPinedInDirection(board, oppasiteColor, startCords, ltk[0], ltk[1]);;

        if (n != false) {

            possiboleMoves.push(...(continoUntilPice(board, ltk[0], ltk[1], startCords, oppasiteColor)));
            possiboleMoves.push(...(continoUntilPice(board, p_to_m(ltk[0]), p_to_m(ltk[1]), startCords, oppasiteColor)));

            return possiboleMoves;
        }
    }

    possiboleMoves.push(...(continoUntilPice(board, "+", " ", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "-", " ", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, " ", "+", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, " ", "-", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "+", "+", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "+", "-", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "-", "+", startCords, oppasiteColor)));
    possiboleMoves.push(...(continoUntilPice(board, "-", "-", startCords, oppasiteColor)));


    return possiboleMoves;
}
//-------------------------------------------------------------\\




function continoUntilPice(board, x, y, startCords, oppositeColor) {


    let possiboleMoves = [];

    let cords = cordsPluseMinus(x, y, new Cords(startCords.x, startCords.y));


    while (isCordsValid(board, cords, startCords)) {

        possiboleMoves.push(new Cords(cords.x, cords.y));


        if (board.pices[cords.y][cords.x][0] == oppositeColor) {

            break;
        }

        cords = cordsPluseMinus(x, y, cords);
    }

    return possiboleMoves;
}



function cordsPluseMinus(x, y, cords) {


    if (x == "+") {
        cords.x++;
    }
    if (x == "-") {
        cords.x--;
    }

    if (y == "+") {
        cords.y++;
    }
    if (y == "-") {
        cords.y--;
    }

    return cords;
}


//------------------------------------------//


function isCordsValid(board, cords, startCords) {

    return (
        cords.x > -1 &&
        cords.x < 8 &&
        cords.y > -1 &&
        cords.y < 8 &&
        (startCords == undefined || board.pices[cords.y][cords.x][0] != board.pices[startCords.y][startCords.x][0]));
}


function findInBoard(board, cords, startCords) {

    if (isCordsValid(board, cords, startCords)) {

        return board.pices[cords.y][cords.x];
    }

    return false;
}