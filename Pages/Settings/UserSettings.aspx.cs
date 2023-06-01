using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;


namespace LaChess_maser_page.Pages.Settings
{
    public partial class UserSettings : System.Web.UI.Page
    {
        public static string addIfNotNull(string dataRow, string data)
        {
            if (data != null && !string.IsNullOrWhiteSpace(data))
            {
                return "," + dataRow + "='" + data + "'";
            }
            return " ";
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];
                String password1 = Request.Form["password1"];
                String mail = Request.Form["mail"];
                String time1 = Request.Form["time1"];
                String time2 = Request.Form["time2"];
                String time3 = Request.Form["time3"];
                String time4 = Request.Form["time4"];
                String time5 = Request.Form["time5"];
                String gender = Request.Form["gender"];
                String livingArea = Request.Form["livingArea"];
                String birthday = Request.Form["birthday"]; 
                Object id = Session["id"];

                if (Session["id"] != null)
                {
                    SqlConnection con = new SqlConnection(laChess.Class1.connecionString);
                    con.Open();
                    string s = "update Users set " + addIfNotNull("name", name) +
                       addIfNotNull("password", password1) + addIfNotNull("mail", mail) +
                       addIfNotNull("time1", time1) + addIfNotNull("time2", time2) +
                       addIfNotNull("time3", time3) + addIfNotNull("time4", time4) +
                       addIfNotNull("time5", time5) + addIfNotNull("gender", gender) +
                       addIfNotNull("livingArea", livingArea) + addIfNotNull("birthday", birthday) +
                       " where id='" + id + "'"; 
                    
                    SqlDataAdapter da = new SqlDataAdapter(s, con);
                    DataSet ds = new DataSet();
                   
                    da = new SqlDataAdapter(s, con);
                    con.Close();
                    Session["name"] = name;
                    Response.Redirect("../Home/Home.aspx");
                }

            }
        }

        protected void btn_delete_Click(object sender, EventArgs e)
        {
            if (Session["id"] != null)
            {
                SqlConnection con = new SqlConnection(laChess.Class1.connecionString);
                con.Open();
                string s = "delete from Users where id=" + int.Parse(Session["id"].ToString()) + "";
                SqlDataAdapter da = new SqlDataAdapter(s, con);
                DataSet ds = new DataSet();
                da.Fill(ds);

                con.Close();
                Session.Clear();
                Session.Abandon();
                Response.Redirect("../Home/Home.aspx");
            }

        }
    }
}