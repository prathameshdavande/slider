import { useState } from "react";

const images = [
  // "https://random.imagecdn.app/500/150",
  // "https://random.imagecdn.app/500/150",
  // "https://random.imagecdn.app/500/150",
  { imgId: 1, img: "https://random.imagecdn.app/500/150" },
  { imgId: 2, img: "https://random.imagecdn.app/500/150" },
  { imgId: 3, img: "https://random.imagecdn.app/500/150" },
];

export default function App() {
  const [sliderImages, setSliderImages] = useState(images);

  function handleArrowLeft() {
    return setSliderImages(images.map((img, i) => i - 1));
  }
  function handleArrowRight() {
    return setSliderImages(images.map((img, i) => i + 1));
  }

  return (
    <div className="app">
      <Cards
        sliderImages={sliderImages}
        onArrowLeft={handleArrowLeft}
        onArrowRight={handleArrowRight}
      />
    </div>
  );
}

function Cards({ sliderImages, onArrowLeft, onArrowRight }) {
  return (
    <div className="cards">
      {sliderImages.map((sliderImage, i) => (
        <Card
          sliderImage={sliderImage}
          key={sliderImage.id}
          onArrowLeft={onArrowLeft}
          onArrowRight={onArrowRight}
        />
      ))}
    </div>
  );
}

function Card({ sliderImage, onArrowLeft, onArrowRight }) {
  return (
    <div>
      <div className="card">
        <span onClick={onArrowLeft}>
          <i class="gg-push-chevron-left"></i>
        </span>
        <img src={sliderImage.img} alt="abc" />
        <span onClick={onArrowRight}>
          <i class="gg-push-chevron-right"></i>
        </span>
      </div>
    </div>
  );
}
