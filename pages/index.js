import Link from 'next/link'
import Header from '../components/Header.js'
import Layout from '../components/MyLayout.js'

const Index = () => (
        <Layout>
            {/* <Link href='/about'>
                    <button>Go to About Page</button>
            </Link>  */}
            {/* <Header /> */}
            <p>Hello Next.js</p>
        </Layout>
  )
  
  export default Index

  // next/link is a HOC, you can't make direct changes to it. Link will accept href and some similair props. If you need to style, you do it to the underlying component
  

  //The only requirement of components placed inside a Link is they should accept an 'onClick' prop

  //must use pages directory for having client side routing

