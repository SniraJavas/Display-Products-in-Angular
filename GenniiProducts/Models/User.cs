using System.ComponentModel.DataAnnotations;

namespace GenniiProducts.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Surname { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string Role { get; set; }

    }
}
