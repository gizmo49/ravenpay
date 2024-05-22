import React from "react";
import { imageLinks } from "assets/images";
import { ReactSVG } from "react-svg";

const TableRowAccordionIcon = ({ accordionState, text, handleClick }) => {
    return (
        <>
            {text && (
                <div className='d-flex'>
                    <div
                        className='accordion__icon'
                        onClick={() => handleClick()}>
                        <ReactSVG
                            src={
                                accordionState
                                    ? imageLinks?.icons?.caretDown
                                    : imageLinks?.icons?.caretRight
                            }
                        />
                    </div>
                    <span className='accordion__text'>{text}</span>
                </div>
            )}
        </>
    );
};

export default TableRowAccordionIcon;
