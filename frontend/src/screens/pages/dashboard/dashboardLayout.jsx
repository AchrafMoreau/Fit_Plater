import { NavSide } from "./nav-side"

export const DashboardLayout = ({children}) =>{


    return(
        <>
            <div
                style={{
                    display: 'flex',
                    // flexDirection: 'column',
                    position: 'relative',
                    minHeight: '100%',
                }}
            >
                <NavSide />
                <div style={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
                    <main>
                        <div maxWidth="xl" style={{ padding: '64px' }}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}