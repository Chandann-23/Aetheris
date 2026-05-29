"use client";
import styles from './page.module.css';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Aether-1 Audio",
      price: "₹449",
      desc: "High-fidelity acoustic isolation with custom-engineered beryllium drivers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAktS4cDPWPe4X2APpet4WV3HlIL0HgUul5CGM1jhSZMItbYPcjQheQqwoTr3ZkPh__PXBucsNsmWSgb23mgSrIsVWgLArhwxeFcMyRTDcmrnzdt4T2H9oKKo5pz_Masjg1PGRux5reIiXwEaCrUPi8WSStKXJ3Mb3ej1jk4wkPITR88yu_nW3MiF1-njtLWMMqiCqczkZz9CVc9Br-9WvWeZXyDhoVCXYuShCxrmG60ZzTH8KEH32RJ6qFxXSNI6XKRmMKAoBrWDMO",
      badge: "New Release"
    },
    {
      id: 2,
      name: "Slate Pro 14",
      price: "₹899",
      desc: "The thinnest workstation ever conceived. Precision machined from 7000-series aluminum.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9p5Eu87-SB9dcLMVxRbXOja0K7-VgXcdAXX1FHnxQWSlXibdjtELTnPh4BVHCZvve1bBhjMqJKFxDXJtBTp3AAn24ALpEA1ADE0I4Cg_fCj_sOTGKvS-K5EvplNKYmX6CLJzBSTl0IrAEdoCMsMbkbANtYUe7IbKt9ENNSgYvrqha-vosnFdSeXa4mXl5aBu2Hxq8Qlzdv_fN2-iUWywqpToWmYtTwmGEhrMsfmWUHQ-iXzknfXiWgTBXif35YU6A3Hn7sD2H5vqH",
      badge: "Limited Edition"
    },
    {
      id: 3,
      name: "Void Earbuds",
      price: "₹199",
      desc: "Translucent geometry meets immersive spatial audio. Designed to disappear.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDfDe7AU23aCW9p9EwNi0bvBLgy4eCceu2SJ3MygGT8xma-73eGkls8UDXzugiFEq5IxCb5NkrpGjz4fquek83mBC3iE5aGk4aQ7KWwOPqyZzhk_f-rIFuTTDjHJ2FHmhVx6Fe624JQlv8WWyaIxlyfVssHv9pyRo2-9AleLmvQYfxr6h9kUYexMmTPXDPUZXo0OtiUXAuwqZHxow3-btxSyQIXRC5r0cwjgh4W4cWU6M_ID6UTCpum4NCKocGIK32UUzDmOnEg1WH"
    },
    {
      id: 4,
      name: "Temporal Core",
      price: "₹799",
      desc: "The nexus of your smart infrastructure. Advanced encryption meets neural processing.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ58KpOKa9pumcpvqPNNwBhx8EYGe0drlEN6kalq5YNqMpxeIH3-dFQp-XM4dF-hSXwKSyQgEmCZyZvpigygBZqfRfgWH7i5ueJiME8-izyFxaIWzqBIzaR8ikBDnwsdVt2KQ_23yY8lncUEuqdKIg6sV9t7zpM9hZshzJcnsiuKhFJBbFEx1zC8YmgfjmTQeXmbQfBo94dHJ1FiuHArOc9OOWn0VlucdTTPn66WSWWjtybXdAeis0o-uEwvE6fNWNa6YfyoqZGzJ2"
    },
    {
      id: 5,
      name: "Quantum Nexus",
      price: "₹299",
      desc: "Low-profile mechanical switches designed for speed and surgical tactile feedback.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyvUxs-fz5YZ-XGasFsmLdnSSykH_gpwd7gvmyGKhr9FCXztDH2d5K2oDA8LyXYbB9r7gKpe45FieOumaMEcBltDDFjxFZeg-kA-VpmkI-Hod_DxQMcUUxmBq7hi7LSH4gltmyS_nGA7WuCoulxtYfnNs_r6ft_tS8RFmN4XU4RvBzs9RoqOfIbyp-HPFbvioog_FnagnJQm8KpkD7QEsBNmdcJxGwBLbs87MEwnYY1ha7m94KAci9cKCCz1Tm-WbeVADyuGHCZLd"
    },
    {
      id: 6,
      name: "Vector Shell",
      price: "₹349",
      desc: "Advanced waterproof technical knit with modular pockets and laser-cut ventilation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0eJNKV4hxuWCeusEoLcry9_HMDAbW4FIcs5pOSPsp7AWxqhnHrPLtOq1i-sIFaDTIw3bVdqHvMs9BgESqpKfUQyIpzCD8Rny6a1vmWAHPgFUelcnYMOlB_qG5Gg07mIbhUKdnBzFVBLGXwT5MtN90oNJJWda_mui2z2V5PH6XWbFf5Qe9INCA6asZyd0lHTe5pLa9zB2mJClM8CQxOkj-MP9o-a9QCF59NBle0p__4KUqFZd8tELVRO5Qj-QpyFnronHiM3VM6UZT"
    }
  ];

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
          <button className={`${styles.filterBtn} ${styles.filterBtnActive} font-label-mono`}>All Products</button>
          <button className={`${styles.filterBtn} font-label-mono`}>Electronics</button>
          <button className={`${styles.filterBtn} font-label-mono`}>Smart Home</button>
          <button className={`${styles.filterBtn} font-label-mono`}>Apparel</button>
          <button className={`${styles.filterBtn} font-label-mono`}>Dev Tech</button>
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
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <div className={styles.productHoverOverlay}></div>
                <div className={styles.quickAddContainer}>
                  <button className={`${styles.btnQuickAdd} font-label-mono`}>Quick Add</button>
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
