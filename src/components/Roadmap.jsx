import { check2, grid, loading1 } from '../assets';
import { roadmap } from '../constants';
import Bracket from './Bracket';
import Section from './section';
import Button from './Button';
import { Gradient } from './design/Roadmap';
const Roadmap = () => {
  return (
    <Section id={'roadmap'} className={'py-[5.0rem]'}>
      <div className="text-center mb-9">
        <Bracket
          title={'Ready to get started'}
          titleClasses={'font-code text-n-3 text-sm uppercase'}
        />
        <h1 className="h1 mt-3">What we’re working on</h1>
      </div>
      <div className="relative flex items-center justify-center flex-wrap gap-3 max-lg:flex-col">
        {roadmap.map((item) => (
          <div
            key={item.id}
            className={`p-[1.5px] ${
              item.colorful ? 'bg-conic-gradient' : 'border border-stroke-1'
            } rounded-[40px] mb-5 w-[45%] max-lg:w-full relative ${
              item.id == 1 || item.id == 3 ? 'lg:top-15' : ''
            }`}
          >
            <div
              style={{ backgroundImage: `url(${grid})` }}
              className={`w-full h-full object-cover bg-n-8 rounded-[40px] p-6`}
            >
              <div className="flex justify-between items-center">
                <Bracket titleClasses={'font-code text-n-3 text-sm uppercase'} title={item.date} />
                <div className="bg-white p-1 w-[7rem] max-sm:[5rem] flex items-center gap-3 rounded-md">
                  <img src={item.status != 'progress' ? check2 : loading1} alt={item.status} />
                  <span className="text-black font-code uppercase text-sm max-sm:text-xs">{item.status}</span>
                </div>
              </div>
              <img src={item.imageUrl} alt="" />
              <div>
                <h4 className="h4">{item.title}</h4>
                <p className="body-2 font-code">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        <Gradient />
      </div>
      <div className="mt-[100px] flex justify-center">
        <Button className={'uppercase font-code'}>Our Roadmap</Button>
      </div>
    </Section>
  );
};
export default Roadmap;
