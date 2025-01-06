import { check, smallSphere, stars } from '../assets';
import { pricing } from '../constants';
import Bracket from './Bracket';
import Button from './Button';
import { LeftLine, RightLine } from './design/Pricing';
import Pricecard from './Pricecard';
import Section from './section';
const Price = () => {
  return (
    <Section id={'pricing'} className={'pt-[4.5rem] max-md:pt-[2.5rem]'}>
      <div>
        <div className="flex justify-center items-center relative">
          <img src={smallSphere} alt="smallSphere" className="relative z-3" />
          <img src={stars} alt="" className="absolute left-0 top-0 w-full h-full z-2" />
        </div>
        <Bracket
          title={'Get started with Brainwave'}
          className={'mt-[3rem] mb-4'}
          titleClasses={'font-code uppercase text-sm'}
        />
        <h1 className="h1 text-center max-sm:text-2xl">Pay once, use forever</h1>
      </div>
      <div className="flex justify-center gap-4 items-center mt-[4.5rem] max-lg:flex-col relative">
        {pricing.map((plan) => (
          <Pricecard padding={'p-[16px]'} key={plan.id}>
            <div className="">
              <h3 className={`h3 ${plan.titleColor} mb-5`}>{plan.title}</h3>
              <p className={`body-2 text-n-3 ${plan.title != 'Enterprise' ? 'mb-5' : 'mb-20'}`}>
                {plan.description}
              </p>
              <h1 className="h1 text-7xl mb-5">{plan.price != null && `$${plan.price}`}</h1>
              {plan.title != 'Enterprise' ? (
                <Button white={'true'} className={'uppercase mb-5 w-full'}>
                  Get Started
                </Button>
              ) : (
                <Button className={'uppercase mb-5 w-full'}>Contact us</Button>
              )}
              {plan.features.map((feature, index) => (
                <div key={index} className="p-3 border-t border-stroke-1 flex items-center gap-4">
                  <img src={check} alt="check" width={30} />
                  <span className="body-2 font-mono">{feature}</span>
                </div>
              ))}
            </div>
          </Pricecard>
        ))}
        <LeftLine />
        <RightLine />
      </div>
      <h4 className="font-code text-sm underline text-center mt-8">See the full details</h4>
    </Section>
  );
};
export default Price;
