(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const themeColor = document.querySelector("[data-theme-color]");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (!toggle) return;

  const getSavedTheme = () => {
    try {
      return localStorage.getItem("odensenlp-theme");
    } catch (error) {
      return null;
    }
  };

  const updateControls = () => {
    const isDark = root.dataset.theme === "dark";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";

    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.title = label;
    themeColor?.setAttribute("content", isDark ? "#101719" : "#f4f7f6");
  };

  updateControls();

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem("odensenlp-theme", nextTheme);
    } catch (error) {}

    updateControls();
  });

  const followSystemTheme = (event) => {
    if (getSavedTheme()) return;
    root.dataset.theme = event.matches ? "dark" : "light";
    updateControls();
  };

  if (systemTheme.addEventListener) systemTheme.addEventListener("change", followSystemTheme);
  else systemTheme.addListener(followSystemTheme);
})();
