import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
        <img src={logo} alt="Tradevus" className="h-16 md:h-13 mx-auto " />

        <p>© {new Date().getFullYear()} Tradevus. All rights reserved.</p>
      </div>
    </footer>
  );
}
