<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="LaChess_maser_page.WebForm2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div id="mainPage">

      <p class="localTitle" style="font-size: 75px; margin-bottom:-3px;">Welcome to LaChess</p>

        <p id="mainPageText">
            We are corently working on online matching, ai duplicts of your play style and level how made by analizing past games, and better website. </br>
        </p>
        <p id="secendText">until then you can enjoy the artivals I stool from wikipedia or play on the chess board i made (i even madr the board background, it looks realy cooly and i fucjikng love it)</p>

        <img class="logo" src="../../Media/Logos/LaChessLogoNoBackground.png" />
   
        </div>
    <style>

        #logo{
            width: 300px;
        }

        #mainPage{
            width: 100%;
        }

        #mainPageText{
            margin-left: 7px;
            font-size: 25px;
            width: 450px;
        }

        #secendText{
            margin-left: 7px;
            font-size: 18px;
            width: 450px;
        }

        #welcome{
            font-size:640%;
        }
    </style>
</asp:Content>
