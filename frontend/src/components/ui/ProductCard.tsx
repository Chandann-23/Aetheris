"use client";
import React from 'react';
import styles from '../../app/page.module.css';
import { useCartStore } from '@/store/useCartStore';

interface Product {
  title: string;
  desc: string;
  price: string;
  tag: string | null;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    const numericPrice = parseInt(product.price.replace(/[^\d]/g, ''), 10) || 0;
    addToCart({
      id: product.title.toLowerCase().replace(/\s+/g, '-'), // Stable ID based on title
      name: product.title,
      price: numericPrice,
      desc: product.desc,
      image: product.img
    });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.img} alt={product.title} />
        {product.tag && <span className={`${styles.badgeTag} font-label-mono`}>{product.tag}</span>}
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <div>
            <h4 className={`${styles.productTitle} font-headline-md`}>{product.title}</h4>
            <p className={`${styles.productDesc} font-label-mono`}>{product.desc}</p>
          </div>
          <span className={`${styles.productPrice} font-label-mono`}>{product.price}</span>
        </div>
        <button 
          className={`${styles.btnCart} font-label-mono`}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

