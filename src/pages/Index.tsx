import Header from "@/components/Header";
import CollectionBanner from "@/components/CollectionBanner";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const collections = [
    { title: "MALKA", image: "/api/placeholder/400/500", link: "/collections/malka" },
    { title: "TAAL", image: "/api/placeholder/400/500", link: "/collections/taal" },
    { title: "MOHINI", image: "/api/placeholder/400/500", link: "/collections/mohini" },
    { title: "ONE OF A KIND", image: "/api/placeholder/400/500", link: "/collections/one-of-a-kind" },
    { title: "JULOOS", image: "/api/placeholder/400/500", link: "/collections/juloos" },
    { title: "CLIENT DIARIES", image: "/api/placeholder/400/500", link: "/collections/client-diaries" },
    { title: "BAGS", image: "/api/placeholder/400/500", link: "/collections/bags" },
    { title: "THE PERFECT PAIRING", image: "/api/placeholder/400/500", link: "/collections/perfect-pairing" }
  ];

  const featuredProducts = [
    {
      title: "Kiara Advani In Our Raasleela Shyama Lehenga Choli Set",
      price: "$5,895.05",
      image: "/api/placeholder/400/600"
    },
    {
      title: "Janhvi Kapoor in our Sagar Poshaki Angia Saree Set", 
      price: "$2,281.40",
      image: "/api/placeholder/400/600"
    },
    {
      title: "Shilpa Shetty in our Custom Rani Saesha Saree Set",
      price: "$3,456.78",
      image: "/api/placeholder/400/600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Collections Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {collections.map((collection, index) => (
            <CollectionBanner
              key={collection.title}
              title={collection.title}
              image={collection.image}
              link={collection.link}
              className="aspect-square"
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-primary-foreground">T</span>
          </div>
          <p className="text-muted-foreground mb-4">Luxury Fashion Designer | Designer Bridal Clothing</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
