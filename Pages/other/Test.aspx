<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Test.aspx.cs" Inherits="LaChess_maser_page.Pages.other.Test" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <h2 id="testTitle">test page</h2>
    <hr />

    <div id="questens">
                <p>Black eggs called caviar come from which fish?</p>
                <br />
                <input type="radio" name="q1" value="Salmon" id="Salmon">
                <label>Salmon</label><br>
                <input type="radio" name="q1" value="Sturgeon" id="Sturgeon">
                <label>Sturgeon</label><br>
                <input type="radio" name="q1" value="Pike" id="Pike">
                <label>Pike</label><br>

                <label>What is Australia's tallest bird?</label>
                <select name="q2" id="q2">
                    <option value="">----</option>
                    <option value="Kiwi">Kiwi</option>
                    <option value="Cassowary">Cassowary</option>
                    <option value="Emu">Emu</option>
                    <option value="Ostrich">Ostrich</option>
                </select>
        </div>
    <br />
    <div id="finalScore" runat="server"></div>
    <br />

    <input type="submit" value="send"/>
    <input type="reset" value="delete" />

    <style>
        #testTitle{
            color: wheat;
        }

        #questens{
            color: wheat;
        }
    </style>
</asp:Content>

