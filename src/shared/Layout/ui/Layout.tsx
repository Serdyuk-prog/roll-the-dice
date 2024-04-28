import { LayoutWrapper } from "./Layout.styles"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
}