import Router from 'vanilla-router';

const router = new Router({
  mode: 'history',
  root: '/',
});

// Function to fetch and load content from a file
async function loadPage(page: string): Promise<void> {
  const appElement = document.getElementById('app');
  // console.log(appElement);
  if (appElement) {
    // console.log('appElement found');
    try {
      const response = await fetch(`/pages/${page}.html`);
      if (response.ok) {
        const content = await response.text();
        appElement.innerHTML = content;
      } else {
        appElement.innerHTML = '<h1>404 - Page Not Found</h1>';
      }
    } catch (error) {
      console.error('Error loading page:', error);
      appElement.innerHTML = '<h1>Error loading page. Please try again later.</h1>';
    }
  }
}

// Add routes to the router
router.add('/', () => loadPage('home'));   // Load home.html for the root route
router.add('/products', () => loadPage('products'));  
router.add('/aboutsabu', () => loadPage('aboutsabu'));  
router.add('/safelist', () => loadPage('safelist'));  
router.add('/yeslist', () => loadPage('safelist'));
router.add('/nolist', () => loadPage('safelist'));  
router.add('/login', () => loadPage('login'));  
router.add('/consumer-notice', () => loadPage('consumernotice'));  
router.add('/privacy', () => loadPage('privacy'));  
router.add('/cookie-policy', () => loadPage('cookiepolicy'));  
router.add('/delete-my-data', () => loadPage('deletemydata'));  

// Listen to URL changes
router.addUriListener();

export default router;
