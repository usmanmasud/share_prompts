import '@/styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
    title: "Prompt AI",
    description: "Discover & Share AI Prompts",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className='min'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
