import styles from "./styles.module.css"

function Footer() {
  return (
    <footer >
      <div className={styles.container_footer}>
        <div className={styles.container_footer_logo}>
            <div> 
              <img src="/logo.webp" alt="logo da barbearia" />
          </div>
        </div>
        <div className={styles.container_footer_midias}>
          <h1> Siga nossas redes sociais! </h1>
          <div className={styles.container_footer_midias_links}>
          <a href="https://wa.me/16993072783?text=Olá, gostaria de fazer um agendamento!"><img src="/whatts.webp" alt="" /></a>
          <a href="https://www.instagram.com/dom_luca_barbearia/"><img src="/insta.webp" alt="" /></a>
          <a href="http://www.facebook.com/domlucabarbearia/"><img src="/face.webp" alt="" /></a>
          <a href="tel:+5516993072783"
            target="_blank"
            rel="noopener noreferrer"><img src="/phone.webp" alt="" /></a>
          </div>
        </div>
      </div>
      <div className={styles.container_footer_copy}>
        <span >
          &copy; 2024 Todos os Direitos reservados a Dom Luca Barbearia - Desenvolvido por JS&G
        </span>
      </div>
    </footer >
  )
}

export default Footer
