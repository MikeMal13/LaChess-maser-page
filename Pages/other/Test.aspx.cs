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
                int score = 0;

                string q1 = Request.Form["q1"];
                string q2 = Request.Form["q2"];

                if (q1 == "Salmon")
                    score += 10;

                if (q2 == "Ostrich")
                    score += 10;


                finalScore.InnerHtml = "your score is: " + score;

            }

        }
    }
}