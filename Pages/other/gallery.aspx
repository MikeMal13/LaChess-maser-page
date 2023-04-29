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
   
        <img name="pic" src="../../Media/phphW0e0t.jpeg" width="60%" alt="pic" onload="Timer()" />
    </div>

    <script>
        var index = 1;
        var a;
        var pics = [
            "../../Media/-1x-1.jpg",
            "../../Media/6e55c3d9f2f6ca1d4383687850784dc8.jpg",
            "../../Media/bobby-fischer-gettyimages-495892222.jpg",
            "../../Media/DALL·E%202023-03-29%2011.34.11%20-%20a%20fortune-telling%20chess%20pawn%20reading%20your%20fate%20in%20the%20giant%20crop%20of%20the%20black%20king,%20digital%20art.png",
            "../../Media/GettyImages-52841903.0.jpg",
            "../../Media/NATI_a_left_angeled_phtot_of_Lorem_Ipsum_playing_romeninan_ches_d27ba365-6e30-45a3-880d-dd902029fec0.png",
            "../../Media/phphW0e0t.jpeg"
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
