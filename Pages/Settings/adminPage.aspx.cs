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
        public static string addIfNotNull(string dataRow, string data)
        {
            if (data != null && !string.IsNullOrWhiteSpace(data))
            {
                return "," + dataRow + "='" + data + "'";
            }
            return " ";
        }

        string str;
        protected void Page_Load(object sender, EventArgs e)
        {
            try { 
            Random rnd = new Random();

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
                int id = -1;
                try {
                    id = int.Parse(Request.Form["id"]);
                } catch { /* id stays -1 */ }


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


                string btn = Request.Form["btn"];
                if (Request.Form["btn"] == "add")
                {
                    s = "insert into Users(Id,name,password,mail,time1,time2,time3,time4,time5,gender,livingArea,birthday) values('" + (id == -1 ? rnd.Next(1, int.MaxValue) : id) + "','" + name + "','" + password1 + "','" + mail + "','" + time1 + "','" + time2 + "','" + time3 + "','" + time4 + "','" + time5 + "','" + gender + "','" + livingArea + "','" + birthday + "')";
                    da = new SqlDataAdapter(s, con);
                    ds = new DataSet();
                    da.Fill(ds);
                }
                else if (Request.Form["btn"] == "delete" && id != -1)
                {
                    s = "delete from Users where id=" + id + "";
                    da = new SqlDataAdapter(s, con);
                    ds = new DataSet();
                    da.Fill(ds);

                }
                else if (Request.Form["btn"] == "update" && id != -1)
                {
                    s = "update Users set " + addIfNotNull("name", name) +
                        addIfNotNull("password", password1) + addIfNotNull("mail", mail) +
                        addIfNotNull("time1", time1) + addIfNotNull("time2", time2) +
                        addIfNotNull("time3", time3) + addIfNotNull("time4", time4) +
                        addIfNotNull("time5", time5) + addIfNotNull("gender", gender) +
                        addIfNotNull("livingArea", livingArea) + addIfNotNull("birthday", birthday) +
                        " where id='" + id + "'";
                    s = s.Remove(s.IndexOf(','), 1);

                    adminDiv.InnerHtml = "<p>" + s + "</p>";



                    da = new SqlDataAdapter(s, con);
                    da.Fill(ds);
                }

                //Response.Redirect("AdminPage.aspx");
            }
        }
            catch
            {
                //fuck
            }
        }

    }
}