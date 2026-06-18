import { Link } from 'react-router-dom';

import { cardTypes } from '../data/cards';
import { GlobeIcon, InterviewIcon } from './icons';

const StatusIcon = ({ type }) => {
  const Icon = type === 'interview' ? InterviewIcon : GlobeIcon;
  return <Icon className="card-status-icon" />;
};

const CardBody = ({ card }) => {
  const status = cardTypes[card.status];

  return (
    <article className="case-card">
      <div className="case-card-logo-frame">
        <img className={card.logo.className} src={card.logo.src} alt={card.logo.alt} />
      </div>
      <div className="card-divider" />
      <p className="case-card-body">{card.body}</p>
      <div className="card-divider" />
      <div className="discipline-list" aria-label="Expertises">
        {card.disciplines.map((discipline) => (
          <span key={discipline} className={`discipline-chip ${discipline}`}>
            {discipline === 'coding' ? 'CODE' : discipline.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="card-divider" />
      <div className="card-status">
        <StatusIcon type={card.status} />
        <span>{status.label}</span>
      </div>
    </article>
  );
};

export const CaseStudyCard = ({ card, onInterviewClick }) => {
  if (card.to) {
    return (
      <Link className="card-link" to={card.to}>
        <CardBody card={card} />
      </Link>
    );
  }

  if (card.href) {
    return (
      <a className="card-link" href={card.href} target="_blank" rel="noreferrer">
        <CardBody card={card} />
      </a>
    );
  }

  return (
    <button className="card-link card-button" type="button" onClick={onInterviewClick}>
      <CardBody card={card} />
    </button>
  );
};