import styles from './styles.module.css';

function Services() {
  return (
    <article className={styles.services_container}>
      <h1>Nossos Serviços</h1>
      <section className={styles.services_container_cards}>
        <section className={styles.services_card}>
          <img src="/barba-homen1.webp" alt="imagem ficticia de um serviço" />
          <h2>Serviço</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit cumque earum
            temporibus cupiditate quia qui unde, nostrum sapiente saepe enim dolorum placeat
            repudiandae? Quos veritatis suscipit velit tenetur molestiae?
          </p>
        </section>
        <section className={styles.services_card}>
          <img src="/barba1.webp" alt="imagem ficticia de um serviço" />
          <h2>Serviço</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit cumque earum
            temporibus cupiditate quia qui unde, nostrum sapiente saepe enim dolorum placeat
            repudiandae? Quos veritatis suscipit velit tenetur molestiae?
          </p>
        </section>
        <section className={styles.services_card}>
          <img src="/cabeo-homen.webp" alt="imagem ficticia de um serviço" />
          <h2>Serviço</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit cumque earum
            temporibus cupiditate quia qui unde, nostrum sapiente saepe enim dolorum placeat
            repudiandae? Quos veritatis suscipit velit tenetur molestiae?
          </p>
        </section>
      </section>
    </article>
  );
}

export default Services;
