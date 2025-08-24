import "./globals.css";


export const metadata = {
  title: "Billers Mind BPO",
  description: "Healthcare Home Health and Hospice Billing Solution",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-google-analytics-opt-out="">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" priority="true" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
