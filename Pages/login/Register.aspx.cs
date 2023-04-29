using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LaChess_maser_page.Pages
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];
                String pass = Request.Form["password1"];
                String confirmPass = Request.Form["password2"];
                String mail = Request.Form["mail"];
                String gender = Request.Form["gender"];
                String time1 = Request.Form["time1"];
                String time2 = Request.Form["time2"];
                String time3 = Request.Form["time3"];
                String time4 = Request.Form["time4"];
                String time5 = Request.Form["time5"]; 
                String birthday = Request.Form["birthday"];
                String livingArea = Request.Form["livingArea"];


                string fileLocetion = @"C:\Users\micha\Desktop\dbo.Table.sql";


                SqlConnection con = new SqlConnection();
                con.ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\micha\Desktop\LaChess maser page-20230315T181831Z-001\LaChess maser page\App_Data\Users.mdf"";Integrated Security=True";    
                con.Open();
                Random r = new Random();


                string s = "insert into Users(Id,name,password,mail,gender,time1,time2,time3,time4,time5,birthday,livingArea)" +
                               "values('" + r.Next(0, int.MaxValue) + "','" + name + "','" + pass + "','" + 
                               mail + "','" + gender + "','" + time1 + "','" + 
                               time2 + "','" + time3 + "','" + time4 + "','" + 
                               time5 + "','" + birthday + "','" + livingArea + 
                               "')";   

                SqlDataAdapter da = new SqlDataAdapter(s, con);
                DataSet ds = new DataSet();
                da.Fill(ds);

                //שאילתה ששולפת את המזהה של המשתמש ושומרת אותו בסשן
                SqlCommand cmd2 = new SqlCommand();
                cmd2.Connection = con;
                cmd2.CommandType = CommandType.Text;
                cmd2.CommandText = "SELECT id from users WHERE name='" + name + "'AND password='" + pass + "'";
                object obj = cmd2.ExecuteScalar();
                con.Close();

                if (obj != null)
                {
                    Session["name"] = name;
                    Response.Redirect("../Home/Home.aspx");
                }

            }
        }
    }
}