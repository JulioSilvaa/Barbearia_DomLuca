import styles from "./styles.module.css"

function ImageGallery() {
  const imageList = [
    {
      "id": "1",
      "url": "/image.webp"
    },
    {
      "id": "2",
      "url": "/image2.webp"
    },
    {
      "id": "3",
      "url": "/image3.webp"
    },
    {
      "id": "4",
      "url": "/image4.webp"
    },
    {
      "id": "5",
      "url": "/image5.webp"
    },
    {
      "id": "6",
      "url": "/image6.webp"
    },

  ]


  return (
    <div className={styles.container_imageGallery}>
      <h1>Conheça um pouco do nosso trabalho</h1>
      <div className={styles.container_imageGallery_img}>
        {imageList.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="Imagens da Galeria" />
          </div>
        ))}
      </div>
      <div className={styles.container_imageGallery_button}>
        <button>AGENDE SEU HORARIO AGORA MESMO</button>
      </div>
    </div>
  )
}

export default ImageGallery

