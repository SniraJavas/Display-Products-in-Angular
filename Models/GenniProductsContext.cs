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


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-D5532JU;Initial Catalog=GenniProductsDb;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False;");
        }

    }
}
