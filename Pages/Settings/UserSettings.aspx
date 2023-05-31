<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="UserSettings.aspx.cs" Inherits="LaChess_maser_page.Pages.Settings.UserSettings" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="UserSettings.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">

                <h2>update page</h2>
                <input type="reset" value="delete" />
                <input type="submit" value="send" onclick="return checkRegister()"   />
                <asp:Button ID="btn_delete" runat="server" Text="delete user" OnClick="btn_delete_Click" />
                &nbsp;<div id="nameDiv"></div>
                <label>name:</label>
                <br />
                
    <input type="text" name="name" id="name" oninput="checkName()" />
                <br />
                <div id="password1Div"></div>
    
    <label>password:</label>
                <br />
                <input type="password" name="password1" id="password1" oninput="checkPassword1()" />
                <div id="password2Div"></div>
    
    <label>confirm password:</label>
                <br />
                <input type="password" name="password2" id="password2" oninput="checkPassword2()" />
                
    <div id="mailDiv"></div>
    <label>mail:</label>
                <br />
                <input type="text" name="mail" id="mail" oninput="checkMail()" />
                <br />
                <div id="radioDiv"></div>
    
    <p>Choose your Role:</p>
                <br />
                <input type="radio" name="Role" value="GM" id="GM">
                <label>GM</label><br>
                <input type="radio" name="Role" value="Player" id="PLayer">
                <label>Player</label><br>
                <input type="radio" name="Role" value="Both" id="Both">
                <label>Both</label>
                <div id="checkBoxDiv"></div>
                
    <p>choose version/s (one or more) :</p>
                <input type="checkbox" name="version1" value="version1"id="version1">
                <label>version1</label><br>
                <input type="checkbox" name="version2" value="version2"id="version2">
                <label>version2</label><br>
                <input type="checkbox" name="version3" value="version3"id="version3">
                <label>version3</label><br>
                <input type="checkbox" name="version4" value="version4"id="version4">
                <label>version4</label><br>
                <input type="checkbox" name="version5" value="version5"id="version5">
                <label>version5</label><br>
                
    <div id="birthdayDiv"></div>
    <label>Birthday:</label>
                <input type="date" name="birthday" id="birthday">
</asp:Content>
