<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Test.aspx.cs" Inherits="LaChess_maser_page.Pages.other.Test" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">


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
        var mainBoard = new Board("mainBoard", "freePlay")
        creatHTMLboardForBoard("mainBoard")
        PrintBoard(mainBoard, true)


        let pos = "nnnnwrnnnnnnnnnnwpnnnnnnnnwpwknnnnnnnnnnnnnnwpnnnnbrnnnnbpnnnnwpnnbkwpbpnnbpnnbpnnnnbpnnnnnnnnnnwrnnnnnnnnnnnnnnnnbrnnnnnnnnnnnnffff"
        var enser = ""

        mainBoard.ImportFromString(pos)
        PrintBoard(mainBoard, true)


        function onMove() {

        }

    </script>
    
    <div id="test">
        <div class="questen">
            <p class="questenText">asdasd</p>
            <input class="enser" />
        </div>


    </div>

    <style>
        #test{
            color: white;
        }
    </style>
</asp:Content>
