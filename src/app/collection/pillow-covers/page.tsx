import CollectionLayout from "../CollectionLayout";

export default function PillowCoversPage() {
  return (
    <CollectionLayout
      title="Pillow Covers"
      subtitle="Add the perfect finishing touch with our designer pillow covers."
      bgImage="/images/pillow_cover_decorative.png"
      introTitle="Exquisite Details and Luxurious Textures"
      introText="Our designer pillow covers are crafted from premium fabrics, engineered to add texture, color, and comfort to any seating or bedding arrangement. Designed to complement diverse interior styles, these covers offer a quick and elegant way to refresh your space. With durable zippers and fine stitching, our pillow covers ensure lasting quality and beauty."
      features={[
        { title: "Artisan Craftsmanship", desc: "Hand-finished details including piping, embroidery, and hidden zippers." },
        { title: "Versatile Styling", desc: "Available in a wide range of colors, patterns, and textures to match any decor." },
        { title: "Durable Fabrics", desc: "Made from strong, high-quality materials that resist pilling and wear." },
        { title: "Easy Care", desc: "Removable covers that are easy to wash and maintain for everyday use." },
        { title: "Hypoallergenic Options", desc: "Available in natural organic cottons and silks for sensitive skin." },
        { title: "Perfect Fit", desc: "Tailored to fit standard insert sizes perfectly without sagging." }
      ]}
      products={[
        { name: "Silk Embroidered Cover", price: "$45", image: "/images/pillow_cover_decorative.png" },
        { name: "Linen Textured Pillow", price: "$35", image: "/images/pillow_cover_decorative.png" },
        { name: "Velvet Throw Cushion", price: "$50", image: "/images/pillow_cover_decorative.png" },
        { name: "Geometric Print Cover", price: "$40", image: "/images/pillow_cover_decorative.png" }
      ]}
      applications={[
        "Living Room Sofas and Armchairs",
        "Master Bedroom Bedding Accents",
        "Boutique Hotel Lounges",
        "Outdoor Patio Seating",
        "Office Reception Areas"
      ]}
      faqs={[
        { q: "Do the covers come with inserts?", a: "Our pillow covers are sold separately from the inserts, allowing you to choose your preferred fill type." },
        { q: "How do I choose the right size?", a: "We recommend purchasing a cover that is the exact same size as your insert for a relaxed fit, or 1-2 inches smaller for a plump, full look." },
        { q: "Are the zippers hidden?", a: "Yes, all our premium pillow covers feature seamlessly hidden zippers for a clean, tailored appearance." },
        { q: "Can I machine wash these covers?", a: "Most of our cotton and linen covers are machine washable. Silk and velvet covers require dry cleaning." }
      ]}
    />
  );
}
