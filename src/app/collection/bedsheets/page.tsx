import CollectionLayout from "../CollectionLayout";

export default function BedsheetsPage() {
  return (
    <CollectionLayout
      title="Premium Bedsheets"
      subtitle="Experience ultimate comfort with our luxury bedding collection."
      bgImage="/images/bedsheet_luxury.png"
      introTitle="Ultimate Comfort and Elegance for Your Bedroom"
      introText="Our premium bedsheets are crafted from the finest textiles, engineered to provide exceptional comfort and durability. Designed to elevate the aesthetic of any bedroom, these bedsheets offer a soft, luxurious feel, enhancing the overall well-being and restfulness of your sleep. With durable construction and easy maintenance, our bedsheets ensure long-term reliability and elegance."
      features={[
        { title: "Premium Fabric", desc: "Crafted from high-thread-count materials, ensuring long-lasting performance and luxurious softness." },
        { title: "Breathable Design", desc: "Provides excellent airflow, regulating temperature to keep you comfortable throughout the night." },
        { title: "Easy Maintenance", desc: "Designed for quick and simple washing, ensuring a fresh environment with minimal effort." },
        { title: "Fade Resistant", desc: "Colors remain vibrant even after multiple washes, offering a durable aesthetic appeal." },
        { title: "Hypoallergenic", desc: "Safe for sensitive skin, crafted from materials that naturally resist dust mites and allergens." },
        { title: "Perfect Fit", desc: "Deep pockets and durable elastic ensure a snug fit around any mattress type." }
      ]}
      products={[
        { name: "Luxury Silk Edition", price: "$120", image: "/images/bedsheet_luxury.png" },
        { name: "Floral Cotton Series", price: "$85", image: "/images/bedsheet_floral.png" },
        { name: "Minimalist Linen Set", price: "$95", image: "/images/bedsheet_luxury.png" },
        { name: "Royal Velvet Collection", price: "$150", image: "/images/bedsheet_floral.png" }
      ]}
      applications={[
        "Luxury Hotels and Resorts",
        "Boutique Guest Houses",
        "Premium Residential Homes",
        "Hospitality Sector",
        "Interior Design Projects"
      ]}
      faqs={[
        { q: "What material are the bedsheets made of?", a: "Our bedsheets are crafted from premium cotton and silk blends designed to withstand regular use and provide luxury comfort." },
        { q: "Are the bedsheets easy to clean?", a: "Yes, our collections are designed for easy maintenance. They can be machine washed to maintain hygiene and freshness." },
        { q: "Do the bedsheets fade over time?", a: "No, we use high-quality, color-fast dyes that ensure the vibrant colors remain intact even after multiple washes." },
        { q: "Can they be used in all seasons?", a: "Absolutely. Our breathable fabrics regulate temperature effectively, keeping you warm in winter and cool in summer." }
      ]}
    />
  );
}
