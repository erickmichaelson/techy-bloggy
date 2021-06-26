const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      description:body,
      post_title:title,
      user_id:""
    
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then(function (records) {
    console.log("In post", records);
    document.location.replace('/dashboard');
  })
    .catch(function (err) {
      consle.log("ERR in post route",err)
    })

};


document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
