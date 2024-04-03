import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (<main className='text-center'>
  <h2 className='text-3xl'>There was a problem</h2>
  <p>we could not find the page you were looking for.</p>
  <p>Go back to the <Link href="/tickets">Tickets</Link></p>
</main>
  )
}

export default NotFound