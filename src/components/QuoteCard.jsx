import { QuoteIcon } from './icons';

export const QuoteCard = ({ quote, author, title, organization }) => (
  <article className="quote-card">
    <QuoteIcon className="quote-icon" />
    <p>{quote}</p>
    <footer>
      <span>{author}</span>
      <span>{title}</span>
      <span>{organization}</span>
    </footer>
  </article>
);