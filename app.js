// JSS1 App JavaScript
console.log("JSS1 App loaded!");

// Register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then((registration) => {
                console.log("ServiceWorker registration successful with scope: ", registration.scope);
            })
            .catch((error) => {
                console.log("ServiceWorker registration failed: ", error);
            });
    });
}

// Sample data
const sampleData = {
    title: "JSS1 App",
    version: "1.0.0"
};

console.log("App Data:", sampleData);
