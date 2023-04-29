function networkGame(board, network1, network2) {
    for (let i = 0; i < 1000; i++) {

        console.log(i);

        board.turn = "w";
        if (!networkMovePice(board, network1)) return network2;

        console.log("yoo");

        board.turn = "b";
        if (!networkMovePice(board, network1)) return network1;
    }

    return network2
}

function networkMovePice(board, network) {

    let outputs = NeuralNetwork.feedForward(findInputPerBourd(board), network);

    let c = brainOutputToCords(outputs)
    let pm;

    console.log(board.pices[c[0].y][c[0].x], c[0].y, c[0].x);

    if (board.pices[c[0].y][c[0].x][0] == board.turn) {
        pm = checkPice(board, c[0]);
    } else {
        return false
    }



    if (LSTcontainsCord(pm, c[1])) {

        movePice(board, c[0], c[1]);
        board.turn = board.turn == "w" ? "b" : "w";
        return true;
    }

    return false;
}



function brainOutputToCords(outputs) {

    let bigestOutput_s = -2;
    let bigestOutputPlace_s;

    for (let i = 0; i < 64; i++) {
        if (outputs[i] > bigestOutput_s) {

            bigestOutput_s = outputs[i]
            bigestOutputPlace_s = i;
        }
    }

    let bigestOutput_e = -2;
    let bigestOutputPlace_e;

    for (let i = 64; i < 128; i++) {
        if (outputs[i] > bigestOutput_e) {
            bigestOutput_e = outputs[i]
            bigestOutputPlace_e = i - 64;
        }
    }

    return [new Cords(bigestOutputPlace_s % 8, Math.floor(bigestOutputPlace_s / 8)), new Cords(bigestOutputPlace_e % 8, Math.floor(bigestOutputPlace_e / 8))];
}


function findInputPerBourd(board) {

    let input = new Array(320);

    for (let i = 0; i < 64; i++) {

        input[i * 5] = 0
        input[i * 5 + 1] = 0
        input[i * 5 + 2] = 0
        input[i * 5 + 3] = 0
        input[i * 5 + 4] = 0

        let inputPerSqure = returnInputPerSqure(board, i)

        if (inputPerSqure != false) {
            input[inputPerSqure[0] + (i * 5)] = inputPerSqure[1];
        }
    }

    return input;
}

function returnInputPerSqure(board, i) {

    switch (board.pices[i % 8][Math.floor(i / 8)]) {

        case "wp":
            return [0, 1]
        case "wr":
            return [1, 1]
        case "wn":
            return [2, 1]
        case "wb":
            return [3, 1]
        case "wk":
            return [4, 1]

        case "bp":
            return [0, -1]
        case "br":
            return [1, -1]
        case "bn":
            return [2, -1]
        case "bb":
            return [3, -1]
        case "bk":
            return [4, -1]
    }

    return false
}