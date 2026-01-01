import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generarFacturaPDF = (venta, carrito) => {
  const doc = new jsPDF();

  // 🧾 TÍTULO
  doc.setFontSize(18);
  doc.text("Isaela Collection", 14, 20);

  doc.setFontSize(11);
  doc.text(`Factura Nº: ${venta._id}`, 14, 30);
  doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 36);
  doc.text(`Método de pago: ${venta.metodoPago}`, 14, 42);
  doc.text(`Estado: ${venta.estado}`, 14, 48);

  // 📦 TABLA
  autoTable(doc, {
    startY: 60,
    head: [["Producto", "Precio", "Cantidad", "Subtotal"]],
    body: carrito.map(p => [
      p.nombre,
      `$${p.precio}`,
      p.cantidad,
      `$${p.precio * p.cantidad}`
    ]),
  });

  // 💰 TOTAL
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(14);
  doc.text(`Total: $${venta.total}`, 14, finalY);

  // 📄 DESCARGA
  doc.save(`Factura_${venta._id}.pdf`);
};
