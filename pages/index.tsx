import type { GetStaticProps, NextPage } from 'next'
import { Products } from '../components/Products'
import { PurchaseButton } from '../components/PurchaseButton'
import { IProducts } from '../interfaces'
import axios from 'axios'


const Home: NextPage<IProducts> = (props) => {
  console.log(props.products );
  const handleOnClick = () => {

  }
  return (
    <div className="">
      <Products />
      <PurchaseButton onClick={handleOnClick} />
    </div>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let products: IProducts[];
  try {
    const { data } = await axios.get<IProducts[]>('https://fakestoreapi.com/products');

    products = data;

  } catch (error: any) {
    products = error
  }

  // By returning { props: { posts } }, the 
  return {
    props: {
      products,
    },
  }
}
export default Home
