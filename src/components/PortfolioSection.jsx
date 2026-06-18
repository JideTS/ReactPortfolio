export const PortfolioSection = ({ id, title, children, narrow = false, headingLevel = 2 }) => {
  const Heading = `h${headingLevel}`;

  return (
  <section id={id} className={`portfolio-section ${narrow ? 'section-narrow' : ''}`}>
    {title ? <Heading>{title}</Heading> : null}
    {children}
  </section>
  );
};