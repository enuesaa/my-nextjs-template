'use client'
import { css } from '@/styled-system/css'
import { addNote } from './actions'
import { MouseEventHandler, useState } from 'react'

export default function Page() {
  const [visible, setVisible] = useState(true)
  const styles = {
    main: css({
      visibility: visible ? 'visible' : 'hidden',
    })
  }

  const handleToggle: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }

  return (
    <>
      <div className={styles.main}>hey
      </div>
      <button onClick={handleToggle}>toggle</button>
      <form action={addNote}>
        <textarea name='name'></textarea>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

// https://zenn.dev/sumiren/articles/664c86a28ec573
// nextjs 13 では fetch が cache されるらしく、そのまま Page() の中で fetch() すれば良いみたい
// export function generateStaticParams() {
//   return [
//     { slug: 'a' },
//   ]
// }
