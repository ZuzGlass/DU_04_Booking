import './cancelSummary.css';

export const CancelSummary = ({ cancel, cancelText1, cancelText2 }) => {
    return (
        <div className="summary__cancel">
          <h3>{cancel}</h3>
          <div className="summary__cancel-text">
            <p>
             {cancelText1}
            </p>
            <p>
            {cancelText2}
            </p>
          </div>
        </div>
    )
};