#!/bin/bash
# ============================================
# Script para subir CajaCuzco a GitHub
# ============================================

echo "🚀 Preparando proyecto para GitHub..."

# 1. Entrar a la carpeta del proyecto
cd "$(dirname "$0")/CajaCuzco"

# 2. Inicializar Git
git init
git checkout -b main

# 3. Agregar todos los archivos (el .gitignore excluye venv y node_modules)
git add .

# 4. Primer commit
git commit -m "🎉 Primer commit: CajaCuzco - FastAPI + React"

# 5. Conectar con GitHub
echo ""
echo "👉 Ingresa la URL de tu repositorio GitHub"
echo "   Ejemplo: https://github.com/tu-usuario/CajaCuzco.git"
read -p "URL: " REPO_URL

git remote add origin "$REPO_URL"

# 6. Subir
git push -u origin main

echo ""
echo "✅ ¡Proyecto subido exitosamente a GitHub!"
