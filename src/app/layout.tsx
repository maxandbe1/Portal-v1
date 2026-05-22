import Shell from "../components/Shell";

export const metadata = {
  title: "Portal v1.2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

