import "./CashKickModal.css";

const CashKickModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="cashkick-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ×
                </button>

                <div className="modal-header">

                    <h2>Name your cash kick</h2>

                    <p>
                        Add a name to identify your cash kick
                    </p>

                </div>

                <div className="modal-body">

                    <label>
                        Cash kick name
                    </label>

                    <input
                        type="text"
                        placeholder="Ex: marketing expenses"
                    />

                </div>

                <div className="modal-footer">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="create-btn"
                    >
                        Create Cash Kick
                    </button>

                </div>

            </div>

        </div>

    );

};

export default CashKickModal;