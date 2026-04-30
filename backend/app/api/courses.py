from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.base import Course, Biography

router = APIRouter()

@router.get("/")
def list_courses(db: Session=Depends(get_db)):
    return [{"id": c.id, "title": c.title, "description": c.description,
             "category": c.category, "duration_hours": c.duration_hours,
             "has_certificate": c.has_certificate, "related_skills": c.related_skills}
            for c in db.query(Course).all()]

@router.get("/biographies")
def list_biographies(db: Session=Depends(get_db)):
    return [{"id": b.id, "name": b.name, "role": b.role,
             "company": b.company, "quote": b.quote, "photo_url": b.photo_url}
            for b in db.query(Biography).filter(Biography.is_published == True).all()]
