import { useState } from 'react'
const C={rose:'#E8856A',roseL:'#FDF0EC',sage:'#4A7C6B',sageL:'#EAF3EE',cream:'#FAF8F5',gray:'#6B6560',dark:'#2C2420',border:'#E8E4DF'}
const F={fontFamily:"'Outfit',sans-serif"}
export default function LandingPage({onSelect}){
  const [hov,setHov]=useState(null)
  return(
    <div style={{...F,background:C.cream,minHeight:'100vh'}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 2rem',height:58,background:'#fff',borderBottom:`.5px solid ${C.border}`}}>
        <div style={{fontFamily:"'DM Serif Display',serif",fontSize:21,display:'flex',alignItems:'center',gap:7}}>
          <div style={{width:8,height:8,background:C.rose,borderRadius:'50%'}}/>Istiqlol
        </div>
        <button onClick={()=>onSelect('seeker')} style={{padding:'9px 22px',borderRadius:40,border:'none',background:C.rose,color:'#fff',...F,fontSize:14,fontWeight:500,cursor:'pointer'}}>Войти через One ID</button>
      </nav>
      <div style={{maxWidth:920,margin:'0 auto',padding:'5rem 2rem 2.5rem',textAlign:'center'}}>
        <div style={{display:'inline-block',background:C.roseL,color:C.rose,fontSize:12,fontWeight:500,padding:'5px 16px',borderRadius:40,marginBottom:'1.5rem'}}>✦ Платформа только для женщин Узбекистана</div>
        <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:52,lineHeight:1.13,marginBottom:'1.4rem'}}>Карьера, которую<br/>заслуживаете <em style={{color:C.rose,fontStyle:'italic'}}>вы</em></h1>
        <p style={{fontSize:17,color:C.gray,lineHeight:1.75,maxWidth:560,margin:'0 auto 2.5rem',fontWeight:300}}>Умные AI-рекомендации, государственная верификация и сообщество поддержки для каждой женщины</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',maxWidth:660,margin:'0 auto'}}>
          {[{role:'seeker',icon:'👩',title:'Я ищу работу',desc:'AI подберёт вакансии по вашим навыкам и опыту',acc:C.rose,bg:C.roseL},{role:'employer',icon:'🏢',title:'Я работодатель',desc:'Разместите вакансию и найдите квалифицированных сотрудников',acc:C.sage,bg:C.sageL}].map(c=>(
            <div key={c.role} onClick={()=>onSelect(c.role)} onMouseEnter={()=>setHov(c.role)} onMouseLeave={()=>setHov(null)}
              style={{background:'#fff',border:`.5px solid ${hov===c.role?c.acc:C.border}`,borderRadius:20,padding:'2rem 1.5rem 1.75rem',cursor:'pointer',transition:'all .25s',textAlign:'left',position:'relative',transform:hov===c.role?'translateY(-5px)':'none',boxShadow:hov===c.role?'0 14px 36px rgba(0,0,0,.1)':'none'}}>
              <div style={{width:50,height:50,borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,marginBottom:'1rem',background:c.bg}}>{c.icon}</div>
              <h3 style={{fontSize:17,fontWeight:500,marginBottom:5}}>{c.title}</h3>
              <p style={{fontSize:13,color:C.gray,lineHeight:1.5}}>{c.desc}</p>
              <span style={{position:'absolute',right:'1.5rem',bottom:'1.5rem',color:c.acc,fontSize:18}}>→</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:'4rem',padding:'2.5rem 2rem',borderTop:`.5px solid ${C.border}`,maxWidth:920,margin:'2.5rem auto 0'}}>
        {[['12 400+','активных вакансий'],['8 200','соискателей'],['940','компаний'],['320+','курсов']].map(([n,l])=>(
          <div key={l} style={{textAlign:'center'}}>
            <div style={{fontFamily:"'DM Serif Display',serif",fontSize:34,color:C.dark}}>{n}</div>
            <div style={{fontSize:13,color:C.gray,marginTop:3}}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
