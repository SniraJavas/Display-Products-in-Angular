namespace GenniiProducts.Models
{
    public class InvoiceProduct
    {
        public int Id { get; set; }
        public int ProductsId { get; set; }

        public int InvoiceId { get; set; }
    }
}