from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.base import Job, Profile
import math

router = APIRouter()

def cosine_sim(a, b):
    if not a or not b: return 0.0
    sa, sb = set(x.lower() for x in a), set(x.lower() for x in b)
    inter = sa & sb
    return len(inter) / math.sqrt(len(sa) * len(sb)) if inter else 0.0

@router.get("/")
def get_recommendations(user_id: int=Query(...), limit: int=10, db: Session=Depends(get_db)):
    profile = db.query(Profile).filter(Profile.user_id == user_id).first()
    if not profile: return []
    user_tags = (profile.skills or []) + (profile.certificates or [])
    scored = []
    for job in db.query(Job).filter(Job.is_active == True).all():
        score = cosine_sim(user_tags, job.required_skills or [])
        if score > 0:
            scored.append({
                "job_id": job.id, "title": job.title,
                "company_name": job.company.name if job.company else "—",
                "company_verified": job.company.verified if job.company else False,
                "match_percent": round(score * 100),
                "work_format": job.work_format, "city": job.city,
                "salary_min": job.salary_min, "salary_max": job.salary_max,
                "required_skills": job.required_skills,
            })
    return sorted(scored, key=lambda x: x["match_percent"], reverse=True)[:limit]
