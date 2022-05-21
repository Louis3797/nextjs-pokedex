import { FC } from 'react'
import s from './Stats.module.scss'

interface StateProps {
  stats: {
    title: string
    content: string | string[] | undefined
  }[]
}

const Stats: FC<StateProps> = ({ stats }) => {
  return (
    <div className={s.root}>
      <table className="table">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="w-full bg-secondary px-5 py-1 text-center text-lg font-semibold text-primary lg:py-2 lg:text-xl"
            >
              Pokemon Stats
            </th>
          </tr>
        </thead>

        <tbody>
          {stats.map((s: any, index: number) => {
            const { title, content } = s
            return (
              <tr key={index} className="border">
                <td>{title}</td>
                <td>{content}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Stats
