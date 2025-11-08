const categoryColorMap: Record<string, string> = {
  'beauty': 'bg-pink-50 border-pink-200',
  'fragrances': 'bg-blue-50 border-blue-200',
  'groceries': 'bg-green-50 border-green-200',
  'home-decoration': 'bg-yellow-50 border-yellow-200',
  'kitchen-accessories': 'bg-violet-50 border-violet-200',
  'mens-shirts': 'bg-sky-50 border-sky-200',
  'mens-shoes': 'bg-slate-50 border-slate-200',
  'mens-watches': 'bg-gray-50 border-gray-200',
  'mobile-accessories': 'bg-indigo-50 border-indigo-200',
}

export const getCategoryColor = (category: string): string => {
  return categoryColorMap[category.toLowerCase()] || 'bg-gray-50 border-gray-200'
}