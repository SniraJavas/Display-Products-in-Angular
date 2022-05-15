using Microsoft.EntityFrameworkCore;

namespace GenniiProducts.Models
{
    public class GenniProductsContext : DbContext
    {
        public GenniProductsContext(DbContextOptions<GenniProductsContext> context) : base()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var config = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json").Build();


                var section = config.GetSection("ConnectionStrings");
                string connectionString = section["DefaultConnection"];
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Invoice> Invoices { get; set; }


    }
}
