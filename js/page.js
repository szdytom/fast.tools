document.getElementById('common').innerHTML = `
<a href="${(function() {
    const url = document.location.pathname;
    if (url.endsWith('/') || url.endsWith('/index.html')) {
        return '..';
    }
    return './';
})()}">Go Back</a>
`;