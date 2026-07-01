import CashKickModal from "./CashKickModal";

export default {
    title: "Organisms/CashKickModal",
    component: CashKickModal,
};

export const Open = {
    args: {
        open: true,
        onClose: () => {},
    },
};

export const Closed = {
    args: {
        open: false,
        onClose: () => {},
    },
};