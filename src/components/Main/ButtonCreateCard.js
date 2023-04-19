import '../../styles/layout/ButtonCreate.scss'

function ButtonCreateCard({ handle }) {

  const createCard = () => {
    handle()
  }

  return (
    <input
      className="btnLarge"
      type="submit"
      value="CREAR TARJETA"
      onClick={createCard}
    />
  )
}

export default ButtonCreateCard;