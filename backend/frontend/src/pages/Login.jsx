import { Lock, CreditCard, Phone, Mail, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex bg-gray-100 overflow-hidden">

      {/* IZQUIERDA */}
      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-10 left-10 bg-red-600 text-white p-6 rounded-2xl shadow-2xl w-[300px]">
          <h1 className="text-3xl font-bold mb-3">Caja Cusco</h1>
          <h2 className="text-lg font-semibold leading-snug mb-4">
            Bienvenido a<br />Banca por Internet
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={16} /><span>084-606100</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} /><span>atencionalcliente@cmac-cusco.com.pe</span>
            </div>
          </div>
        </div>
      </div>

      {/* DERECHA */}
      <div className="w-1/2 flex items-center justify-center bg-red-600">
        <div className="bg-white w-[480px] rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>

          <div className="mb-4">
            <label className="font-semibold text-sm block mb-2">Número de tarjeta</label>
            <div className="flex items-center border rounded-xl px-3 py-3 focus-within:border-red-500">
              <CreditCard size={18} className="text-red-600 mr-2" />
              <input type="text" className="w-full outline-none text-sm" placeholder="**** **** **** ****" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="accent-red-600" />
            <span className="text-gray-500 text-sm">Recordar tarjeta</span>
          </div>

          <div className="mb-4">
            <label className="font-semibold text-sm block mb-2">Documento</label>
            <div className="flex gap-3">
              <select className="border rounded-xl px-3 py-3 text-sm outline-none">
                <option>DNI</option><option>CE</option>
              </select>
              <input type="text" placeholder="Número de documento" className="border rounded-xl px-3 py-3 flex-1 text-sm outline-none focus:border-red-500" />
            </div>
          </div>

          <div className="mb-4">
            <label className="font-semibold text-sm block mb-2">Clave de 6 dígitos</label>
            <div className="flex items-center border rounded-xl px-3 py-3 focus-within:border-red-500">
              <Lock size={18} className="text-red-600 mr-2" />
              <input type="password" className="w-full outline-none text-sm" placeholder="••••••" />
            </div>
          </div>

          <div className="flex gap-3 mb-5">
            <div className="bg-gray-100 border rounded-xl px-5 py-3 text-xl font-mono tracking-widest select-none">9nDAYE</div>
            <button className="p-3 border rounded-xl hover:bg-gray-50">
              <RefreshCw size={16} className="text-gray-500" />
            </button>
            <input type="text" placeholder="Escribe los caracteres" className="border rounded-xl px-3 py-3 flex-1 text-sm outline-none focus:border-red-500" />
          </div>

          <button
            onClick={() => navigate("/app/dashboard")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-base font-bold transition"
          >
            Ingresar
          </button>

          <div className="flex justify-between mt-5 text-sm text-red-600">
            <a href="#" className="hover:underline">Generar Clave</a>
            <a href="#" className="hover:underline">¿Olvidaste tu Clave?</a>
            <a href="#" className="hover:underline">Solicitar Ayuda</a>
          </div>
        </div>
      </div>
    </div>
  );
}