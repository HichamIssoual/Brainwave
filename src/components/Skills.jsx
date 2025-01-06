import { brainwaveSymbol, check } from '../assets';
import { collabApps, collabContent, collabText } from '../constants';
import Button from './Button';
import { LeftCurve, RightCurve } from './design/Collaboration';
import Section from './section';

const Skills = () => {
  return (
    <Section plusSvg={true} borderTop={true} className={'pt-[7.5rem]'}>
      <div className="flex justify-between items-start gap-5 max-lg:flex-col max-lg:items-center">
        <div>
          <h3 className="h3 mb-4">
            AI Chat App for <br /> seamless collaboration check
          </h3>
          {collabContent.map((item) => (
            <div key={item.id} className="mb-7">
              <div>
                <div className="flex items-center gap-4">
                  <img src={check} alt="check" />
                  <span>{item.title}</span>
                </div>
                <span className="block font-code text-sm w-2/3 mt-4 mb-4 text-n-10">
                  {' '}
                  {item.text && item.text}
                </span>
              </div>
            </div>
          ))}
          <Button className={'mt-8'}>Try It Now</Button>
        </div>
        <div>
          <div className="mt-2 mb-9 flex flex-col gap-11 items-center">
            <p className="body-2 font-code">{collabText}</p>
            <div className="rounded-full p-16 border border-n-10 h-96 w-96 max-sm:w-60 max-sm:h-60 flex items-center relative">
              <div className="rounded-full p-5 border border-n-10 w-full h-full items-center justify-center relative">
                <div className="rounded-full p-1 bg-conic-gradient w-2/4 h-/w-2/4  relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full p-7 max-sm:p-1 bg-n-8 w-full h-full flex items-center">
                    <img src={brainwaveSymbol} alt="brainwave" width={48} height={48} />
                  </div>
                </div>
              </div>
              <div>
                {collabApps.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute -ml-[1.6rem] top-0 left-1/2 origin-bottom h-1/2 rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem]  w-[4.6rem] max-sm:w-[3.6rem] max-sm:h-[2.6rem] flex items-center justify-center border border-n-1 h-[3.6rem] rounded-lg bg-n-3/35 backdrop-blur-md`}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className="m-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Skills;
