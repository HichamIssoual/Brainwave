import { check, gradient, loading, service1, service2, service3 } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import { PhotoChatMessage, VideoBar, VideoChatMessage } from './design/Services';
import Section from './section';

const Bento = () => {
  return (
    <Section id={'how-to-use'} className={'pt-[10.5rem] max-md:pt-[7.5rem]'}>
      <div className="text-center mb-[80px]">
        <h2 className="h2 mb-1">Generative AI made for creators.</h2>
        <p className="body-2 text-n-10">
          Brainwave unlocks the potential of AI-powered applications
        </p>
      </div>
      <div className="w-full border border-stroke-1 px-2 rounded-xl flex items-center max-lg:flex-col gap-5 mb-8">
        <div className="w-4/6 relative max-lg:w-full">
          <img src={service1} alt="" className="z-2 relative" />
          <img src={gradient} alt="gradiant" className="absolute top-0 left-0 opacity-25" />
          <div className="absolute bottom-15 left-1/2 p-2 w-[400px] max-sm:w-[250px] max-[316px]:w-[200px] rounded-3xl -translate-x-1/2 flex items-center justify-start gap-2 bg-n-6 max backdrop-blur-lg z-3">
            <img src={loading} alt="loading" width={30} />
            <span>Ai is generating</span>
          </div>
        </div>
        <div className="max-lg:w-full">
          <h4 className="h4">Smartest AI</h4>
          <p className="text-n-10 body-2 leading-relaxed mb-4">
            Brainwave unlocks the potential of AI-powered applications
          </p>
          {brainwaveServices.map((service, index) => (
            <div key={index} className="p-[15px] border-t border-n-10 flex gap-4">
              <img src={check} alt="check" width={28} />
              <p>{service}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5 relative items-center justify-start max-md:flex-col">
        <div className="w-1/2 relative max-md:w-full">
          <div className="inset-0">
            <img
              src={service2}
              alt=""
              width={630}
              height={750}
              className="rounded-xl border border-stroke-1"
            />
          </div>
          <PhotoChatMessage />
          <div className="absolute left-0 bottom-0 w-full p-5 pb-7 bg-n-8/15">
            <h3 className="h3 max-sm:text-2xl">Photo editing</h3>
            <p className="body-2 font-code">
              Automatically enhance your photos using our AI app&apos;s photo editing feature. Try
              it now!
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-n-7 p-4 pt-10 max-md:w-full">
          <div className="pl-6 mb-5">
            <h3 className="h3">Video generation</h3>
            <p className="body-2 font-code">
              The world’s most powerful AI photo and video art generation engine. What will you
              create?
            </p>
          </div>
          <div className="pl-6 mb-5 flex justify-between gap-1">
            {brainwaveServicesIcons.map((icon, index) => (
              <div
                key={index}
                className={`${
                  index != 2 ? 'p-4 bg-n-8 max-sm:p-0 max-sm:w-[40px] max-sm:h-[40px] max-sm:flex max-sm:justify-center max-sm:items-center' : ' p-[0.7px] bg-conic-gradient'
                } rounded-xl `}
              >
                {index == 2 && (
                  <div className="p-[15.3px] bg-n-8 rounded-xl max-sm:p-0 max-sm:w-[40px] max-sm:h-[40px] max-sm:flex max-sm:justify-center max-sm:items-center">
                    <img src={icon} alt={`icon ${index}`} />
                  </div>
                )}
                {index != 2 && <img src={icon} alt={`icon ${index}`} />}
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden">
            <img
              src={service3}
              alt="service-3"
              className="w-full h-full object-cover bg-n-8 rounded-xl"
            />
            <VideoChatMessage />
            <VideoBar />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Bento;
