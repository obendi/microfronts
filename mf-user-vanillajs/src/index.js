function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello MF-USER (Vanilla JS)";
    return element;
}
  
function bootstrap(singleSpaProps) {
  return Promise.resolve();
}

function mount(singleSpaProps) {
  return Promise.resolve().then(function () {
    const domElement = getApplicationDomElement(singleSpaProps);
    domElement.appendChild(component());
  });
}

function unmount(singleSpaProps) {
  return Promise.resolve().then(function () {
    const domElement = getApplicationDomElement(singleSpaProps);
    domElement.remove();
  });
}

function getApplicationDomElement(singleSpaProps) {
  const appName = singleSpaProps.appName || singleSpaProps.name;

  if (!appName) {
    throw Error("An application name as a prop was not given, so it can't make a unique dom element container for the svelte application");
  }

  const htmlId = "single-spa-application:".concat(appName);
  const domElement = document.getElementById(htmlId);

  if (!domElement) {
    throw Error("No DOM element found with id: " + htmlId);
  }

  return domElement;
}

export {bootstrap, mount, unmount}