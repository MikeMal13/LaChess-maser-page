function PrintBoard(board, routate) {

    if (routate) {

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 8; x++) { 

                swapNodes(
                    document.getElementById(x.toString() + y.toString() + "_" + board.boardName),
                    document.getElementById((7 - x).toString() + (7 - y).toString() + "_" + board.boardName)
                )
            }
        }
    }

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {

            console.log(document.getElementById(x.toString() + y.toString() + "_" + board.boardName));

            //document.getElementById(x.toString() + y.toString() + "_" + board.boardName).src = "../../Media/6e55c3d9f2f6ca1d4383687850784dc8.jpg";

            document.getElementById(x.toString() + y.toString() + "_" + board.boardName).src = "/chessBoard/pictures/" + board.pices[y][x] + ".png";
            document.getElementById(x.toString() + y.toString() + "_" + board.boardName).style.backgroundColor = "transparent";
        }
    }

    if (lastCords) {
        document.getElementById(lastCords.x.toString() + lastCords.y.toString() + "_" + board.boardName).style.backgroundColor = "rgba(0, 104, 255, 0.28)";
    }


    board.possiboleMoves.forEach(cord => {

        if (board.pices[cord.y][cord.x] != "nn") {

            document.getElementById(cord.x.toString() + cord.y.toString() + "_" + board.boardName).style.backgroundColor = "rgba(178, 0, 0, 0.64)";

        } else {

            document.getElementById(cord.x.toString() + cord.y.toString() + "_" + board.boardName).style.backgroundColor = "rgba(255, 236, 0, 0.12)";
        }
    })
}

function swapNodes(n1, n2) {

    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;

    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }

    if (p1.isEqualNode(p2) && i1 < i2) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}