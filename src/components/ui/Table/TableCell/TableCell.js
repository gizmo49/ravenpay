import React from "react";

const TableCell = ({ cellContent, htmlTag }) => {

    const cellContentAttr = cellContent?.props?.["data-parent-class"];
    //     {style:{color:"red"}, id: 'someId', className: "someClass"},

    return React.createElement(htmlTag, cellContentAttr ? { className: cellContentAttr } : null, cellContent);
};

export default TableCell;
