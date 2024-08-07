import React from 'react'

export default function Docs({params}: {
     params: {
          slug: string[]
     }
}) {
  return (
    <div>
      Docs is here! on {params.slug[0]}
    </div>
  )
}
