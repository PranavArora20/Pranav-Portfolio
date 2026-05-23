export const handleDownloadResume = async (e) => {
  if (e?.preventDefault) e.preventDefault();

  const driveFileId = "115jJMGwZF0KRhoClsZUMoT3jWB-Q0YOF";
  const resumeDriveUrl =
    "https://drive.google.com/file/d/1P9ygwXqU9cgerZ2ElF02ZXiUXzbb5hCb/view?usp=sharing";
  const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  window.open(resumeDriveUrl, "_blank", "noopener,noreferrer");

  try {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = directDownloadUrl;
    document.body.appendChild(iframe);
    setTimeout(() => {
      try {
        document.body.removeChild(iframe);
      } catch (_) {}
    }, 4000);
  } catch (_) {
    window.open(directDownloadUrl, "_blank", "noopener,noreferrer");
  }
};
