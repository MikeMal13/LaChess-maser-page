<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Settings.aspx.cs" Inherits="LaChess_maser_page.Pages.Settings" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    
    <h2 id="title">Settings</h2>

     <script type="text/javascript">
         function DoPost() {
             return true
         }
     </script>

    <asp:Button ID="btninsert" runat="server" ValidationGroup="form" CssClass="btn" OnClientClick="return DoPost();" OnClick="btninsert_Click" Text="change name" />
    <style>
        #title{

        }
    </style>

</asp:Content>
