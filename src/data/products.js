import rawProducts from "./products.json";

export const products = rawProducts.map((product) => ({
  id: product.id,
  slug: product.handle,
  name: product.title,

  category: product.productCategory || "Sunglasses",

  image: product.images?.[0]?.url || "",

  images: product.images?.map((img) => img.url) || [],

  description: product.descriptionHtml || "",

  features: product.tags || [],

variants: product.variants || [],

price: Number(product.variants?.[0]?.price || 0),

compareAt: Number(
  product.variants?.[0]?.compareAtPrice ||
  product.variants?.[0]?.compareAt ||
  0
),
}));

export const categories = [
  "All",
  "Sunglasses"
];

export const shapes = [];