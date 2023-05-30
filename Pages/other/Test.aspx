<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Test.aspx.cs" Inherits="LaChess_maser_page.Pages.other.Test" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
<table border="1" width="80%" style="background-color:none;">
        <tr>
            <td class="questen-box">
                <img class="puzzle-img" src="../../Media/puzzles/puzzel-600.png" />
                <input type="text" name="q1" class="questen-input"/>

            </td>
        </tr>
        
        <tr>
            <td class="questen-box">
                <img class="puzzle-img" src="../../Media/puzzles/puzzle-300.Rxe8+.png" />
                <input type="text" name="q2" class="questen-input"/>

            </td>
        </tr>
        <tr>
            <td class="questen-box">
                <img src="../../Media/puzzles/puzzle+0.Be5.png" />
                <input type="radio" name="q3" value="Matt Mercer" id="Matt Mercer">
                <label>Matt Mercer</label><br>
                <input type="radio" name="q3" value="Jotaro Jostar" id="Jotaro Joestar">
                <label>Jotaro Jostar</label><br>
                <input type="radio" name="q3" value="Jesse Mccree" id="Jesse Mccree">
                <label>Jesse Mccree</label><br>
            </td>
        </tr>
        <tr>
            <td class="questen-box">
                <img class="puzzle-img" src="../../Media/puzzles/puzzle+0.Kh2.png" />
                <input type="text" name="q4" class="questen-input"/>

            </td>
        </tr>
        <tr>
            <td class="questen-box">
                <img src="../../Media/puzzles/puzzle+300..png" />
                <input type="text" name="q5" class="questen-input"/>
            </td>
        </tr>
            <tr>
            <td class="questen-box">
                <img src="../../Media/puzzles/puzzle+600.Qxf6.png" />
                <img class="puzzle-img" src="../../Media/puzzles/puzzle+600.Qxf6.png" />
                <input type="text" name="q6" class="questen-input"/>
            </td>
        </tr>
    </table>
    <br />
    <div id="finalScore" runat="server"></div>
    <br />

    <input type="submit" value="send"/>
    <input type="reset" value="delete" />
    <style>

        .questen{
            color: rgb(82 51 4)
        }
        
        .questen-box{
            height:700px;
            background-color:rgb(206 146 54 / 0.4);
            padding: 0;
        }

        .puzzle-img{

        }

        .questen-input{

        }

        #finalScore{
            width:60px;
            height: 30px;
            background-color: antiquewhite;
        }
    </style>

</asp:Content>

