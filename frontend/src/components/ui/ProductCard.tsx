"use client";
import React from 'react';
import styles from '../../app/page.module.css';

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
        <button className={`${styles.btnCart} font-label-mono`}>ADD TO CART</button>
      </div>
    </div>
  );
}
