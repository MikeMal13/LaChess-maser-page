using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Web;

namespace laChess
{
    public class Class1
    {
        public static string connecionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Magshimim\source\repos\LaChess-maser-page2\App_Data\Users.mdf;Integrated Security=True";

        public static long[] Admins_IDs = {
            1,
        };

        public static bool isAdmin(int id)
        {
            foreach (var admin_id in Admins_IDs)
                if (id == admin_id) 
                    return true;            

            return false;
        }

        public static bool isAdmin(string id)
        {
            return isAdmin(int.Parse(id));
        }


        public static char feeling = 'n';



        public static List<string> chessFacts = new List<string>()
        {
            "The number of possible unique chess games is much greater than the number of electrons in the universe. The number of electrons is estimated to be about 10^79, while the number of unique chess games is 10^120.",
            "The longest chess game theoretically possible is 5,949 moves.",
            "The longest time for a Castling move to take place was the match game between Bobotsor vs. Irkov in 1966: 46. 0-0.",
            "As late as 1561, Castling was two moves. You had to play R-KB1 on one move and K-KN1 on the next move.",
            "The word “Checkmate” in Chess comes from the Persian phrase “Shah Mat,” which means “the King is dead.”",
            "Blathy, Otto (1860-1939), credited for creating the longest Chess Problem, mate in 290 moves.",
            "The Police raided a Chess Tournament in Cleveland in 1973, arrested the Tournament director and confiscated the Chess sets on charges of allowing gambling (cash prizes to winners) and possession of gambling devices (the Chess sets).",
            "The number of possibilities of a Knight’s tour is over 122 million. ",
            "The longest official chess game lasted 269 moves (I. Nikolic – Arsovic, Belgrade 1989) and ended in a draw",
            "From the starting position, there are eight different ways to Mate in two moves and 355 different ways to Mate in three moves.",
            "The new Pawn move, advancing two squares on its first move instead of one, was first introduced in Spain in 1280",
            "Dr. Emanuel Lasker from Germany retained the World Chess Champion title for more time than any other player ever: 26 years and 337 days",
            "In 1985, the Soviet player Garry Kasparov became the youngest World Chess Champion ever at the age of 22 years and 210 days.",
            "The first Chessboard with alternating light and dark squares appears in Europe in 1090.",
            "During World War II, some of the top Chess players were also code breakers. British masters Harry Golombek, Stuart Milner-Barry and H. O’D. Alexander was on the team which broke the Nazi Enigma code.",
            "During the 1972 Fischer-Spassky match in Rekjavik, the Russians linked Spassky’s erratic play with Fischer’s chair. The Icelandic organization put a 24-hour Police guard around the chair while chemical and x-ray tests were performed on the chair. Nothing unusual was found.",
            "The first mechanical Chess Clock was invented by Thomas Wilson in 1883. Prior to that, Sandglasses were used. Sandglasses were first used in London in 1862. The present day push-button Clock was first perfected by Veenhoff in 1900.",
            "The folding Chess board was originally invented in 1125 by a Chess-playing priest. Since the Church forbids priests to play Chess, he hid his Chess board by making one that looked simply like two books lying together.",
            "The worst performance by a player was Macleod of Canada who lost 31 games in the New York double-round robin of 1889.",
            "Frank Marshall (1877-1944) was the first American to defeat a Soviet player in an international tournament in New York, 1924. He reigned as U.S. Champion for 30 years, but only defended his title once when he defeated Ed Lasker (5-4) in 1923. He was the first master to play more than 100 games simultaneously.",
            "In 1985, Eric Knoppert played 500 games of 10-minute Chess in 68 hours.",
            "Albert Einstein was a good friend of World Chess Champion Emanuel Lasker. In an interview with the New York Times in 1936 Albert said, “I do not play any games. There is no time for it. When I get through work I don’t want anything which requires the working of the mind.” He did take up Chess in his later life.",
            "There were 72 consecutive Queen moves in the Mason-Mackenzie game at London in 1882.",
            "The record of moves without capture is of 100 moves during the Match between Thorton and M. Walker in 1992.",
            "Rookies or, players in their first year, are named after the Rook in Chess. Rooks generally are the last pieces to be moved into action, and the same goes for Rookies.",
            "A Computer Program named Deep Thoughtbeat an International Grand Master for the first time in November 1988 in Long Beach, California.",
            "Blindfold chess is an impressive skill that many stronger chess players possess. It certainly requires a keen ability to see the board clearly, which can get difficult after many moves. The record was set in 1960 in Budapest by Hungarian Janos Flesch, who played 52 opponents simultaneously while blindfolded – he won 31 of those games",
            "There are well over 1,000 different openings, including variations within larger openings/defenses that one can learn.",
            "Chess is often cited by psychologists as an effective way to improve memory function.",
            "The second book ever printed in the English language was about chess!",
            "The first computer program for playing chess was developed in 1951, by Alan Turing. However, no computer was powerful enough to process it, so Turing tested it by doing the calculations himself and playing according to the results, taking several minutes per move.",
            "The oldest recorded chess game in history is from the 900s, between a historian from Baghdad and his student.",
            "The oldest surviving complete chess sets were found on the Isle of Lewis, in northern Scotland, and dates to the 12th century. They were probably made in Iceland or Norway, and their appearance was used in Harry Potter and the Sorcerer’s Stone for the wizard chess pieces.",
            "About 600,000,000 (Six hundred million) people know how to play chess worldwide!",
            "In many languages, the Pawn is a foot soldier, but in German and Spanish, it’s a peasant or farmer, instead!",
            "The reason why traditional chess pieces don’t look like actual soldiers, bishops, and kings is because before the game reached Europe, it passed through the Islamic world. Islam forbids making statues of animals or people, so chess pieces became vague-looking. When the game spread to Christian Europe, the pieces didn’t change much.",
            "Chess began in India during the Gupta Empire, spreading to the Persian Sassanid Empire, and then to the Middle East after Muslims conquered Persia. From there, it spread to Europe and Russia.",
            "Initially, the Queen could only move one square at a time, diagonally. Later, she could move two squares at a time, diagonally. It wasn’t until Reconquista Spain, with its powerful queen Isabella, that the Queen became the strongest piece on the board.",
            "In Shatranj, the predecessor to chess, the Queen was a minister or vizier, and still is in many languages.",
            "In the match between Britton and Crouch in 1984, the Black player did check his opponent forty three consecutive times!",
            "The first Computer program that played proper Chess was written at MIT by Alex Bernstein in 1959. The first Chess tournament in which the only players were Computer programs was held in New York in 1970.",
            "The first child prodigy of Chess was Paul Morphy. He learned the moves at the age of 8 and beat the strongest players in New Orleans at 11.",
            "Russia has the most grandmasters of any other country, totaling 156 GMs. Germany is second with 61 and the United States trails with 60.",
            "Between October 23, 1973, when he lost a game in a Soviet championship, and October 16, 1974, when he lost to Kirov at the Novi Sad tournament, Mikhail Tal had a string of 95 tournament games without a loss (46 wins and 49 draws).",
            "The longest time recorded for a Chess player to make a move, goes to the International Grand Master Trois from Brazil with 2 hours and 20 minutes on the 7th move.",
            "The first Chess game between space and earth was played on June 9, 1970 by the Soyez-9 crew. The game ended in a draw.",
            "The Police raided a Chess Tournament in Cleveland in 1973, arrested the Tournament director and confiscated the Chess sets on charges of allowing gambling (cash prizes to winners) and possession of gambling devices (the Chess sets)."
        };


        public static List<string> getRandomeFact(int facts)
        {
            Random r = new Random();
            List<string> factsList = new List<string>();
            List<int> numbers = new List<int>();
            int n;
            for (; facts > 0; facts--)
            {
                do
                {
                    n = r.Next(0, chessFacts.Count);
                } while (numbers.Contains(n));

                numbers.Add(n);
                factsList.Add(chessFacts[n]);
            }
            return factsList;
        }
    }
}