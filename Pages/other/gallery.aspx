<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="gallery.aspx.cs" Inherits="LaChess_maser_page.Pages.other.gallery" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">


    <style>
        #galleryAll{
            text-align: center;
        }
    </style>
    <div id="galleryAll">
        <input type="button" value="start" onclick="Timer()" />
        <input type="button" value="stop" onclick="Stop()" />
        <br />
        <br />
        <br />
        <br />
   
        <img name="pic" src="../../Media/players/bobby_fischer.jpg" width="60%" alt="pic" onload="Timer()" />
    </div>
    <script>
        var index = 1;
        var a;
        var pics = [
            "../../Media/players/bobby_fischer.jpg",
            "../../Media/players/Ding.jpg",
            "../../Media/players/Hikaru.jpg",
            "../../Media/players/Kaskarove.jpg",
            "../../Media/players/Lorem_Ispom.jpg",
            "../../Media/players/Magnos.jpg",
            "../../Media/Logos/LaChessLogo.png"
        ]

        function Timer() {
            a = setTimeout(Show, 3000);
        }
        function Stop() {
            clearTimeout(a);
        }
        function Show() {
            if (index == pics.length - 1)
                index = 0;
            index++;
            pic.src = pics[index]
            console.log(index);
        }

    </script>
</asp:Content>
