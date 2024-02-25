'use client'

export default function GlobalError({ error, reset }) {
  console.log('global Error', error)

  return (
    <html>
      <body>
        <h2>Someting went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
