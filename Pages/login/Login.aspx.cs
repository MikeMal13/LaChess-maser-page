using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using laChess;
using System.Security.Cryptography;
using System.Text;

namespace LaChess_maser_page.Pages.login
{
    public partial class Login : System.Web.UI.Page
    {
        public static string Hash_OneWay_256(string text, string salt = "")
        {
            // Uses SHA256 to create the hash
            using (var sha = new SHA256Managed())
            {
                // Convert the string to a byte array first, to be processed
                byte[] textBytes = Encoding.UTF8.GetBytes(text + salt);
                byte[] hashBytes = sha.ComputeHash(textBytes);

                //cant return bytes (not supporten in SQL)
                //return in string in base 64
                return Convert.ToBase64String(hashBytes);
            }
        }


        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];
                String pwd = Request.Form["password1"];

                String hasedPassword = Hash_OneWay_256(pwd, name);

                SqlConnection con = new SqlConnection();
                con.ConnectionString = Class1.connecionString; 
                con.Open();


                //שאילתה ששולפת את המזהה של המשתמש ושומרת אותו בסשן
                SqlCommand cmd2 = new SqlCommand();
                cmd2.Connection = con;
                cmd2.CommandType = CommandType.Text;
                cmd2.CommandText = "SELECT id from Users WHERE name='" + name + "'AND password='" + hasedPassword + "'";
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