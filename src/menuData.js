export const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'breakfast', label: 'Healthy Breakfast' },
  { id: 'salads', label: 'Fresh Salads' },
  { id: 'bowls', label: 'Power Bowls' },
  { id: 'drinks', label: 'Detox Drinks' },
];

export const HIGHLIGHTS = [
  { id: 1, text: "Improve Microbiome Health", icon: "🦠" },
  { id: 2, text: "Enhance Digestive Regularity", icon: "🌿" },
  { id: 3, text: "Boost Natural Immunity", icon: "🛡️" },
  { id: 4, text: "Sustain All-Day Energy", icon: "⚡" },
];

export const MENU_ITEMS = [
  { 
    id: 1, 
    name: 'Berries & Oat Bowl', 
    category: 'breakfast', 
    price: 299, 
    desc: 'The fiber-rich, protein-packed oatmeal for regularity, energy, and digestion.', 
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Veg'
  },
  { 
    id: 2, 
    name: 'Avocado Toast Elite', 
    category: 'breakfast', 
    price: 349, 
    desc: 'Sourdough toast with smashed avocado, cherry tomatoes, and microgreens.', 
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Veg'
  },
  { 
    id: 3, 
    name: 'Superfood Berry Salad', 
    category: 'salads', 
    price: 399, 
    desc: 'Mixed greens, strawberries, blueberries, walnuts, and a light vinaigrette.', 
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Veg'
  },
  { 
    id: 4, 
    name: 'Grilled Chicken Caesar', 
    category: 'salads', 
    price: 449, 
    desc: 'Crisp romaine, grilled chicken breast, parmesan, and healthy yogurt dressing.', 
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Non-Veg'
  },
  { 
    id: 5, 
    name: 'Quinoa Power Bowl', 
    category: 'bowls', 
    price: 499, 
    desc: 'Quinoa base with roasted sweet potatoes, black beans, kale, and tahini dressing.', 
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Veg'
  },
  { 
    id: 6, 
    name: 'Salmon Poke Bowl', 
    category: 'bowls', 
    price: 599, 
    desc: 'Fresh salmon, edamame, seaweed salad, brown rice, and light soy glaze.', 
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Non-Veg'
  },
  { 
    id: 7, 
    name: 'Green Detox Smoothie', 
    category: 'drinks', 
    price: 249, 
    desc: 'Spinach, kale, green apple, cucumber, lemon, and ginger.', 
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Veg'
  },
  { 
    id: 8, 
    name: 'Golden Turmeric Latte', 
    category: 'drinks', 
    price: 199, 
    desc: 'Almond milk infused with turmeric, black pepper, and a touch of honey.', 
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Veg'
  },
];

export const REVIEWS = [
  {
    id: 1,
    text: "\"I love it! In theory it's good for you, in practice only if you eat high quality. I can finally eat healthy without compromising on taste.\"",
    name: "Jenny Wilson",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    text: "\"The fiber-rich bowls have completely transformed my mornings. I feel energetic throughout the day without any crashes.\"",
    name: "Rahul Sharma",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    text: "\"Absolutely delicious and super fresh. The delivery is fast and the packaging is eco-friendly. Highly recommended!\"",
    name: "Priya Patel",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    text: "\"It's hard to find good quality salads that actually taste amazing. FUELYN nailed it. The dressings are out of this world.\"",
    name: "Amit Kumar",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export const WHY_US_ITEMS = [
  { id: 1, title: "Healthy Browsing", icon: "🥦", desc: "Easy to browse and order from your phone." },
  { id: 2, title: "Fast Delivery", icon: "⚡", desc: "We deliver within 30 minutes, hot and fresh." },
  { id: 3, title: "Personalization", icon: "🎨", desc: "Customize your meals based on your health goals." },
  { id: 4, title: "Quality Ingredients", icon: "🥇", desc: "Every ingredient is checked for quality and freshness." },
  { id: 5, title: "Eco-Friendly", icon: "🌿", desc: "Sustainable packaging for a better planet." },
  { id: 6, title: "Customer Support", icon: "💬", desc: "24/7 dedicated support for all your queries." },
];
