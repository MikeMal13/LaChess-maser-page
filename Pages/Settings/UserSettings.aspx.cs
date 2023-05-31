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
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                String name = Request.Form["name"];
                String password1 = Request.Form["password1"];
                String mail = Request.Form["mail"];
                String Role = Request.Form["Role"];
                String version1 = Request.Form["version1"];
                String version2 = Request.Form["version2"];
                String version3 = Request.Form["version3"];
                String version4 = Request.Form["version4"];
                String version5 = Request.Form["version5"];
                String birthday = Request.Form["birthday"];
                Object id = Session["id"];

                if (Session["id"] != null)
                {
                    SqlConnection con = new SqlConnection(laChess.Class1.connecionString);
                    con.Open();
                    string s = "update Users set name='" + name + "',password1='" + password1 + "',mail='" + mail + "',role='" + Role + "',version1='" + version1 + "',version2='" + version2 + "',version3='" + version3 + "',version4='" + version4 + "',version5='" + version5 + "',birthday='" + birthday + "' where id= " + id + "";
                    SqlDataAdapter da = new SqlDataAdapter(s, con);
                    DataSet ds = new DataSet();
                    da.Fill(ds);
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