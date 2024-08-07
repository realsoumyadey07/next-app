import React from 'react'

export default function ProductId({params}: {params: any}) {
     return (
          <React.Fragment>
               <h1>Product details {params.productId}</h1>
          </React.Fragment>
     )
}
