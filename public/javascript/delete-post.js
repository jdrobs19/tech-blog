async function deleteFormHandler(event) {
    event.preventDefault();
    const deleteConfirm = confirm("Are you sure you'd like to delete? This action cannot be undone.");
    if (!deleteConfirm) return;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/:${id}`, {
        method: 'DELETE'
    })

    if (response.ok) document.location.replace('/dashboard');
    else alert(response.statusText);
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);