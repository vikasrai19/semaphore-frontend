import localFont from "next/font/local";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import QueryProvider from "./query-provider";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Semaphore 2K24",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">\
      <Head>
        <link rel="preload" href="/models/rocket_model.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/compressed/earth2.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/compressed/moon2.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/earth.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/earth2.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/jupiter.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/mars.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/mars2.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/mercury.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/moon.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/moon2.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/neptune.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/pluto.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/saturn.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/sun.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/uranus.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/venus.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="preload" href="/models/space_shuttle.glb" as="fetch" type="model/gltf-binary" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className={"font-dosisRegular"}
        />
        <QueryProvider>

          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
