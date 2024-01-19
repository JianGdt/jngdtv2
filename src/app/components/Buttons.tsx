export default function Buttons({ btnLabel }: { btnLabel: string }) {
  const isDownloadBtn = btnLabel.toLowerCase() === "download my cv";
  const commonClassName = "py-1 px-2 mt-5 font-bold shadow-lg rounded-lg";
  const buttonClassName = isDownloadBtn
    ? "dark:bg-darkest bg-light text-dark dark:text-light"
    : "bg-darkest text-light dark:bg-light dark:text-dark";
  const href = isDownloadBtn ? "/file/JianGdtCv.pdf" : "/contact";

  return (
    <a
      href={href}
      target={isDownloadBtn ? "_blank" : "_self"}
      rel={isDownloadBtn ? "noopener noreferrer" : ""}
      className={`flex my-auto font-quick text-sm ${commonClassName} ${buttonClassName}`}
    >
      {btnLabel}
    </a>
  );
}