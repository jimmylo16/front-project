import type { NextPage } from 'next'
import { Prueba } from '../components/prueba'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Prueba></Prueba>
    </div>
  )
}

export default Home
