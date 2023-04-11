<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="LaChess_maser_page.Pages.login.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="login.css" rel="stylesheet" />
    <script src="loging.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
                            <div id="everyThing">
                            <h2 id="registerTitle" style="margin-left: 11.5px;">Login</h2>
                            <br>

                            <div id="allInputDivs">
                                <div id="userDiv" class="marks">
                                    <div class="namePass">
                                        <label class="description">user name </label>
                                        <br>
                                        <input type="text" name="name" id="name" class="textIn" oninput="errorSet1()" />
                                    </div>


                                    <div class="namePass">
                                        <label class="description">password</label>
                                        <br>
                                        <input type="password" name="password1" id="password1" class="textIn" oninput="errorSet1()" />
                                    </div>

                                    <div id="errorLog1" class="errorLogs"></div>


                                </div>

                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>


                                <!-- <input type="button" class="submitButton" value="Register" onclick="submit()" /> -->
                                <input type="submit" class="submitButton" value="Register" onclick="return register()" />
                                <a href="forgotPassword.aspx">forgat your password?</a>


                            </div>
                               </div>
</asp:Content>
