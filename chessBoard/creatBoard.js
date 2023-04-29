class Board {
    constructor(name, boardType) {

        this.type = boardType;

        this.whiteLeftCastling = true;
        this.whiteRightCastling = true;

        this.blackLeftCastling = true;
        this.blackRightCastling = true;

        this.lastMove;

        this.boardName = name;
        this.possiboleMoves = [];

        this.allMoves = [];

        this.turn = "w";


        this.pices = new Array(8);

        for (var i = 0; i < 8; i++) {
            this.pices[i] = new Array(8);
        }

        this.creatBoard();
    }

    creatBoard() {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                this.setPicePerSqer(x, y)
            }
        }
    }

    setPicePerSqer(x, y) {


        let sq = "nn";

        if (x < 2 || x > 5) {

            if (x < 2) {
                sq = "w";
            } else if (x > 5) {
                sq = "b";
            }

            if (x == 1 || x == 6) {
                sq += "p";
            } else if (y == 0 || y == 7) {
                sq += "r";
            } else if (y == 1 || y == 6) {
                sq += "n";
            } else if (y == 2 || y == 5) {
                sq += "b";
            } else if (y == 3) {
                sq += "k";
            } else if (y == 4) {
                sq += "q";
            }
        }

        this.pices[x][y] = sq;
    }

    move(startCords, endCords) {


        removeCastelIfNeed(self, startCords)

        if (this.pices[startCords.y][startCords.x][1] == "k" && Math.abs(startCords.x - endCords.x) > 1) {

            castel(this, startCords, endCords)
        } else {
            this.pices[endCords.y][endCords.x] = this.pices[startCords.y][startCords.x];
            this.pices[startCords.y][startCords.x] = "nn"
        }

        if ((endCords.y == 7 || endCords.y == 0) && this.pices[endCords.y][endCords.x][1] == "p") {
            //premote
            this.pices[endCords.y][endCords.x] = this.pices[endCords.y][endCords.x][0] + "q";
        }

        this.allMoves.push([this.pices[endCords.y][endCords.x], startCords, endCords]);

        //reportForMoveLog(board.allMoves)

        this.possiboleMoves = [];
    }

    piceIsClicked(x, y) {


        if (LSTcontainsCord(this.possiboleMoves, (new Cords(x, y)))) {

            movePice(this, lastCords, new Cords(x, y));

            resatPSMoves(this);

            if (this.type == "ai") {

                this.turn = "b";
                if (!networkMovePice(this, bestNetwork)) console.warn("network failed");
                this.turn = "w";
            }

            PrintBoard(this, false);

            return;
        }

        if (this.pices[y][x] == "nn") {

            resatPSMoves(this);
            PrintBoard(this, false);
            return;
        }


        lastCords = new Cords(x, y);

        this.possiboleMoves = checkPice(this, lastCords, this.type != "freePlay");

        PrintBoard(this, false)
    }

    exportAsString() {
        let s = "";



        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                s += this.pices[i][j]
            }
        }

        s += this.whiteLeftCastling ? "t" : "f"
        s += this.whiteRightCastling ? "t" : "f"
        s += this.blackLeftCastling ? "t" : "f"
        s += this.blackRightCastling ? "t" : "f"

        return s
    }

    ImportFromString(s) {

        console.log(this.pices);

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let pointer = ((i * 8) + j) * 2
                this.pices[i][j] = s.substring(pointer, pointer + 2)
            }
        }

        this.whiteLeftCastling = s[128] == 't'
        this.whiteRightCastling = s[129] == 't'
        this.blackLeftCastling = s[130] == 't'
        this.blackRightCastling = s[131] == 't'

        PrintBoard(this, true)
    }
}


function creatHTMLboardForBoard(boardName) {


    let s = "";

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            s += "<img src='/pictures/nn.png' class='pice' id='" + x.toString() + y.toString() + "_" + boardName + "'draggable='true' ondragstart='drag(event," + boardName + "," + x + "," + y + ")' onclick='piceIsClicked(" + boardName + "," + x + "," + y + ")'  ondrop='drop(event," + boardName + ", " + x + "," + y + ")' ondragover='allowDrop(event, " + boardName + "," + x + "," + y + ")'>";
        }
        s += "<div id='end'></div>";
    }

    document.getElementById(boardName).innerHTML = s;
}




//-----------------------//-----------------------//-----------------------//-----------------------//-----------------------//-----------------------