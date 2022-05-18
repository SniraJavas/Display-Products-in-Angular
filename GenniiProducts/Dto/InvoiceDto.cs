using GenniiProducts.Models;

namespace GenniiProducts
{
    public class InvoiceDto
    {
        public int Id { get; set; }

        public User User { get; set; }

        public List<Product> Products { get; set; }

        public DateTime Created { get; set; }

        public double Total { get; set; }
    }
}
