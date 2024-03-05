import Link from "next/link";

export default function Buttons({ btnLabel }: { btnLabel: string }) {
  const isDownloadBtn = btnLabel.toLowerCase() === "my resume";
  const darkButtonTheme = isDownloadBtn
    ? "dark:bg-darkest bg-light text-dark dark:text-light"
    : "bg-darkest text-light dark:bg-light dark:text-dark";
  const href = isDownloadBtn ? "/file/JnGdtResume.pdf" : "/contact";

  return (
    <Link
      href={href}
      target={isDownloadBtn ? "_blank" : "_self"}
      rel={isDownloadBtn ? "noopener noreferrer" : ""}
      className={`flex my-auto font-bold py-1 px-2 mt-5 shadow-lg rounded-lg ${darkButtonTheme}`}
    >
      {btnLabel}
    </Link>
  );
}