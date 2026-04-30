from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.base import Job
from typing import Optional

router = APIRouter()

@router.get("/")
def list_jobs(category: Optional[str]=None, work_format: Optional[str]=None,
              city: Optional[str]=None, skip: int=0, limit: int=20,
              db: Session=Depends(get_db)):
    q = db.query(Job).filter(Job.is_active == True)
    if category: q = q.filter(Job.category == category)
    if work_format: q = q.filter(Job.work_format == work_format)
    if city: q = q.filter(Job.city.ilike(f"%{city}%"))
    return [_fmt(j) for j in q.offset(skip).limit(limit).all()]

@router.get("/{job_id}")
def get_job(job_id: int, db: Session=Depends(get_db)):
    j = db.query(Job).filter(Job.id == job_id).first()
    if not j: raise HTTPException(404, "Not found")
    return _fmt(j)

@router.post("/")
def create_job(data: dict, db: Session=Depends(get_db)):
    j = Job(**{k: v for k, v in data.items() if hasattr(Job, k)})
    db.add(j); db.commit(); db.refresh(j)
    return _fmt(j)

def _fmt(j):
    return {"id": j.id, "title": j.title, "description": j.description,
            "category": j.category, "work_format": j.work_format,
            "salary_min": j.salary_min, "salary_max": j.salary_max,
            "salary_currency": j.salary_currency, "required_skills": j.required_skills,
            "city": j.city, "is_active": j.is_active, "created_at": str(j.created_at),
            "company": {"id": j.company.id, "name": j.company.name, "verified": j.company.verified} if j.company else None}
