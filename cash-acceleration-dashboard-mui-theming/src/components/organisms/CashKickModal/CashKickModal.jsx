import "./CashKickModal.css";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

const CashKickModal = ({ open, onClose }) => {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={false}
        >

            <Box className="modal-content">

                <div className="modal-header">

                    <div>

                        <h2>Name your cash kick</h2>

                        <p>Add a name to identify your cash kick</p>

                    </div>

                    <IconButton
                        className="close-btn"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </IconButton>

                </div>

                <div className="modal-body">

                    <label>Cash kick name</label>

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

            </Box>

        </Dialog>

    );

};

export default CashKickModal;