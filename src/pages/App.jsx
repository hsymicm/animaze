import "@/assets/styles/Style.css";
import Layout from "@/components/Layout";
import Router from "@/routes/Router";
import Footer from "@/components/Footer";
import Modal from "@/components/Modals/Modal";
import { useState, useEffect } from "react";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return (
        <>
            <Layout
                menu={menu}
                setMenu={setMenu}
                onEmit={() => setIsOpen(true)}
            />
            {isOpen && (
                <Modal
                    scrollPos={window.scrollY}
                    handleClose={() => setIsOpen(false)}
                />
            )}
            <Router onEmit={() => setIsOpen(true)} />
            <Footer setMenu={setMenu} />
        </>
    );
}
