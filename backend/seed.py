import sys; sys.path.insert(0, '.')
from app.core.database import SessionLocal
from app.models.base import Course, Biography

db = SessionLocal()
courses = [
    Course(title="UX Research & Design", category="Дизайн", duration_hours=42, has_certificate=True, related_skills=["Figma","UX","Prototyping"]),
    Course(title="Python для аналитиков", category="Программирование", duration_hours=60, has_certificate=True, related_skills=["Python","Pandas","SQL"]),
    Course(title="Digital Marketing Pro", category="Маркетинг", duration_hours=35, has_certificate=True, related_skills=["SMM","SEO","Analytics"]),
    Course(title="Лидерство для женщин", category="Мягкие навыки", duration_hours=18, has_certificate=True, related_skills=["Leadership","Communication"]),
    Course(title="Финансовая грамотность", category="Финансы", duration_hours=24, has_certificate=True, related_skills=["Finance","Excel"]),
    Course(title="Управление персоналом", category="HR", duration_hours=48, has_certificate=True, related_skills=["HR","Recruitment"]),
    Course(title="Облачные технологии", category="IT", duration_hours=30, has_certificate=True, related_skills=["Cloud","AWS"]),
    Course(title="Свой бизнес с нуля", category="Бизнес", duration_hours=52, has_certificate=True, related_skills=["Business","Marketing"]),
    Course(title="Деловой английский", category="Языки", duration_hours=40, has_certificate=True, related_skills=["English"]),
]
biographies = [
    Biography(name="Нилуфар Рашидова", role="CEO", company="TechUz Solutions", quote="Главное — не бояться начинать", is_published=True),
    Biography(name="Дилрабо Юсупова", role="Data Scientist", company="AI Lab UZ", quote="Технологии не имеют пола", is_published=True),
    Biography(name="Камола Азимова", role="Creative Director", company="Adept Agency", quote="Творчество открыло мне двери", is_published=True),
    Biography(name="Зулайхо Мирзаева", role="Chief Medical Officer", company="UzMedGroup", quote="Образование нельзя отнять", is_published=True),
    Biography(name="Муаззам Хасанова", role="CTO", company="Startup Hub", quote="Код не делает различий", is_published=True),
    Biography(name="Барно Турсунова", role="Professor", company="TUIT", quote="Я учу вдохновлённых женщин", is_published=True),
]
try:
    db.add_all(courses + biographies)
    db.commit()
    print(f"✅ {len(courses)} курсов, {len(biographies)} биографий")
except Exception as e:
    db.rollback(); print(f"❌ {e}")
finally:
    db.close()
