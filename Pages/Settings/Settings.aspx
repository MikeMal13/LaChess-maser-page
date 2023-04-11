<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Settings.aspx.cs" Inherits="LaChess_maser_page.Pages.Settings" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">ipt>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">

        <script>
            function setFeeling(feeling) {
                console.log(feeling);
                if (feeling == 'c') { d<%laChess.Class1.feeling = 'c';%>}
                if (feeling == 'd') {  <%laChess.Class1.feeling = 'd';%> }
                if (feeling == 'n') {  <%laChess.Class1.feeling = 'n';%> }
            }
        </script>

    <p class="localTitle">Choose your Feeling</p>

      <input type="radio" id="light" name="Feeling" value="light" onchange="setFeeling('c')">
      <label for="light">light</label><br>

      <input type="radio" id="dark" name="Feeling" value="dark" onchange="setFeeling('d')">
      <label for="dark">dark</label><br>

      <input type="radio" id="normal" name="Feeling" value="normal" onchange="setFeeling('n')">
      <label for="normal">normal</label>

    <p style="margin-left:7px;">Move a page to see the effect.</p>
    
    
</asp:Content>
