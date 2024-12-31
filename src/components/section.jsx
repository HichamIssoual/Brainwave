import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({ children, id, plusSvg }) => {
  return (
    <section className="container m-auto relative" id={id}>
      <div className="px-3">{children}</div>
      <div className="max-lg:hidden z-40 w-0.25 h-full bg-stroke-1 absolute top-0 lg:block lg:left-7.5 xl:left-10" />
      <div className="max-lg:hidden z-40 w-0.25 h-full bg-stroke-1 absolute top-0 lg:block lg:right-7.5 xl:right-10" />
      {plusSvg && <SectionSvg />}
    </section>
  );
};
export default Section;
