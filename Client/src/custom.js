document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.querySelector('.back-to-top');
  
    window.onscroll = function() {
      if (window.pageYOffset > 100) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };
  
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) { // Adjust the 0 to the number of pixels scrolled down
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  });
  
  // Function to handle live search and display suggestions
  function liveSearch() {
      var input = document.getElementById('nameInput').value;
  
      // If there is input, show suggestions container and populate it
      if (input.length > 0) {
          document.getElementById('suggestionsContainer').style.display = 'block';
          
          // Perform an AJAX request to your server to get live search data
          // For example purposes, this is a static list
          var suggestions = ['John Doe', 'Jane Smith', 'Example Company'];
          
          // Filter suggestions that include the user's input
          var filteredSuggestions = suggestions.filter(function(suggestion) {
              return suggestion.toLowerCase().includes(input.toLowerCase());
          });
          
          // Populate suggestions container with filtered suggestions
          // Clear the container first
          var suggestionsContainer = document.getElementById('suggestionsContainer');
          suggestionsContainer.innerHTML = '';
          
          // Add filtered suggestions to the container
          filteredSuggestions.forEach(function(suggestion) {
              var div = document.createElement('div');
              div.innerHTML = suggestion;
              div.onclick = function() {
                  document.getElementById('nameInput').value = suggestion;
                  suggestionsContainer.style.display = 'none';
              };
              suggestionsContainer.appendChild(div);
          });
      } else {
          // Hide suggestions container if there's no input
          document.getElementById('suggestionsContainer').style.display = 'none';
      }
  }
  
  // Function to perform the search when the search button is clicked
  function performSearch() {
      var location = document.getElementById('locationInput').value;
      var name = document.getElementById('nameInput').value;
      var filter = document.getElementById('filterOptions').value;
      var sort = document.getElementById('sortOptions').value;
  
      // You can now use these values to perform a search
      // For example, make an AJAX request to your server with these parameters
      console.log('Performing search with:', location, name, filter, sort);
      
      //  here you would typically make an AJAX call
      // For now, I'll just log to the console
  }