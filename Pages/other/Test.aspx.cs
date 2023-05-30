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
                string q3 = Request.Form["q3"];
                string q4 = Request.Form["q4"];
                string q5 = Request.Form["q5"];

                if (q1 == "Human")
                    score += 10;

                if (q2 == "Tyamat")
                    score += 10;

                if (q3 == "Matt Mercer")
                    score += 10;

                if (q4 == "Vox Machina")
                    score += 10;

                if (q5 == "Thieves")
                    score += 10;

                finalScore.InnerHtml = "your score is: " + score;
            }

        }
    }
}