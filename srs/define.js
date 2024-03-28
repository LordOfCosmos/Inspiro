const fs = require('fs');
const path = require('path');

class Inspiro {
  constructor() {
    this.quotes = [];
    this.loadQuotes();
  }

  loadQuotes() {
    try {
      console.log('Loading quotes...');
      const filePath = path.join(__dirname, '../src/quotes.json');
      const rawData = fs.readFileSync(filePath);
      this.quotes = JSON.parse(rawData);
      console.log('Quotes loaded successfully.');
    } catch (error) {
      console.error('Error loading quotes:', error.message);
    }
  }

  saveQuotes() {
    try {
      console.log('Saving quotes...');
      const filePath = path.join(__dirname, '../src/quotes.json');
      fs.writeFileSync(filePath, JSON.stringify(this.quotes, null, 2));
      console.log('Quotes saved successfully.');
    } catch (error) {
      console.error('Error saving quotes:', error.message);
    }
  }

  addQuote(quote) {
    try {
      const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '/');
      quote.dateAdded = currentDate;
      this.quotes.push(quote);
      this.saveQuotes();
    } catch (error) {
      console.error('Error adding quote:', error.message);
    }
  }

  searchQuotes(keyword) {
    try {
      return this.quotes.filter(quote => {
        return quote.text.includes(keyword) || quote.author.includes(keyword) || quote.category.includes(keyword);
      });
    } catch (error) {
      console.error('Error searching quotes:', error.message);
      return [];
    }
  }

  editQuote(oldText, newText) {
    try {
      const quoteIndex = this.quotes.findIndex(quote => quote.text === oldText);
      if (quoteIndex !== -1) {
        this.quotes[quoteIndex].text = newText;
        this.saveQuotes();
      } else {
        console.log('Quote not found.');
      }
    } catch (error) {
      console.error('Error editing quote:', error.message);
    }
  }

  sortQuotesBy(property) {
    try {
      return this.quotes.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
      });
    } catch (error) {
      console.error('Error sorting quotes:', error.message);
      return [];
    }
  }

  countQuotes() {
    try {
      return this.quotes.length;
    } catch (error) {
      console.error('Error counting quotes:', error.message);
      return 0;
    }
  }

  getUniqueAuthors() {
    try {
      return [...new Set(this.quotes.map(quote => quote.author))];
    } catch (error) {
      console.error('Error getting unique authors:', error.message);
      return [];
    }
  }

  getUniqueCategories() {
    try {
      return [...new Set(this.quotes.map(quote => quote.category))];
    } catch (error) {
      console.error('Error getting unique categories:', error.message);
      return [];
    }
  }

  filterQuotesByYear(year) {
    try {
      return this.quotes.filter(quote => new Date(quote.dateAdded).getFullYear() === year);
    } catch (error) {
      console.error('Error filtering quotes by year:', error.message);
      return [];
    }
  }

  filterQuotesByDateAdded(date) {
    try {
      return this.quotes.filter(quote => quote.dateAdded === date);
    } catch (error) {
      console.error('Error filtering quotes by date added:', error.message);
      return [];
    }
  }

  exportQuotesToJSON(fileName = 'exported-quotes', directoryPath = './exports') {
    try {
      const dirPath = path.resolve(directoryPath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      const filePath = path.join(dirPath, `${fileName}.json`);
      fs.writeFileSync(filePath, JSON.stringify(this.quotes, null, 2));
      console.log(`Quotes exported to ${fileName}.json successfully.`);
    } catch (error) {
      console.error('Error exporting quotes to JSON:', error.message);
    }
  }

  searchQuotesByLength(minLength, maxLength) {
    try {
      return this.quotes.filter(quote => quote.text.length >= minLength && quote.text.length <= maxLength);
    } catch (error) {
      console.error('Error searching quotes by length:', error.message);
      return [];
    }
  }

  calculateAverageQuoteLength() {
    try {
      const totalLength = this.quotes.reduce((acc, quote) => acc + quote.text.length, 0);
      return totalLength / this.quotes.length;
    } catch (error) {
      console.error('Error calculating average quote length:', error.message);
      return 0;
    }
  }

  getLongestQuote() {
    try {
      return this.quotes.reduce((prev, current) => (prev.text.length > current.text.length) ? prev : current);
    } catch (error) {
      console.error('Error getting longest quote:', error.message);
      return null;
    }
  }

  getShortestQuote() {
    try {
      return this.quotes.reduce((prev, current) => (prev.text.length < current.text.length) ? prev : current);
    } catch (error) {
      console.error('Error getting shortest quote:', error.message);
      return null;
    }
  }

  getRandomQuote(format = 'full') {
    try {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      const randomQuote = this.quotes[randomIndex];
      switch (format) {
        case 'text':
          return randomQuote.text;
        case 'author':
          return randomQuote.author;
        case 'category':
          return randomQuote.category;
        default:
          return randomQuote;
      }
    } catch (error) {
      console.error('Error getting random quote:', error.message);
      return null;
    }
  }

  getRandomQuoteByAuthor(author, format = 'full') {
    try {
      const quotesByAuthor = this.quotes.filter(quote => quote.author === author);
      if (quotesByAuthor.length === 0) {
        return 'No quotes found for the given author.';
      }
      const randomIndex = Math.floor(Math.random() * quotesByAuthor.length);
      const randomQuote = quotesByAuthor[randomIndex];
      switch (format) {
        case 'text':
          return randomQuote.text;
        case 'author':
          return randomQuote.author;
        case 'category':
          return randomQuote.category;
        default:
          return randomQuote;
      }
    } catch (error) {
      console.error('Error getting random quote by author:', error.message);
      return null;
    }
  }

  getRandomQuoteByCategory(category, format = 'full') {
    try {
      const quotesByCategory = this.quotes.filter(quote => quote.category === category);
      if (quotesByCategory.length === 0) {
        return 'No quotes found for the given category.';
      }
      const randomIndex = Math.floor(Math.random() * quotesByCategory.length);
      const randomQuote = quotesByCategory[randomIndex];
      switch (format) {
        case 'text':
          return randomQuote.text;
        case 'author':
          return randomQuote.author;
        case 'category':
          return randomQuote.category;
        default:
          return randomQuote;
      }
    } catch (error) {
      console.error('Error getting random quote by category:', error.message);
      return null;
    }
  }
}

module.exports = Inspiro;
