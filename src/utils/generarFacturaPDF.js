import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export const generarFacturaPDF = (venta, carrito) => {
  const doc = new jsPDF();

  // 🔹 ENCABEZADO
  doc.setFontSize(16);
  doc.text("ISAELA COLLECTION", 14, 20);

  doc.setFontSize(10);
  doc.text("Factura de Venta", 14, 28);
  doc.text(`Factura N°: ${venta._id}`, 14, 34);
  doc.text(`Fecha: ${new Date(venta.createdAt).toLocaleString()}`, 14, 40);
  doc.text(`Método de pago: ${venta.metodoPago}`, 14, 46);

  // 🔹 TABLA DE PRODUCTOS
  const columnas = [
    ["Producto", "Precio", "Cantidad", "Subtotal"]
  ];

  const filas = carrito.map(p => [
    p.nombre,
    `$${p.precio.toFixed(2)}`,
    p.cantidad,
    `$${(p.precio * p.cantidad).toFixed(2)}`
  ]);

  doc.autoTable({
    startY: 55,
    head: columnas,
    body: filas,
  });

  // 🔹 TOTAL
  const totalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.text(`TOTAL: $${venta.total.toFixed(2)}`, 14, totalY);

  // 🔹 PIE DE PÁGINA
  doc.setFontSize(9);
  doc.text(
    "Gracias por su compra - Isaela Collection",
    14,
    285
  );

  // 🔹 DESCARGAR PDF
  doc.save(`factura-${venta._id}.pdf`);
};
