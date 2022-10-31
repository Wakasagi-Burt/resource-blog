// This fucntion handles a Blog Post 
async function postHandler (e) {
    e.preventDefault();

    const title = document.querySelector('#title');
    const postdate = document.querySelector('#postdate');
    const content = document.querySelector('#content');
    const username = document.querySelector('#username');
    const user_id = document.querySelector('#user_id');

    const serverResponse = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(
        {
            title,
            postdate,
            content,
            username,
            user_id,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (serverResponse.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add Blog Post');
    }
}

document.querySelector('.new-post-form').addEventListener('submit', postHandler);
