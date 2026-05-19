import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { supabase } from "../supabase";

export default function Transferencias() {
  const [paso, setPaso] = useState(1);
  const [form, setForm] = useState({ banco: "", cuenta: "", monto: "", descripcion: "" });
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleEnviar = async () => {
    setCargando(true);

    // Obtener cuenta del usuario
    const { data: cuenta } = await supabase
      .from("cuentas")
      .select("*")
      .single();

    if (cuenta) {
      // Insertar movimiento de salida
      await supabase.from("movimientos").insert({
        cuenta_id: cuenta.id,
        descripcion: `Transferencia a cuenta ${form.cuenta} - ${form.banco}`,
        monto: -parseFloat(form.monto),
        tipo: "salida",
        categoria: "Transferencia",
      });

      // Actualizar saldo
      await supabase
        .from("cuentas")
        .update({ saldo: cuenta.saldo - parseFloat(form.monto) })
        .eq("id", cuenta.id);
    }

    setCargando(false);
    setPaso(3);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transferencias</h1>

      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          {["Datos", "Confirmar", "Listo"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${paso > i ? "bg-red-600 text-white" : paso === i + 1 ? "bg-red-600 text-white" : "bg-gray-200 text-gray-400"}`}>
                {paso > i + 1 ? "✓" : i + 1}
              </div>
              <span className={`text-sm ${paso === i + 1 ? "font-semibold text-gray-800" : "text-gray-400"}`}>{label}</span>
              {i < 2 && <div className="w-12 h-px bg-gray-200 ml-1" />}
            </div>
          ))}
        </div>

        {paso === 1 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Banco destino</label>
              <select name="banco" value={form.banco} onChange={handleChange} className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500">
                <option value="">Selecciona un banco</option>
                <option>Caja Cusco</option>
                <option>BCP</option>
                <option>Interbank</option>
                <option>BBVA</option>
                <option>Scotiabank</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Número de cuenta</label>
              <input name="cuenta" value={form.cuenta} onChange={handleChange} type="text" placeholder="Ej: 1234567890" className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Monto (S/)</label>
              <input name="monto" value={form.monto} onChange={handleChange} type="number" placeholder="0.00" className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Descripción (opcional)</label>
              <input name="descripcion" value={form.descripcion} onChange={handleChange} type="text" placeholder="Ej: Pago alquiler" className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500" />
            </div>
            <button onClick={() => setPaso(2)} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm transition">
              Continuar
            </button>
          </div>
        )}

        {paso === 2 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-5">Confirmar transferencia</h2>
            <div className="space-y-3 mb-6">
              {[
                { label: "Banco destino", value: form.banco },
                { label: "Cuenta destino", value: form.cuenta },
                { label: "Monto", value: `S/ ${parseFloat(form.monto || 0).toFixed(2)}` },
                { label: "Descripción", value: form.descripcion || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="text-sm font-semibold text-gray-800">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setPaso(1)} className="flex-1 border border-gray-300 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50">Atrás</button>
              <button onClick={handleEnviar} disabled={cargando} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2">
                <Send size={16} /> {cargando ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </div>
        )}

        {paso === 3 && (
          <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={36} className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">¡Transferencia exitosa!</h2>
            <p className="text-gray-500 text-sm mb-6">Se transfirió S/ {parseFloat(form.monto || 0).toFixed(2)} a la cuenta {form.cuenta}</p>
            <button onClick={() => { setPaso(1); setForm({ banco: "", cuenta: "", monto: "", descripcion: "" }); }} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition">
              Nueva transferencia
            </button>
          </div>
        )}
      </div>
    </div>
  );
}