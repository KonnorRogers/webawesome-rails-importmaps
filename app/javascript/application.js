// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import { discover, setBasePath } from '/webawesome/dist/webawesome.js';
setBasePath('/webawesome/dist');
discover(document.body)
// ^ this lets us pull webawesome icons automatically from the proper spot.
