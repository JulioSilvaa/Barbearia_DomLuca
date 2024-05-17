import styles from "./styles.module.css"
function Location() {
  return (
    <section className={styles.container_map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14798.284718091467!2d-47.93171590238846!3d-21.989415227285065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87b7b7da60617%3A0xab860e21fdb65ba6!2sDom%20Luca%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1715521837926!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Location;
