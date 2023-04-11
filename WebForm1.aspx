<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="LaChess_maser_page.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LaChess</title>
    <link href="StyleSheet1.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div>



            <table id="table" border="0">
                
                <tr>
                    <td colspan="2" id="Title">
                        <h1>LaChess</h1>
  
                    </td>
                </tr>
                <tr>
                    <td id="sideBar1">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>playble board</a></li>
                            <li><a>Bodbby Fischer</a></li>
                            <li><a>Gary Kaskarov</a></li>
                            <li><a>Hikaru Nakamura</a></li>
                            <li><a>Magnus Carelson</a></li>
                            <li><a>Ding Liren</a></li>
                        </ul>
                    </td>

                    <td rowspan="2" id="main">

                          <h2> This is LaChesss </h2>
                          <p>Its pertti boring rith now, but we have randome chess facts <br>
                           you can olao play with the board</p>

                            <script src="../chessBoard/PinsAndChecks.js"></script>
                            <script src="../chessBoard/brain.js"></script>
                            <script src="../chessBoard/brainFunctions.js"></script>
                            <script src="../chessBoard/creatBoard.js"></script>
                            <script src="../chessBoard/printBoard.js"></script>
                            <script src="../chessBoard/getMove.js"></script>
                            <script src="../chessBoard/piceMovement.js"></script>
                            <script src="../chessBoard/else.js"></script>
                            <script src="../chessBoard/main.js"></script>

                    </td>
                </tr>
                    <td id="sideBar2">
                        <ul>
                          <%
                            List<string> facts = laChess.Class1.getRandomeFact(3);
                            foreach(string fact in facts)
                            {
                                Response.Write("<li><p>" + fact + "</p></li>");
                            }
                        %>
                            </ul>
                    </td>
                <tr>
                    <td id="bottomText" colspan="2">
                        <h3>
                            If your photo is used here and you dont like it, countact mic.mal.100@gmail.com

                        </h3>
                        <p>
                            The chess board was codded and the board background was "drawn" by me, The Pices imeges were taken from the chess.com. <br />
                            The fact were randomli tacken from the enternet.
                        </p>

                    </td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
