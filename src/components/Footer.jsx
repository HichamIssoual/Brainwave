import { socials } from '../constants';
import Section from './section';

const Footer = () => {
  let year = new Date();
  return (
    <Section borderTop={true} plusSvg={true} className={'py-12'}>
      <div className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-4">
        <span className="body-2 font-code text-sm text-n-4">
          &copy; {year.getFullYear()} All rights reserved.
        </span>
        <ul className="flex gap-4 items-center justify-center">
          {socials.map((media) => (
            <li
              key={media.id}
              className="w-[40px] h-[40px] bg-n-11 flex items-center justify-center rounded-full"
            >
              <img src={media.iconUrl} alt={media.title} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
