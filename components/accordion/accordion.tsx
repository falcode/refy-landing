import { faChevronDown, faChevronUp } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";

import {IconDefinition, IconName} from "@fortawesome/pro-light-svg-icons";
import { Divider } from "../divider";
import { faBars } from "@fortawesome/pro-solid-svg-icons";

interface AccordionProps {
  first: boolean;
  children: React.ReactNode;
  title: string;
  icon: IconDefinition;
  open?: boolean;
}

export const Accordion = ({ first, children, title, icon, open = true }: AccordionProps) => {
  const targetRef = useRef<any>(null);
  const [state, setState] = useState(open);
  const [maxHeight, setMaxHeight] = useState('unset');
  const toggle = () => setState(!state);
  useEffect(() => {
    if(!targetRef?.current?.clientHeight) {return}
    setMaxHeight(targetRef.current.clientHeight);
  }, []);
  return (
    <div className="">
      {
        !first &&
        <Divider></Divider>
      }
      <div className="mx-2">
        <div className="flex items-center justify-between py-2 cursor-pointer" onClick={toggle}>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-3xl flex justify-center mr-3">
              <div className="w-4 h-4">
                <FontAwesomeIcon icon={icon} className='icon-font'/>
              </div>
            </div>
            <h1 className="font-title !text-2xl">{title}</h1>
          </div>
          <div className="w-2 h-2 mx-2 flex justify-center items-center">
            <FontAwesomeIcon
              icon={!state ? faChevronDown : faChevronUp}
              className={`icon-font icon-font--grey`}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div ref={targetRef} className={`accordion accordion--${state ? 'open' : 'close'}`} style={{ maxHeight: maxHeight }}>
          <Divider></Divider>
          {children}
        </div>
      </div>
    </div>
  )
}