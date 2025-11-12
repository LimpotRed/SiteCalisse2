
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, MessageCircle, Search, ArrowUpDown, Home, Truck, Sparkles, Droplets } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import TrendingProducts from '@/components/TrendingProducts';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = ['Perfumes', 'Cremes', 'Desodorantes', 'Cosméticos'];
  const genders = ['Todos', 'Masculino', 'Feminino', 'Unisex'];
  const newLogoUrl = "https://horizons-cdn.hostinger.com/911e8a4d-848b-403d-ae08-291a200b0004/55cc17754aecfdcdfdbb269042991a12.png";
  
  const todosOsProdutos = [
    { id: 1, name: 'Club de Nuit Women', category: 'Perfumes', oldPrice: 'R$ 300,00', price: 'R$ 270,00', priceValue: 270.00, gender: 'Feminino', images: [
        "https://i.ibb.co/F46HsthC/IMG-20251011-WA0130.jpg",
        "https://i.ibb.co/LXQvQ4tJ/Captura-de-tela-2025-11-03-135653.png",
    ]},

    { id: 2, name: 'Club de Nuit Intense Woman', category: 'Perfumes', oldPrice: 'R$ 260,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Unisex', images: [
        "https://i.ibb.co/yTrq90c/IMG-20251011-WA0131.jpg",
        "https://i.ibb.co/RXRHT6y/Captura-de-tela-2025-11-03-140202.png",
    ]},

    { id: 3, name: 'Durrat Al Aroos', category: 'Perfumes', oldPrice: 'R$ 210,00', price: 'R$ 190,00', priceValue: 190.00, gender: 'Feminino', images: [
        "https://i.ibb.co/Q3NHyy6J/IMG-20251011-WA0132.jpg",
        "https://i.ibb.co/LzL211nw/Captura-de-tela-2025-11-03-140626.png",
    ]},

    { id: 4, name: 'Asad', category: 'Perfumes', oldPrice: 'R$ 220,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Masculino', images: [
        "https://i.ibb.co/GvJhJQ23/IMG-20251011-WA0133.jpg",
        "https://i.ibb.co/bj2WL3DC/Captura-de-tela-2025-11-03-141036.png",
    ]},

    { id: 5, name: 'Victorioso Masion', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
        "https://i.ibb.co/7Jqz7cwz/IMG-20251011-WA0134.jpg",
        "https://i.ibb.co/bj3MHQhK/Captura-de-tela-2025-11-03-141707.png",
    ]},

    { id: 6, name: 'Salvo Intense', category: 'Perfumes', oldPrice: 'R$ 230,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Masculino', images: [
        "https://i.ibb.co/JF2Bn1bS/IMG-20251011-WA0135.jpg",
        "https://i.ibb.co/JwVSSYxR/Captura-de-tela-2025-11-03-142002.png",
    ]},
    
    { id: 7, name: 'Asad Zanzibar', category: 'Perfumes', oldPrice: 'R$ 220,00', price: 'R$ 185,00', priceValue: 185.00, gender: 'Masculino', images: [
        "https://i.ibb.co/q3jw3qGJ/IMG-20251011-WA0109.jpg",
        "https://i.ibb.co/p6S6yFgf/Captura-de-tela-2025-11-03-142329.png",
    ]},
    { id: 8, name: 'Yara Tous', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
        "https://i.ibb.co/Wppfys0S/IMG-20251011-WA0110.jpg",
        "https://i.ibb.co/v6sQ72xF/Captura-de-tela-2025-11-04-095549.png",
    ]},

    { id: 9, name: 'Yara Rose', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
            "https://i.ibb.co/VWkx66nP/IMG-20251011-WA0111.jpg",
            "https://i.ibb.co/jFJ8dj4/Captura-de-tela-2025-11-04-095910.png",
        ]},

    { id: 10, name: 'Yara Moi', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
            "https://i.ibb.co/Gf38mRgS/IMG-20251011-WA0112.jpg",
            "https://i.ibb.co/fVKdgSC6/Captura-de-tela-2025-11-04-095957.png",
        ]},

    { id: 11, name: 'Yara Candy', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
            "https://i.ibb.co/gM9xXMFM/IMG-20251011-WA0113.jpg",
            "https://i.ibb.co/d4Tm2QzK/Captura-de-tela-2025-11-04-100052.png",
        ]},

    { id: 12, name: 'Asad Burbom', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/1YBmnndP/IMG-20251011-WA0114.jpg",
            "https://i.ibb.co/YFX03Sbb/Captura-de-tela-2025-11-04-100138.png",
        ]},
        
    { id: 13, name: 'Al Noble Safeer', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/9kZ8PwQj/IMG-20251011-WA0115.jpg",
            "https://i.ibb.co/VW4vLZTJ/image.png",
        ]},

    { id: 14, name: 'Fackar Rose', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
            "https://i.ibb.co/J6CbLvt/IMG-20251011-WA0116.jpg",
            "https://i.ibb.co/LzLbVsNd/image.png",
        ]},

    { id: 15, name: 'Sceptre Bronzite', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/mV5H4Vxh/IMG-20251011-WA0118.jpg",
            "https://i.ibb.co/6RMhXwTm/Captura-de-tela-2025-11-04-100509.png",
        ]},

    { id: 16, name: 'Fackar Gold', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/xtxfWf1d/IMG-20251011-WA0117.jpg",
            "https://i.ibb.co/V0JHVnPL/image.png",
        ]},

    { id: 17, name: 'Her Confession', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
            "https://i.ibb.co/1jCK2y5/IMG-20251011-WA0119.jpg",
            "https://i.ibb.co/x8r4T0Jp/image.png",
        ]},

    { id: 18, name: 'Sceptre Oceana', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/tpQDc3v9/IMG-20251011-WA0120.jpg",
            "https://i.ibb.co/xKQSXhgR/image.png",
        ]},

    { id: 19, name: 'No.2 Men', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/yc56YRY4/IMG-20251011-WA0121.jpg",
            "https://i.ibb.co/tTXRpqvY/image.png",
        ]},

    { id: 20, name: 'Maahir', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
            "https://i.ibb.co/MDMKx6S1/IMG-20251011-WA0122.jpg",
            "https://i.ibb.co/zHPZFv38/image.png",
    ]},

    { id: 21, name: 'Sceptre Amazonite', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
            "https://i.ibb.co/9mMcnPtY/IMG-20251011-WA0123.jpg",
            "https://i.ibb.co/v4fttR11/image.png",
    ]},

    { id: 22, name: 'Al Noble Ammer', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
            "https://i.ibb.co/ZpVrNX84/IMG-20251011-WA0124.jpg",
            "https://i.ibb.co/tT7QXJfx/image.png",
    ]},

    { id: 23, name: 'Como Moiselle', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/5gxz557N/IMG-20251011-WA0125.jpg",
    "https://i.ibb.co/pvB4VpF1/image.png",
]},

{ id: 24, name: 'Al Noble Wazeer', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/sdR5TPtN/IMG-20251011-WA0126.jpg",
    "https://i.ibb.co/hRx4gbxR/image.png",
]},

{ id: 25, name: 'His Confission', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/2Y14yn9h/IMG-20251011-WA0127.jpg",
    "https://i.ibb.co/nqQkLgZG/image.png",
]},

{ id: 26, name: 'Vulcan Sable', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/j9NCZ0mF/IMG-20251011-WA0128.jpg",
    "https://i.ibb.co/PsLMTXkx/image.png",
]},

{ id: 27, name: 'Sabah Al Ward', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/sdqZb214/IMG-20251011-WA0129.jpg",
    "https://i.ibb.co/SDnm1tgW/image.png",
]},

{ id: 28, name: 'Blue Sky', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/PvPm3KdR/4-9.png",
    "https://i.ibb.co/fYrzpjDk/image.png",
]},

{ id: 29, name: 'Royal Amber', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/S7WgyJF4/4-8.png",
    "https://i.ibb.co/4wgtHzmH/image.png",
]},

{ id: 30, name: 'Pink Eclipse', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/NnsswFdv/4-10.png",
    "https://i.ibb.co/KpQtVzKT/image.png",
]},

{ id: 31, name: 'Alpine Homme Sport', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/q3yWmwpH/4-11.png",
    "https://i.ibb.co/Mx2xTDVP/image.png",
]},

{ id: 32, name: 'Athena', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/mr63z2t6/4-12.png",
    "https://i.ibb.co/PGPB0KdT/image.png",
]},

{ id: 33, name: 'Delilah Blanc', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/gMTwD5k6/4.png",
    "https://i.ibb.co/DPX7f1bB/image.png",
]},

{ id: 34, name: "La Collection D'antiquités 1910", category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/rKfbmFVw/5-2.png",
    "https://i.ibb.co/cSfNrHJ0/image.png",
]},

{ id: 35, name: 'Ameerat Al Arab', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/v6M59gy3/5-3.png",
    "https://i.ibb.co/9kx140qN/image.png",
]},

{ id: 36, name: 'Shaheen Gold', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/Q3mQ1GvS/5-4.png",
    "https://i.ibb.co/pj17fRjW/image.png",
]},

{ id: 37, name: 'Attar Al Wesal', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/RTx2GsHr/5-5.png",
    "https://i.ibb.co/C3dfMVkF/image.png",
]},

{ id: 38, name: '9 PM Rebel', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/GQ0pXY0c/5-6.png",
    "https://i.ibb.co/vxDhK14F/image.png",
]},

{ id: 39, name: 'Reem Asdaaf', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/C5MF5vzx/5-7.png",
    "https://i.ibb.co/B5FP3Qyt/image.png",
]},

{ id: 40, name: 'Opulent Dubai', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/2YMWTv9h/5-8.png",
    "https://i.ibb.co/gbJ8NSZK/image.png",
]},

{ id: 41, name: 'Venus de Milo', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/JFrjydY9/5-9.png",
    "https://i.ibb.co/WvpKsWj8/image.png",
]},

{ id: 42, name: 'Liquid Brun', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/pDzSXfQ/5-10.png",
    "https://i.ibb.co/s9Nk7ZXv/image.png",
]},

{ id: 43, name: 'Royal Blend Nero', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/gQ2XM6C/4-7.png",
    "link",
]},

{ id: 44, name: 'Odyssee III', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/wjytqMp/4-6.png",
    "link",
]},

{ id: 45, name: 'Khamrah', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/JRkHYmQM/4-4.png",
    "link",
]},

{ id: 46, name: 'Your Touch For Women', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/gxTYYGm/4-3.png",
    "link",
]},

{ id: 47, name: 'Tag-Her', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/Z68m4nkG/4-2.png",
    "link",
]},

{ id: 48, name: 'Ameerati', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/VYjG1QJT/3.png",
    "link",
]},

{ id: 49, name: 'Arabia Explorer', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/CsmKTRzr/3-11.png",
    "link",
]},

{ id: 50, name: 'Qaed Al Fursan', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/Xk8bD1jP/3-10.png",
    "link",
]},

{ id: 51, name: 'Raneen', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/CsHCSv6S/3-9.png",
    "link",
]},

{ id: 52, name: 'Luxe Emerald', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/v6vFqGKD/3-8.png",
    "link",
]},

{ id: 53, name: 'Amber Rouge', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/BVYG9qHc/Imagem-do-Whats-App-de-2025-10-11-s-16-57-02-a50fcafd.jpg",
    "link",
]},

{ id: 54, name: 'Tiramisu Caramel', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/gbCq7xqk/3-6.png",
    "link",
]},

{ id: 55, name: 'Jardin de Paris', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/yBRZjYdW/3-5.png",
    "link",
]},

{ id: 56, name: 'Ishq Al Shuyukh Gold', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/JjgQrsFv/3-4.png",
    "link",
]},

{ id: 57, name: 'Watani', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/pjrqnY0m/3-3.png",
    "link",
]},

{ id: 58, name: 'Emaan', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/fYwdMBv3/3-2.png",
    "link",
]},

{ id: 59, name: 'Veneno', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/1Gk9bNh8/2.png",
    "link",
]},

{ id: 60, name: '9am Dive', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/8nHqFHkL/2-12.png",
    "link",
]},

{ id: 61, name: 'Tag Him Uomo Rosso', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/Hp9q5s53/2-11.png",
    "link",
]},

{ id: 62, name: 'Yum Yum', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/4Zqg59zP/2-10.png",
    "link",
]},

{ id: 63, name: 'Infinity Gold', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/rKC75mB3/2-9.png",
    "link",
]},

{ id: 64, name: 'Luxe NigthLife', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/bRYGyv7q/2-8.png",
    "link",
]},

{ id: 65, name: '9PM Elixir', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/27T2xSSq/2-7.png",
    "link",
]},

{ id: 66, name: 'Encode Mountain', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/m5wmXqDX/2-6.png",
    "link",
]},

{ id: 67, name: 'Royal Blend', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/Nkjrh4x/2-5.png",
    "link",
]},

{ id: 68, name: 'Narissa Rouge', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/dsw6qzqW/2-4.png",
    "link",
]},

{ id: 69, name: 'EFTINAAN', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/93sP6tm7/2-3.png",
    "link",
]},

{ id: 70, name: 'Teriaq', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/YYmQvrV/2-2.png",
    "link",
]},

{ id: 71, name: 'Exclusive Azure Fantasy', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/sdLbGy8W/1-11.png",
    "link",
]},
{ id: 72, name: "Bade'e Al Oud Honor & Glory", category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/PGc76ff3/1-10.png",
    "link",
]},
{ id: 73, name: "L'Aventure Intense", category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/S7ZCjfW2/1-9.png",
    "link",
]},
{ id: 74, name: 'Magma Love', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/x8Mb9csK/1-8.png",
    "link",
]},
{ id: 75, name: 'Solitude For Man', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/5Wss2jFM/1-7.png",
    "link",
]},
{ id: 76, name: 'Zukhruf Black', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/ymq6n9Sh/1-6.png",
    "link",
]},
{ id: 77, name: 'Attracione Men', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/ZRyfYWRY/1-5.png",
    "link",
]},
{ id: 78, name: 'Maahir Legacy', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/Kp0C1jtD/1-4.png",
    "link",
]},
{ id: 79, name: 'celeste', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/BKKhzr9S/1-3.png",
    "link",
]},
{ id: 80, name: 'Olivia', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/hRsXf6fx/1-2.png",
    "link",
]},

{ id: 82, name: 'Baroque Rouge 540', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/qMbVCPpj/Imagem-do-Whats-App-de-2025-10-11-s-16-55-39-c7cfaa8d.jpg",
    "link",
]},
{ id: 83, name: 'Musamam White Intense', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/F4YNjFQt/Imagem-do-Whats-App-de-2025-10-11-s-16-54-31-5152fbfa.jpg",
    "link",
]},
{ id: 84, name: 'Tharwah Gold', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/MybBTYq3/Imagem-do-Whats-App-de-2025-10-11-s-16-53-36-67214651.jpg",
    "link",
]},

{ id: 86, name: 'Victorioso Fearless', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/gbRLtFC3/Imagem-do-Whats-App-de-2025-10-11-s-16-51-50-187e31c1.jpg",
    "link",
]},
{ id: 88, name: 'Al Andaleeb Flora', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/VYW56H4m/10-9.png",
    "link",
]},
{ id: 89, name: "Bade'e Al Oud Amethyst", category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/S7RWKQZD/10-8.png",
    "link",
]},
{ id: 90, name: 'Candid Pour Homme', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/v04pkFc/10-7.png",
    "link",
]},
{ id: 91, name: "Bade'e Al Oud Oud for Glory", category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/wZHSG4Wg/10-6.png",
    "link",
]},
{ id: 92, name: 'The Kingdom For Men', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/7dwbhFzg/10-5.png",
    "link",
]},
{ id: 93, name: 'Shahd', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/Lz7Xv7hd/10-3.png",
    "link",
]},
{ id: 94, name: 'Arabia Inter Rouge', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/hTqQzzc/10-2.png",
    "link",
]},
{ id: 95, name: 'Shagaf Al Ward', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/S4RgD7PP/9.png",
    "link",
]},
{ id: 96, name: 'Tiramisu Coco', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/9HGbq00q/9-11.png",
    "link",
]},

{ id: 98, name: 'Spectre Ghost', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/VcysRWb1/9-9.png",
    "link",
]},

{ id: 100, name: 'Niche Emarati Al Dana', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/23whQH0d/9-7.png",
    "link",
]},
{ id: 101, name: 'La Bella', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/hR4rtTCF/9-6.png",
    "link",
]},
{ id: 102, name: 'Maître de Blue', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/W4zH8Ywz/9-5.png",
    "link",
]},
{ id: 103, name: 'Marina De Bourbon Princesse', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/9kLTkMyC/9-4.png",
    "link",
]},
{ id: 104, name: 'Club de Nuit Untold', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/Q30wwjGn/9-3.png",
    "link",
]},
{ id: 105, name: 'Naif', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/s0jTPs3/9-2.png",
    "link",
]},
{ id: 106, name: 'Fakhar Black', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/bjd8Fj1y/8.png",
    "link",
]},

{ id: 107, name: 'Nebras', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/21TrmhjG/8-11.png",
    "link",
]},
{ id: 108, name: 'Amnia', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/rKQYdSwJ/8-10.png",
    "link",
]},
{ id: 109, name: 'Crysta Oud', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/HLw6nDXz/8-9.png",
    "link",
]},
{ id: 110, name: 'La Voie', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/j9QjszzR/8-8.png",
    "link",
]},
{ id: 111, name: 'Kiaana Crush', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/hJ3Gs9PJ/8-7.png",
    "link",
]},
{ id: 112, name: 'Art of Arabia III', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/JW7SKzFj/8-6.png",
    "link",
]},
{ id: 113, name: 'La Vie Est Belle', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/9mb4N19m/8-4.png",
    "link",
]},
{ id: 114, name: 'Silver Scent', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/W4KjZNXy/8-3.png",
    "link",
]},
{ id: 115, name: 'Rabab Blue', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/zKxGFBJ/8-2.png",
    "link",
]},
{ id: 116, name: 'Éclair Affair', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/FLtJrX9T/7-11.png",
    "link",
]},
{ id: 117, name: 'Ishq Al Shuyukh Silver', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/FkTxVvmD/7-10.png",
    "link",
]},
{ id: 118, name: 'Atheeri', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/YBNy4qhZ/7-9.png",
    "link",
]},
{ id: 119, name: 'Victoria', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/Hp1R5M8x/7-8.png",
    "link",
]},
{ id: 120, name: 'Pisa', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/r29hKqCg/7-7.png",
    "link",
]},
{ id: 121, name: 'Vulcan Feu', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/dwgvFNmN/7-6.png",
    "link",
]},
{ id: 122, name: 'Club de Nuit Sillage', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/W4SVP9LX/7-5.png",
    "link",
]},
{ id: 123, name: 'Panther Pour Homme', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/s9wqq5Jh/7-4.png",
    "link",
]},
{ id: 124, name: 'Turathi Electric', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/3mN5WCF0/7-3.png",
    "link",
]},
{ id: 125, name: 'Khanjar', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/Hf0WLwjn/7-2.png",
    "link",
]},
{ id: 126, name: 'Badee Al Oud Noble Blush', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/KxB0CsmT/6.png",
    "link",
]},
{ id: 127, name: 'Qaed Al Fursan Untamed', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/Z1wQWcJT/6-11.png",
    "link",
]},
{ id: 128, name: 'Kiaana Crush', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/Q7fmJz8B/6-10.png",
    "link",
]},
{ id: 129, name: 'Baroque Rouge Extrait', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/NwLd018/6-9.png",
    "link",
]},
{ id: 130, name: 'Club De Nuit Maleka', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/LhYRsdv5/6-8.png",
    "link",
]},
{ id: 131, name: 'Eclaire', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/gLCgrJcX/6-7.png",
    "link",
]},
{ id: 132, name: 'Mayar Cherry Intense', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/39jWbKpd/6-6.png",
    "link",
]},
{ id: 133, name: 'Oud Saffron', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/bgpHVjRg/6-5.png",
    "link",
]},
{ id: 134, name: 'Club de Nuit Blue Iconic', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Masculino', images: [
    "https://i.ibb.co/PGnW056C/6-4.png",
    "link",
]},
{ id: 135, name: 'Baroque Rouge', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', images: [
    "https://i.ibb.co/ZzxshJQs/6-3.png",
    "link",
]},
{ id: 136, name: 'Afeef', category: 'Perfumes', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', images: [
    "https://i.ibb.co/GvZ7s1L2/5-11.png",
    "link",
]},




  ];

  const idsDosProdutosEmAlta = [1, 2, 6];
  const produtosEmAlta = todosOsProdutos.filter(p => idsDosProdutosEmAlta.includes(p.id));

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    let categoryProducts = todosOsProdutos.filter(p => p.category === selectedCategory);

    if (selectedGender !== 'Todos') {
      categoryProducts = categoryProducts.filter(p => p.gender === selectedGender);
    }

    if (searchTerm) {
      categoryProducts = categoryProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (sortOrder === 'price-asc') {
      categoryProducts.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortOrder === 'price-desc') {
      categoryProducts.sort((a, b) => b.priceValue - a.priceValue);
    }

    return categoryProducts;
  }, [selectedCategory, selectedGender, searchTerm, sortOrder, todosOsProdutos]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false);
    setSearchTerm('');
    setSelectedGender('Todos');
    setSortOrder('default');
  };
  
  const handleLogoClick = () => {
    setSelectedCategory(null);
    setMenuOpen(false);
  }

  const toggleSortOrder = () => {
    if (sortOrder === 'default' || sortOrder === 'price-desc') {
      setSortOrder('price-asc');
    } else {
      setSortOrder('price-desc');
    }
  };

  const handleContactClick = () => {
    const phoneNumber = '556282309207';
    const message = `Olá! Tenho uma dúvida sobre os produtos da Calisse.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Calisse - Perfumes Árabes e Cosméticos</title>
        <meta name="description" content="Descubra fragrâncias árabes originais, cremes, desodorantes e cosméticos. Qualidade e exclusividade para você." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50">
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-black/90 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between h-16 px-4">
              <div className="w-10">
                 <motion.button
                  whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 8px #B8860B)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogoClick}
                  className="p-2 rounded-full text-white hover:bg-white/10 transition-all"
                >
                  <Home className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex-1 flex justify-center">
                <button onClick={handleLogoClick} className="focus:outline-none">
                  <img src={newLogoUrl} alt="Calisse Logo" className="h-12" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 8px #B8860B)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-full text-white hover:bg-white/10 transition-all z-50"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </motion.nav>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black p-6 shadow-2xl flex flex-col justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mt-20 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all hover:filter hover:brightness-125 ${
                        selectedCategory === category
                          ? 'bg-[#B8860B] text-black'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="p-4 bg-gray-900 rounded-lg text-center mt-8">
                  <p className="text-white text-sm mb-3">Alguma dúvida? Entre em contato com nosso time.</p>
                  <motion.button
                    whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 8px #B8860B)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}
                    className="w-full bg-[#B8860B] text-black py-2 rounded-md font-bold text-sm transition-all"
                  >
                    Fale Conosco
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <AnimatePresence mode="wait">
            {selectedCategory ? (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-7xl mx-auto px-4 py-8"
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-extrabold text-black tracking-tight">
                    {selectedCategory}
                  </h1>
                </div>

                <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="relative md:col-span-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Pesquisar por nome..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide md:col-span-2 justify-start md:justify-end">
                    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                      {genders.map(gender => (
                        <button
                          key={gender}
                          onClick={() => setSelectedGender(gender)}
                          className={`px-3 py-1 text-sm font-semibold rounded-md transition-all hover:filter hover:brightness-125 ${
                            selectedGender === gender ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={toggleSortOrder}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all text-sm font-semibold hover:filter hover:brightness-125"
                    >
                      <ArrowUpDown size={16} />
                      <span>
                        {sortOrder === 'price-asc' ? 'Menor Preço' : sortOrder === 'price-desc' ? 'Maior Preço' : 'Ordenar'}
                      </span>
                    </button>
                  </div>
                </div>

                <p className="text-gray-500 mb-8">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative bg-white text-center py-20 px-4 overflow-hidden">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-black"
                    >
                        Fragrâncias que Despertam Emoções
                    </motion.h1>
                </div>
                <TrendingProducts products={produtosEmAlta} />
                <div className="bg-gray-50 py-16 px-4">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-[#B8860B]/20 rounded-full">
                           <Droplets className="w-8 h-8 text-[#B8860B]" />
                        </div>
                      </div>
                      <p className="font-bold text-lg text-black">Perfumes Árabes Originais</p>
                      <p className="text-gray-600">Fragrâncias intensas e alta fixação que marcam presença.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-[#B8860B]/20 rounded-full">
                           <Truck className="w-8 h-8 text-[#B8860B]" />
                        </div>
                      </div>
                      <p className="font-bold text-lg text-black">Entregamos para todo Brasil</p>
                      <p className="text-gray-600">Receba seus produtos no conforto da sua casa, em qualquer lugar do país.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-[#B8860B]/20 rounded-full">
                           <Sparkles className="w-8 h-8 text-[#B8860B]" />
                        </div>
                      </div>
                      <p className="font-bold text-lg text-black">Frete Grátis para Goiânia</p>
                      <p className="text-gray-600">Condição especial para nossos clientes da capital goiana.</p>
                    </motion.div>
                  </div>
                </div>
                <div className="px-4 my-12">
                   <div className="aspect-[21/9] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full h-full object-cover" alt="Banner de perfumes árabes em um fundo luxuoso" src="https://images.unsplash.com/photo-1635178792420-b90837a4e5d0" />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <a 
          href="https://wa.me/556282309207" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>

        <footer className="bg-black text-white px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <button onClick={handleLogoClick} className="focus:outline-none mb-4">
                  <img src={newLogoUrl} alt="Calisse Logo" className="h-16" />
                </button>
                <p className="text-gray-400 max-w-sm">
                  Sua loja especializada em perfumes e cosméticos. Transformamos seu estilo com produtos de luxo e qualidade incomparável.
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="font-bold text-lg mb-2 text-white">Fale Conosco</p>
                <p className="text-gray-400 mb-4">calisseperfumes@gmail.com</p>
                <div className="flex gap-4 md:justify-end">
                  <a href="https://www.instagram.com/calisseoficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B8860B] transition-colors p-2 bg-white/10 rounded-full hover:filter hover:brightness-125">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/Calisseoficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B8860B] transition-colors p-2 bg-white/10 rounded-full hover:filter hover:brightness-125">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/556282309207" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B8860B] transition-colors p-2 bg-white/10 rounded-full hover:filter hover:brightness-125">
                     <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6">
              <p className="text-center text-sm text-gray-500">
                © 2025 Calisse. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
