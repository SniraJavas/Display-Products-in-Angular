using Microsoft.EntityFrameworkCore;

namespace GenniiProducts.Models
{
    public class GenniProductsContext : DbContext
    {
        public GenniProductsContext() : base()
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Invoice> Invoices { get; set; }


    }
}
