import "./styles/globals.css";

export const metadata = {
  title: "Twilio Authentication",
  description: "Showcase twilio authentication",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
