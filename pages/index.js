import Link from 'next/link'

const Index = () => (
    <div>
       <Link href='/about'>
            <button>Go to About Page</button>
       </Link> 
       <p>Hello Next.js</p>
    </div>
  )
  
  export default Index

  //next/link is a HOC, you can't make direct changes to it. Link will accept href and some similair props. If 
  // you need to style, you do it to the underlying component

  //The only requirement of components placed inside a Link is they should accept an 'onClick' prop