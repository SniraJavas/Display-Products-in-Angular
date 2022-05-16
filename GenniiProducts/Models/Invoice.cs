namespace GenniiProducts.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public List<Product> Products { get; set; }

        public User User{ get; set; }

        public DateTime Created { get; set; }

        public double Total { get; set; }


    }
}
