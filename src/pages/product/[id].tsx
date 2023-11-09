import { useRouter } from 'next/router'
import { 
  ImageContainer, 
  ProductContainer, 
  ProductDetails 
} from '@/styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 89,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veritatis, aliquid facilis sint delectus fuga consectetur 
          perferendis, ea deserunt cum commodi dignissimos! Nisi, 
          ad ducimus assumenda blanditiis iste voluptas sint dicta.
        </p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}