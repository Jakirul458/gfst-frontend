export function formatMongoDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
  
    return date.toLocaleDateString('en-US', options);
  }