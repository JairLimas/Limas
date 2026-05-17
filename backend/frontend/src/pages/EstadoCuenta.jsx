import { ArrowUpRight, ArrowDownLeft, Download } from "lucide-react";
import { useState } from "react";

const todos = [
  { id: 1, desc: "Transferencia recibida - Carlos M.", monto: 1500.00, tipo: "entrada", fecha: "17 May 2026", categoria: "Transferencia" },
  { id: 2, desc: "Pago de servicios BCP", monto: -250.00, tipo: "salida", fecha: "16 May 2026", categoria: "Servicios" },
  { id: 3, desc: "Depósito en efectivo", monto: 3000.00, tipo: "entrada", fecha: "15 May 2026", categoria: "Depósito" },
  { id: 4, desc: "Compra Supermercado Plaza Vea", monto: -180.50, tipo: "salida", fecha: "14 May 2026", categoria: "Compras" },
  { id: 5, desc: "Pago préstamo personal", monto: -620.00, tipo: "salida", fecha: "13 May 2026", categoria: "Préstamo" },
  { id: 6, desc: "Transferencia recibida - Empresa XYZ", monto: 2800.00, tipo: "entrada", fecha: "10 May 2026", categoria: "Transferencia" },
  { id: 7, desc: "Retiro cajero automático", monto: -400.00, tipo: "salida", fecha: "09 May 2026", categoria: "Retiro" },
  { id: 8, desc: "Pago electricidad ELSE", monto: -95.00, tipo: "salida", fecha: "08 May 2026", categoria: "Servicios" },
];

export default function EstadoCuenta() {
  const [filtro, setFiltro] = useState("todos");

  const filtrados = todos.filter((m) => {
    if (filtro === "entrada") return m.tipo === "entrada";
    if (filtro === "salida") return m.tipo === "salida";
    return true;
  });

  const totalEntradas = todos.filter(m => m.tipo === "entrada").reduce((a, m) => a + m.monto, 0);
  const totalSalidas = todos.filter(m => m.tipo === "salida").reduce((a, m) => a + Math.abs(m.monto), 0);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Estado de Cuenta</h1>
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition">
          <Download size={16} /> Descargar PDF
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Saldo actual</p>
          <p className="text-2xl font-bold text-gray-800">S/ 8,450.00</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Total ingresos</p>
          <p className="text-2xl font-bold text-green-600">+S/ {totalEntradas.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Total egresos</p>
          <p className="text-2xl font-bold text-red-600">-S/ {totalSalidas.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex gap-3 mb-5">
          {["todos", "entrada", "salida"].map((f) => (
            <button key={f} onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${filtro === f ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {f === "todos" ? "Todos" : f === "entrada" ? "Ingresos" : "Egresos"}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtrados.map((m) => (
            <div key={m.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${m.tipo === "entrada" ? "bg-green-100" : "bg-red-100"}`}>
                  {m.tipo === "entrada" ? <ArrowDownLeft size={18} className="text-green-600" /> : <ArrowUpRight size={18} className="text-red-600" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{m.desc}</p>
                  <p className="text-xs text-gray-400">{m.fecha} • {m.categoria}</p>
                </div>
              </div>
              <p className={`font-bold text-sm ${m.tipo === "entrada" ? "text-green-600" : "text-red-600"}`}>
                {m.tipo === "entrada" ? "+" : ""}S/ {Math.abs(m.monto).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}