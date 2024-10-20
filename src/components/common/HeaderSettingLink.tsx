import Link from 'next/link'
import { AiTwotoneSetting } from 'react-icons/ai'

export const HeaderSettingLink = () => {
  return (
    <Link href='/setting' className='inline-block p-3 rounded hover:bg-grayer'>
      <AiTwotoneSetting className='align-middle inline' />
    </Link>
  )
}
