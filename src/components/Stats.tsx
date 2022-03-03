import React from "react";

interface StateProps {
  stats: {
    title: string;
    content: string | string[] | undefined;
  }[];
}
export const Stats: React.FC<StateProps> = ({ stats }) => {
  return (
    <ul>
      {stats.map((s, index) => {
        return (
          <li className="grid grid-cols-2 gap-x-5 mb-3" key={index}>
            <span className="text-secondary text-lg font-semibold" key={index}>
              {s.title}
            </span>
            <span className="whitespace-pre-line text-lg" key={index}>
              {s.content}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
