<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Ding Liren.aspx.cs" Inherits="LaChess_maser_page.WebForm3" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <link href="playersCss.css" rel="stylesheet" />
    <script src="../../Players.js"></script>

    <script>
        generatePage(4);
    </script>

</asp:Content>