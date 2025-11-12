import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

const ProductImage = ({ alt, src }) => {
  const [isError, setIsError] = useState(false);
  const isValidUrl = src && (src.startsWith('http') || src.startsWith('https'));

  useEffect(() => {
    setIsError(false);
  }, [src]);

  if (isError || !isValidUrl) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gray-100 flex items-center justify-center">
        <ImageOff className="w-12 h-12 text-gray-400" />
      </div>
    );
  }

  return <img className="absolute inset-0 w-full h-full object-contain drop-shadow-lg" alt={alt} src={src} onError={() => setIsError(true)} />;
};

const ProductCard = ({ product, index }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleBuyNow = () => {
    const phoneNumber = '556282309207';
    const message = `Olá! Tenho interesse no produto: ${product.name}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentImages = product.images;

  const changeImage = (direction) => {
    if (direction === 'next') {
      setImageIndex((prev) => (prev + 1) % currentImages.length);
    } else {
      setImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="bg-gray-50 rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col group"
    >
      <div className="relative bg-white aspect-square w-full overflow-hidden">
        <AnimatePresence initial={false} custom={imageIndex}>
          <motion.div
            key={imageIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <ProductImage
              alt={`${product.name} - Imagem ${imageIndex + 1}`}
              src={currentImages[imageIndex]}
            />
          </motion.div>
        </AnimatePresence>
        
        {currentImages.length > 1 && (
            <>
                <button
                    onClick={() => changeImage('prev')}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/50"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => changeImage('next')}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/50"
                >
                    <ChevronRight size={20} />
                </button>
            </>
        )}

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {currentImages.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === imageIndex ? 'bg-black' : 'bg-gray-300'}`}
              />
            ))}
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-black mb-1 truncate">
          {product.name}
        </h3>
        
        <div className="mb-4">
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              De {product.oldPrice}
            </span>
          )}
          <p className="text-xl font-extrabold text-black">
             por {product.price}
             <span className="text-base font-semibold text-gray-700"> à vista</span>
          </p>
        </div>

        <div className="mt-auto pt-2">
            <motion.button
            whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 8px #B8860B)' }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBuyNow}
            className="w-full bg-black text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-gray-800 transition-all"
            >
            <ShoppingCart className="w-5 h-5" />
            Compre Aqui
            </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;