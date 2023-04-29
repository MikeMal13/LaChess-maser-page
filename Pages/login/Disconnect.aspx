<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Disconnect.aspx.cs" Inherits="LaChess_maser_page.Pages.login.Disconnect" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">

    <h1 id="disconnectText">Are tou sure you want to delet user?</h1>

    <button id="disconnect">delete user</button>

    <style>
        #disconnectText{
            color: wheat;
        }

        #disconnect{
            background-color: red;
        }
    </style>
</asp:Content>
