import { Price } from "../types/card.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/pro-solid-svg-icons";
import { Button } from "@material-ui/core";

export const CardLeft = (props: Price) => {
  return (
    <>
      <div className="w-72 bg-white rounded-l-lg drop-shadow-md">
        <div className="h-28 border-b-2 border-gray-100 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold pb-2">{props.title}</div>
          <div>
            <span className="text-2xl mr-1 font-bold">{props.currency}</span>
            <span className="text-4xl font-bold">{props.price}</span>
            <span className="text-gray-500">/{props.frequency}</span>
          </div>
        </div>
        <div className="h-60 bg-gray-50 rounded-b-lg p-6 flex flex-col justify-between">
          <div>
            <OptionList options={props.options}></OptionList>
          </div>
          <Button variant="contained">Start your trial</Button>
        </div>
      </div>
    </>
  );
};

export const CardCenter = (props: Price) => {
  return (
    <>
      <div className="w-96 z-10 bg-white border-blue-700 border-2 rounded-lg drop-shadow-md">
        <div className="h-40 border-b-2 border-gray-100 flex flex-col items-center justify-center">
          <div className="absolute -top-2.5 text-sm bg-blue-700 text-white px-2 rounded-xl">MOST POPULAR</div>
          <div className="text-3xl font-bold pb-2">{props.title}</div>
          <div>
            <span className="text-3xl mr-1 font-bold">{props.currency}</span>
            <span className="text-6xl font-bold">{props.price}</span>
            <span className="text-gray-500">/{props.frequency}</span>
          </div>
        </div>
        <div className="h-64 bg-gray-50 rounded-b-lg p-6 flex flex-col justify-between">
          <div>
            <OptionList options={props.options}></OptionList>
          </div>
          <Button variant="contained" color="primary">Start your trial</Button>
        </div>
      </div>
    </>
  );
};

export const CardRight = (props: Price) => {
  return (
    <>
      <div className="w-72 bg-white rounded-r-lg drop-shadow-md">
        <div className="h-28 border-b-2 border-gray-100 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold pb-2">{props.title}</div>
          <div>
            <span className="text-2xl mr-1 font-bold">{props.currency}</span>
            <span className="text-4xl font-bold">{props.price}</span>
            <span className="text-gray-500">/{props.frequency}</span>
          </div>
        </div>
        <div className="h-60 bg-gray-50 rounded-b-lg p-6 flex flex-col justify-between">
          <div>
            <OptionList options={props.options}></OptionList>
          </div>
          <Button variant="contained">Start your trial</Button>
        </div>
      </div>
    </>
  );
};

export const OptionList = ({options} : {options:string[]}) =>  (
    <>
      {options.map((option, i) => (
        <div className="flex items-center pb-4" key={i}>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ marginRight: "10px", color: "green" }}
          ></FontAwesomeIcon>
          <span className="text-gray-500">{option}</span>
        </div>
      ))
      }
    </>
  );


export default  OptionList;