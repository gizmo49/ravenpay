import React, { useEffect, useState } from "react";
import TableCell from "../TableCell/TableCell";
import TableRowAccordionIcon from "./TableRowAccordionIcon/TableRowAccordionIcon";

const TableRow = ({ rowContent, inHeader, isAccordion }) => {
    const [showAccordion, toggleAccordion] = useState(false);
    const [rowContentObj, setRowContentObj] = useState();
    const [isSettingRow, updateSettingRow] = useState(true);

    const [colsNo, setColsNo] = useState(0);

    const htmlTag = inHeader ? "th" : "td";

    const handleClick = () => {
        if (isAccordion) {
            toggleAccordion((prevState) => !prevState);
        }
    };

    useEffect(() => {
        if (isAccordion) {
            const rowContentObj = Object.assign({}, rowContent);
            delete rowContentObj.dropdownElement;

            setRowContentObj(rowContentObj);
            updateSettingRow(false);

            setColsNo(Object.keys(rowContentObj).length);
        } else {
            setRowContentObj(rowContent);
            updateSettingRow(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowContent]);

    if (isSettingRow) return "";

    return (
        <>
            {rowContent && (
                <>
                    <tr>
                        <TableCell
                            cellContent={
                                isAccordion ? (
                                    <TableRowAccordionIcon
                                        handleClick={handleClick}
                                        accordionState={showAccordion}
                                        text={Object.values(rowContentObj)[0]}
                                    />
                                ) : (
                                    Object.values(rowContentObj)[0]
                                )
                            }
                            htmlTag={htmlTag}
                        />

                        {Object.values(rowContentObj)
                            .slice(1)
                            ?.map((cellContent, i) => (
                                <TableCell
                                    key={i}
                                    cellContent={cellContent}
                                    htmlTag={htmlTag}
                                />
                            ))}
                    </tr>

                    {showAccordion && (
                        <tr className='dropdown__element'>
                            <td colSpan={colsNo}>
                                {rowContent.dropdownElement}
                            </td>
                        </tr>
                    )}
                </>
            )}
        </>
    );
};

export default TableRow;
