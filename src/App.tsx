import { ThemeProvider } from "./components/theme-provider";
import { Layouts } from "./layouts/layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark">
                <Layouts>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </Layouts>
            </ThemeProvider>
        </BrowserRouter>
    )
}
