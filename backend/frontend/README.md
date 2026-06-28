# Caja Cusco — Homebanking (Banca por Internet)

Sistema de banca digital para clientes de Caja Cusco. Permite consultar saldos, realizar transferencias, gestionar tarjetas, solicitar préstamos y créditos.

## Stack tecnológico

- **Frontend:** React 18 + Vite
- **Estilos:** Tailwind CSS
- **Base de datos:** Supabase (PostgreSQL)
- **Autenticación:** Sesión por localStorage (número de tarjeta + DNI + clave)

## Estructura del proyecto

```
src/
├── components/
│   ├── Layout.jsx          # Estructura principal con sidebar
│   └── Sidebar.jsx         # Navegación lateral
├── pages/
│   ├── Login.jsx           # Autenticación con captcha
│   ├── Dashboard.jsx       # Resumen de cuenta y saldo
│   ├── Transferencias.jsx  # Transferencias entre cuentas
│   ├── EstadoCuenta.jsx    # Historial de movimientos
│   ├── Tarjetas.jsx        # Gestión de tarjetas débito
│   ├── Prestamos.jsx       # Solicitud de préstamos
│   ├── Creditos.jsx        # Solicitud de créditos
│   └── Configuracion.jsx   # Datos del perfil
├── supabase.js             # Cliente Supabase
└── App.jsx                 # Rutas protegidas
```

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Variables de entorno

Crear archivo `.env` en la raíz:

```
VITE_SUPABASE_URL=https://ykupntvwlltppfyjyxwh.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key
```

## Credenciales de prueba

| Usuario     | Tarjeta              | DNI       | Clave  |
|-------------|----------------------|-----------|--------|
| cli000001   | 4821000000001234     | 123456789 | 300806 |
| cli000002   | 1111111111111111     | 111111    | 300806 |
| cli000003   | 4821000000000001     | 40000001  | 123456 |
| cli000004   | 4821000000000002     | 40000002  | 123456 |

## Tablas Supabase utilizadas

| Tabla        | Descripción                        |
|--------------|------------------------------------|
| `usuarios`   | Datos del cliente (DNI, clave)     |
| `cuentas`    | Cuentas de ahorro por usuario      |
| `movimientos`| Historial de transacciones         |
| `tarjetas`   | Tarjetas débito asociadas          |
| `prestamos`  | Solicitudes de préstamo            |
| `creditos`   | Solicitudes de crédito             |

## Flujo principal

```
Login (tarjeta + DNI + clave + captcha)
    ↓
Dashboard (saldo, movimientos recientes)
    ↓
Solicitar Préstamo/Crédito
    ↓
[Core Financiero Admin aprueba]
    ↓
Desembolso → saldo actualizado en Dashboard
```

## Control de acceso

- Rutas `/app/*` protegidas con `PrivateRoute`
- Sin sesión activa → redirige a `/` (Login)
- Sesión almacenada: `usuario_id`, `cuenta_id`, `usuario_nombre`

## Integración con Core Financiero

El homebanking comparte la misma base de datos Supabase con el Core Financiero (Admin). Las solicitudes de préstamo/crédito creadas desde el homebanking aparecen automáticamente en la bandeja del admin, y los desembolsos se reflejan en el saldo del cliente en tiempo real.