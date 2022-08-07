import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons";

export const OptionList = ({options} : {options:string[]}) =>  (
  <>
    {options?.map((option, i) => (
      <div className="flex font-hint items-center pb-4" key={i}>
        <FontAwesomeIcon icon={faCircleCheck} className="font-icon color-primary mr-5"></FontAwesomeIcon>
        <p className="font-item-text">{option}</p>
      </div>
    ))
    }
  </>
);

export type Price = {
  title: string;
  subtitle: string;
  price: string;
  options: string[];
  button: string;
  popular: boolean;
}

export const PriceCard = (props: Price) => {
  return (
    <>
      <div className="relative flex flex-col w-1/3 mobile:w-full bg-white rounded-lg drop-shadow-xl pb-10">
        {props.popular && <div className="absolute -top-2.5 right-5 bg-primary font-item-title color-white py-1 px-3 rounded-xl">Popular</div>}
        <div className="flex flex-col p-6 border-b-2 border-gray-100 mobile:items-center">
          <h3 className="font-item-title mobile:text-center">{props.title}</h3>
          <h3 className="font-item-big-title mobile:text-center mt-3">{props.price}</h3>
          <h3 className="font-item-text mobile:text-center mt-2">{props.subtitle}</h3>
        </div>
        <div className="flex flex-col px-6 pt-6 pb-10">
          <OptionList options={props.options}></OptionList>
        </div>
        <div className="absolute w-full bottom-0 flex justify-center py-5">
          <button className="button-outline--primary">{props.button}</button>
        </div>
      </div>
    </>
  );
};

export default PriceCard;