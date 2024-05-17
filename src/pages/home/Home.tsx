import Services from '@/components/services/Services';


import styles from './styles.module.css';
import ImageGallery from '@/components/imageGallery/ImageGallery';

function Home() {
  return (
    <main className={styles.container_home}>
      <article className={styles.container_home_banner}>
        <section className={styles.container_home_welcome}>
          <div>
            <h1>Dom Luca: O Refúgio da Tradição e Estilo</h1>
            <p>
              Desde 2016, a Don Luca Barber Shop tem sido o ponto de encontro para os homens que
              buscam estilo e tradição na movimentada rua Otto Werner Rosel. Em nossa galeria de
              lojas, oferecemos mais do que cortes impecáveis - proporcionamos uma experiência
              única, onde cada cliente é recebido com um sorriso e um corte de cabelo feito com
              carinho e atenção aos detalhes.
            </p>
            <p>
              Junte-se à família Don Luca e descubra o verdadeiro significado de uma barbearia.
              Agende já o seu horário e venha fazer parte da nossa história de estilo e camaradagem.
            </p>
            <button>AGENDE SEU HORARIO AGORA MESMO</button>
          </div>
        </section>
      </article>
      <Services />
      <ImageGallery />
    </main>
  );
}

export default Home;
