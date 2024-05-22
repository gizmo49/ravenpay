import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableBodySkeleton from "./TableBodySkeleton/TableBodySkeleton";
import TableError from "./TableError/TableError";
import "./Table.scss";

export const Table = ({
    headers = [],
    dataSource = [],
    onClick,
    isAccordion,
    isLoading,
    handleRetry,
    hasErrors,
    tableError,
    otherClassNames,
}) => {
    return (
        <div
            className={`table__container ${
                otherClassNames ? otherClassNames : ""
            }`}>
            <table className='table'>
                <TableHead headers={headers} />
                {hasErrors && !isLoading && (
                    <TableError
                        tableError={tableError}
                        handleRetry={handleRetry}
                        dataSource={dataSource}
                    />
                )}
                {isLoading && <TableBodySkeleton rowCount={headers.length} />}
                {!hasErrors && !isLoading && (
                    <TableBody
                        dataSource={dataSource}
                        onClick={onClick}
                        isAccordion={isAccordion}
                    />
                )}
            </table>
        </div>
    );
};
