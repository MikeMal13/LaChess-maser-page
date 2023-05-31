using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using laChess;

namespace LaChess_maser_page.Pages.Settings
{
    public partial class adminPage : System.Web.UI.Page
    {
        string str;
        protected void Page_Load(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection();
            con.ConnectionString = Class1.connecionString;
            con.Open();

            //שליפת הטבלה
            string s = "select * from users";
            SqlDataAdapter da = new SqlDataAdapter(s, con);
            DataSet ds = new DataSet();
            da.Fill(ds);
            con.Close();

            str = "<table class='usersTable' align='center'>";
            str += "<tr>";
            foreach (DataColumn column in ds.Tables[0].Columns)
            {
                str += "<td>" + column.ColumnName + "</td>";
            }
            str += "</tr>";
            foreach (DataRow row in ds.Tables[0].Rows)
            {
                str += "<tr>";
                foreach (DataColumn column in ds.Tables[0].Columns)
                {
                    str += "<td>" + row[column] + "</td>";
                }
                str += "</tr>";
            }
            str += "</table>";
            adminDiv.InnerHtml = str;

            if (IsPostBack)
            {
                string btn = Request.Form["btn"];
                if (Request.Form["btn"] == "add")
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
                    s = "insert into Users(name,password1,mail,Role,version1,version2,version3,version4,version5,birthday) values('" + name + "','" + password1 + "','" + mail + "','" + Role + "','" + version1 + "','" + version2 + "','" + version3 + "','" + version4 + "','" + version5 + "','" + birthday + "')";
                    da = new SqlDataAdapter(s, con);
                    ds = new DataSet();
                    da.Fill(ds);
                    Response.Redirect("Admin.aspx");
                }
                else if (Request.Form["btn"] == "delete")
                {

                    int id = int.Parse(Request.Form["id"]);

                    s = "delete from Users where id=" + id + "";
                    da = new SqlDataAdapter(s, con);
                    ds = new DataSet();
                    da.Fill(ds);
                    Response.Redirect("Admin.aspx");

                }
                else if (Request.Form["btn"] == "update")
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

                    int id = int.Parse(Request.Form["id"]);
                    s = "update Users set name='" + name + "',password1='" + password1 + "',mail='" + mail + "',role='" + Role + "',version1='" + version1 + "',version2='" + version2 + "',version3='" + version3 + "',version4='" + version4 + "',version5='" + version5 + "',birthday='" + birthday + "' where id= " + id + "";
                    da = new SqlDataAdapter(s, con);
                    da.Fill(ds);
                    Response.Redirect("Admin.aspx");
                }

            }

        }

    }
}