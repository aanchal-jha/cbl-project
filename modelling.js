const fileInput = document.getElementById('pdbFileInput');
const submitButton = document.getElementById('submitBtn');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onload = (event) => {
    const pdbData = event.target.result;
    if (pdbData.startsWith('HEADER') && pdbData.includes('ATOM')) {
      submitButton.disabled = false;
    } else { 
      submitButton.disabled = true;
      alert('File is not a valid PDB file');
    }
  };
  
  reader.readAsText(file);
});