import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const AccordionComponent = ({ handleOpen, open, head, body, count, children, style }) => {
 const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${count === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <Accordion open={open === count} icon={svg} className={style}>
      <AccordionHeader onClick={() => handleOpen(count)} className="border-none p-2">
        {head}
      </AccordionHeader>
      <AccordionBody className="text-justify p-3">
        {body}
        {children}
        </AccordionBody>
    </Accordion>
  );
};

export default AccordionComponent;
