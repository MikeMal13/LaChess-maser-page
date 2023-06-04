<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="AdminPage.aspx.cs" Inherits="LaChess_maser_page.Pages.Settings.adminPage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div id="adminDiv" runat="server"> 

</div>
<%if (laChess.Class1.isAdmin(long.Parse(Session["Id"].ToString())))
    { %>


         <input type="submit" name="btn" value="add" />
    <br />
    <input type="submit" name="btn" value="delete" onclick="window.loction.reload()" />
    <input type="submit" name="btn" value="update" />
    <br />
    <h3>ID:</h3>
<br />
    <input type="text" name="id" />
    <br />

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
               
    <p>Replace your gender ❤️:</p>
                <br />
                <input type="radio" name="gender" value="male (trans)" id="male (trans)">
                <label>male</label><br>
                <input type="radio" name="gender" value="female (trans)" id="female (trans)">
                <label>female</label><br>
                <input type="radio" name="gender" value="Both" id="Both">
                <label>Both</label>
    
    <div id="checkBoxDiv"></div>
    <p>choose favorit time controll:</p>
                <input type="checkbox" name="time1" value="version1"id="version1">
                <label>bullet  (0.5 - 1.5)</label><br>
                <input type="checkbox" name="time2" value="version2"id="version2">
                <label>blitz   (2 - 5)</label><br>
                <input type="checkbox" name="time3" value="version3"id="version3">
                <label>casual  (10 - 20)</label><br>
                <input type="checkbox" name="time4" value="version4"id="version4">
                <label>long (30 - 90)</label><br>
                <input type="checkbox" name="time5" value="version5"id="version5">
                <label>day (24 hours - 4 weeks)</label><br>
                
    <div id="birthdayDiv"></div>
    <br />
    <label>Birthday: </label>
                <input type="date" name="birthday" id="birthday">
    <br />
    <label>Living area: </label>
                                <select name="livingArea" id="carFromSelect">
                                   <option value="">------</option>
                                    <option value="center">center</option>
                                    <option value="south">south</option>
                                    <option value="west">west</option>
                                    <option value="east">east</option>
                                </select>

    <style>
        label {
        color:rgb(255 190 109);
        }
    </style>
    <%}
        else
        { %>
    only admin
    <%}
        %>
</asp:Content>
