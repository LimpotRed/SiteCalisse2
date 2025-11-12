import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const TrendingProducts = ({ products }) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const extendedProducts = products.length > 0 ? [...products, ...products, ...products] : [];

  const handleInteractionStart = () => {
    setIsInteracting(true);
    controls.stop();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  };
  
  useEffect(() => {
    const startAnimation = () => {
        const totalWidth = (containerRef.current?.scrollWidth || 0) / 3;
        if (totalWidth > 0 && !isInteracting) {
           controls.start({
            x: -totalWidth,
            transition: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          });
        }
    };
    
    startAnimation();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      controls.stop();
    };
  }, [isInteracting, controls, products]);


  const totalWidth = (containerRef.current?.scrollWidth || 0) / 3;

  return (
    <div className="py-12 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">Em Alta</h2>
        <p className="mt-2 text-lg text-gray-500">Confira nossos produtos mais vendidos.</p>
      </div>

      <motion.div
        ref={containerRef}
        className="w-full cursor-grab"
        drag="x"
        dragConstraints={{ left: -totalWidth * 2, right: 0 }}
        dragElastic={0.05}
        onDragStart={handleInteractionStart}
        onDragEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-8 px-4"
          animate={controls}
        >
          {extendedProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[300px]">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default TrendingProducts;