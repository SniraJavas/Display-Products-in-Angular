using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GenniiProducts.Migrations
{
    public partial class UpdatemanytomanyrelationshipInvoiceProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Invoices_InvoiceId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_InvoiceId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "InvoiceId",
                table: "Products");

            migrationBuilder.CreateTable(
                name: "InvoiceProduct",
                columns: table => new
                {
                    ProductsId = table.Column<int>(type: "int", nullable: false),
                    ProductsId1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceProduct", x => new { x.ProductsId, x.ProductsId1 });
                    table.ForeignKey(
                        name: "FK_InvoiceProduct_Invoices_ProductsId",
                        column: x => x.ProductsId,
                        principalTable: "Invoices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InvoiceProduct_Products_ProductsId1",
                        column: x => x.ProductsId1,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceProduct_ProductsId1",
                table: "InvoiceProduct",
                column: "ProductsId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InvoiceProduct");

            migrationBuilder.AddColumn<int>(
                name: "InvoiceId",
                table: "Products",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_InvoiceId",
                table: "Products",
                column: "InvoiceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Invoices_InvoiceId",
                table: "Products",
                column: "InvoiceId",
                principalTable: "Invoices",
                principalColumn: "Id");
        }
    }
}
