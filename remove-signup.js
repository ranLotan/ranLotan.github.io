document.addEventListener("DOMContentLoaded", function () {
  console.log('DOMContentLoaded: Script initialized');

  // Create a MutationObserver to monitor changes in the DOM
  const observer = new MutationObserver((mutations) => {
    console.log('MutationObserver triggered');
    
    mutations.forEach((mutation) => {
      console.log('Processing mutation:', mutation);

      // Check for the element with id="createAccount"
      const createAccountLink = document.getElementById('createAccount');
      if (createAccountLink) {
        console.log('Found element with id="createAccount"');

        // Get the parent element with class="create"
        const parentElement = createAccountLink.closest('.create');
        if (parentElement) {
          console.log('Found parent element with class="create". Removing it...');
          parentElement.remove(); // Remove the parent element
          observer.disconnect(); // Stop observing once the element is removed
          console.log('Parent element removed and MutationObserver disconnected');
        } else {
          console.warn('Parent element with class="create" not found');
        }
      } else {
        console.log('Element with id="createAccount" not found yet');
      }
    });
  });

  // Start observing the body for changes
  console.log('Starting MutationObserver on document body');
  observer.observe(document.body, { childList: true, subtree: true });
  const createAccountLink = document.getElementById('createAccount');
    if (createAccountLink) {
    console.log('Found element with id="createAccount"');

    // Get the parent element with class="create"
    const parentElement = createAccountLink.closest('.create');
    if (parentElement) {
        console.log('Found parent element with class="create". Removing it...');
        parentElement.remove(); // Remove the parent element
        observer.disconnect(); // Stop observing once the element is removed
        console.log('Parent element removed and MutationObserver disconnected');
    } else {
        console.warn('Parent element with class="create" not found');
    }
    } else {
    console.log('Element with id="createAccount" not found yet');
    }
});
