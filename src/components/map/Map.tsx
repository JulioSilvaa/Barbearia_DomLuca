import Location from "../location/Location"
import styles from "./styles.module.css"
import { Phone, Clock8, MapPin, MessageCircle, Mail } from 'lucide-react'

function Map() {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.container_footer_main}>
        <div className={styles.container_footer_info}>
          <h3>Fale conosco</h3>
          <p>Estamos sempre a disposição para esclarecer qualquer dúvida.</p>
          <p><span className="icon"><Clock8 color="white" /></span> seg a sab das 9:00 ás 21:00</p>
          <p><span className="icon"><Phone color="white" /></span>(16) 9 93072783</p>
          <p><span className="icon"><MapPin color="white" /></span>Av. Otto Wener Rosel, 1391</p>
          <p><span className="icon"><MessageCircle color="white" /></span>(16) 9 93072783</p>
          <p><span className="icon"><Mail color="white" /></span>domlucabarbearia@gmail.com</p>
        </div>
        <div className={styles.container_footer_info_map}>
          <Location />
        </div>
      </div>
    </footer>
  )
}

export default Map
