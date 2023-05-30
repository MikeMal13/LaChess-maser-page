<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Test.aspx.cs" Inherits="LaChess_maser_page.Pages.other.Test" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
<table border="1" width="80%" style="background-color:none;">
        <tr>
            <td class="questen-box">
                <p class="questen">DND's most schosen race?</p>
                <input type="radio" name="q1" value="Human" id="Human">
                <label>Human</label><br>
                <input type="radio" name="q1" value="Elf" id="Elf">
                <label>Elf</label><br>
                <input type="radio" name="q1" value="Dragonborn" id="Dragonborn">
                <label>Dragonborn</label><br>
            </td>
        </tr>
        
        <tr>
            <td class="questen-box">
                <p class="questen">DND's highest cr ranked creature?</p>
                <input type="radio" name="q2" value="kraken" id="kraken">
                <label>kraken</label><br>
                <input type="radio" name="q2" value="Tyamat" id="Tyamat">
                <label>Tyamat</label><br>
                <input type="radio" name="q2" value="Baba Yaga" id="Baba Yaga">
                <label>Baba Yaga</label><br>
            </td>
        </tr>
        <tr>
            <td class="questen-box">
                <p class="questen">Who is the DM in the most popular DND series Critical Role?</p>
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
                <p class="questen">What is the name of the animated series of based on Critical Role?</p>
                <input type="radio" name="q4" value="Arcane" id="Arcane">
                <label>Arcane</label><br>
                <input type="radio" name="q4" value="Gravity Falls" id="Gravity Falls">
                <label>Gravity Falls</label><br>
                <input type="radio" name="q4" value="Vox Machina" id="Vox Machina">
                <label>Vox Machina</label><br>
            </td>
        </tr>
        <tr>
            <td class="questen-box">
                <p class="questen">Complete the name of the Movie DND Honor amoung ________?</p>
                <input type="radio" name="q5" value="Thieves" id="Thieves">
                <label>Thieves</label><br>
                <input type="radio" name="q5" value="Merceners" id="Merceners">
                <label>Merceners</label><br>
                <input type="radio" name="q5" value="Dungeoneers" id="Dungeoneers">
                <label>Dungeoneers</label><br>
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
            background-color:rgb(206 146 54 / 0.4);
            padding: 15px;
        }
        #finalScore{
            width:60px;
            height: 30px;
            background-color: antiquewhite;
        }
    </style>

</asp:Content>

