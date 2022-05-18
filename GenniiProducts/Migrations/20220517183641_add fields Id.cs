using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GenniiProducts.Migrations
{
    public partial class addfieldsId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "InvoiceProduct",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvoiceProduct",
                table: "InvoiceProduct",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_InvoiceProduct",
                table: "InvoiceProduct");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "InvoiceProduct");

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
    }
}
