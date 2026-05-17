import { ArrowUpRight, ArrowDownLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const movimientos = [
  { id: 1, desc: "Transferencia recibida", monto: 1500.00, tipo: "entrada", fecha: "17 May 2026", categoria: "Transferencia" },
  { id: 2, desc: "Pago de servicios BCP", monto: -250.00, tipo: "salida", fecha: "16 May 2026", categoria: "Servicios" },
  { id: 3, desc: "Depósito en efectivo", monto: 3000.00, tipo: "entrada", fecha: "15 May 2026", categoria: "Depósito" },
  { id: 4, desc: "Compra Supermercado", monto: -180.50, tipo: "salida", fecha: "14 May 2026", categoria: "Compras" },
  { id: 5, desc: "Pago préstamo", monto: -620.00, tipo: "salida", fecha: "13 May 2026", categoria: "Préstamo" },
];

export default function Dashboard() {
  const [verSaldo, setVerSaldo] = useState(true);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-5 mb-8">
        <div className="bg-red-600 text-white rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <p className="text-red-200 text-sm">Saldo disponible</p>
            <button onClick={() => setVerSaldo(!verSaldo)}>
              {verSaldo ? <EyeOff size={18} className="text-red-200" /> : <Eye size={18} className="text-red-200" />}
            </button>
          </div>
          <p className="text-3xl font-bold mb-1">{verSaldo ? "S/ 8,450.00" : "S/ ••••••"}</p>
          <p className="text-red-200 text-xs">Cuenta de Ahorros • **** 4821</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <ArrowDownLeft size={18} className="text-green-600" />
            </div>
            <p className="text-gray-500 text-sm">Ingresos del mes</p>
          </div>
          <p className="text-2xl font-bold text-gray-800">S/ 4,500.00</p>
          <p className="text-green-600 text-xs mt-1">+12% vs mes anterior</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <ArrowUpRight size={18} className="text-red-600" />
            </div>
            <p className="text-gray-500 text-sm">Gastos del mes</p>
          </div>
          <p className="text-2xl font-bold text-gray-800">S/ 1,050.50</p>
          <p className="text-red-600 text-xs mt-1">-5% vs mes anterior</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Accesos Rápidos</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Transferir", icon: "💸", color: "bg-blue-50 text-blue-600" },
            { label: "Pagar Servicios", icon: "🧾", color: "bg-yellow-50 text-yellow-600" },
            { label: "Recargar", icon: "📱", color: "bg-green-50 text-green-600" },
            { label: "Préstamos", icon: "🏦", color: "bg-purple-50 text-purple-600" },
          ].map((item) => (
            <button key={item.label} className={`${item.color} rounded-xl p-4 flex flex-col items-center gap-2 hover:opacity-80 transition`}>
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-gray-800">Movimientos Recientes</h2>
          <button className="text-red-600 text-sm font-medium hover:underline">Ver todos</button>
        </div>
        <div className="space-y-4">
          {movimientos.map((m) => (
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