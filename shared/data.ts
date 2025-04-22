import { Service, ServiceCard, BusinessHour, Product } from "./types";

// Services for the carousel
export const services: Service[] = [
  {
    title: "Réparation d'Ordinateurs",
    description: "Nos techniciens experts diagnostiquent et réparent tous types de problèmes informatiques, des virus aux pannes matérielles.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=500&q=80",
  },
  {
    title: "Réparation de Téléphones",
    description: "Écrans cassés, batteries défectueuses ou problèmes logiciels, nous réparons tous types de smartphones et tablettes.",
    image: "https://images.unsplash.com/photo-1581993192873-bf5f5f7358ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=500&q=80",
  },
  {
    title: "Transfert Vidéo",
    description: "Préservez vos souvenirs! Nous convertissons vos cassettes VHS, Mini-DV et autres formats anciens en fichiers numériques.",
    image: "https://images.unsplash.com/photo-1598550473359-9ae4ecc371c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=500&q=80",
  },
];

// Service cards for homepage
export const serviceCards: ServiceCard[] = [
  {
    title: "Réparation d'Ordinateurs",
    icon: "laptop",
    features: [
      "Diagnostic complet de votre matériel",
      "Suppression de virus et logiciels malveillants",
      "Remplacement de composants défectueux",
      "Installation et mise à jour de systèmes",
    ],
  },
  {
    title: "Réparation de Téléphones",
    icon: "smartphone",
    features: [
      "Remplacement d'écrans cassés",
      "Réparation de connecteurs de charge",
      "Remplacement de batteries",
      "Récupération de données",
    ],
  },
  {
    title: "Transfert Vidéo",
    icon: "film",
    features: [
      "Numérisation de VHS, 8mm, Hi8, MiniDV",
      "Conversion en formats modernes (MP4, AVI)",
      "Restauration et amélioration de la qualité",
      "Stockage sur clé USB, DVD ou disque dur",
    ],
  },
];

// Business hours
export const businessHours: BusinessHour[] = [
  { day: "Lundi", hours: "10:00 - 19:00" },
  { day: "Mardi", hours: "10:00 - 19:00" },
  { day: "Mercredi", hours: "10:00 - 19:00" },
  { day: "Jeudi", hours: "10:00 - 19:00" },
  { day: "Vendredi", hours: "10:00 - 19:00" },
  { day: "Samedi", hours: "10:00 - 19:00" },
  { day: "Dimanche", hours: "Fermé", closed: true },
];

// Product categories
export const categories: string[] = [
  "Tous les produits",
  "Accessoires PC",
  "Téléphones & Accessoires",
  "Stockage",
  "Câbles & Adaptateurs",
];

// Products for the store
export const products: Product[] = [
  {
    id: 1,
    name: "Chargeur Smartphone Universel",
    description: "Chargeur rapide compatible avec tous les smartphones récents.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Téléphones & Accessoires",
    stock: "En stock",
  },
  {
    id: 2,
    name: "Câble HDMI 4K - 2m",
    description: "Câble haute qualité compatible 4K et HDR pour une image parfaite.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1618842676088-c4489444c0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Câbles & Adaptateurs",
    stock: "En stock",
  },
  {
    id: 3,
    name: "Coque iPhone 13 Pro",
    description: "Protection renforcée anti-choc avec design élégant.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Téléphones & Accessoires",
    stock: "En stock",
  },
  {
    id: 4,
    name: "Disque Dur Externe 1To",
    description: "Stockage portable et rapide avec connexion USB 3.0.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1602524206684-fdf6393c5534?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Stockage",
    stock: "En stock",
  },
  {
    id: 5,
    name: "Souris Sans Fil Ergonomique",
    description: "Confort optimal et précision pour une utilisation prolongée.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Accessoires PC",
    stock: "En stock",
  },
  {
    id: 6,
    name: "Clavier Mécanique Gamer",
    description: "Switches bleus, rétroéclairage RGB et design ergonomique.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Accessoires PC",
    stock: "Derniers exemplaires",
  },
  {
    id: 7,
    name: "Adaptateur Multiport USB-C",
    description: "HDMI, USB, SD card et charge en simultané pour vos appareils.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Câbles & Adaptateurs",
    stock: "En stock",
  },
  {
    id: 8,
    name: "SSD Interne 500Go",
    description: "Boostez les performances de votre ordinateur avec ce SSD haute vitesse.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Stockage",
    stock: "Rupture de stock",
  },
  {
    id: 9,
    name: "Écouteurs Bluetooth",
    description: "Son de qualité supérieure et autonomie longue durée.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Téléphones & Accessoires",
    stock: "En stock",
  },
  {
    id: 10,
    name: "Tapis de Souris Gaming",
    description: "Surface de précision et repose-poignet confortable.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1616049474892-c5f9d18081d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Accessoires PC",
    stock: "En stock",
  },
  {
    id: 11,
    name: "Clé USB 64Go",
    description: "Transport sécurisé de vos données avec vitesse de transfert élevée.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618850781142-620eab55a2f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Stockage",
    stock: "En stock",
  },
  {
    id: 12,
    name: "Câble Lightning - 1m",
    description: "Câble certifié pour iPhone et iPad avec gaine renforcée.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1612815452835-803a33c5ab13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Câbles & Adaptateurs",
    stock: "En stock",
  },
];
