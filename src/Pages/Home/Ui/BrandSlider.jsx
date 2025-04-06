const brands = [
  { src: "/assets/partners/image1.png" },
  { src: "/assets/partners/image2.png" },
  { src: "/assets/partners/image3.png" },
  { src: "/assets/partners/image4.png" },
  { src: "/assets/partners/image5.png" },
  { src: "/assets/partners/image6.png" },
  { src: "/assets/partners/image7.png" },
  { src: "/assets/partners/image8.png" },
  { src: "/assets/partners/image9.png" },
  { src: "/assets/partners/image10.png" },
  { src: "/assets/partners/image11.png" },
  { src: "/assets/partners/image12.png" },
  { src: "/assets/partners/image13.png" },
  { src: "/assets/partners/image14.png" },
  { src: "/assets/partners/image15.png" },
  { src: "/assets/partners/image16.png" },
];

export default function BrandGrid() {
  return (
    <div className="flex flex-col items-center space-y-4 py-6">
    <h3 className="text-red-600 text-center font-bold text-lg uppercase" style={{color:'red',marginBottom:"18px"}}  >
      Power Packed With World-Class Brands
    </h3>
    
    {/* Grid Layout for Images */}
    <div className="grid grid-cols-5 gap-4 w-full max-w-4xl">
      {brands.map((brand, i) => (
        <img key={i} src={brand.src} alt={`Brand ${i + 1}`} className="w-full h-auto m-1" />
      ))}
    </div>
  </div>
  );
}
