// Use the browser's native dialog so the image viewer supports Escape and focus handling.
const imageDialog = document.querySelector(".image-dialog");

if (imageDialog instanceof HTMLDialogElement) {
  const dialogImage = imageDialog.querySelector("img");
  const closeButton = imageDialog.querySelector(".dialog-close");

  if (dialogImage instanceof HTMLImageElement && closeButton instanceof HTMLButtonElement) {
    document.querySelectorAll("[data-gallery-image]").forEach((button) => {
      button.addEventListener("click", () => {
        const imageSource = button.getAttribute("data-image-src");
        const imageAlt = button.getAttribute("data-image-alt");

        if (!imageSource || imageAlt === null) {
          return;
        }

        dialogImage.src = imageSource;
        dialogImage.alt = imageAlt;
        imageDialog.showModal();
      });
    });

    closeButton.addEventListener("click", () => imageDialog.close());

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && imageDialog.open) {
        imageDialog.close();
      }
    });
  }
}
