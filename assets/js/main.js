// Keep the footer year current without requiring edits at the start of each year.
const currentYear = String(new Date().getFullYear());

document.querySelectorAll("[data-current-year]").forEach((yearElement) => {
  yearElement.textContent = currentYear;
});
