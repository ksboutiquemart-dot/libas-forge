interface CollectionBannerProps {
  title: string;
  image: string;
  link: string;
  className?: string;
}

const CollectionBanner = ({ title, image, link, className = "" }: CollectionBannerProps) => {
  return (
    <a 
      href={link} 
      className={`block group overflow-hidden ${className}`}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold tracking-wide">{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default CollectionBanner;