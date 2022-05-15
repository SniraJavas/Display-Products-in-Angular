using System.ComponentModel.DataAnnotations;

namespace GenniiProducts.Models
{
    public class Product
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Price { get; set; }

        public int Quantity { get; set; }
        public int Stock { get; set; }
    }
}
