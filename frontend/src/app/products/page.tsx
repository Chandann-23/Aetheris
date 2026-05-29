"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import { useCartStore } from '@/store/useCartStore';

export default function Products() {
  const addToCart = useCartStore((state) => state.addToCart);
  
  // Track dynamic category filter selection: 'all' | 'electronics' | 'smarthome' | 'apparel' | 'devtech'
  const [activeCategory, setActiveCategory] = useState<'all' | 'electronics' | 'smarthome' | 'apparel' | 'devtech'>('all');

  const products = [
    // ==========================================
    // ELECTRONICS CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "boat-rockerz-450",
      name: "boAt Rockerz 450",
      price: "₹1,499",
      desc: "Comfortable Bluetooth wireless over-ear headphones with 15 hours of playback and immersive sound.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      category: "electronics",
      badge: "New Release"
    },
    {
      id: "jbl-go-3",
      name: "JBL Go 3 Speaker",
      price: "₹2,499",
      desc: "Ultra-portable waterproof Bluetooth speaker delivering surprisingly big audio and punchy bass.",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
      category: "electronics",
      badge: "Featured"
    },
    {
      id: "logitech-pebble-m350",
      name: "Logitech Pebble Mouse",
      price: "₹1,295",
      desc: "Modern, slim, and silent wireless click mouse designed for portable high-productivity workspace setups.",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
      category: "electronics"
    },
    {
      id: "tplink-usbc-hub",
      name: "TP-Link 7-in-1 USB-C Hub",
      price: "₹1,899",
      desc: "Premium multi-port adapter expanding workspace laptop ports with HDMI, USB-A, and SD card readers.",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=600&q=80",
      category: "electronics"
    },
    {
      id: "oneplus-nord-buds-2r",
      name: "OnePlus Nord Buds 2r",
      price: "₹1,999",
      desc: "True wireless earbuds featuring 12.4mm dynamic drivers, dual mics, and 38 hours of total playback.",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
      category: "electronics",
      badge: "Popular"
    },
    {
      id: "portronics-ruffpad-15",
      name: "Portronics Ruffpad 15\"",
      price: "₹899",
      desc: "Re-writable LCD writing tablet designed for quick monospaced sketch outlines and creative brainstorming.",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
      category: "electronics"
    },
    {
      id: "anker-powerport-3",
      name: "Anker PowerPort III 20W",
      price: "₹1,199",
      desc: "Ultra-compact Gallium Nitride fast charger optimized for rapid phone and accessory power routing.",
      image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80",
      category: "electronics"
    },
    {
      id: "sandisk-ultra-dual-drive",
      name: "SanDisk Dual Drive 128GB",
      price: "₹1,099",
      desc: "High-speed USB Type-A and Type-C flash drive for seamless workspace data transfers and offline backups.",
      image: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80",
      category: "electronics"
    },

    // ==========================================
    // SMART HOME CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "philips-hue-smart-bulb",
      name: "Philips Hue 9W Smart Bulb",
      price: "₹1,999",
      desc: "Premium smart lighting bulb with millions of dimmable colors for fine ambient environment tuning.",
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80",
      category: "smarthome",
      badge: "Pro Choice"
    },
    {
      id: "wipro-16a-smart-plug",
      name: "Wipro 16A Smart Plug",
      price: "₹999",
      desc: "High-power smart energy connector with micro-power consumption and scheduling utilities.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=600&q=80",
      category: "smarthome"
    },
    {
      id: "tplink-tapo-c100",
      name: "TP-Link Tapo C100 Camera",
      price: "₹1,899",
      desc: "1080p Home Security WiFi Camera with advanced motion detection and night vision optics.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
      category: "smarthome"
    },
    {
      id: "mi-smart-humidifier",
      name: "MI Smart Humidifier",
      price: "₹2,299",
      desc: "Ultrasonic cool mist smart humidifier designed to balance moisture metrics in medium studio zones.",
      image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80",
      category: "smarthome"
    },
    {
      id: "oakter-oakremote",
      name: "Oakter Oakremote Controller",
      price: "₹1,249",
      desc: "Universal WiFi smart infrared remote controller linking old workspace electronics to voice controls.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
      category: "smarthome"
    },
    {
      id: "syska-smart-strip-light",
      name: "Syska Smart Strip Light (5m)",
      price: "₹1,499",
      desc: "Flexible, color-changing, app-controlled LED strip light for ambient desk backlighting.",
      image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=600&q=80",
      category: "smarthome"
    },
    {
      id: "qubo-smart-gas-sensor",
      name: "Qubo Smart Gas Sensor",
      price: "₹1,799",
      desc: "Intelligent leakage gas sensor featuring alarm sounds and instant smartphone alert protocols.",
      image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&w=600&q=80",
      category: "smarthome"
    },
    {
      id: "mi-temp-humidity-monitor-2",
      name: "MI Temp & Humidity Monitor 2",
      price: "₹699",
      desc: "High-precision biological climate sensor displaying real-time environmental comfort index metrics.",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
      category: "smarthome",
      badge: "Smart Sync"
    },

    // ==========================================
    // APPAREL CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "decathlon-quechua-jacket",
      name: "Quechua Waterproof Jacket",
      price: "₹1,999",
      desc: "Highly durable windproof, waterproof rain shell optimized for dual dynamic workspace commutes.",
      image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80",
      category: "apparel"
    },
    {
      id: "nike-drifit-tee",
      name: "Nike Dri-FIT Training Tee",
      price: "₹1,695",
      desc: "Breathable performance knit top designed for thermal heat and moisture regulation.",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
      category: "apparel"
    },
    {
      id: "puma-ess-cargo-pants",
      name: "Puma Ess Cargo Pants",
      price: "₹2,199",
      desc: "High-comfort utility cargo pants containing double-welded mechanical pocket storage panels.",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      category: "apparel"
    },
    {
      id: "adidas-techfit-baselayer",
      name: "Adidas Techfit Base-Layer",
      price: "₹1,499",
      desc: "Compression isolation knit designed for absolute muscle sync optimization.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      category: "apparel",
      badge: "Performance"
    },
    {
      id: "sparx-running-sneakers",
      name: "Sparx Running Sneakers",
      price: "₹1,299",
      desc: "Featherweight engineered mesh running shoes optimizing impact-reduction and comfort.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      category: "apparel"
    },
    {
      id: "decathlon-fleece-gloves",
      name: "Quechua Fleece Gloves",
      price: "₹499",
      desc: "Recycled fleece gloves featuring touchscreen-conducting sensory sensor fingertips.",
      image: "https://images.unsplash.com/photo-1516934024742-b461fba4760f?auto=format&fit=crop&w=600&q=80",
      category: "apparel"
    },
    {
      id: "fort-collins-windcheater",
      name: "Fort Collins Windcheater",
      price: "₹1,899",
      desc: "Water-resistant outerwear windcheater with storm protection and high structural integrity.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      category: "apparel",
      badge: "Storm Proof"
    },
    {
      id: "fastrack-reflex-beat",
      name: "Fastrack Reflex Beat Band",
      price: "₹2,199",
      desc: "Sleek fitness tracker tracking active heart rate and daily activity logs.",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
      category: "apparel"
    },

    // ==========================================
    // DEV TECH CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "redgear-shadow-blade",
      name: "Redgear Shadow Blade",
      price: "₹2,499",
      desc: "Mechanical gaming keyboard with tactile blue switches and custom rainbow LED backlighting.",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
      category: "devtech",
      badge: "Limited Edition"
    },
    {
      id: "raspberry-pi-zero-2w",
      name: "Raspberry Pi Zero 2 W",
      price: "₹1,650",
      desc: "Miniature modular developer workstation board housing a quad-core 64-bit ARM CPU engine.",
      image: "https://images.unsplash.com/photo-1600541519468-4a9121c6095f?auto=format&fit=crop&w=600&q=80",
      category: "devtech"
    },
    {
      id: "logitech-k380-keyboard",
      name: "Logitech K380 Keyboard",
      price: "₹2,299",
      desc: "Multi-device wireless low-profile keyboard offering surgical typing comfort across developer setups.",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
      category: "devtech",
      badge: "Fast Storage"
    },
    {
      id: "sandisk-extreme-ssd-128",
      name: "SanDisk Portable SSD 128G",
      price: "₹1,899",
      desc: "Compact high-speed portable solid state storage drive designed for secure codebase backups.",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80",
      category: "devtech"
    },
    {
      id: "lapcare-wireless-mouse",
      name: "Lapcare Ergonomic Mouse",
      price: "₹699",
      desc: "Wireless silent ergonomic vertical mouse offering comfort during long dev sprints.",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
      category: "devtech",
      badge: "Surgical Tactility"
    },
    {
      id: "tplink-gigabit-switch",
      name: "TP-Link Gigabit Switch",
      price: "₹999",
      desc: "5-port desktop gigabit ethernet network expansion switch for wired workspace local grids.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      category: "devtech"
    },
    {
      id: "gizga-laptop-stand",
      name: "Gizga Ergonomic Laptop Stand",
      price: "₹799",
      desc: "Multi-angle aluminum riser stand designed to minimize visual and neck strain during coding sessions.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      category: "devtech"
    },
    {
      id: "amazonbasics-travel-adapter",
      name: "AmazonBasics Travel Adapter",
      price: "₹899",
      desc: "Universal workspace adapter equipped with multiple built-in international plug routing shapes.",
      image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80",
      category: "devtech"
    }
  ];

  const handleQuickAdd = (product: typeof products[0]) => {
    const numericPrice = parseInt(product.price.replace(/[^\d]/g, ''), 10) || 0;
    addToCart({
      id: product.id,
      name: product.name,
      price: numericPrice,
      desc: product.desc,
      image: product.image
    });
  };

  // Filter products based on active tab state
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <span className={`${styles.headerSubtitle} font-label-mono`}>Hardware Evolution</span>
          <h1 className="font-display-hero uppercase leading-none">The<br />Collection</h1>
        </div>
        <div className={styles.headerDesc}>
          <p className="font-body-md">Surgically precise instruments designed for the modern creator. Performance meeting pure aesthetics.</p>
        </div>
      </header>

      <section className={styles.filtersBar}>
        <div className={styles.filterLinks}>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterBtnActive : ''} font-label-mono`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'electronics' ? styles.filterBtnActive : ''} font-label-mono`}
            onClick={() => setActiveCategory('electronics')}
          >
            Electronics
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'smarthome' ? styles.filterBtnActive : ''} font-label-mono`}
            onClick={() => setActiveCategory('smarthome')}
          >
            Smart Home
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'apparel' ? styles.filterBtnActive : ''} font-label-mono`}
            onClick={() => setActiveCategory('apparel')}
          >
            Apparel
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'devtech' ? styles.filterBtnActive : ''} font-label-mono`}
            onClick={() => setActiveCategory('devtech')}
          >
            Dev Tech
          </button>
        </div>
        <div className={styles.filterActions}>
          <button className={`${styles.actionBtn} font-label-mono`}>
            Filter <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>tune</span>
          </button>
          <div className={styles.actionDivider}></div>
          <button className={`${styles.actionBtn} font-label-mono`}>
            Sort: Newest <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>expand_more</span>
          </button>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <div className={styles.productHoverOverlay}></div>
                <div className={styles.quickAddContainer}>
                  <button 
                    className={`${styles.btnQuickAdd} font-label-mono`}
                    onClick={() => handleQuickAdd(product)}
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productHeader}>
                  <h3 className={`${styles.productTitle} font-label-mono`}>{product.name}</h3>
                  <span className={`${styles.productPrice} font-label-mono`}>{product.price}</span>
                </div>
                <p className={`${styles.productDesc} font-body-md`}>{product.desc}</p>
                {product.badge && (
                  <div className={styles.productBadges}>
                    <span className={`${styles.badge} font-label-mono`}>{product.badge}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.nlContainer}>
          <div className={styles.nlContent}>
            <h2 className={`${styles.nlTitle} font-headline-lg`}>Join the<br />Engineering Protocol</h2>
            <p className={`${styles.nlDesc} font-body-lg`}>Get early access to drops and technical specifications before public release.</p>
          </div>
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <form className={styles.nlForm} onSubmit={e => e.preventDefault()}>
              <input className={`${styles.nlInput} font-label-mono`} placeholder="EMAIL ADDRESS" type="email" />
              <button className={`${styles.btnSubscribe} font-label-mono`}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
