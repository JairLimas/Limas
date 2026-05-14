import { User, Lock, CreditCard, Phone, Mail, AlarmClock } from "lucide-react";

export default function App() {
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
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-16 left-16 bg-red-600 text-white p-10 rounded-3xl shadow-2xl w-[520px]">
          <h1 className="text-6xl font-bold mb-8">
            Caja <br /> Cusco
          </h1>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Bienvenido a
            <br />
            Banca por Internet
          </h2>

          <div className="space-y-5 text-2xl">
            <div className="flex items-center gap-4">
              <Phone size={30} />
              <span>084-606100</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={30} />
              <span>atencionalcliente@cmac-cusco.com.pe</span>
            </div>
          </div>
        </div>
      </div>

      {/* DERECHA */}
      <div className="w-1/2 flex items-center justify-center bg-red-600 relative">
        <div className="bg-white w-[620px] rounded-3xl shadow-2xl p-12">
          
          {/* TIMER */}
          <div className="flex items-center gap-3 text-lg mb-10">
            <AlarmClock className="text-red-600" />
            <p>
              Esta ventana se cerrará en{" "}
              <span className="text-red-600 font-bold">
                115 segundos
              </span>
            </p>
          </div>

          <h1 className="text-5xl font-bold text-center mb-12">
            Iniciar Sesión
          </h1>

          {/* TARJETA */}
          <div className="mb-6">
            <label className="font-semibold text-xl block mb-3">
              Número de tarjeta
            </label>

            <div className="flex items-center border rounded-xl px-4 py-4">
              <CreditCard className="text-red-600 mr-3" />
              <input
                type="text"
                className="w-full outline-none text-lg"
                placeholder=""
              />
            </div>
          </div>

          {/* RECORDAR */}
          <div className="flex items-center gap-3 mb-8">
            <input type="checkbox" />
            <span className="text-gray-500">Recordar tarjeta</span>
          </div>

          {/* DOCUMENTO */}
          <div className="mb-8">
            <label className="font-semibold text-xl block mb-3">
              Documento
            </label>

            <div className="flex gap-4">
              <select className="border rounded-xl px-4 py-4 w-40 text-lg">
                <option>DNI</option>
                <option>CE</option>
              </select>

              <input
                type="text"
                placeholder="Número de documento"
                className="border rounded-xl px-4 py-4 flex-1 text-lg outline-none"
              />
            </div>
          </div>

          {/* CLAVE */}
          <div className="mb-10">
            <label className="font-semibold text-xl block mb-3">
              Clave de 6 dígitos
            </label>

            <div className="flex items-center border rounded-xl px-4 py-4">
              <Lock className="text-red-600 mr-3" />
              <input
                type="password"
                className="w-full outline-none text-lg"
              />
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="flex gap-4 mb-10">
            <div className="bg-gray-100 rounded-xl px-8 py-4 text-3xl tracking-widest">
              9nDAYE
            </div>

            <input
              type="text"
              placeholder="Escribe los caracteres"
              className="border rounded-xl px-4 py-4 flex-1 outline-none"
            />
          </div>

          {/* BOTON */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl text-3xl font-bold transition">
            Ingresar
          </button>

          {/* LINKS */}
          <div className="flex justify-between mt-8 text-gray-600 underline">
            <a href="#">Generar Clave</a>
            <a href="#">¿Olvidaste tu Clave?</a>
            <a href="#">Solicitar Ayuda</a>
          </div>
        </div>
      </div>
    </div>
  );
}