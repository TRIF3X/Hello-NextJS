import Link from 'next/link'
import Layout from '../components/MyLayout.js'

const PostLink = (props) => (
        // <Layout>
        //     {/* <Link href='/about'>
        //             <button>Go to About Page</button>
        //     </Link>  */}
        //     {/* <Header /> */}
        //     <p>Hello Next.js</p>
        // </Layout>
        <li>
            <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
  )

  export default () => (
    <Layout>
      <h1>My Blog</h1>
      <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
      </ul>
    </Layout>
  )
  

  // next/link is a HOC, you can't make direct changes to it. Link will accept href and some similair props. If you need to style, you do it to the underlying component
  

  //The only requirement of components placed inside a Link is they should accept an 'onClick' prop

  //must use pages directory for having client side routing

  //Query strings can use %20 as _+ or 'space_plus'
