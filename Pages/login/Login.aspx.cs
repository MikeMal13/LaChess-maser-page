using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using laChess;

namespace LaChess_maser_page.Pages.login
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];
                String pwd = Request.Form["password1"];

                SqlConnection con = new SqlConnection();
                con.ConnectionString = Class1.connecionString; 
                con.Open();

                //שאילתה ששולפת את המזהה של המשתמש ושומרת אותו בסשן
                SqlCommand cmd2 = new SqlCommand();
                cmd2.Connection = con;
                cmd2.CommandType = CommandType.Text;
                cmd2.CommandText = "SELECT id from Users WHERE name='" + name + "'AND password='" + pwd + "'";
                object obj = cmd2.ExecuteScalar();
                con.Close();

                if (obj != null)
                {
                    Session["name"] = name;
                    Session["id"] = obj;
                    Response.Redirect("../Home/Home.aspx");
                }

            }
        }
    }
}