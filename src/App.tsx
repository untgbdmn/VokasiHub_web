import { ThemeProvider } from "./components/theme-provider";
import { Layouts } from "./layouts/layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { ComponentType, ReactNode } from 'react';

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark">
                <Layouts>
                    <MainRoute path="/" component={Dashboard} />
                </Layouts>
            </ThemeProvider>
        </BrowserRouter>
    )
}

interface PropsAuthRoute {
    path: string;
    component: ComponentType<{ children?: ReactNode }>;
}

function AuthRoute({ path, component: Component }: PropsAuthRoute) {
    return (
        <Routes>
            <Route path={path} element={<Component />} />
        </Routes>
    );
}

interface PropsMainRoute {
    path: string;
    component: ComponentType<{ children?: ReactNode }>;
}

function MainRoute({ path, component: Component }: PropsMainRoute) {
    return (
        <Routes>
            <Route path={path} element={<Component />} />
        </Routes>
    );
}
