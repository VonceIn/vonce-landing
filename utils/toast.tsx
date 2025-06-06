import { IoWarning } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify"

type NotifyType = {
    message: string | React.ReactElement,
    onClose?: () => void
}

export function notifyError({ message, onClose }: NotifyType) {
    toast(
        <p style={{ fontSize: 16 }}>{message}</p>, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: false,
            type: "error",
            style: {
                backgroundColor: '#ff5757',
                color: '#fff7eb',
                border: '1px solid black'
            },
            progressClassName: 'error-progress-bar',
            icon: <IoWarning size={40} />
        }
    );
}

export function notifySuccess({ message, onClose }: NotifyType) {
    toast(
        <p style={{ fontSize: 16 }}>{message}</p>, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: false,
            type: "success",
            style: {
                backgroundColor: '#67c965',
                color: '#fff7eb',
                border: '1px solid black'
            },
            progressClassName: 'error-progress-bar',
            icon: <FaCheckCircle size={40} />,
            onClose
        }
    );
}