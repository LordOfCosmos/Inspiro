# Inspiro

Inspiro is a Node.js library for managing a collection of quotes, providing functionality to load, save, search, edit, and export quotes, as well as generate random quotes based on various criteria.

# Installation
You can install the package via npm:

```bash
npm install inspiro
```

# Usage

```js
Copy code
const Inspiro = require('inspiro');

// Create an instance of Inspiro
const inspiro = new Inspiro();

// Load quotes from file
inspiro.loadQuotes();

// Add a new quote
const newQuote = {
  text: "Your quote here",
  author: "Author Name",
  category: "Category Name"
};
inspiro.addQuote(newQuote);

// Search quotes by keyword
const results = inspiro.searchQuotes('keyword');

// Edit a quote
inspiro.editQuote('old text', 'new text');

// Sort quotes by property
const sortedQuotes = inspiro.sortQuotesBy('author');

// Count total number of quotes
const totalQuotes = inspiro.countQuotes();

// Get unique authors and categories
const uniqueAuthors = inspiro.getUniqueAuthors();
const uniqueCategories = inspiro.getUniqueCategories();

// Filter quotes by year or date added
const quotesByYear = inspiro.filterQuotesByYear(2023);
const quotesByDateAdded = inspiro.filterQuotesByDateAdded('2023/01/01');

// Export quotes to JSON file
inspiro.exportQuotesToJSON('exported-quotes', './exports');

// Search quotes by length
const quotesByLength = inspiro.searchQuotesByLength(20, 50);

// Calculate average quote length
const avgQuoteLength = inspiro.calculateAverageQuoteLength();

// Get the longest and shortest quotes
const longestQuote = inspiro.getLongestQuote();
const shortestQuote = inspiro.getShortestQuote();

// Generate a random quote
const randomQuote = inspiro.getRandomQuote();
const randomQuoteByAuthor = inspiro.getRandomQuoteByAuthor('Author Name');
const randomQuoteByCategory = inspiro.getRandomQuoteByCategory('Category Name');
```


# Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

# License
This project is licensed under the terms of the GNU General Public License v3.0. You may review the full license **[here]**(LICENSE).

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

# License
This project is licensed under the terms of the GNU General Public License v3.0. You may review the full license [here](https://www.gnu.org/licenses/gpl-3.0.en.html).



