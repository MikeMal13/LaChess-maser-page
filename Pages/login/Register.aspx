 <%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="LaChess_maser_page.Pages.WebForm1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="Register.js"></script>
    <link href="style.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">


    

    
                        <div id="everyThing">
                            <h2 id="registerTitle" style="margin-left: 11.5px;">register page</h2>

                            <div id="allInputDivs">
                                <div id="userDiv" class="marks">
                                    <div class="namePass">
                                        <label class="description">user_name </label>
                                        <br>
                                        <input type="text" name="name" id="name" class="textIn" oninput="errorSet1()" />
                                    </div>


                                    <div class="namePass">
                                        <label class="description">password</label>
                                        <br>
                                        <input type="password" name="password1" id="password1" class="textIn" oninput="errorSet1()" />
                                    </div>


                                    <div class="namePass">
                                        <label class="description">confirm password</label>
                                        <br>
                                        <input type="password" name="password2" id="password2" class="textIn" oninput="errorSet1()" />
                                    </div>

                                </div>

                                <div id="div2" class="marks">
                                    <label class="description">email</label>
                                    <br />
                                    <input type="text" name="mail" id="mail" class="textIn" oninput="errorSet2()" />
                                    <div id="mailDiv" class="textInDiv"></div>

                                    <div style="height:5px;"></div>

                                    <label style="margin-bottom:0px;"> select your gender</label>

                                    <div id="genderDiv">
                                        <input type="radio" name="gender" id="male" value="male">
                                        <label>male</label><br>
                                        <input type="radio" name="gender" id="female" value="female">
                                        <label>female</label><br>
                                        <input type="radio" name="gender" id="other" value="other">
                                        <label>other</label><br>
                                    </div>

                                </div>


                                <div id="div3" class="marks">
                                    <label class="description">choose youre favorit time settings:</label>

                                    <input type="checkbox" name="time1" id="bullet" value="bullet">
                                    <label>bullet  (0.5 - 1.5)</label><br>
                                    <input type="checkbox" name="time2" id="blitz" value="blitz">
                                    <label>blitz   (2 - 5)</label><br>
                                    <input type="checkbox" name="time3" id="casual" value="casual">
                                    <label>casual  (10 - 20)</label><br>
                                    <input type="checkbox" name="time4" id="long" value="long">
                                    <label>long (30 - 90)</label><br>
                                    <input type="checkbox" name="time5" id="day" value="day">
                                    <label>day (24 hours - 4 weeks)</label><br>
                                </div>
                            </div>

                                <div id="div4">
                                    <label>Birthday:</label>
                                    <br />

                                        <input type="date" name="birthday" id="birthday">

                                    <br />

                            <label>Choose living area:</label>
                                    <br />

                                <select name="livingArea" id="carFromSelect">
                                   <option value="">------</option>
                                    <option value="center">center</option>
                                    <option value="south">south</option>
                                    <option value="west">west</option>
                                    <option value="east">east</option>
                                </select>
                                </div>

                            

                            <div id="errorLog">
                                <div id="errorLog1" class="errorLogs"></div>
                                <div id="errorLog2" class="errorLogs"></div>
                                <div id="errorLog3" class="errorLogs"></div>
                                <div id="ServerError" name="ServerError" class="errorLogs" runat="server"></div>
                            </div>

                            <!-- <input type="button" class="submitButton" value="Register" onclick="submit()" /> -->
                            <input type="submit" class="submitButton" value="Register" onclick="return register()" />
                        </div>

</asp:Content>
