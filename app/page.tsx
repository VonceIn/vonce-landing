import { MainPage } from "@/components/MainPage";
import { Footer } from "@/components/Footer";

export default function Home() {

    return (
        <div className="w-full h-max bg-neutral-800 relative">
            {/* <div className="bg-secondary w-full h-[100vh] flex items-center justify-center p-40 text-center">
                <span className="text-8xl text-primary font-[800] font-telegraf leading-30">
                    How would you like to connect with someone new everyday?
                </span>
            </div> */}
            <MainPage />
            <Footer />
        </div>
        // Double Repo setup
    );
}
