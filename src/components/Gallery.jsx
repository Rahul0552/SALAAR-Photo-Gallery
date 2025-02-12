function Gallery() {
  const images = [
    "/src/assets/r1.jpg",
    "/src/assets/r2.jpg",
    "/src/assets/r3.jpg",
    "/src/assets/r4.jpg",
    "/src/assets/r5.jpeg",
    "/src/assets/mi.jpg",
    "/src/assets/v1.jpg",
    "/src/assets/v2.jpg",
    "/src/assets/v3.jpg",
    "/src/assets/v4.jpg",
    "/src/assets/v5.png",
  ];

  return (
    <main className="grid">
      {images.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt={`Sample photo ${index + 1}`}
        />
      ))}
    </main>
  );
}

export default Gallery;