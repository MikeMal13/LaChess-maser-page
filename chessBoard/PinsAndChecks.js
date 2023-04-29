function findIfPinedInDirection(board, oppositeColor, startCords, x, y) {

    let cords = cordsPluseMinus(x, y, new Cords(startCords.x, startCords.y));

    if (x == " " && y == " ") return false;

    while (cords.x > -1 && cords.x < 8 && cords.y > -1 && cords.y < 8) {

        if (board.pices[cords.y][cords.x][0] == oppositeColor) {

            if (board.pices[cords.y][cords.x][1] == "q") return cords;

            if (board.pices[cords.y][cords.x][1] == "b" && x != " " && y != " ") return cords;

            if (board.pices[cords.y][cords.x][1] == "r" && (x == " " || y == " ")) return cords;

            return false;
        }

        if (board.pices[cords.y][cords.x][0] == board.pices[startCords.y][startCords.x][0]) return false

        cords = cordsPluseMinus(x, y, cords)
    }

    return false;
}


function isKingMated(board, kingCords) {

    let kingIsMated = true;

    king_possiboleMoves(kingCords).forEach(cord => {

        if (!findAllMoves(board.pices[kingCords.x][kingCords.y][0] == "w" ? "b" : "w").includes(cord)) {

            kingIsMated = false;
            console.log("not Mated");
            return;
        }
    });

    return kingIsMated;
}

function p_to_m(n) {
    if (n == "+") return "-";
    if (n == "-") return "+";
    return " ";
}

function findLineToPice(endCords, kingCord) {

    if (endCords.x == kingCord.x) {

        if (endCords.y > kingCord.y) return " +"
        else return " -"
    }

    if (endCords.y == kingCord.y) {

        if (endCords.x > kingCord.x) return "+ "
        else return "- "
    }

    if (endCords.y - kingCord.y == endCords.x - kingCord.x) {

        if (endCords.x > kingCord.x) return "++"
        else return "--"
    }

    if (endCords.y - kingCord.y == kingCord.x - endCords.x) {

        if (endCords.x > kingCord.x) return "+-"
        else return "-+"
    }

    return false;
}

function isLineToKingEmpty(board, startCords, kingCord, x, y) {

    let cord = cordsPluseMinus(x, y, new Cords(startCords.x, startCords.y))

    while (cord.x > -1 && cord.x < 8 && cord.y > -1 && cord.y < 8 && (cord.y != kingCord.y || cord.x != kingCord.x)) {

        if (board.pices[cord.y][cord.x] != "nn") return false;

        cord = cordsPluseMinus(x, y, cord)
    }

    return true;
}

function findKingCords(board, turn) {

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (findInBoard(board, new Cords(i, j)) == (turn + "k")) {

                return new Cords(i, j);
            }
        }
    }

    return false;
}

function allMovesInLine(pinCords, kingCord, ltk) {
    possiboleMovesInLine = [];
    cord = cordsPluseMinus(ltk[0], ltk[1], new Cords(kingCord.x, kingCord.y))

    while (cord.y != pinCords.y || cord.x != pinCords.x) {

        possiboleMovesInLine.push(new Cords(cord.x, cord.y));
        cord = cordsPluseMinus(ltk[0], ltk[1], cord)
    }

    return possiboleMovesInLine;
}

function removeMovesIfChecked(board, possiboleMoves, cords, kingCord) {

    let checks = findIfKingIsChecked(board, kingCord, board.pices[kingCord.y][kingCord.x][0]);

    if (checks.length > 1) return [];

    if (checks.length == 1) {

        MovesAfterCheck(checks, board, possiboleMoves, cords)
    }

    return possiboleMoves;
}

function MovesAfterCheck(checks, board, possiboleMoves, cords) {

    if (board.pices[cords.y][cords.x][1] == "k") return possiboleMoves;

    ltk = findLineToPice(checks[0], kingCord);

    let possiboleMovesInLine = [];

    if (ltk != false) possiboleMovesInLine = allMovesInLine(checks[0], kingCord, ltk);

    possiboleMovesInLine.push(checks[0]);

    for (let i = 0; i < possiboleMoves.length; i++) {
        if (!LSTcontainsCord(possiboleMovesInLine, possiboleMoves[i])) {
            possiboleMoves.splice(i, 1);
            i--;
        }
    }

    return possiboleMoves;

}

function findIfKingIsChecked(board, kingCord, color) {
    let checks = [];

    let oppasiteColor = "n";
    if (color == "w") oppasiteColor = "b";
    if (color == "b") oppasiteColor = "w";

    //
    if (findIfCheckedInDirection(board, color, kingCord, "+", "+") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, "+", "+"));
    if (findIfCheckedInDirection(board, color, kingCord, "+", "-") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, "+", "-"));
    if (findIfCheckedInDirection(board, color, kingCord, "-", "+") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, "-", "+"));
    if (findIfCheckedInDirection(board, color, kingCord, "-", "-") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, "-", "-"));
    if (findIfCheckedInDirection(board, color, kingCord, " ", "+") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, " ", "+"));
    if (findIfCheckedInDirection(board, color, kingCord, " ", "-") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, " ", "-"));
    if (findIfCheckedInDirection(board, color, kingCord, "+", " ") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, "+", " "));
    if (findIfCheckedInDirection(board, color, kingCord, "-", " ") != false) checks.push(findIfCheckedInDirection(board, color, kingCord, "-", " "));
    //


    // 
    if (findInBoard(board, new Cords(kingCord.x + 1, kingCord.y + 2)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x + 1, kingCord.y + 2));
    if (findInBoard(board, new Cords(kingCord.x + 1, kingCord.y - 2)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x + 1, kingCord.y - 2));
    if (findInBoard(board, new Cords(kingCord.x + 2, kingCord.y + 1)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x + 2, kingCord.y + 1));
    if (findInBoard(board, new Cords(kingCord.x + 2, kingCord.y - 1)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x + 2, kingCord.y - 1));
    if (findInBoard(board, new Cords(kingCord.x - 1, kingCord.y + 2)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x - 1, kingCord.y + 2));
    if (findInBoard(board, new Cords(kingCord.x - 1, kingCord.y - 2)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x - 1, kingCord.y - 2));
    if (findInBoard(board, new Cords(kingCord.x - 2, kingCord.y + 1)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x - 2, kingCord.y + 1));
    if (findInBoard(board, new Cords(kingCord.x - 2, kingCord.y - 1)) == oppasiteColor + "n") checks.push(new Cords(kingCord.x - 2, kingCord.y - 1));
    //

    return checks;
}

function findIfCheckedInDirection(board, color, kingCord, x, y) {

    cord = cordsPluseMinus(x, y, new Cords(kingCord.x, kingCord.y))

    if (x != " " && y != " " && findInBoard(board, cord) == ((color == "w" ? "b" : "w") + "p") && ((color == "w" && y == "+") || (color == "b" && y == "-"))) {
        console.log("what the fuck? ")
        console.log(cord);
        return cord;
    }

    if (isCordsValid(board, cord) && board.pices[cord.y][cord.x] == ((color == "w" ? "b" : "w") + "k")) {
        console.log("what the fuck? 2")
        console.log(cord);
        return cord;
    }


    while (cord.x > -1 && cord.x < 8 && cord.y > -1 && cord.y < 8) {

        if (board.pices[cord.y][cord.x] != "nn") {

            if (board.pices[cord.y][cord.x][0] == color && board.pices[cord.y][cord.x][1] != 'k') return false;

            if (board.pices[cord.y][cord.x][1] == "q") return cord;

            if (board.pices[cord.y][cord.x][1] == "b" && x != " " && y != " ") return cord;

            if (board.pices[cord.y][cord.x][1] == "r" && (x == " " || y == " ")) return cord;

            return false;
        }

        cord = cordsPluseMinus(x, y, cord)
    }

    return false;
}