# Istiqlol — Карьерная платформа для женщин

## Деплой на Railway
1. Загрузи этот репозиторий на GitHub
2. Railway → New Project → Deploy from GitHub
3. + New → Database → PostgreSQL
4. Variables: DATABASE_URL (авто), SECRET_KEY, ONE_ID_CLIENT_ID, ONE_ID_CLIENT_SECRET

## Локальный запуск
```bash
# Backend
cd backend
pip install -r requirements.txt
cp ../.env.example .env
alembic upgrade head
python seed.py
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
echo "VITE_API_URL=http://localhost:8000" > .env
npm run dev
```
