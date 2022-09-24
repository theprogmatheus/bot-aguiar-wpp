import Style from './style.module.scss';

const HomePage = () => {
  return (
    <div className={Style.container}>

      <div className={Style.brand}>
        <h1 className={Style.brandTitle}>Bot Aguiar</h1>
        <p className={Style.brandDescription}>
          Bot Aguiar, é um bot de WhatsApp open-source desenvolvido por
          Matheus Aguiar <a target="_blank" href="https://github.com/theprogmatheus">@theprogmatheus</a>,
          inicialmente para Desktop (Windows), usando tecnologias como
          Node, Electron e React.js.
        </p>
        <p className={Style.brandDescription}>
          Para começar a usar o Bot, você precisa escanear o QR-Code ao lado com o seu WhatsApp.
        </p>
      </div>

    </div>
  )
}

export default HomePage