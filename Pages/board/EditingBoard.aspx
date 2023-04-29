<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="PlayBoard.aspx.cs" Inherits="LaChess_maser_page.chessBoard.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    
    <p class="localTitle" style="margin-bottom:0px;">Play for your fun</p>
    <p class="localTitle" style="font-size:30px; margin-top:0px;">or dont I wont get mad</p>

    <script src="../../chessBoard/PinsAndChecks.js"></script>
    <script src="../../chessBoard/brain.js"></script>
    <script src="../../chessBoard/brainFunctions.js"></script>
    <script src="../../chessBoard/creatBoard.js"></script>
    <script src="../../chessBoard/printBoard.js"></script>
    <script src="../../chessBoard/getMove.js"></script>
    <script src="../../chessBoard/piceMovement.js"></script>
    <script src="../../chessBoard/else.js"></script>
    <script src="../../chessBoard/main.js"></script>


     <div id='mainBoard' class='boards'>
        <!-- Would become the board-->

    </div>


    <script>
        var lastCords;
        var mainBoard = new Board("mainBoard", "edit")
        creatHTMLboardForBoard("mainBoard")
        PrintBoard(mainBoard, true)

    </script>
    <br>
    <br>
    <br>
    <button type="button" id="ExportToText" onclick="document.getElementById('input-output').value=mainBoard.exportAsString()">Export to txt</button>
    <button type="button" id="ImportFromText" onclick="mainBoard.ImportFromString(document.getElementById('input-output').value)">Import Board</button>
    <br>
    <textarea type="text" id="input-output" cols="40" rows="12" value="dsfdf"></textarea>


    <style>
        #ExportToText {
            height: 30px;
            background-color: rgb(255, 218, 206);
            margin-bottom: 12px;
            border: none;
        }
        
        #ImportFromText {
            height: 30px;
            background-color: green;
            margin-bottom: 12px;
            border: none;
        }
        
        #input-output {
            position: static;
            background-color: white;
        }
    </style>


</asp:Content>