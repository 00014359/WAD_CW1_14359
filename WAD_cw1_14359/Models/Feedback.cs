using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WAD_cw1_14359.Models
{
    public class Feedback
    {
        private string _feedbackContent;

        public int FeedbackId { get; set; }
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        [Required(ErrorMessage = "Feedback content is required.")]
        [StringLength(500, ErrorMessage = "Feedback content cannot exceed 500 characters.")]
        public string FeedbackContent { get
            {
                return _feedbackContent;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Feedback content is required.");
                }
                if (value.Length > 500)
                {
                    throw new ArgumentException("Feedback content cannot exceed 500 characters.");
                }
                _feedbackContent = value;
            }
        }
        public string FeedbackDate { get; set; }

        // Navigation property
        public User? User { get; set; }
    }
}
