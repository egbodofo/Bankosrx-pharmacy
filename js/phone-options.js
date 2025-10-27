function contactOptions() {
  const phoneNumber = '+2349069957125';
  const choice = confirm('Press OK to chat on WhatsApp, or Cancel to make a phone call.');
  
  if (choice) {
    // Open WhatsApp chat
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank');
  } else {
    // Make phone call
    window.location.href = `tel:${phoneNumber}`;
  }
}