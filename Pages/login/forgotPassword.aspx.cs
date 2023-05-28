using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LaChess_maser_page.Pages.login
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];

                SqlConnection con = new SqlConnection();
                con.ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\micha\Desktop\LaChess maser page-20230315T181831Z-001\LaChess maser page\App_Data\Users.mdf"";Integrated Security=True";
                con.Open();

                //שאילתה ששולפת את המזהה של המשתמש ושומרת אותו בסשן
                SqlCommand cmd2 = new SqlCommand();
                cmd2.Connection = con;
                cmd2.CommandType = CommandType.Text;
                cmd2.CommandText = "SELECT password from Users WHERE name='" + name + "'";
                object obj = cmd2.ExecuteScalar();
                con.Close();

                if (obj != null)
                {
                    Session["name"] = name;
                    Response.Write(obj);
                }

            }
        }
    }
}