

const ExportSectionHeading = () => {
  return (
    <div className="export-section-text">
      <h1>
        ԱՐՏԱՀԱՆՈՒՄ
      </h1>
      <p>
        Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները
        ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե
      </p>
    </div>
  )
}
const Card = (props) => {
  const { imgUrl, label } = props

  return (
    <div className="card">
      <img src={imgUrl} alt="card" />
      <p className="Card-text">{label}</p>
    </div>
  )
}

const CardsWrapper = () => {
  return (
    <div className="cards-wrapper">
      <Card
        imgUrl={'https://onex.am/img/pages/export/export_usa.jpg'}
        label={'Արտահանում ՀՀ-ից դեպի ԱՄՆ'}
      />
      <Card
        imgUrl={'https://onex.am/img/pages/export/export_rus.jpg'}
        label={'Արտահանում ՀՀ-ից դեպի Ռուսաստան'}
      />
      <Card
        imgUrl={'https://onex.am/img/docs.svg'}
        label={'Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ'}
      />
    </div>
  )
}

const ExportSection = () => {
  return (
    <div className="export-section">
      <ExportSectionHeading />
      <CardsWrapper />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ExportSection />
    </div>
  );
}

export default App;
