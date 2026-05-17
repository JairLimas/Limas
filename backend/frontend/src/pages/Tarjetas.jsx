import { CreditCard, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const tarjetas = [
  { id: 1, tipo: "Débito", numero: "**** **** **** 4821", titular: "JAIR LIMAS", vence: "12/28", saldo: 8450.00, color: "from-red-600 to-red-800" },
  { id: 2, tipo: "Crédito", numero: "**** **** **** 3390", titular: "JAIR LIMAS", vence: "08/27", saldo: 2000.00, color: "from-gray-700 to-gray-900" },
];

export default function Tarjetas() {
  const [verNumero, setVerNumero] = useState({});
  const toggle = (id) => setVerNumero((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mis Tarjetas</h1>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {tarjetas.map((t) => (
          <div key={t.id}>
            <div className={`bg-gradient-to-br ${t.color} rounded-2xl p-6 text-white mb-4 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs opacity-70 mb-1">Caja Cusco</p>
                  <p className="text-sm font-semibold">{t.tipo}</p>
                </div>
                <CreditCard size={28} className="opacity-80" />
              </div>
              <p className="text-lg font-mono tracking-widest mb-4">{t.numero}</p>
              <div className="flex justify-between">
                <div><p className="text-xs opacity-60">Titular</p><p className="text-sm font-semibold">{t.titular}</p></div>
                <div><p className="text-xs opacity-60">Vence</p><p className="text-sm font-semibold">{t.vence}</p></div>
                <div><p className="text-xs opacity-60">Saldo</p><p className="text-sm font-semibold">S/ {t.saldo.toLocaleString()}</p></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3">
              <button onClick={() => toggle(t.id)} className="flex-1 flex items-center justify-center gap-2 border rounded-xl py-2 text-sm text-gray-600 hover:bg-gray-50">
                {verNumero[t.id] ? <EyeOff size={15} /> : <Eye size={15} />}
                {verNumero[t.id] ? "Ocultar" : "Ver número"}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border rounded-xl py-2 text-sm text-gray-600 hover:bg-gray-50">
                <Lock size={15} /> Bloquear
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Límites y consumo</h2>
        <div className="space-y-4">
          {[
            { label: "Compras en línea", usado: 320, limite: 2000 },
            { label: "Retiros cajero", usado: 400, limite: 1000 },
            { label: "Transferencias diarias", usado: 1500, limite: 5000 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-semibold text-gray-800">S/ {item.usado} / S/ {item.limite}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(item.usado / item.limite) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}