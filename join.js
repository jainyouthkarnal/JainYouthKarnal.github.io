(()=>{
  const form=document.getElementById('join-form');
  if(!form)return;
  const note=document.getElementById('join-form-note');
  form.addEventListener('submit',event=>{
    const endpoint=(form.dataset.googleFormUrl||'').trim();
    if(endpoint){return;} // If a Google Form endpoint is configured later, allow its native submit workflow.
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const subject=encodeURIComponent('Jain Youth Karnal — Community Join Request');
    const body=encodeURIComponent([
      `Name: ${data.get('name')||''}`,
      `Email: ${data.get('email')||''}`,
      `Phone: ${data.get('phone')||''}`,
      `Interested in: ${data.get('interest')||''}`
    ].join('\n'));
    if(note){note.textContent='Your email app will open with the details filled in. Please send the email to complete your request.';note.classList.remove('error');note.classList.add('success');}
    window.location.href=`mailto:jainyouthkarnal@gmail.com?subject=${subject}&body=${body}`;
  });
})();
