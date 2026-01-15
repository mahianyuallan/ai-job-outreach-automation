return items
  .map(item => item.json)
  .filter(job => job.url)
  .map(job => ({
    jobUrl: job.url,
    position: job.position,
    company: job.company
  }));
