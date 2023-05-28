<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="forgotPassword.aspx.cs" Inherits="LaChess_maser_page.Pages.login.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <h1>Frogot your Password</h1>
                                            <label id="userName">user name </label>
                                        <br>
                                        <input type="text" name="name" id="name" class="textIn" />

                                <input type="submit" class="submitButton" value="Get PassWord" onclick="return true" />

       <p id="t" name="t">
           Your password will aper here:
       </p>


    <style>
        #t{
        }

        h1{
            color: wheat;
            font-size: 60px;
        }

        #userName{
            color:wheat;
            font-size: 30px;
        }

        .textIn {
            width: 290px;
            height: 30px;
            font-size: 25px;
        }

        .submitButton {
            width: 326.2px;
            height: 50px;
            margin-top: 40px;
            margin-left: -1.5px;
            position: static;
            color: rgb(37, 0, 0);
            background-color: white;
            border-radius: 5px;
            font-size: 30px;
            font-family: 'Oswald';
            font-weight: 700;
            border-width: 1.55px;
            border-color: black;
            border-style: solid;
            transition: background-color 1s, color 1s;
            display:block;
        }
    </style>


</asp:Content>
