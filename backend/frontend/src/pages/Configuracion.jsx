import { User, Lock, Bell, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Configuracion() {
  const [notif, setNotif] = useState({ transferencias: true, pagos: true, promociones: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Configuración</h1>

      <div className="max-w-2xl space-y-5">

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <User size={20} className="text-red-600" />
            <h2 className="text-lg font-bold text-gray-800">Datos personales</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: "Nombre completo", value: "Jair Limas" },
              { label: "DNI", value: "12345678" },
              { label: "Correo electrónico", value: "jair@email.com" },
              { label: "Teléfono", value: "+51 987 654 321" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm font-semibold text-gray-800">{value}</p>
                </div>
                <button className="text-red-600 text-xs font-semibold hover:underline">Editar</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Lock size={20} className="text-red-600" />
            <h2 className="text-lg font-bold text-gray-800">Seguridad</h2>
          </div>
          <div className="space-y-2">
            {["Cambiar clave de acceso", "Cambiar clave de operaciones", "Ver dispositivos vinculados"].map((item) => (
              <button key={item} className="w-full flex justify-between items-center py-3 border-b border-gray-100 last:border-0 hover:text-red-600 transition">
                <span className="text-sm text-gray-700">{item}</span>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Bell size={20} className="text-red-600" />
            <h2 className="text-lg font-bold text-gray-800">Notificaciones</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "transferencias", label: "Transferencias realizadas" },
              { key: "pagos", label: "Pagos de servicios" },
              { key: "promociones", label: "Promociones y ofertas" },
            ].map(({ key, label }) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-sm text-gray-700">{label}</span>
                <button
                  onClick={() => setNotif((prev) => ({ ...prev, [key]: !prev[key] }))}
                  className={`w-12 h-6 rounded-full transition-colors duration-200 relative ${notif[key] ? "bg-red-600" : "bg-gray-200"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${notif[key] ? "translate-x-7" : "translate-x-1"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Shield size={20} className="text-green-600" />
            <h2 className="text-lg font-bold text-gray-800">Sesión segura</h2>
          </div>
          <p className="text-sm text-gray-500">Tu conexión está protegida con cifrado SSL de 256 bits.</p>
        </div>

      </div>
    </div>
  );
}