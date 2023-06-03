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
        public static ulong HashCredentials(string username, string password)
        {
            string combinedString = username + password;
            byte[] inputBytes = Encoding.UTF8.GetBytes(combinedString);

            using (SHA256Managed sha256 = new SHA256Managed())
            {
                byte[] hashBytes = sha256.ComputeHash(inputBytes);

                // Take the first 8 bytes of the hash and convert to ulong (64-bit integer)
                ulong hashedValue = BitConverter.ToUInt64(hashBytes, 0);

                return hashedValue;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];
                String pwd = Request.Form["password1"];

                ulong hasedPassword = HashCredentials(pwd, name);

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