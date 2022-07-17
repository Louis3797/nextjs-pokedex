import { FC } from 'react'

interface StateProps {
  stats: {
    title: string
    content: string | string[] | undefined
  }[]
}

const Stats: FC<StateProps> = ({ stats }) => {
  return (
    <div className="mt-8 w-full overflow-hidden rounded-lg">
      <table className="w-full border-collapse overflow-hidden">
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
              <tr
                key={index}
                className="border even:bg-primary-600"
              >
                <td className="border border-secondary/10 p-2 text-left">
                  {title}
                </td>
                <td className="border border-secondary/10 p-2 text-left">
                  {content}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Stats
