import { benefits } from '../constants';
import { GradientLight } from './design/Benefits';
import Section from './section';
import Arrow from '../assets/svg/Arrow';
import ClipPath from '../assets/svg/ClipPath';
const Features = () => {
  return (
    <Section id={'features'} >
      <div className="z-50 text-center pb-4">
        <h1 className="h1 text-white">Chat Smarter, Not Harder with Brainwave</h1>
        <div className="lg:w-4/5 max-md:w-full flex justify-start items-start gap-10 flex-wrap mt-10 max-sm:w-full">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="lg:w-2/5 md:w-1/2 flex flex-col justify-between text-left p-4 bg-[length:100%_100%] relative h-80"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
            >
              <div className='z-20 mb-20'>
                <h5 className="h5 mb-3">{benefit.title}</h5>
                <p className="body-2 text-n-3">{benefit.text}</p>
              </div>
              <div className="flex justify-between items-center z-20">
                <img src={benefit.iconUrl} alt="Icon" />
                <div className="flex gap-8 text-sm font-bold font-code">
                  <span className="uppercase tracking-wider">Explore More</span>
                  <Arrow />
                </div>
              </div>
              {benefit.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{
                    clipPath: 'url(#benefits)',
                  }}
                >
                  <div className='opacity-0 transition duration-500 hover:opacity-25'>
                    <img
                      src={benefit.imageUrl}
                      alt=""
                      width={380}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Features;
