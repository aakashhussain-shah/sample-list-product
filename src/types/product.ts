export type productCategory =
  | 'beauty'
  | 'fragrances'
  | 'groceries'
  | 'home-decoration'
  | 'kitchen-accessories'
  | 'mens-shirts'
  | 'mens-shoes'
  | 'mens-watches'
  | 'mobile-accessories';

export type Product = {
  id: number
  title: string
  description: string
  category: productCategory
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  images: string[]
  thumbnail: string
}
