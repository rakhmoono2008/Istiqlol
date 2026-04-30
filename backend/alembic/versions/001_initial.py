"""initial tables
Revision ID: 001_initial
Revises:
Create Date: 2024-01-01
"""
from alembic import op
import sqlalchemy as sa

revision = '001_initial'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('users',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('one_id_sub', sa.String(), unique=True, nullable=True),
        sa.Column('email', sa.String(), unique=True, nullable=True),
        sa.Column('role', sa.String(), default='seeker'),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()')),
    )
    op.create_table('companies',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('user_id', sa.Integer(), sa.ForeignKey('users.id'), unique=True),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('description', sa.Text()),
        sa.Column('website', sa.String()),
        sa.Column('phone', sa.String()),
        sa.Column('address', sa.String()),
        sa.Column('logo_url', sa.String()),
        sa.Column('verified', sa.Boolean(), default=False),
    )
    op.create_table('profiles',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('user_id', sa.Integer(), sa.ForeignKey('users.id'), unique=True),
        sa.Column('first_name', sa.String()),
        sa.Column('last_name', sa.String()),
        sa.Column('photo_url', sa.String()),
        sa.Column('profile_type', sa.String(), default='open'),
        sa.Column('bio', sa.Text()),
        sa.Column('skills', sa.JSON()),
        sa.Column('experience', sa.JSON()),
        sa.Column('education', sa.JSON()),
        sa.Column('certificates', sa.JSON()),
        sa.Column('location_lat', sa.Float()),
        sa.Column('location_lng', sa.Float()),
        sa.Column('city', sa.String()),
    )
    op.create_table('jobs',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('company_id', sa.Integer(), sa.ForeignKey('companies.id'), nullable=True),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('description', sa.Text()),
        sa.Column('category', sa.String()),
        sa.Column('work_format', sa.String(), default='office'),
        sa.Column('salary_min', sa.Integer()),
        sa.Column('salary_max', sa.Integer()),
        sa.Column('salary_currency', sa.String(), default='UZS'),
        sa.Column('required_skills', sa.JSON()),
        sa.Column('city', sa.String()),
        sa.Column('location_lat', sa.Float()),
        sa.Column('location_lng', sa.Float()),
        sa.Column('is_active', sa.Boolean(), default=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()')),
    )
    op.create_table('courses',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('description', sa.Text()),
        sa.Column('category', sa.String()),
        sa.Column('duration_hours', sa.Integer()),
        sa.Column('has_certificate', sa.Boolean(), default=True),
        sa.Column('thumbnail_url', sa.String()),
        sa.Column('url', sa.String()),
        sa.Column('related_skills', sa.JSON()),
    )
    op.create_table('biographies',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('role', sa.String()),
        sa.Column('company', sa.String()),
        sa.Column('quote', sa.Text()),
        sa.Column('story', sa.Text()),
        sa.Column('photo_url', sa.String()),
        sa.Column('is_published', sa.Boolean(), default=True),
    )

def downgrade():
    for t in ['biographies','courses','jobs','profiles','companies','users']:
        op.drop_table(t)
