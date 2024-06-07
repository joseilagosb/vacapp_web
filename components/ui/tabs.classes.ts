export const getTabClassesObj = (
  numberOfTabs: number,
  tabIndex: number
): Record<"borderRadius" | "after", string> => {
  return {
    borderRadius:
      tabIndex === numberOfTabs - 1 ? "rounded-e-lg" : tabIndex === 0 ? "rounded-s-lg" : "",
    // Separador entre pestañas
    after:
      tabIndex < numberOfTabs - 1
        ? "after:absolute after:right-0 after:top-[10px] after:bottom-[10px] after:content-[''] after:w-px after:bg-primary"
        : "",
  };
};
