import ErrorView from "components/ui/ErrorView/ErrorView";

const TableError = ({ dataSource, tableError, handleRetry }) => {
    return (
        <tbody>
            <tr>
                <td colSpan={dataSource?.length}>
                    <ErrorView message={tableError} handleRetry={handleRetry} />
                </td>
            </tr>
        </tbody>
    );
};

export default TableError;
