import Product from './product.type';
import { plainToClass } from 'class-transformer';

export function createProductSamples() {
  return plainToClass(Product, [
    {
      id: 1,
      title: 'MONTANO HICKORY 2A',
      slug: 'BQ-MNT-2A',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 2,
      title: 'MONTANO HICKORY 2B',
      slug: 'BQ-MNT-2B',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 3,
      title: 'MONTANO HICKORY 5A',
      slug: 'BQ-MNT-5A',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 4,
      title: 'MONTANO HICKORY  5AAX',
      slug: 'BQ-MNT-5AAX',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 5,
      title: 'MONTANO HICKORY 5B',
      slug: 'BQ-MNT-5B',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 6,
      title: 'MONTANO HICKORY 5BBX',
      slug: 'BQ-MNT-5BBX',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 7,
      title: 'MONTANO HICKORY 7A',
      slug: 'BQ-MNT-7A',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 8,
      title: 'MONTANO HICKORY 7B',
      slug: 'BQ-MNT-7B',
      unit: '2 pc(s)',
      price: 40000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 9,
      title: 'MONTANO HICKORY 2B NEON VERDE',
      slug: ' BQ-MNT-2BN',
      unit: '2 pc(s)',
      price: 50000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 10,
      title: 'MONTANO MARCHING BAND',
      slug: 'BQ-MNT-MB',
      unit: '2 pc(s)',
      price: 50000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Completamente hechas a mano por el maestro artesano Eduardo Montano, desde Xalapa, México, llegan las Baquetas Montano, elaboradas con la mejor madera de “hickory” (nuez dura) que es conocida a nivel mundial por ser la madera que mejor sNuestra serie Special consiste en una mezcla del cuerpo de la serie Raw y el borde de la serie Traditional. Con esta combinación presentamos un sonido controlado de alta definición, sostenido medio a oscuro. Esta serie Special se caracteriza por su diversidad para estilos musicales compuestos por sonido pesado y un poco de brillo. Es un sonido oscuro, crujiente, pero aún muy brillante.e acopla y extrae el sonido tanto en membranas de tambores, como en platillos y otros instrumentos musicales de percusión.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/baquetas_montano.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Baquetas',
          slug: 'baquetas',
        },
        {
          id: 2,
          title: 'Montano',
          slug: 'montano',
        },
      ],
    },
    {
      id: 11,
      title: 'ANGULAR DAMPERS',
      slug: 'DP-AG-BX',
      unit: '6 pc(s)',
      price: 25000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Dampers o geles, son sordinas que permiten controlar los armónicos no deseados en tus instrumentos de percusión. Pueden utilizarse sobre los parches de toms, redoblante e incluso tus platillos. Tenerlos a la mano te ayuda a encontrar tu sonido mucho más fácil sin tener que estar cambiando la tensión de tus parches.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/angular_dampers.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/angular_dampers.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/angular_dampers.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/angular_dampers.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/angular_dampers.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 4,
          title: 'Angular Dampers',
          slug: 'angular-dampers',
        },
      ],
    },
    // Estuches de proteccion
    {
      id: 12,
      title: 'ESTUCHE PARA PLATILLOS PRO 22"',
      slug: 'EP-22',
      unit: '1 pc(s)',
      price: 250000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Estuches hechos en lonas resistentes, con entrepaños y materiales de alta resistencia pero con la suavidad y flexibilidad necesarias para tu confort y el cuidado de tus instrumentos musicales. Contamos con modelos para platillos, redoblantes, guitarras, bajos, herrajes, baqueteros pro y mini, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 9,
          title: 'Goshem',
          slug: 'goshem-accesories',
        },
      ],
    },
    {
      id: 13,
      title: 'ESTUCHE PARA PLATILLOS PRO 24"',
      slug: 'EP-24',
      unit: '1 pc(s)',
      price: 300000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Estuches hechos en lonas resistentes, con entrepaños y materiales de alta resistencia pero con la suavidad y flexibilidad necesarias para tu confort y el cuidado de tus instrumentos musicales. Contamos con modelos para platillos, redoblantes, guitarras, bajos, herrajes, baqueteros pro y mini, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 9,
          title: 'Goshem',
          slug: 'goshem-accesories',
        },
      ],
    },
    {
      id: 14,
      title: 'BAQUETERO PRO GRANDE',
      slug: 'BQ-PR',
      unit: '1 pc(s)',
      price: 60000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Estuches hechos en lonas resistentes, con entrepaños y materiales de alta resistencia pero con la suavidad y flexibilidad necesarias para tu confort y el cuidado de tus instrumentos musicales. Contamos con modelos para platillos, redoblantes, guitarras, bajos, herrajes, baqueteros pro y mini, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 9,
          title: 'Goshem',
          slug: 'goshem-accesories',
        },
      ],
    },
    {
      id: 15,
      title: 'BAQUETERO PRO MINI ',
      slug: 'BQ-MN',
      unit: '1 pc(s)',
      price: 30000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Estuches hechos en lonas resistentes, con entrepaños y materiales de alta resistencia pero con la suavidad y flexibilidad necesarias para tu confort y el cuidado de tus instrumentos musicales. Contamos con modelos para platillos, redoblantes, guitarras, bajos, herrajes, baqueteros pro y mini, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 9,
          title: 'Goshem',
          slug: 'goshem-accesories',
        },
      ],
    },
    {
      id: 16,
      title: 'ESTUCHE PRO GUITARRA ELECT-ACUST',
      slug: 'EP-GT',
      unit: '1 pc(s)',
      price: 200000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Estuches hechos en lonas resistentes, con entrepaños y materiales de alta resistencia pero con la suavidad y flexibilidad necesarias para tu confort y el cuidado de tus instrumentos musicales. Contamos con modelos para platillos, redoblantes, guitarras, bajos, herrajes, baqueteros pro y mini, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 9,
          title: 'Goshem',
          slug: 'goshem-accesories',
        },
      ],
    },
    {
      id: 17,
      title: 'ESTUCHE PRO BAJO ELECT-ACUST',
      slug: 'EP-BJ',
      unit: '1 pc(s)',
      price: 220000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Estuches hechos en lonas resistentes, con entrepaños y materiales de alta resistencia pero con la suavidad y flexibilidad necesarias para tu confort y el cuidado de tus instrumentos musicales. Contamos con modelos para platillos, redoblantes, guitarras, bajos, herrajes, baqueteros pro y mini, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/goshem_bag_music.jpg',
        },
      ],
      categories: [
        {
          id: 3,
          title: 'Protectores',
          slug: 'protectores',
        },
        {
          id: 9,
          title: 'Goshem',
          slug: 'goshem-accesories',
        },
      ],
    },
    // Platillos
    {
      id: 18,
      title: 'CRASH DIRIL CYMBALS 16 PULGADAS',
      slug: 'CR-16',
      unit: '1 pc',
      price: 680000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 19,
      title: 'CRASH DIRIL CYMBALS 17 PULGADAS',
      slug: 'CR-17',
      unit: '1 pc',
      price: 720000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 20,
      title: 'CRASH DIRIL CYMBALS 18 PULGADAS',
      slug: 'CR-18',
      unit: '1 pc',
      price: 770000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 21,
      title: 'CRASH DIRIL CYMBALS 19 PULGADAS',
      slug: 'CR-19',
      unit: '1 pc',
      price: 800000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 22,
      title: 'CRASH DIRIL CYMBALS 20 PULGADAS',
      slug: 'CR-20',
      unit: '1 pc',
      price: 820000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 23,
      title: 'CRASH DIRIL CYMBALS 21 PULGADAS',
      slug: 'CR-21',
      unit: '1 pc',
      price: 850000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 24,
      title: 'CRASH DIRIL CYMBALS 22 PULGADAS',
      slug: 'CR-22',
      unit: '1 pc',
      price: 880000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 25,
      title: 'CHINA DIRIL CYMBALS 16 PULGADAS',
      slug: 'CH-16',
      unit: '1 pc',
      price: 680000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 26,
      title: 'CHINA DIRIL CYMBALS 17 PULGADAS',
      slug: 'CH-17',
      unit: '1 pc',
      price: 720000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 27,
      title: 'CHINA DIRIL CYMBALS 18 PULGADAS',
      slug: 'CH-18',
      unit: '1 pc',
      price: 770000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 28,
      title: 'CHINA DIRIL CYMBALS 19 PULGADAS',
      slug: 'CH-19',
      unit: '1 pc',
      price: 800000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 29,
      title: 'CHINA DIRIL CYMBALS 20 PULGADAS',
      slug: 'CH-20',
      unit: '1 pc',
      price: 820000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 30,
      title: 'CHINA DIRIL CYMBALS 21 PULGADAS',
      slug: 'CH-21',
      unit: '1 pc',
      price: 850000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 31,
      title: 'CHINA DIRIL CYMBALS 22 PULGADAS',
      slug: 'CH-22',
      unit: '1 pc',
      price: 880000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 32,
      title: 'HI-HAT DIRIL CYMBALS 14 PULGADAS',
      slug: 'HH-14',
      unit: '1 pc',
      price: 850000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 33,
      title: 'HI-HAT DIRIL CYMBALS 15 PULGADAS',
      slug: 'HH-15',
      unit: '1 pc',
      price: 950000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 34,
      title: 'HI-HAT DIRIL CYMBALS 16 PULGADAS',
      slug: 'HH-16',
      unit: '1 pc',
      price: 1050000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 35,
      title: 'RIDE RIDIL CYMBALS 20 PULGADAS',
      slug: 'RD-20',
      unit: '1 pc',
      price: 850000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 36,
      title: 'RIDE RIDIL CYMBALS 21 PULGADAS',
      slug: 'RD-21',
      unit: '1 pc',
      price: 900000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 37,
      title: 'RIDE RIDIL CYMBALS 22 PULGADAS',
      slug: 'RD-22',
      unit: '1 pc',
      price: 950000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 38,
      title: 'RIDE RIDIL CYMBALS 23 PULGADAS',
      slug: 'RD-23',
      unit: '1 pc',
      price: 1000000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 39,
      title: 'RIDE RIDIL CYMBALS 24 PULGADAS',
      slug: 'RD-24',
      unit: '1 pc',
      price: 1100000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 40,
      title: 'SPLASH DIRIL CYMBALS 6 PULGADAS',
      slug: 'SP-6',
      unit: '1 pc',
      price: 310000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 41,
      title: 'SPLASH DIRIL CYMBALS 8 PULGADAS',
      slug: 'SP-8',
      unit: '1 pc',
      price: 340000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 42,
      title: 'SPLASH DIRIL CYMBALS 10 PULGADAS',
      slug: 'SP-10',
      unit: '1 pc',
      price: 370000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
    {
      id: 43,
      title: 'SPLASH DIRIL CYMBALS 12 PULGADAS',
      slug: 'SP-12',
      unit: '1 pc',
      price: 400000,
      salePrice: 0,
      discountInPercent: 0,
      description: 'Con más de 12 años en el mercado y casi 30 años de experiencia del maestro creador y fundado de la marca, Ibrahim Diril, ha aportado a la industria de los platillos de aleación bronce 20 sus mejores diseños y conocimientos. Los platillos Diril son hechos y martillados a mano 100% en Turquía, en la hermosa ciudad de Samsun en la región del Mar Negro. Con más de 25 series diferentes y únicas entre sí, Diril Cymbals entrega al baterista, percusionista y músico particular un sonido único con el que se puede identificar.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/aslan.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 7,
          title: 'Diril Cymbals',
          slug: 'diril-cymbals',
        },
      ],
    },
// Wambooka
    {
      id: 44,
      title: '14" - 0.250MM - CLEAR WITH WHITE CIRCLE HAMMERTONE',
      slug: 'COH-HM-14',
      unit: '1 pc',
      price: 75000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 45,
      title: '22" - 0.250MM - CLEAR WITH WHITE CIRCLE HAMMERTONE',
      slug: 'COH-HM-22',
      unit: '1 pc',
      price: 135000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 46,
      title: '10"- 2PLY -  DOUBLE OIL CLEAR  DRUM HEAD DOUBLECHEESE',
      slug: 'COH-DC-10',
      unit: '1 pc',
      price: 55000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 47,
      title: '12"- 2PLY -  DOUBLE OIL CLEAR  DRUM HEAD DOUBLECHEESE',
      slug: 'COH-DC-12',
      unit: '1 pc',
      price: 63000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 48,
      title: '14"- 2PLY -  DOUBLE OIL CLEAR  DRUM HEAD DOUBLECHEESE',
      slug: 'COH-DC-14',
      unit: '1 pc',
      price: 70000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 49,
      title: '16"- 2PLY -  DOUBLE OIL CLEAR  DRUM HEAD DOUBLECHEESE',
      slug: 'COH-DC-16',
      unit: '1 pc',
      price: 78000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 50,
      title: '10" DRUM HEAD 0.250MM – WHITE COATED VINTAGE SAND',
      slug: 'COH-VS-10',
      unit: '1 pc',
      price: 50000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 51,
      title: '12" DRUM HEAD 0.250MM – WHITE COATED VINTAGE SAND',
      slug: 'COH-VS-12',
      unit: '1 pc',
      price: 56000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 52,
      title: '14" DRUM HEAD 0.250MM – WHITE COATED VINTAGE SAND',
      slug: 'COH-VS-14',
      unit: '1 pc',
      price: 60000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
    {
      id: 53,
      title: '16" DRUM HEAD 0.250MM – WHITE COATED VINTAGE SAND',
      slug: 'COH-VS-16',
      unit: '1 pc',
      price: 70000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Los parches Wambooka, de diseño italiano, son el aliado perfecto para todo baterista. Hechos con los mejores materiales y testeados por músicos talentosos, estos productos se posicionan rápidamente dentro de las marcas más reconocidas a nivel mundial. Sus accesorios también tienen gran reconocimiento y calidad en su fabricación. Dentro de estos encontramos correas de cuero, picks (púas) de diferentes materiales, entre otros.',
      type: 'music',
      image: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/wambooka1.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 8,
          title: 'Wambooka',
          slug: 'wambooka',
        },
      ],
    }, 
// Kingdo Cymbals
    {
      id: 54,
      title: 'SET PLATILLOS KINGDO LOWSOUND GRANDE UN COLOR (HH14-CR16-CR18-RD20)',
      slug: 'KCS-GR-UC',
      unit: '5 pcs',
      price: 850000,
      salePrice: 21,
      discountInPercent: 30,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 55,
      title: 'SET PLATILLOS KINGDO LOWSOUND PEQUEÑO UN COLOR (HH14-CR16-RD20)',
      slug: 'KCS-PQ-UC',
      unit: '5 pcs',
      price: 600000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 56,
      title: 'SET PLATILLOS KINGDO LOWSOUND GRANDE MULTICOLOR (HH14-CR16-CR18-RD20)',
      slug: 'KCS-GR-RB',
      unit: '5 pcs',
      price: 900000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 57,
      title: 'HI-HATS 14" KINGDO LOWSOUND',
      slug: 'KCS-14',
      unit: '2 pcs',
      price: 300000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 58,
      title: 'CRASH 16" KINGDO LOWSOUND',
      slug: 'KCS-16',
      unit: '1 pc',
      price: 230000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 59,
      title: 'CRASH 18" KINGDO LOWSOUND',
      slug: 'KCS-18',
      unit: '1 pc',
      price: 260000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 60,
      title: 'SET PLATILLOS KINGDO LOWSOUND PEQUEÑO MULTICOLOR (HH14-CR16-RD20)',
      slug: 'KCS-PQ-RB',
      unit: '5 pcs',
      price: 650000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 61,
      title: 'RIDE 20" KINGDO LOWSOUND',
      slug: 'KCS-20',
      unit: '1 pc',
      price: 300000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 62,
      title: 'PRACTICE PAD KINGDO MULTITONO 12 PULGADAS',
      slug: 'KPP-12',
      unit: '1 pc',
      price: 220000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 63,
      title: 'SET PLATILLOS KINGDO B8',
      slug: 'KB8-GR',
      unit: '6 pcs',
      price: 1300000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 64,
      title: 'SPLASH 10" KINGDO B8',
      slug: 'KB8-10',
      unit: '1 pc',
      price: 180000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 65,
      title: 'HI-HATS 14" KINGDO B8',
      slug: 'KB8-14',
      unit: '2 pc',
      price: 280000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 66,
      title: 'CRASH 16" KINGDO B8',
      slug: 'KB8-16',
      unit: '1 pc',
      price: 330000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 67,
      title: 'CRASH 18" KINGDO B8',
      slug: 'KB8-18',
      unit: '1 pc',
      price: 380000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
    {
      id: 68,
      title: 'RIDE 20" KINGDO B8',
      slug: 'KB8-20',
      unit: '1 pc',
      price: 380000,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'Platillos de una poderosa y resistente aleación de metales hechos en China con excelentes estándares de calidad. Son platillos con huecos esparcidos a lo largo del cuerpo y campana del platillo que reduce el peso, la ganancia y la resonancia de los mismos, sin poner en riesgo el timbre de cada platillo y su utilidad. Es tu mejor opción para practicar. Están disponibles en diferentes colores: Arcoiris, Azul, Dorado, Negro, Plateado, Rojo, Verde y Violeta.',
      type: 'music',
      image:
        'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
      gallery: [
        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },

        {
          url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
        },
      ],
      categories: [
        {
          id: 6,
          title: 'Platillos',
          slug: 'platillos',
        },
        {
          id: 10,
          title: 'Kingdo',
          slug: 'kingdo',
        },
      ],
    },
// PigHog Cables
{
  id: 69,
  title: 'Pig Hog  "Amplifier Grill" 6" patch cables, 3pk',
  slug: 'PHLIL6AG',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 70,
  title: 'Pig Hog  "Black Woven" 6" patch cables, 3pk',
  slug: 'PHLIL6BK',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 71,
  title: 'Pig Hog  "Candy Apple" 6" patch cables, 3pk',
  slug: 'PHLIL6CA',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 72,
  title: 'Pig Hog  "Orange Cream" 6" patch cables, 3pk',
  slug: 'PHLIL6CC',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 73,
  title: 'Pig Hog  "Camouflage" 6" patch cables, 3pk',
  slug: 'PHLIL6CF',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 74,
  title: 'Pig Hog  "Western Plaid" 6" patch cables, 3pk',
  slug: 'PHLIL6CP',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 75,
  title: 'Pig Hog  "Daphne Blue" 6" patch cables, 3pk',
  slug: 'PHLIL6DB',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 76,
  title: 'Pig Hog  "Tartan Plaid" 6" patch cables, 3pk',
  slug: 'PHLIL6PL',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 77,
  title: 'Pig Hog  "Rasta Stripe" 6" patch cables, 3pk',
  slug: 'PHLIL6RA',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 78,
  title: 'Pig Hog  "Seafoam Green" 6" patch cables, 3pk',
  slug: 'PHLIL6SG',
  unit: '1 pc',
  price: 120000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 79,
  title: 'Pig Hog  "Amplifier Grill" 1ft Right Angled Patch Cables',
  slug: 'PCH1AGR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 80,
  title: 'Pig Hog  "Black Woven" 1ft Right Angled Patch Cables',
  slug: 'PCH1BKR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 81,
  title: 'Pig Hog  "Candy Apple Red" 1ft Right Angled Patch Cables',
  slug: 'PCH1CAR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 82,
  title: 'Pig Hog  "Camouflage" 1ft Right Angled Patch Cables',
  slug: 'PCH1CFR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 83,
  title: 'Pig Hog  "Daphne Blue" 1ft Right Angled Patch Cables',
  slug: 'PCH1DBR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 84,
  title: 'Pig Hog  "Tartan Plaid" 1ft Right Angled Patch Cables',
  slug: 'PCH1PLR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 85,
  title: 'Pig Hog  "Rasta Stripe" 1ft Right Angled Patch Cables',
  slug: 'PCH1RAR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 86,
  title: 'Pig Hog  "Seafoam Green" 1ft Right Angled Patch Cables',
  slug: 'PCH1SGR',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 87,
  title: 'Pig Hog  "Amplifier Grill" 3ft Patch Cables 1m',
  slug: 'PCH3AG',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 88,
  title: 'Pig Hog  "Black Woven" 3ft  Patch Cables',
  slug: 'PCH3BK',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 89,
  title: 'Pig Hog  "Candy Apple Red" 3ft  Patch Cables',
  slug: 'PCH3CA',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 90,
  title: 'Pig Hog  "Camouflage" 3ft  Patch Cables',
  slug: 'PCH3CF',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 91,
  title: 'Pig Hog  "Daphne Blue" 3ft  Patch Cables',
  slug: 'PCH3DB',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 92,
  title: 'Pig Hog  "Tartan Plaid" 3ft  Patch Cables',
  slug: 'PCH3PL',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 93,
  title: 'Pig Hog  "Rasta Stripe" 3ft  Patch Cables',
  slug: 'PCH3RA',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 94,
  title: 'Pig Hog  "Seafoam Green" 3ft  Patch Cables',
  slug: 'PCH3SG',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 95,
  title: 'Pig Hog "Amplifier Grill" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10AGR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 96,
  title: 'Pig Hog "Black Woven" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10BKR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 97,
  title: 'Pig Hog "Candy Apple Red" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10CAR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 98,
  title: 'Pig Hog "Camouflage" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10CFR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 99,
  title: 'Pig Hog "Daphne Blue" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10DBR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 100,
  title: 'Pig Hog "Jamaican Green" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10JGRR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 101,
  title: 'Pig Hog "Tartan Plaid" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10PLR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 102,
  title: 'Pig Hog "Rasta Stripes" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10RAR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 103,
  title: 'Pig Hog "Riviera Purple" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10RPPR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 104,
  title: 'Pig Hog "Seafoam Green" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10SGR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 105,
  title: 'Pig Hog "Tahitian Blue" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10TABR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 106,
  title: 'Pig Hog "Tuscan Brown" Instrument Cable, 10ft. Right Angle',
  slug: 'PCH10TBRR',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 107,
  title: 'Pig Hog "Amplifier Grill" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20AGR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 108,
  title: 'Pig Hog "Black Woven" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20BKR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 109,
  title: 'Pig Hog "Candy Apple Red" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20CAR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 110,
  title: 'Pig Hog "Camouflage" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20CFR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 111,
  title: 'Pig Hog "Daphne Blue" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20DBR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 112,
  title: 'Pig Hog "Daphne Blue" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20DBR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 113,
  title: 'Pig Hog "Jamaican Green" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20JGRR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 114,
  title: 'Pig Hog "Tartan Plaid" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20PLR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 115,
  title: 'Pig Hog "Rasta Stripes" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20RAR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 116,
  title: 'Pig Hog "Riviera Purple" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20RPPR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 117,
  title: 'Pig Hog "Seafoam Green" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20SGR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 118,
  title: 'Pig Hog "Tahitian Blue" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20TABR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 119,
  title: 'Pig Hog "Tuscan Brown" Instrument Cable, 20ft. Right Angle',
  slug: 'PCH20TBRR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 120,
  title: 'Pig Hog Armor Clad Instrument Cable, 10ft, Right Angle',
  slug: 'PHAC-10R',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 121,
  title: 'Pig Hog Armor Clad Instrument Cable, 20ft, Right Angle',
  slug: 'PHAC-20R',
  unit: '1 pc',
  price: 200000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 122,
  title: 'Pig Hog Black & White Woven Mic Cable, 10ft XLR',
  slug: 'PHM10BKW',
  unit: '1 pc',
  price: 100000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 123,
  title: 'Pig Hog Black & White Woven Mic Cable, 20ft XLR',
  slug: 'PHM20BKW',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 124,
  title: 'Pig Hog Black & White Woven Mic Cable, 30ft XLR',
  slug: 'PHM30BKW',
  unit: '1 pc',
  price: 185000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 125,
  title: 'Pig Hog Red & Black Woven Mic Cable, 20ft XLR',
  slug: 'PHM20BRD',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 126,
  title: 'Pig Hog Orange & Black Woven Mic Cable, 20ft XLR',
  slug: 'PHM20ORG',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 127,
  title: 'Pig Hog Blue & Black Woven Mic Cable, 20ft XLR',
  slug: 'PHM20BBL',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 128,
  title: 'Pig Hog "Rasta Stripes" Woven Mic Cable, 20ft XLR',
  slug: 'PHM20RAS',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 129,
  title: 'Pig Hog "Jamaican Green" Woven Mic Cable, 20ft.',
  slug: 'PHM20JGR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 130,
  title: 'Pig Hog "Riviera Purple" Woven Mic Cable, 20ft.',
  slug: 'PHM20RPP',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 131,
  title: 'Pig Hog "Tahitian Blue" Woven Mic Cable, 20ft.',
  slug: 'PHM20TAB',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 132,
  title: 'Pig Hog "Tuscan Brown" Woven Mic Cable, 20ft.',
  slug: 'PHM20TBR',
  unit: '1 pc',
  price: 150000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 133,
  title: '10ft Headphone Extension Cable, 1/4"',
  slug: 'PHX14-10',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 134,
  title: '25ft Headphone Extension Cable, 1/4"',
  slug: 'PHX14-25',
  unit: '1 pc',
  price: 85000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
{
  id: 135,
  title: '10ft Headphone Extension Cable, 3.5mm',
  slug: 'PHX35-10',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 13,
      title: 'Cables',
      slug: 'cables',
    },
    {
      id: 14,
      title: 'Pig Hog',
      slug: 'pig-hog',
    },
  ],
},
// Pig Hog Accesorio
{
  id: 136,
  title: 'Pedal Coupler, 1/4" - 1/4" Straight',
  slug: 'PH-PCSTR',
  unit: '1 pc',
  price: 45000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 137,
  title: 'Pedal Coupler, 1/4" - 1/4" Offset',
  slug: 'PH-PCOFF',
  unit: '1 pc',
  price: 50000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 138,
  title: '1/4"(F)-3.5mm(M) Mono  Adapter',
  slug: 'PA-1435M',
  unit: '1 pc',
  price: 25000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 139,
  title: '1/4"(F)-RCA(M) Mono Adapter',
  slug: 'PA-14FRM',
  unit: '1 pc',
  price: 30000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 140,
  title: 'RCA(F)-RCA(F) Mono Adapter, 2pk',
  slug: 'PA-2RCAF',
  unit: '1 pc',
  price: 25000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 141,
  title: 'XLR(F)-XLR(F) Balanced Adapter',
  slug: 'PA-2XLRF',
  unit: '1 pc',
  price: 60000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 142,
  title: 'XLR(M)-XLR(M) Balanced Adapter',
  slug: 'PA-2XLRM',
  unit: '1 pc',
  price: 45000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 143,
  title: 'Line Transformer, XLR(F) to 1/4"',
  slug: 'PA-LTX14',
  unit: '1 pc',
  price: 80000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 144,
  title: 'RCA(F)-1/4"(M) Mono Adapter, 2pk',
  slug: 'PA-RF14M',
  unit: '1 pc',
  price: 25000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 145,
  title: '1/4"(F)-1/4"(F) Stereo/Mono Adapter',
  slug: 'PA-S214F',
  unit: '1 pc',
  price: 35000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 146,
  title: '1/4" SpeakOn Adapter',
  slug: 'PA-SPK14',
  unit: '1 pc',
  price: 75000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 147,
  title: '3.5mm(F)-1/4"(M) Stereo Adapter',
  slug: 'PA-ST35T',
  unit: '1 pc',
  price: 25000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 148,
  title: '3.5mm(F)-1/4"(M) Stereo Adapter, threaded',
  slug: 'PA-ST35THRD',
  unit: '1 pc',
  price: 30000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 149,
  title: 'TRS(F)-XLR(M) Balanced Adapter',
  slug: 'PA-TFXMB',
  unit: '1 pc',
  price: 62000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 150,
  title: 'TRS(F)-3.5mm(M) Stereo Adapter',
  slug: 'PA-TRS35',
  unit: '1 pc',
  price: 25000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 151,
  title: 'XLR(F) -TRS(M) Adapter',
  slug: 'PA-XFTM2',
  unit: '1 pc',
  price: 43000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
{
  id: 152,
  title: 'XLR(M)-TRS(M) Adapter',
  slug: 'PA-XMTM1',
  unit: '1 pc',
  price: 58000,
  salePrice: 0,
  discountInPercent: 0,
  description:
    '',
  type: 'music',
  image:
    'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
  gallery: [
    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },

    {
      url: 'https://ladrummerstatics.s3.amazonaws.com/low_sound_cymbals-listen_series.jpg',
    },
  ],
  categories: [
    {
      id: 15,
      title: 'Accesorios',
      slug: 'accesorios',
    },
    {
      id: 16,
      title: 'Pig Hog',
      slug: 'pig-hog-accesorios',
    },
  ],
},
         
  ]);
}
