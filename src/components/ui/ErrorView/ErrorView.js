import PropTypes from "prop-types";
import "./ErrorView.scss";

const ErrorView = ({ message, handleRetry, size = "30" }) => {
    return (
        <div className='error-view'>
            <p>{message || "Something went wrong, please"}</p>
            {handleRetry && (
                <button className='btn' onClick={handleRetry}>
                    Retry
                </button>
            )}
        </div>
    );
};

ErrorView.prototypes = {
    message: PropTypes.string,
    size: PropTypes.string,
};

export default ErrorView;
