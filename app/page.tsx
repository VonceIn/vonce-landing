import Footer from "@/components/Footer";
import { MainPage } from "@/components/MainPage";
import { Steps } from "@/components/Steps";
import { ToastContainer } from "react-toastify";

export default function Home() {

    return (
        <div className="w-full h-max relative bg-primary">
            <div
                className="absolute inset-0 bg-[url('/images/vonce_background.png')] bg-repeat opacity-22 pointer-events-none z-0"
                style={{ backgroundPosition: '0px -52px' }}
            />

            <div className="z-20">
                <MainPage />
                <Steps />
                <Footer />
            </div>

            <ToastContainer />
        </div>
    );
}
