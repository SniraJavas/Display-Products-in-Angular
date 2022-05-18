namespace GenniiProducts.Models
{
    public class Invoice
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public DateTime Created { get; set; }

        public double Total { get; set; }
    }
}
