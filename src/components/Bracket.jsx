import brackets from '../assets/svg/Brackets';

export const Bracket = ({ title, className, titleClasses }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="inline-block">{brackets('left')}</div>
      <div className={`inline-block px-3 ${titleClasses}`}>{title}</div>
      <div className="inline-block">{brackets('right')}</div>
    </div>
  );
};
export default Bracket;
