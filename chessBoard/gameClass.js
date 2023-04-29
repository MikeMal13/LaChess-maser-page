class Game {
    constructor(game, boardType) {

        this.game = game;
        this.whitePlayer;
        this.blackPlayer;
    }

    lichessWritingTogameArray(str) {

        let move = 1;

        for (let i = 0; i < str.length; i++) {

            if (str[i] == '[' || str[i] == '{') {
                while (str[i] != ']' && str[i] != '}' && i < str.length) {
                    i++;
                }
            }

        }

        return;
    }

}