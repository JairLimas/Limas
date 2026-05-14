# 🏦 CajaCuzco

Aplicación web fullstack para gestión de Caja Cuzco.

## 🛠️ Tecnologías

- **Backend:** FastAPI · Uvicorn · Pydantic · Python-dotenv
- **Frontend:** React · Vite · JavaScript

## 📁 Estructura del Proyecto

```
CajaCuzco/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── services/
│   ├── requirements.txt
│   └── frontend/
│       ├── src/
│       ├── public/
│       ├── index.html
│       └── vite.config.js
```

## 🚀 Cómo ejecutar

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd backend/frontend
npm install
npm run dev
```

## 📌 Variables de entorno

Crea un archivo `.env` en la carpeta `backend/` con tus configuraciones:

```env
DATABASE_URL=...
SECRET_KEY=...
```
