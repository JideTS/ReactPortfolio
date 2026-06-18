import { CheckIcon } from './icons';

export const ExpertiseCard = ({ tone, title, advantages }) => (
  <article className={`expertise-card ${tone}`}>
    <h4>{title}</h4>
    <div className="card-divider" />
    <ul>
      {advantages.map((advantage) => (
        <li key={advantage}>
          <CheckIcon className="check-icon" />
          <span>{advantage}</span>
        </li>
      ))}
    </ul>
  </article>
);