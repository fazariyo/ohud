import './globals.css';
import Interactions from '@/components/Interactions';
import LegalModal from '@/components/LegalModal';

export const metadata = {
  title: 'OHUD Dental | Premier Dental Clinic in Lahore, Pakistan',
  description:
    'OHUD Dental is a state-of-the-art dental clinic in Gulberg, Lahore offering general, cosmetic, orthodontic, implant and root canal treatments with gentle, pain-free care.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="cur"></div>
        <div id="ring"></div>
        {children}
        <LegalModal />
        <Interactions />
      </body>
    </html>
  );
}
