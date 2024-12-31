import { curve, heroBackground, loading, notification1, robot } from '../assets';
import Button from './Button';
import Section from './section';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { companyLogos, heroIcons, notificationImages } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section id={'Hero'} plusSvg={true}>
      <div
        className="flex justify-center items-center flex-col text-center gap-10 relative"
        ref={parallaxRef}
      >
        <div className="z-10 flex justify-center items-center flex-col text-center">
          <div className="w-4/5">
            <h1 className="h1">
              Explore the Possibilities of AI Chatting with <br className="hidden max-sm:block" />
              <span className="ml-3 relative">
                Brainwave
                <img src={curve} alt="" className="absolute right-0 bottom-0" />
              </span>
            </h1>
          </div>
          <p className="body-1">
            Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the
            open AI chat app.
          </p>
          <Button white={'white'}>Get Started</Button>
        </div>
        <div className="bg-conic-gradient p-1 pb-9 rounded-xl relative z-3">
          <ScrollParallax isAbsolutelyPositioned zIndex={20}>
            <ul className="flex max-lg:hidden absolute lg:-left-[2.5rem] bottom-[10.5rem]  bg-n-9/40 p-5 gap-3 items-center rounded-xl backdrop-blur-md border border-n-9">
              {heroIcons.map((icon, index) => (
                <li key={index}>
                  <img src={icon} alt={icon} width={24} height={25} />
                </li>
              ))}
            </ul>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned zIndex={20}>
            <div className="flex max-lg:hidden gap-2 items-center bg-n-9/40 border border-n-9 p-2 w-fit backdrop-blur-md rounded-md absolute bottom-[10.5rem] -right-[2.5rem]">
              <img src={notification1} alt="" width={70} className="rounded-lg" />
              <div>
                <h5 className="h5">Code Generation</h5>
                <div className="flex gap-1 items-center">
                  {notificationImages.map((notifi, index) => (
                    <img
                      src={notifi}
                      alt="profile"
                      key={index}
                      className="rounded-full"
                      width={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollParallax>
          <div className="bg-n-8 pt-10 rounded-xl z-5 relative aspect-[33/40] overflow-y-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            <img src={robot} alt="robot" className="w-full" width={1024} height={290} />
            <div className="absolute bottom-15 left-1/2 p-2 w-72 rounded-3xl -translate-x-1/2 flex items-center justify-start gap-2 bg-n-8/80 max">
              <img src={loading} alt="loading" width={30} />
              <span>Ai is generating</span>
            </div>
          </div>
          <Gradient />
          <BackgroundCircles />
        </div>
        <div className="z-10">
          <p className="text-white body-1">Helping people create beautiful content at</p>
        </div>
        <div className="z-10 flex justify-evenly items-center flex-wrap w-full">
          {companyLogos.map((yourlogo, index) => (
            <img src={yourlogo} alt="companyLogo" key={index} />
          ))}
        </div>
        <div>
          <img src={heroBackground} alt="hero-bg" className="absolute -top-32 -right-10 z-1" />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};
export default Hero;
