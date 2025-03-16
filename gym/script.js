function showDetails(card) {
  const title = card.getAttribute('data-title');
  const description = card.getAttribute('data-description');
  const link = card.getAttribute('data-link');

  // Redirect to the corresponding exercise page
  window.location.href = link;
}