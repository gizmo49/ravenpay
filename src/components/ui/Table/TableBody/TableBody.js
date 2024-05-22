import React from 'react';
import TableRow from '../TableRow/TableRow';

const TableBody = ({ dataSource, isAccordion }) => {
    return (
        <tbody className="table__body">
            {dataSource.map((data, i) => (
                <TableRow key={i} rowContent={data} isAccordion={isAccordion}/>
            ))}
        </tbody>
    );
};

export default TableBody;
