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

namespace LaChess_maser_page.Pages
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        public static long LongRandom(long min, long max, Random rand)
        {
            long result = rand.Next((Int32)(min >> 32), (Int32)(max >> 32));
            result = (result << 32);
            result = result | (long)rand.Next((Int32)min, (Int32)max);
            return result;
        }


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

                ulong hasedPass = HashCredentials(pass, name);


                SqlConnection con = new SqlConnection();
                con.ConnectionString = Class1.connecionString;
                con.Open();

                Random rnd = new Random();

                { //delet all valuse after run

                    //check if name alredi exist in database
                    //cmd3.ExecuteScalar() will return null if name doesnt exist
                    SqlCommand cmd3 = new SqlCommand();
                    cmd3.Connection = con;
                    cmd3.CommandType = CommandType.Text;
                    cmd3.CommandText = "SELECT id from users WHERE name='" + name + "'";

                    //if name exist dont enter user into database
                    if (cmd3.ExecuteScalar() != null)
                    {
                        ServerError.InnerHtml = "Name Already taken";
                        return;
                    }
                }

                ulong id;
                { //delet all valuse after run
                    //get a Id that is not in use
                    SqlCommand cmd3;
                    do
                    {
                        id = (ulong) LongRandom(long.MinValue, long.MaxValue, rnd);
                        cmd3 = new SqlCommand();
                        cmd3.Connection = con;
                        cmd3.CommandType = CommandType.Text;
                        cmd3.CommandText = "SELECT name from users WHERE Id='" + id + "'";

                    } while (cmd3.ExecuteScalar() != null);
                }


                string s = "insert into Users(Id, name,password,mail,gender,time1,time2,time3,time4,time5,birthday,livingArea)" +
                               "values('" + id + "','" + name + "','" + hasedPass + "','" + 
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
                    Session["id"] = obj;
                    Session["name"] = name;
                    Response.Redirect("../Home/Home.aspx");
                }

            }
        }
    }
}