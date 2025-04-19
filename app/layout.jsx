import '@/styles/globals.css'
import Nav from '@components/Nav'
import { Provider } from '@components/Provider'

export const metadata = {
    title: "Prompt AI",
    description: "Discover & Share AI Prompts",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className='min'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
