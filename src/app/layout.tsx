import BigHeader from '@/shared/components/big-header';
import Footer from '@/shared/components/footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Food',
    description: 'Delivery Food from the Best Restaurants.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="max-screen relative">
                <BigHeader />
                <main className=" min-h-screen bg-gray">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
