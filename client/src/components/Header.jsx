export default function Header() { 
  return ( 
    <header className="topbar"> 
      <div> 
        <p className="eyebrow">Учебный проект</p> 
        <h1>Вам не рады в TaskFlow</h1> 
        <p className="subtitle">Здесь будут собраны ваши штрафы и судимости. Их пока нет, но они обязательно появятся))).</p> 
      </div> 
  
      <button className="primaryButton" type="button"> 
        + Новая задача 
      </button> 
    </header> 
  ); 
 
}