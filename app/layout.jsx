import './globals.css'
import Navbar from '../components/Navbar'

export const metadata={
    title: 'Minimal Landing - Next.js',
    description: 'Minimal landing built with Next.js + Tailwind + shadcn',
}

export default function RootLayout({children}){
    return(
        <html lang="en">
<body className="bg-white text-slate-900">
<Navbar />
<main className="pt-10">{children}</main>
<footer className="mt-10">
<div className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} RouteSpec — Built with </div>
</footer>
</body>
</html>
    )
}