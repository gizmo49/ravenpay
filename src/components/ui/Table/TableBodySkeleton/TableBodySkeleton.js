import ShinyLoader from "components/ui/ShinyLoader/ShinyLoader";
import React from "react";
import TableBody from "../TableBody/TableBody";

const TableBodySkeleton = ({ rowCount = 3, columnCount = 5 }) => {
    const tableData = () => {
        return Array.from(Array(columnCount)).map((_, i) => {
            let currentRow = {};
            let rowArray = Array.from(Array(rowCount));
            rowArray.map((_, index) => {
                return (currentRow[index] = (
                    <ShinyLoader
                        width={`${
                            50
                        }px`}
                    />
                ));
            });
            return currentRow;
        });
    };

    return (
        <>
            <TableBody dataSource={tableData()} />
        </>
    );
};

export default TableBodySkeleton;
