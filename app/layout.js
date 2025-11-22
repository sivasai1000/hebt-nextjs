import { Geist, Geist_Mono , Bricolage_Grotesque} from "next/font/google";
import "./globals.css";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hebt | Digital AI Platform",
  description: "Hebt helps businesses build their digital identity.",
  robots:{
    index:false,
    follow:false
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

          className={` ${geistSans.variable}
          ${geistMono.variable}
          ${bricolage.variable}
          antialiased`}
        
      >
        {children}
      </body>
    </html>
  );
}
