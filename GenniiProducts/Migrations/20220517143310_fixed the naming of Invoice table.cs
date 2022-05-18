using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GenniiProducts.Migrations
{
    public partial class fixedthenamingofInvoicetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceProduct_Invoices_ProductsId",
                table: "InvoiceProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceProduct_Products_ProductsId1",
                table: "InvoiceProduct");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InvoiceProduct",
                table: "InvoiceProduct");

            migrationBuilder.DropIndex(
                name: "IX_InvoiceProduct_ProductsId1",
                table: "InvoiceProduct");

            migrationBuilder.RenameColumn(
                name: "ProductsId1",
                table: "InvoiceProduct",
                newName: "InvoiceId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvoiceProduct",
                table: "InvoiceProduct",
                columns: new[] { "InvoiceId", "ProductsId" });

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceProduct_ProductsId",
                table: "InvoiceProduct",
                column: "ProductsId");

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceProduct_Invoices_InvoiceId",
                table: "InvoiceProduct",
                column: "InvoiceId",
                principalTable: "Invoices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceProduct_Products_ProductsId",
                table: "InvoiceProduct",
                column: "ProductsId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceProduct_Invoices_InvoiceId",
                table: "InvoiceProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceProduct_Products_ProductsId",
                table: "InvoiceProduct");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InvoiceProduct",
                table: "InvoiceProduct");

            migrationBuilder.DropIndex(
                name: "IX_InvoiceProduct_ProductsId",
                table: "InvoiceProduct");

            migrationBuilder.RenameColumn(
                name: "InvoiceId",
                table: "InvoiceProduct",
                newName: "ProductsId1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvoiceProduct",
                table: "InvoiceProduct",
                columns: new[] { "ProductsId", "ProductsId1" });

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceProduct_ProductsId1",
                table: "InvoiceProduct",
                column: "ProductsId1");

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceProduct_Invoices_ProductsId",
                table: "InvoiceProduct",
                column: "ProductsId",
                principalTable: "Invoices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceProduct_Products_ProductsId1",
                table: "InvoiceProduct",
                column: "ProductsId1",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
