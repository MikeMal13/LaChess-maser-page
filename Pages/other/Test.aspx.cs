using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LaChess_maser_page.Pages.other
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                int score = 1300;

                string q1 = Request.Form["q1"];
                string q2 = Request.Form["q2"];
                string q3 = Request.Form["q3"];
                string q4 = Request.Form["q4"];
                string q5 = Request.Form["q5"];
                string q6 = Request.Form["q6"];


                if (q1 != "Rd8")
                    score -= 649;

                if (q2 == "Rxe8" || q2 == "Re8")
                    score -= 321;

                if (q3 == "Be5")
                    score += 55;

                if (q4 == "kh2")
                    score += 153;

                if (q5 == "Rxd5" || q5 == "Rd5")
                    score += 386;

                if (q6 == "Qxf6" || q6 == "Qf6")
                    score += 725;

                finalScore.InnerHtml = "your rank is is: " + score;
            }

        }
    }
}