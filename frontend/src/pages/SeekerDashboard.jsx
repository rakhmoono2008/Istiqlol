import{useState}from'react'
import{JOBS,COURSES,BIOGRAPHIES}from'../services/data'
const C={rose:'#E8856A',roseL:'#FDF0EC',sage:'#4A7C6B',sageL:'#EAF3EE',cream:'#FAF8F5',gray:'#6B6560',dark:'#2C2420',gold:'#C9A96E',goldL:'#FBF4E8',border:'#E8E4DF'}
const F={fontFamily:"'Outfit',sans-serif"}
const DS={fontFamily:"'DM Serif Display',serif"}
const NAV=[{k:'home',i:'✦',l:'Главная'},{k:'courses',i:'◈',l:'Курсы'},{k:'biographies',i:'◎',l:'Биографии'},{k:'profile',i:'○',l:'Профиль'}]
export default function SeekerDashboard({onBack}){
  const[tab,setTab]=useState('home')
  const[pt,setPt]=useState('open')
  const[fs,setFs]=useState([])
  const tog=f=>setFs(p=>p.includes(f)?p.filter(x=>x!==f):[...p,f])
  const Card=({s,ch})=>(<div style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,padding:'1.2rem',cursor:'pointer',transition:'all .2s'}}
    onMouseEnter={e=>{e.currentTarget.style.borderColor=C.rose;e.currentTarget.style.transform='translateY(-2px)'}}
    onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform='none'}}>{ch}</div>)
  return(
    <div style={{...F,background:C.cream,minHeight:'100vh'}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 2rem',height:58,background:'#fff',borderBottom:`.5px solid ${C.border}`,position:'sticky',top:0,zIndex:200}}>
        <div style={{...DS,fontSize:21,display:'flex',alignItems:'center',gap:7}}><div style={{width:8,height:8,background:C.rose,borderRadius:'50%'}}/>Istiqlol</div>
        <div style={{display:'flex',gap:'2rem'}}>
          {NAV.map(({k,l})=><span key={k} onClick={()=>setTab(k)} style={{fontSize:14,color:tab===k?C.dark:C.gray,cursor:'pointer',padding:'4px 0',borderBottom:`2px solid ${tab===k?C.rose:'transparent'}`,transition:'all .2s'}}>{l}</span>)}
        </div>
        <button onClick={onBack} style={{background:'none',border:`.5px solid ${C.border}`,padding:'7px 16px',borderRadius:40,cursor:'pointer',fontSize:13,color:C.gray,...F}}>← Выход</button>
      </nav>
      <div style={{display:'grid',gridTemplateColumns:'220px 1fr',minHeight:'calc(100vh - 58px)'}}>
        <aside style={{background:'#fff',borderRight:`.5px solid ${C.border}`,padding:'1.25rem .875rem'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,padding:'.6rem .5rem',marginBottom:'1.25rem'}}>
            <div style={{width:38,height:38,borderRadius:'50%',background:C.roseL,color:C.rose,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,fontSize:14}}>М</div>
            <div><div style={{fontSize:14,fontWeight:500}}>Малика А.</div><div style={{fontSize:12,color:C.gray}}>Соискатель</div></div>
          </div>
          {NAV.map(({k,i,l})=><div key={k} onClick={()=>setTab(k)} style={{display:'flex',alignItems:'center',gap:9,padding:'9px 11px',borderRadius:10,fontSize:14,color:tab===k?C.rose:C.gray,background:tab===k?C.roseL:'transparent',fontWeight:tab===k?500:400,cursor:'pointer',marginBottom:3,transition:'all .15s'}}><span style={{width:18,textAlign:'center'}}>{i}</span>{l}</div>)}
        </aside>
        <main style={{padding:'2rem',background:C.cream}}>
          {tab==='home'&&<>
            <div style={{marginBottom:'1.75rem'}}><h2 style={{...DS,fontSize:27,marginBottom:3}}>Добро пожаловать, Малика 👋</h2><p style={{fontSize:13,color:C.gray}}>AI нашёл для вас 18 вакансий и 9 курсов сегодня</p></div>
            <div style={{background:'linear-gradient(135deg,#2c2420,#4a3830)',borderRadius:16,padding:'1.4rem 1.5rem',display:'flex',alignItems:'center',gap:'1.4rem',marginBottom:'1.75rem'}}>
              <div style={{width:46,height:46,background:C.rose,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>🤖</div>
              <div style={{flex:1}}><h3 style={{color:'#fff',fontSize:15,fontWeight:500,marginBottom:3}}>AI-рекомендации обновлены</h3><p style={{color:'rgba(255,255,255,.58)',fontSize:12.5}}>На основе навыков: UX Design, Figma, Prototyping</p></div>
              <div style={{background:'rgba(255,255,255,.1)',borderRadius:10,padding:'7px 15px',textAlign:'center'}}><div style={{color:C.gold,...DS,fontSize:26}}>94%</div><div style={{color:'rgba(255,255,255,.45)',fontSize:10.5}}>совпадение</div></div>
            </div>
            <div style={{display:'flex',gap:8,marginBottom:'1.5rem',flexWrap:'wrap'}}>
              {['Ташкент','Удалённо','Full-time','IT','Маркетинг','Дизайн'].map(f=><span key={f} onClick={()=>tog(f)} style={{padding:'5px 15px',borderRadius:40,fontSize:13,cursor:'pointer',border:`.5px solid ${fs.includes(f)?C.rose:C.border}`,background:fs.includes(f)?C.rose:'#fff',color:fs.includes(f)?'#fff':C.gray,transition:'all .15s'}}>{f}</span>)}
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1rem'}}><h3 style={{...DS,fontSize:22}}>Рекомендуемые вакансии</h3><span style={{fontSize:13,color:C.rose,cursor:'pointer',fontWeight:500}}>Смотреть все →</span></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'2rem'}}>
              {JOBS.map(j=><Card key={j.id}><div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.7rem'}}><div style={{width:42,height:42,borderRadius:10,background:C.sageL,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{j.emoji}</div><span style={{background:C.sageL,color:C.sage,fontSize:11.5,fontWeight:500,padding:'3px 9px',borderRadius:40}}>{j.match}% совпадение</span></div><div style={{fontSize:15,fontWeight:500,marginBottom:3}}>{j.title}</div><div style={{fontSize:12.5,color:C.gray,marginBottom:'.65rem'}}>{j.company}</div><div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:'.65rem'}}>{j.skills.map(s=><span key={s} style={{background:C.cream,border:`.5px solid ${C.border}`,borderRadius:5,padding:'2px 9px',fontSize:11.5,color:C.gray}}>{s}</span>)}</div><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:`.5px solid #f0ede8`,paddingTop:'.65rem'}}><span style={{fontSize:14,fontWeight:500}}>{j.salary}</span><span style={{fontSize:12,color:C.gray}}>{j.location}</span></div></Card>)}
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1rem'}}><h3 style={{...DS,fontSize:22}}>Рекомендуемые курсы</h3><span style={{fontSize:13,color:C.rose,cursor:'pointer',fontWeight:500}} onClick={()=>setTab('courses')}>Все курсы →</span></div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'.875rem'}}>
              {COURSES.slice(0,4).map(c=><div key={c.id} style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:14,overflow:'hidden',cursor:'pointer',transition:'all .2s'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e=>{e.currentTarget.style.transform='none'}}><div style={{height:72,background:c.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28}}>{c.emoji}</div><div style={{padding:'.75rem .9rem'}}><div style={{fontSize:10,fontWeight:600,textTransform:'uppercase',color:C.rose,letterSpacing:'.5px',marginBottom:4}}>{c.category}</div><div style={{fontSize:13,fontWeight:500,marginBottom:5,lineHeight:1.3}}>{c.title}</div><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:11,color:C.gray}}>{c.hours} ч.</span><span style={{background:C.goldL,color:C.gold,fontSize:10,fontWeight:500,padding:'2px 6px',borderRadius:4}}>✦ Серт.</span></div></div></div>)}
            </div>
          </>}
          {tab==='courses'&&<>
            <div style={{marginBottom:'1.75rem'}}><h2 style={{...DS,fontSize:27,marginBottom:3}}>Курсы и обучение</h2><p style={{fontSize:13,color:C.gray}}>Получите сертификаты и повысьте ценность профиля</p></div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
              {COURSES.map(c=><div key={c.id} style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,overflow:'hidden',cursor:'pointer',transition:'all .2s'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e=>{e.currentTarget.style.transform='none'}}><div style={{height:88,background:c.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:34}}>{c.emoji}</div><div style={{padding:'.9rem 1rem'}}><div style={{fontSize:10.5,fontWeight:600,textTransform:'uppercase',color:C.rose,letterSpacing:'.5px',marginBottom:5}}>{c.category}</div><div style={{fontSize:14,fontWeight:500,marginBottom:7,lineHeight:1.35}}>{c.title}</div><div style={{fontSize:12,color:C.gray,display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>{c.hours} часов</span><span style={{background:C.goldL,color:C.gold,fontSize:10.5,fontWeight:500,padding:'2px 8px',borderRadius:5}}>✦ Сертификат</span></div>{c.enrolled&&<div style={{height:3,background:'#f0ede8',borderRadius:3,marginTop:8,overflow:'hidden'}}><div style={{height:'100%',background:C.rose,width:`${c.progress}%`,borderRadius:3}}/></div>}<button style={{display:'block',width:'100%',marginTop:10,padding:8,borderRadius:8,border:`.5px solid ${C.rose}`,color:C.rose,background:'none',...F,fontSize:12.5,fontWeight:500,cursor:'pointer'}}>{c.enrolled&&c.progress>0?'Продолжить →':'Записаться →'}</button></div></div>)}
            </div>
          </>}
          {tab==='biographies'&&<>
            <div style={{marginBottom:'1.75rem'}}><h2 style={{...DS,fontSize:27,marginBottom:3}}>Истории успеха</h2><p style={{fontSize:13,color:C.gray}}>Вдохновляйтесь историями женщин Узбекистана</p></div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
              {BIOGRAPHIES.map(b=><div key={b.id} style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,padding:'1.25rem',textAlign:'center',cursor:'pointer',transition:'all .2s'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e=>{e.currentTarget.style.transform='none'}}><div style={{width:56,height:56,borderRadius:'50%',background:b.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,margin:'0 auto .75rem'}}>{b.emoji}</div><div style={{fontSize:14.5,fontWeight:500,marginBottom:3}}>{b.name}</div><div style={{fontSize:12,color:C.gray,marginBottom:'.7rem'}}>{b.role}</div><div style={{fontSize:12.5,color:C.gray,fontStyle:'italic',lineHeight:1.55}}>{b.quote}</div></div>)}
            </div>
          </>}
          {tab==='profile'&&<>
            <div style={{marginBottom:'1.75rem'}}><h2 style={{...DS,fontSize:27,marginBottom:3}}>Мой профиль</h2><p style={{fontSize:13,color:C.gray}}>Управляйте видимостью и информацией</p></div>
            <div style={{display:'grid',gridTemplateColumns:'255px 1fr',gap:'1.25rem'}}>
              <div style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,padding:'1.4rem',textAlign:'center'}}>
                <div style={{width:76,height:76,borderRadius:'50%',background:C.roseL,color:C.rose,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,fontWeight:500,margin:'0 auto .9rem'}}>М</div>
                <div style={{fontSize:17,fontWeight:500,marginBottom:3}}>Малика Азимова</div>
                <div style={{fontSize:12.5,color:C.gray,marginBottom:'.9rem'}}>UX Designer · Ташкент</div>
                <div style={{display:'flex',background:C.cream,borderRadius:9,padding:3,marginBottom:'.7rem'}}>
                  {['anon','open'].map(t=><button key={t} onClick={()=>setPt(t)} style={{flex:1,padding:'5px 7px',borderRadius:7,fontSize:12,cursor:'pointer',border:'none',background:pt===t?'#fff':'transparent',color:pt===t?C.dark:C.gray,fontWeight:pt===t?500:400,...F,transition:'all .15s'}}>{t==='anon'?'Анонимный':'Открытый'}</button>)}
                </div>
                <div style={{fontSize:11.5,color:C.gray,marginBottom:'1rem'}}>{pt==='open'?'Имя и фото видны работодателям':'Имя и фото скрыты'}</div>
                <div style={{fontSize:12.5,fontWeight:500,textAlign:'left',marginBottom:5}}>Навыки</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                  {['Figma','UX Research','Prototyping','Wireframing'].map(s=><span key={s} style={{background:C.roseL,color:C.rose,fontSize:11.5,padding:'3px 11px',borderRadius:40}}>{s}</span>)}
                </div>
              </div>
              <div>
                {[{t:'Опыт работы',items:[['🏢','Lead UX Designer','Click Technologies · 2022–н.в.'],['💡','UI Designer','Freelance · 2020–2022']]},{t:'Образование',items:[['🎓','Бакалавр · ИТ','ТАТУ · 2016–2020']]}].map(sec=><div key={sec.t} style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,padding:'1.25rem',marginBottom:'.875rem'}}><div style={{fontSize:14.5,fontWeight:500,marginBottom:'.9rem',display:'flex',justifyContent:'space-between'}}>{sec.t}<span style={{fontSize:12.5,color:C.rose,cursor:'pointer'}}>+ Добавить</span></div>{sec.items.map(([i,t,s])=><div key={t} style={{display:'flex',gap:11,marginBottom:'.9rem'}}><div style={{width:34,height:34,background:C.cream,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,flexShrink:0}}>{i}</div><div><div style={{fontSize:13.5,fontWeight:500}}>{t}</div><div style={{fontSize:12,color:C.gray}}>{s}</div></div></div>)}</div>)}
                <div style={{background:'#fff',border:`.5px solid ${C.border}`,borderRadius:15,padding:'1.25rem'}}><div style={{fontSize:14.5,fontWeight:500,marginBottom:'.9rem',display:'flex',justifyContent:'space-between'}}>Сертификаты<span style={{fontSize:12.5,color:C.rose,cursor:'pointer'}}>+ Добавить</span></div><div style={{display:'flex',gap:7,flexWrap:'wrap'}}>{['Google UX Design','Figma Advanced','Design Thinking'].map(c=><span key={c} style={{background:C.goldL,color:C.gold,fontSize:11,fontWeight:500,padding:'2px 8px',borderRadius:5}}>✦ {c}</span>)}</div></div>
              </div>
            </div>
          </>}
        </main>
      </div>
    </div>
  )
}
