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
      id: "aether-1-audio",
      name: "Aether-1 Audio",
      price: "₹449",
      desc: "High-fidelity acoustic isolation with custom-engineered beryllium drivers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAktS4cDPWPe4X2APpet4WV3HlIL0HgUul5CGM1jhSZMItbYPcjQheQqwoTr3ZkPh__PXBucsNsmWSgb23mgSrIsVWgLArhwxeFcMyRTDcmrnzdt4T2H9oKKo5pz_Masjg1PGRux5reIiXwEaCrUPi8WSStKXJ3Mb3ej1jk4wkPITR88yu_nW3MiF1-njtLWMMqiCqczkZz9CVc9Br-9WvWeZXyDhoVCXYuShCxrmG60ZzTH8KEH32RJ6qFxXSNI6XKRmMKAoBrWDMO",
      category: "electronics",
      badge: "New Release"
    },
    {
      id: "synapse-vr",
      name: "Synapse VR",
      price: "₹199",
      desc: "Neural-mapped optics with custom micro-OLED matrices for deep spatial immersion.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDfDe7AU23aCW9p9EwNi0bvBLgy4eCceu2SJ3MygGT8xma-73eGkls8UDXzugiFEq5IxCb5NkrpGjz4fquek83mBC3iE5aGk4aQ7KWwOPqyZzhk_f-rIFuTTDjHJ2FHmhVx6Fe624JQlv8WWyaIxlyfVssHv9pyRo2-9AleLmvQYfxr6h9kUYexMmTPXDPUZXo0OtiUXAuwqZHxow3-btxSyQIXRC5r0cwjgh4W4cWU6M_ID6UTCpum4NCKocGIK32UUzDmOnEg1WH",
      category: "electronics",
      badge: "Featured"
    },
    {
      id: "omni-pad",
      name: "Omni Pad",
      price: "₹699",
      desc: "Tactile haptic surface designed for surgical precision and seamless micro-control mapping.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyvUxs-fz5YZ-XGasFsmLdnSSykH_gpwd7gvmyGKhr9FCXztDH2d5K2oDA8LyXYbB9r7gKpe45FieOumaMEcBltDDFjxFZeg-kA-VpmkI-Hod_DxQMcUUxmBq7hi7LSH4gltmyS_nGA7WuCoulxtYfnNs_r6ft_tS8RFmN4XU4RvBzs9RoqOfIbyp-HPFbvioog_FnagnJQm8KpkD7QEsBNmdcJxGwBLbs87MEwnYY1ha7m94KAci9cKCCz1Tm-WbeVADyuGHCZLd",
      category: "electronics"
    },
    {
      id: "nexus-hub",
      name: "Nexus Hub",
      price: "₹149",
      desc: "Sleek aluminum multi-port connector utilizing ultra-speed thunderbolt architectures.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTohYxTbfg2OGaQF0H4cFDEBHC8lUYDrWUAqbnBiiLdY-ZIzouHoTu38hGSFrbrqwccJOodJbRPZqcRdw-ksMOoqIaL6I2OFCgRl4-r0i2LJJKx55Ox4aLXocwbiS_erhLMPKcr2_D7MQJ8buBsMC-id_d_p5CUciDv4mFfdhFBvS9GKSyuTGru8L1qAw_YKX5AJ99ZO4O6QFR8cqmbMC0pRHAw4zLvuypeleR_weMvVXIQSQ8ybXu-io4iEg65pd1kTVZR2dGPGIB",
      category: "electronics"
    },
    {
      id: "aether-earbuds",
      name: "Aether Earbuds",
      price: "₹189",
      desc: "Disappearing translucent audio shell featuring dynamic active noise cancellation algorithms.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDug6H8qy9Cdfl_O9FzQ8sHuhk2eUCxHhllgxLq9AsOzgo9VOhcI9HxT8Txx-IEmBrXfdpPB2ZS6XiWlMZ8ZHtb1Nqqsl07wsMJVl7jUGcmxxTjZts_qoG4H-yHRQkDZh7ZD4pCvbkTbnAkUaPLI9nbbmBSZ3oDG9pxeSWTBHyE3wE1ZSA9_6DW56DVj5oWzgrGW-6cxZPP-qLde7eJdQaKDS-8ZUtH1HVntPiwHygRwH6M3867oL8kVZkON0BHvSiQKo9zBlJeGkuF",
      category: "electronics",
      badge: "Popular"
    },
    {
      id: "spectra-display",
      name: "Spectra Display",
      price: "₹799",
      desc: "Ultra-wide curved display optimized for high-performance visual developers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfNqXEVzOIMi7VSr53PZM0EjIVlW6gccYBG2YPaP8bDqF4D1lZH69tdyJKIvluBIQRc7S8vsWy_fAIfyzN4JzjV0EUC3E6-ok6wpdUW3CDPf3rXEZnqfdHCGHxlSvUgWeSpDkonu9qYnRt9za83XMHMf7ErlIPYq4Xc1fVeMmgn1WG4GDud-GNvmx-LukZGdYEj6kQJUEVPdIvon0M-jjYwcaKJZW4d9RE4_W6IQTVcpEnpcpw03px6ekpC9QPCNc0GFx5oko_3Uc4",
      category: "electronics"
    },
    {
      id: "vector-charger",
      name: "Vector Charger",
      price: "₹119",
      desc: "Fast-charging Gallium Nitride multi-port node designed to decrease workspace clutter.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wli4klxOEMGUa7YVIVfy7Gi5mqzx-et1aimyBKFC8IuDY2Q0nxWHm-XkKXni_6GuxQ6gr50o4cWi0Z038V85_l-IUCUzxIZE4u0tIkdlBYDYew4e8Ll1QpfOLsavxhkwDfv_WEvdlAi1nlzwclv0jetsLrfY1B7MUhDb7SrdMTBgr6Lr3gZoNCOlfKtRsS6IoVBOXm3a3QH7gf4aUbKcTbRSix1iqp8dOjXXGT4D8Awu6A5Kdnwm8bt-8Y4Zo0ShFZkmDXcsTzty",
      category: "electronics"
    },
    {
      id: "synapse-audio",
      name: "Synapse Audio",
      price: "₹329",
      desc: "Premium ambient soundscape synthesizer engineered to induce focus protocols.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU58niZdeO0Z6DtwblcDOyuMnUH8T-XtbIFuh1GhwH0to-jtEU_L0sBFAZRu-whYm7_xUP66mkFAaduejkRkeNxPrbJ7UmguEl-AqHfWMJamWtKKzucY3L2yznv4lM986AAmrEOHBsyRcrVBxXA17DQ3vxOc_drSGo_nWkQpss4-ohrgezR5fQNiO9gSNRsM_m2SPuUywR86qnWPzYGmc1J9TZm9bbXvtlleFb-3CTUjat_v4Tlf21Zt8UYL4f7WmbwFULqtnXyzqM",
      category: "electronics"
    },

    // ==========================================
    // SMART HOME CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "temporal-core",
      name: "Temporal Core",
      price: "₹799",
      desc: "Dynamic smart infrastructure gateway featuring hardware encryption modules.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ58KpOKa9pumcpvqPNNwBhx8EYGe0drlEN6kalq5YNqMpxeIH3-dFQp-XM4dF-hSXwKSyQgEmCZyZvpigygBZqfRfgWH7i5ueJiME8-izyFxaIWzqBIzaR8ikBDnwsdVt2KQ_23yY8lncUEuqdKIg6sV9t7zpM9hZshzJcnsiuKhFJBbFEx1zC8YmgfjmTQeXmbQfBo94dHJ1FiuHArOc9OOWn0VlucdTTPn66WSWWjtybXdAeis0o-uEwvE6fNWNa6YfyoqZGzJ2",
      category: "smarthome",
      badge: "Pro Choice"
    },
    {
      id: "smartlumina-hub",
      name: "SmartLumina Hub",
      price: "₹249",
      desc: "Adaptive automated illumination interface designed for premium architectural spaces.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYeXKIPz3c-TarIh28ndW7J07-yCnOojpFKuqCqOwaMnObizRV5K2rF_SjmC07peub_LqYXIpsSs1MB6kr72eMtz2ANjN0toGAFaSvyMZYKR5y__V84j3bz8EFFvTEsdu07JJQxtcp2W7JHhApHN4RCo6rwzBI7mBLYv_ch8cTi64jhjEsftiPyUneMiq2dWmRBRgzkLbPiIqMSf-gWu4iypctifCHNwCcB_PYeybW5BDgCyzsAeMERso9TYVkMJg1G_RqyzCVFQ1r",
      category: "smarthome"
    },
    {
      id: "aeropod-max",
      name: "AeroPod Max",
      price: "₹599",
      desc: "Decentralized HEPA particulate air filtration cell with active micro-climate syncing.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxFqsnFdqUXf71A93grUDhtq1XMGXm8qbpFw99TBjNwUUTQMRskFf-ARTLzCR6SFDeiOE3am2w8nCYxyC-k_8rTkdFVVS-_vMCAtOEaxySxYEtV73qQSHa3ArSJC2d_8irH0rX-fJYUdEpCYDHbJbNi9vqMamPK3isS5kjO5KbgCacfhGSduzIoS-xjvrl-j2qfH_kzXHTIXIYKzmDyxz4isGWcU1Al_1zd6_S-uxiDoevReNgcy3ptn5Z44NTkIYu8uxtBi0nPed9",
      category: "smarthome"
    },
    {
      id: "atmosphere-sync",
      name: "Atmosphere Sync",
      price: "₹199",
      desc: "Precise relative humidity modulator designed to normalize focused creative zones.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwvPxsbBBtrQ0osH7sblAxU0iwdggj0pVXBD3n6VVk6ArAZ9roc83aQP_a5j7zKeSR3t-Z-94txb2VKaKZ33ohg6dD5NbbESirmKqMB4SUd9SoFs9raoX3FOCe4Nja-QvPhgQAErKUeQuQoTkwQGEE8JextMcKVY13k8fqXa2ZmMoHy0o6KxIhpeg984Etu7oN4CT4kOzSRE69K1QUN5vfiItn76V2Kuvvz8LDxiagXdAPdGZ53lhA96LF7Pj0-JK9imoyOnYFX5yf",
      category: "smarthome"
    },
    {
      id: "securecam-ultra",
      name: "SecureCam Ultra",
      price: "₹399",
      desc: "End-to-end encrypted 4K optic scanner utilizing lightweight local AI node processing.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU58niZdeO0Z6DtwblcDOyuMnUH8T-XtbIFuh1GhwH0to-jtEU_L0sBFAZRu-whYm7_xUP66mkFAaduejkRkeNxPrbJ7UmguEl-AqHfWMJamWtKKzucY3L2yznv4lM986AAmrEOHBsyRcrVBxXA17DQ3vxOc_drSGo_nWkQpss4-ohrgezR5fQNiO9gSNRsM_m2SPuUywR86qnWPzYGmc1J9TZm9bbXvtlleFb-3CTUjat_v4Tlf21Zt8UYL4f7WmbwFULqtnXyzqM",
      category: "smarthome"
    },
    {
      id: "grid-node",
      name: "Grid Node",
      price: "₹129",
      desc: "Solid-state electrical monitor offering micro-level routing efficiency calculations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGXssMp4K7GhTxzKD5o8t5YYIuT9RbzMDM_Z3HvGkscgWHsxPMtzMFCeDlS9Y8qGIq59chSPDABV4-kzcawk_lxp4FPMR38bawG_NCdbcme3a_-q5yxxAH8owk5SD68pY94sy9PH9nbMjGDEQ-NLlWG9iwUqu2E-__cs_oFqiTekb7MDcj8lUYobM-75czw_xp8tqqxqFXpBBjRj0ibVHfkFITiVTaKMYy4bJX0rbYi-MDiqsp0UU1-DmmbWrKAqLAoC4CNYsr1wH",
      category: "smarthome"
    },
    {
      id: "haptic-remote",
      name: "Haptic Remote",
      price: "₹299",
      desc: "Gestural command interface offering advanced localized mechanical vibration feedback.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWPqE_OZM5XTiL9SGFDSO9POkN_Pmk2LxsWKkf87mNyn76ufEzpzGGD9O3SRcjryXPmnGllgs-SISJ6R-fP5ItMp-zUv11wRpiyYc3_DZ8LMGPxCnNpSA_Gv6nAju8t39wTZGDCsVnEmINklGumS_ZCv4ayry_Og9-dIe_T6v4n7Wcj2UrNHCFjnlcUV3u3NucBD0lVy1CmgIShNOewELqzVueX361vNf9dAysX1ShBAabHR8XaipOFPiTEtenR-4-pflsH_NJk-dQ",
      category: "smarthome"
    },
    {
      id: "biosync-thermostat",
      name: "Bio-Sync Thermostat",
      price: "₹349",
      desc: "Integrated biological climate modulator utilizing local biometric environmental sensors.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMtCl6FPGavlPq_IA5HVidHs5kfbIkl_Wtevb37i81jjmKN0Z3cfFU0Bn1IorAtIHtJxPDDNOF9FsLeaYqVk_yc7q574tR621rGvKVfl-ucubtaYkh5QhF23jfmKd67GDDe9JOM9-8RKm_abtCC4DTBYWgrgWSsjcFH901xIJTWKLuNq66-mGsjI4PjizMf5E3lNxUNH7BkViJdkY8DZLEeSsQFvwFoCQCrPgKJ2G0J300nMgVk6BqgcYTl6AnjFQss4yDJKi3WtQ3",
      category: "smarthome",
      badge: "Smart Sync"
    },

    // ==========================================
    // APPAREL CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "vector-shell-v2",
      name: "Vector Shell V2",
      price: "₹349",
      desc: "Waterproof technical knit featuring modular dynamic logistics pocket zones.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0eJNKV4hxuWCeusEoLcry9_HMDAbW4FIcs5pOSPsp7AWxqhnHrPLtOq1i-sIFaDTIw3bVdqHvMs9BgESqpKfUQyIpzCD8Rny6a1vmWAHPgFUelcnYMOlB_qG5Gg07mIbhUKdnBzFVBLGXwT5MtN90oNJJWda_mui2z2V5PH6XWbFf5Qe9INCA6asZyd0lHTe5pLa9zB2mJClM8CQxOkj-MP9o-a9QCF59NBle0p__4KUqFZd8tELVRO5Qj-QpyFnronHiM3VM6UZT",
      category: "apparel"
    },
    {
      id: "kinetic-techtee",
      name: "Kinetic Tech-Tee",
      price: "₹85",
      desc: "Seamless performance knit offering molecular antimicrobial skin hydration regulation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvaRjJl3ZMcHnsobYKJEAUK3Yv5aN3pP2HgScQGdx5G2jRReexWxEtNKCLG4S9htSdgJdWlj081_WYhc0mNLvaIsVKFad0usvzkb0uz1lxmwz0oaajj89nVcGRWwL8nwqsEoZJ1QxobSD6kAgqQ7dMW1tOfnDkLoN-bNa8YTgatYlab2ERtb-IHE6D_477bQwP1ejE9f_vig-ocytcGnLHP4UFg-_PwU2Rkz-HX3SnuXqXoQKYwLeqw3TK-JoPEiN1MIqEAe3Iw6pE",
      category: "apparel"
    },
    {
      id: "stealth-cargo",
      name: "Stealth Cargo",
      price: "₹210",
      desc: "High-mobility utility pants featuring double-welded technical storage modules.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-3OtjKDZMaiCllv4j9a95enjs0fRN9S50REaBw0DIyTC5SnuqyEnTrCVQKEng_5UTLoPgMq7N7vrFoqlE4AI-tE80Lt8k45idgmr2Nn4h39CeDAHusx0RaGf-zfRLDb-vCJ2H_ADve-3TciA090LoydQDV6gOkCBtTqQeFQUolp44Z-M_09zbtiDhAj58FhLq0e5_yTIotwGqhR8Kk6jq0YMMyRwMoykXqMuDWVe1nGRltfOKwrSWyQcWGo9V5U7LZZjNRhc43KV6",
      category: "apparel"
    },
    {
      id: "thermal-baselayer",
      name: "Thermal Base-Layer",
      price: "₹115",
      desc: "Compression-tuned isolation knit designed for absolute core body sync optimization.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJY5kKXvXY6ZklHffr1BG1Itakv4ZLbN047DkHeNyX40Gf7kZGNVZlrApw6dICi6WGxDIs6H2A_RNtuJiFJZyYer-EY5hj_7J-5G3wxN1BLIsayTbNFsrQKDWHnysdLmK_UnzwIplJVIMCqo8Gw1czRxYAyuJlFsy9ddPQe5rqrBbTwqManf2T3a_cfoYkpoIgZXuSZ8aWv2jgZRodx1emKQozvvUmLNEsx4HNvwR2saMs9Mlhz12akRAl2i7ztVxl0vBGxPP_esd0",
      category: "apparel",
      badge: "Performance"
    },
    {
      id: "aeromesh-runner",
      name: "Aero-Mesh Runner",
      price: "₹185",
      desc: "Featherweight engineered knit footwear optimizing carbon routing plate energy.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh2Xqj0jr8MRZ6jJ-xasY-VpdlGPbBbp1WobPwj989CjTd4yZ8EeiRVdBGgz2ojc7xaz8-OuPVnKIwvKFvJ-1dIGyj1WzLBT0zvSLRx3wrmh7buAFwHGId_L-Dc0ue0M-jmcc1b2KcB2-tNI08M0Jd3gU8pP83BkffCw6gC0ZTAHkzLMmffYf2qZ5xoa9s3Qh5DtMnlQfOMAQA5Ze1nr4aygj7v-5qOM-sk_7n6xBgj7vzjfdizUfqa2GcbOJdmxDrEHE-y4JWJl30",
      category: "apparel"
    },
    {
      id: "haptic-glove",
      name: "Haptic Glove",
      price: "₹145",
      desc: "Touchscreen-conducting skin layer with local micro-capsule sensory response patterns.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcVZjIYMiBpKec2ZiR3kbi4l8ihcj6es9VXqoSiGa7FOl4jVb3AxjxNR6VRDzyW9iIJIB5bk8ttPrOC98HIxztGVI9xR8nnaHFF2r2mWhBzvwPP5dL13_EWwjGHcOrPC3ekDbsHic5v_CzRL_31ppfZmWCdLdczrMGPJcKO8INPj3KhDbeR9d1mazj1HFTLpL7b--CHyi6lLCUBNK0Em4X87-BI9ZTQN0YXzoJgbuwrrKT4q5CUvCuV8IcKMljhlT9cbt3k7eC_pXJ",
      category: "apparel"
    },
    {
      id: "shield-parka",
      name: "Shield Parka",
      price: "₹450",
      desc: "Waterproof windproof outerwear modularity containing integrated interior harnesses.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC21RIfi_G8MtkZSqUGk4GNO9pIVRKVzZHSQHOubJLgz8ZV60W0NnAH1mAo6JoNjf_kss2yPcPa3ApgiT0UZOegkUr8LFzSFYTmV4PORC7mtUqTnGEP_mGYYljeL82v4Nlj_E6bxCp7szxJpZYxdPilEoM0GHYnI5P_6exCOuoDqYMIZ0RzYprq-oev3PABVe5AADtq-Y08OjtV8ssc8cG4gGl--06wIdMrpMuBLNzYKyTTZW_FJPw4niI7gte_vNiaFyyT_P4l557h",
      category: "apparel",
      badge: "Storm Proof"
    },
    {
      id: "pulse-wristband",
      name: "Pulse Wristband",
      price: "₹95",
      desc: "Ultra-slim dynamic biometric sensor band made from elastic technical fibers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALXnUt2eQ5-NVLXh70wuSCH6u_gg2WHZs093G5uJWpcpJFiAgxclB7Nh9bJOVNBjx_xknyqx_mvQaOaL3xR23hU4F-6Bs5-WRJe2aXpwfxppDrtvINi98MgE0LfxQjBgDxPeEq2l4N_HJnmW4rJP8N1OV1Xxc8_Z2j1v61xWMisNeemV0MSJEj1Ub9-Wy0kEoTJ0FUX5DzZOt9uEa6j4HVCq5xMXHHmRybnTsY4OnGfi58i68BWvprFfKHqetAdABDvpjECYNcwBrG",
      category: "apparel"
    },

    // ==========================================
    // DEV TECH CATEGORY (8 UNIQUE PRODUCTS)
    // ==========================================
    {
      id: "slate-pro-14",
      name: "Slate Pro 14",
      price: "₹899",
      desc: "The thinnest engineering workstation conceived. Sculpted from monolithic aerospace aluminum.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9p5Eu87-SB9dcLMVxRbXOja0K7-VgXcdAXX1FHnxQWSlXibdjtELTnPh4BVHCZvve1bBhjMqJKFxDXJtBTp3AAn24ALpEA1ADE0I4Cg_fCj_sOTGKvS-K5EvplNKYmX6CLJzBSTl0IrAEdoCMsMbkbANtYUe7IbKt9ENNSgYvrqha-vosnFdSeXa4mXl5aBu2Hxq8Qlzdv_fN2-iUWywqpToWmYtTwmGEhrMsfmWUHQ-iXzknfXiWgTBXif35YU6A3Hn7sD2H5vqH",
      category: "devtech",
      badge: "Limited Edition"
    },
    {
      id: "core-book",
      name: "Core Book",
      price: "₹849",
      desc: "Highly-integrated portable workstation with direct modular component syncing features.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zqm6RnILfvA4Ys7zg0Xl-4JApW-YcDNSGu9WyH64sBT_bGMPzQNJ93T4MOq-7lrB__HDhTFuLt5Z43VdOQLmffGHON8l5VkaNkPWfdj3enoxVgMDurXuvB2J8StSWLGapi860rILoBsgoYgNmmikMwGvQ7maQ_hnVLmdcYQgnniCVHPINAX6oZ6em05b959u16ddofBUCcRpl0QDyUWNNK2gF0O_cIlBHP4p9fi3Kfkz-HoXWy4fIXYVT1IrSVuCZyBQDXUTw7c8",
      category: "devtech"
    },
    {
      id: "vector-drive",
      name: "Vector Drive",
      price: "₹299",
      desc: "Hyper-speed solid state drive utilizing dynamic cache-buffering algorithms.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wli4klxOEMGUa7YVIVfy7Gi5mqzx-et1aimyBKFC8IuDY2Q0nxWHm-XkKXni_6GuxQ6gr50o4cWi0Z038V85_l-IUCUzxIZE4u0tIkdlBYDYew4e8Ll1QpfOLsavxhkwDfv_WEvdlAi1nlzwclv0jetsLrfY1B7MUhDb7SrdMTBgr6Lr3gZoNCOlfKtRsS6IoVBOXm3a3QH7gf4aUbKcTbRSix1iqp8dOjXXGT4D8Awu6A5Kdnwm8bt-8Y4Zo0ShFZkmDXcsTzty",
      category: "devtech",
      badge: "Fast Storage"
    },
    {
      id: "quantum-nexus",
      name: "Quantum Nexus",
      price: "₹599",
      desc: "Monolithic modular desktop interface housing localized parallel-routing engines.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNX6ESzKtOIVJXtmuQxLgUhmaAzqr_F8Z5e_guVTnsSgUmOhNxYX-XSvxe24Bpm4eLAq_TOekYhHNgfcOCt0gI7FkFm9bELDB77dCO9ar_4ZVIZsIs_Q6I-WHS4tHu6oKQknqk5Opg8EQZ0CDVX53XoE1Qo2FYvh3GEvpRrmK0OL4rLuigRUxVY5uiiEokpY9_h53OAtaH1sWklG7rj0vyKKhPVJkK_Pwbv1GhZjEzJjSDzjv4tHt68AFG-raZInxhNNSWnttqtfPV",
      category: "devtech"
    },
    {
      id: "linear-keyboard",
      name: "Linear Keyboard",
      price: "₹249",
      desc: "Precision low-profile mechanical keyboard offering surgical typing feedback.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQVArscjoYw2AJUR0x8psLhfExfxw2SUFiaYGRmx85VqVfPNOFfkULfikKk4oLTvnjMoYo3yxG3eI4w9SAa828xVFjK7Mg4D7liC3BxvpYJvLE8jHz8eBcyKVgfelN1HNa-4GGS64beBLGkdJOpmaULQp2o4PCZGzkcfNZ86jW0GuWe7evHTSexfYeKokHQGWnVDm_beF1zlOln2aRkt5xTY_Bn2lBnI0zI6D-mjhhpuwEwpdXFGIF8BbvS_6G2jNuISD5NL3_Rve8",
      category: "devtech",
      badge: "Surgical Tactility"
    },
    {
      id: "haptic-trackpad",
      name: "Haptic Trackpad",
      price: "₹189",
      desc: "High-sensitivity glass touch panel offering customizable force-click sensory arrays.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyvUxs-fz5YZ-XGasFsmLdnSSykH_gpwd7gvmyGKhr9FCXztDH2d5K2oDA8LyXYbB9r7gKpe45FieOumaMEcBltDDFjxFZeg-kA-VpmkI-Hod_DxQMcUUxmBq7hi7LSH4gltmyS_nGA7WuCoulxtYfnNs_r6ft_tS8RFmN4XU4RvBzs9RoqOfIbyp-HPFbvioog_FnagnJQm8KpkD7QEsBNmdcJxGwBLbs87MEwnYY1ha7m94KAci9cKCCz1Tm-WbeVADyuGHCZLd",
      category: "devtech"
    },
    {
      id: "host-node",
      name: "Host Node",
      price: "₹399",
      desc: "Fanless local sandbox server engineered to synchronize development environments.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ58KpOKa9pumcpvqPNNwBhx8EYGe0drlEN6kalq5YNqMpxeIH3-dFQp-XM4dF-hSXwKSyQgEmCZyZvpigygBZqfRfgWH7i5ueJiME8-izyFxaIWzqBIzaR8ikBDnwsdVt2KQ_23yY8lncUEuqdKIg6sV9t7zpM9hZshzJcnsiuKhFJBbFEx1zC8YmgfjmTQeXmbQfBo94dHJ1FiuHArOc9OOWn0VlucdTTPn66WSWWjtybXdAeis0o-uEwvE6fNWNa6YfyoqZGzJ2",
      category: "devtech"
    },
    {
      id: "dev-capsule",
      name: "Dev Capsule",
      price: "₹149",
      desc: "Modular sandboxed containment adapter for real-time offline container operations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zqm6RnILfvA4Ys7zg0Xl-4JApW-YcDNSGu9WyH64sBT_bGMPzQNJ93T4MOq-7lrB__HDhTFuLt5Z43VdOQLmffGHON8l5VkaNkPWfdj3enoxVgMDurXuvB2J8StSWLGapi860rILoBsgoYgNmmikMwGvQ7maQ_hnVLmdcYQgnniCVHPINAX6oZ6em05b959u16ddofBUCcRpl0QDyUWNNK2gF0O_cIlBHP4p9fi3Kfkz-HoXWy4fIXYVT1IrSVuCZyBQDXUTw7c8",
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
