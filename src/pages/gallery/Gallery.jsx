import Header from '../../components/header/Header'
import Image from '../../images/header_bg_3.jpg'
import './gallery.css'
function Gallery() {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title='Gallery' image={Image} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti corrupti nam iure asperiores ipsa fugiat eos sapiente, ea reprehenderit expedita providen
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return <article key={index}>
                     <img src={image} alt={` gallery image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery
