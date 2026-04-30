import{useState}from'react'
const C={rose:'#E8856A',roseL:'#FDF0EC',sage:'#4A7C6B',sageL:'#EAF3EE',cream:'#FAF8F5',gray:'#6B6560',dark:'#2C2420',gold:'#C9A96E',border:'#E8E4DF'}
const F={fontFamily:"'Outfit',sans-serif"}
const DS={fontFamily:"'DM Serif Display',serif"}
export default function EmployerDashboard({onBack}){
  const[view,setView]=useState('list')
  const[form,setForm]=useState({title:'',category:'IT',salary:'',format:'office',description:'',skills:''})
  const upd=k=>e=>setForm(p=>({...p,[k]:e.target.value}))
  const inp={width:'100%',padding:'9px 13px',border:`.5px solid ${C.border}`,borderRadius:9,...F,fontSize:13.5,background:C.cream,outline:'none',color:C.dark}
  return(
    <div style={{...F,background:C.cream,minHeight:'100vh'}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 2rem',height:58,background:'#fff',borderBottom:`.5px solid ${C.border}`}}>
        <div style={{...DS,fontSize:21,display:'flex',alignItems:'center',gap:7}}><div style={{width:8,height:8,background:C.rose,borderRadius:'50%'}}/>Istiqlol</div>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:34,height:34,borderRadius:'50%',background:C.sageL,color:C.sage,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,fontSize:13}}>C</div>
          <div><div style={{fontSize:14,fontWeight:500,display:'flex',alignItems:'center',gap:7}}>Click Technologies<span style={{background:'#EFF6FF',color:'#1D6FA5',fontSize:11,fontWeight:500,padding:'2px 9px',borderRadius:40}}>✓ Верифицировано</span></div><div style={{fontSize:12,color:C.gray}}>Работодатель · Ташкент</div></div>
        </div>
        <div style={{display:'flex',gap:10}}>
          <button onClick={()=>setView('list')} style={{background:'none',border:`.5px solid ${C.border}`,padding:'7px 16px',borderRadius:40,cursor:'pointer',fontSize:13,color:C.gray,...F}}>Мои вакансии</button>
          <button onClick={()=>setView('post')} style={{background:C.sage,color:'#fff',border:'none',padding:'9px 20px',borderRadius:40,cursor:'pointer',fontSize:13,fontWeight:500,...F}}>+ Разместить вакансию</button>
          <button onClick={onBack} style={{background:'none',border:`.5px solid ${C.border}`,padding:'7px 16px',borderRadius:40,cursor:'pointer',fontSize:13,color:C.gray,...F}}>← Выход</button>
        </div>
      </nav>
      <div style={{padding:'2rem',background:C.cream}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem',marginBottom:'2rem'}}>
          {[[12,'Активных вакансий',C.rose],[284,'Всего откликов',C.sage],[43,'Просмотры сегодня',C.dark],[8,'На рассмотрении',C.gold]].map(([n,l,clr])=>(
            <div key={l} style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:13,padding:'1.2rem'}}><div style={{...DS,fontSize:27,color:clr,marginBottom:3}}>{n}</div><div style={{fontSize:11.5,color:C.gray}}>{l}</div></div>
          ))}
        </div>
        {view==='list'&&<div style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,overflow:'hidden'}}>
          <div style={{padding:'1rem 1.4rem',borderBottom:`.5px solid ${C.border}`,fontSize:14.5,fontWeight:500}}>Ваши вакансии</div>
          {[['UX/UI Дизайнер','47 откликов','3 дня назад'],['Frontend Developer','89 откликов','7 дней назад'],['Product Manager','123 отклика','14 дней назад']].map(([t,r,d])=>(
            <div key={t} style={{padding:'1rem 1.4rem',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`.5px solid #f5f3f0`}}>
              <div><div style={{fontSize:14.5,fontWeight:500,marginBottom:3}}>{t}</div><div style={{fontSize:12,color:C.gray}}>Опубликовано {d} · {r}</div></div>
              <span style={{background:C.sageL,color:C.sage,fontSize:11.5,fontWeight:500,padding:'3px 11px',borderRadius:40}}>Активна</span>
            </div>
          ))}
        </div>}
        {view==='post'&&<div style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,padding:'1.5rem',maxWidth:700}}>
          <div style={{fontSize:17,fontWeight:500,marginBottom:'1.4rem'}}>Новая вакансия</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
            <div><label style={{fontSize:12.5,fontWeight:500,color:C.gray,display:'block',marginBottom:5}}>Название должности</label><input style={inp} placeholder="UX/UI Дизайнер" value={form.title} onChange={upd('title')}/></div>
            <div><label style={{fontSize:12.5,fontWeight:500,color:C.gray,display:'block',marginBottom:5}}>Категория</label><select style={inp} value={form.category} onChange={upd('category')}>{['IT','Маркетинг','Финансы','HR','Дизайн','Образование'].map(o=><option key={o}>{o}</option>)}</select></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
            <div><label style={{fontSize:12.5,fontWeight:500,color:C.gray,display:'block',marginBottom:5}}>Зарплата</label><input style={inp} placeholder="5 000 000 сум" value={form.salary} onChange={upd('salary')}/></div>
            <div><label style={{fontSize:12.5,fontWeight:500,color:C.gray,display:'block',marginBottom:5}}>Формат</label><select style={inp} value={form.format} onChange={upd('format')}>{['Офис','Удалённо','Гибрид'].map(o=><option key={o}>{o}</option>)}</select></div>
          </div>
          <div style={{marginBottom:'1rem'}}><label style={{fontSize:12.5,fontWeight:500,color:C.gray,display:'block',marginBottom:5}}>Описание</label><textarea style={{...inp,minHeight:100,resize:'vertical'}} placeholder="Опишите обязанности и требования..." value={form.description} onChange={upd('description')}/></div>
          <div style={{marginBottom:'1.5rem'}}><label style={{fontSize:12.5,fontWeight:500,color:C.gray,display:'block',marginBottom:5}}>Ключевые навыки</label><input style={inp} placeholder="Figma, Prototyping, User Research" value={form.skills} onChange={upd('skills')}/></div>
          <div style={{display:'flex',gap:10}}>
            <button onClick={()=>{alert('✅ Вакансия опубликована!');setView('list')}} style={{padding:'10px 24px',background:C.sage,color:'#fff',border:'none',borderRadius:40,...F,cursor:'pointer',fontWeight:500,fontSize:14}}>Опубликовать</button>
            <button onClick={()=>setView('list')} style={{padding:'10px 24px',background:'none',border:`.5px solid ${C.border}`,borderRadius:40,...F,cursor:'pointer',fontSize:14,color:C.gray}}>Отмена</button>
          </div>
        </div>}
      </div>
    </div>
  )
}
