export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pipes' | 'accessories' | 'vaporizers' | 'papers' | 'cleaners';
  image: string;
  stock: number;
  featured?: boolean;
  brand?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cloud Plus - Mighty Mint',
    description: 'Vaporizador desechable con 1600 caladas de frescura extrema. Tecnología Dual Coil para un sabor intenso y consistente.',
    price: 300.00,
    category: 'vaporizers',
    image: 'https://cdn.shoplightspeed.com/shops/659372/files/42940378/cloud-plus-cloud-plus-mighty-mint.jpg',
    stock: 50,
    featured: true,
    brand: 'Cloud Plus'
  },
  {
    id: '2',
    name: 'Cloud Plus - Black Ice',
    description: 'Experiencia superior con 1600 caladas de sabor Black Ice. Potencia y rendimiento en un diseño elegante y compacto.',
    price: 300.00,
    category: 'vaporizers',
    image: 'https://cloudpor.com/wp-content/uploads/2021/07/BLACK-ICE.jpg',
    stock: 45,
    featured: true,
    brand: 'Cloud Plus'
  },
  {
    id: '3',
    name: 'Cloud Plus - Mix Berries',
    description: 'Sabor intenso de bayas mixtas con 1600 caladas. Doble vaporizador para una nube densa y satisfactoria.',
    price: 300.00,
    category: 'vaporizers',
    image: 'https://cdn.shoplightspeed.com/shops/659372/files/43140412/cloud-plus-cloud-max-mix-berries.jpg',
    stock: 40,
    featured: true,
    brand: 'Cloud Plus'
  },
  {
    id: '4',
    name: 'Cloud Plus - Watermelon Cherry',
    description: 'La combinación perfecta de sandía y cereza. 1600 caladas con batería de 950mAh y 6ml de líquido.',
    price: 300.00,
    category: 'vaporizers',
    image: 'https://cloudpor.com/wp-content/uploads/2021/07/watermelon-cherry-2.jpg',
    stock: 35,
    brand: 'Cloud Plus'
  },
  {
    id: '5',
    name: 'V Plus - Cool Monkey Edition 36000 caladas',
    description: 'Increíble capacidad de 36000 caladas con pantalla LED inteligente. Tecnología de duales sabores y diseño icónico.',
    price: 900.00,
    category: 'vaporizers',
    image: 'https://www.ksdvapor.com/uploads/43866/double-flavors-vape-36000-puff7d082.webp',
    stock: 20,
    featured: true,
    brand: 'V Plus'
  },
  {
    id: '6',
    name: 'Eleaf Stick Series Resistencias reemplazables',
    description: 'Vaporizadores versátiles y potentes. Resistencias reemplazables y batería recargable de larga duración.',
    price: 1200.00,
    category: 'vaporizers',
    image: 'https://cdn.public.steam-time.de/images/org/Eleaf_iStick_i75_Kit_All_Colors.jpg',
    stock: 25,
    brand: 'Eleaf'
  },
  {
    id: '7',
    name: 'Blunt Wrap - Hemp Wraps 2x100',
    description: '2x100 Envolturas de cáñamo natural con CBD. Sin tabaco ni nicotina. Disponible en seis sabores diferentes.',
    price: 4.50,
    category: 'papers',
    image: 'https://www.bluntwrap.com.mx/site/images/Images/bluntwrap%20HEMP%20CBD.jpg',
    stock: 100,
    brand: 'Blunt Wrap'
  },
  {
    id: '8',
    name: 'Blunt Wrap - Double Platinum Mango 2x100',
    description: '2x100 Doble sabor y doble intensidad. Envolturas premium con sabor tropical a mango y tips incluidos.',
    price: 100.00,
    category: 'papers',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/6571914/2.jpg?4149',
    stock: 80,
    brand: 'Blunt Wrap'
  },
  {
    id: '9',
    name: 'Argus Pod System Resistencias reemplazables',
    description: 'Resistencias reemplazables Vaporizador de alto rendimiento con pantalla LED inteligente, tecnología de doble vaporización y un acabado artesanal en cuero premium.',
    price: 1200.00,
    category: 'vaporizers',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxksFYRFb54XcKO7ELUrju-yCJdw6H5yd_g&s',
    stock: 25,
    featured: true,
    brand: 'VOOPOO'
  }
];
