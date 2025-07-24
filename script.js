function handleClick(taskName) {
  // Copy text to clipboard
  navigator.clipboard.writeText(taskName)
    .then(() => {
      console.log(`Copied to clipboard: ${taskName}`);
      
      // Update the text in the display element
      const display = document.getElementById("textDisplay");
      if (display) {
        display.textContent = `${taskName}`;
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      const display = document.getElementById("textDisplay");
      if (display) {
        display.textContent = `Error copying text.`;
      }
    });
}