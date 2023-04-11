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
}


function creatHTMLboardForBoard(boardName) {

    document.write("<div id='" + boardName + "_html' class='boards'>");

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            document.write("<img src='/chessBoard/pictures/nn.png' class='pice' id='" + x.toString() + y.toString() + "_" + boardName + "'draggable='true' ondragstart='drag(event," + boardName + "," + x + "," + y + ")' onclick='piceIsClicked(" + boardName + "," + x + "," + y + ")'  ondrop='drop(event," + boardName + ", " + x + "," + y + ")' ondragover='allowDrop(event, " + boardName + "," + x + "," + y + ")'>");
        }
        document.write("<div id='end'></div>");
    }

    document.write("</div>");
}




//-----------------------//-----------------------//-----------------------//-----------------------//-----------------------//-----------------------