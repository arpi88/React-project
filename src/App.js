const Card = ()=>{
  return(
    <div className="Card-wrapper">
    <div className="Card-wrapper-text">
    <h1>
    ԱՐՏԱՀԱՆՈՒՄ
    </h1>
    <p1>Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները
    ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե  </p1>
    </div>
    <div className="Cards-section">
    <div className="Card1">
      <img src="https://onex.am/img/pages/export/export_usa.jpg"className="img1" alt="Card1" /> 
      <p className="Card-text">Արտահանում ՀՀ-ից դեպի ԱՄՆ</p>
    </div>
    <div className="Card2">
      <img src="https://onex.am/img/pages/export/export_rus.jpg"  className="img2"alt="Card2" />
      <p className="Card-text">Արտահանում ՀՀ-ից դեպի Ռուսաստան</p>
    </div>
    <div className="Card3">
      <img src="https://onex.am/img/docs.svg"className="img3"alt="Card3" />
      <p className="Card-text3">Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ</p>

    </div>
    </div>
    </div>
  );
}




function App() {
    return (
    <div className="App"> 
    <Card/>
    </div>
    );
}

export default App;
