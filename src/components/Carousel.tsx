import { useState } from "react";

const carouselImages = [
  {
    id: 0,
    name: "carousel_1",
    URL: "https://images.unsplash.com/photo-1722329907664-f0d07d670721?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "carousel_2",
    URL: "https://images.unsplash.com/photo-1722325057587-b7cf43890d68?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "carousel_3",
    URL: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(0);
  const onActivePrev = (id: number) => {
    if (id === 0) {
      setActiveImage(carouselImages.length - 1);
    } else {
      setActiveImage(id - 1);
    }
  };
  const onActiveNext = (id: number) => {
    if (id === carouselImages.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(id + 1);
    }
  };

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          {carouselImages.map((image) => (
            <div key={image.id}>
              <input
                type="radio"
                name="radio-buttons"
                id={image.name}
                checked={activeImage === image.id}
                readOnly
              />
              <li className="carousel__slide-container">
                <div className="carousel__slide-img">
                  <img src={image.URL} alt={`IMAGE_${image.id}`} />
                </div>
                <div className="carousel__controls">
                  <label
                    className="carousel__slide-prev"
                    onClick={() => onActivePrev(image.id)}
                  >
                    <span>&lsaquo;</span>
                  </label>
                  <label
                    className="carousel__slide-next"
                    onClick={() => onActiveNext(image.id)}
                  >
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div className="carousel__dots">
                {Array(carouselImages.length)
                  .fill(null)
                  .map((_, index) => (
                    <label
                      key={index}
                      className="carousel__dot"
                      id={`img-dot-${index}`}
                      onClick={() => setActiveImage(index)}
                    ></label>
                  ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
