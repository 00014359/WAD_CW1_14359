using System.ComponentModel.DataAnnotations;

namespace WAD_cw1_14359.Models
{
    public class User
    {
        public int UserId { get; set; }
        [Required(ErrorMessage ="Please Enter a name")]
        public string Username { get; set; }
        public string Email { get; set; }
    }
}
