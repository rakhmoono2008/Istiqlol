from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.base import Profile

router = APIRouter()

@router.get("/{user_id}")
def get_profile(user_id: int, db: Session=Depends(get_db)):
    p = db.query(Profile).filter(Profile.user_id == user_id).first()
    if not p: raise HTTPException(404, "Not found")
    return _fmt(p)

@router.put("/{user_id}")
def update_profile(user_id: int, data: dict, db: Session=Depends(get_db)):
    p = db.query(Profile).filter(Profile.user_id == user_id).first()
    if not p:
        p = Profile(user_id=user_id)
        db.add(p)
    for k, v in data.items():
        if hasattr(p, k): setattr(p, k, v)
    db.commit(); db.refresh(p)
    return _fmt(p)

def _fmt(p):
    open_ = p.profile_type == "open"
    return {"user_id": p.user_id, "profile_type": p.profile_type,
            "first_name": p.first_name if open_ else None,
            "last_name": p.last_name if open_ else None,
            "photo_url": p.photo_url if open_ else None,
            "bio": p.bio, "skills": p.skills, "experience": p.experience,
            "education": p.education, "certificates": p.certificates, "city": p.city}
