let loadPromise;

export const loadJsPdf = () => {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("jsPDF can only be loaded in a browser environment."),
    );
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    if (window.jspdf?.jsPDF) {
      resolve(window.jspdf.jsPDF);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
    script.async = true;

    script.onload = () => {
      if (window.jspdf?.jsPDF) {
        resolve(window.jspdf.jsPDF);
      } else {
        reject(new Error("jsPDF loaded but did not expose the expected API."));
      }
    };

    script.onerror = () => {
      loadPromise = undefined;
      reject(new Error("Failed to load jsPDF library."));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
};
