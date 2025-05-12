import { MainPage } from "@/components/MainPage";
import { Footer } from "@/components/Footer";

export default function Home() {

    return (
        <div className="w-full h-[200dvh] bg-primary relative custom-scrollbar">
            <MainPage />
            <Footer />
        </div>
    );
}
