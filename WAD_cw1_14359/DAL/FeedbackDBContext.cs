using Microsoft.EntityFrameworkCore;
using WAD_cw1_14359.Models;

namespace WAD_cw1_14359.DAL
{
    public class FeedbackDBContext :DbContext
    {
        public DbSet<Feedback>? Feedbacks { get; set; }
        public DbSet<User>? Users { get; set; }


        public FeedbackDBContext(DbContextOptions<FeedbackDBContext> options) : base(options)
        {

        }
    }
}
