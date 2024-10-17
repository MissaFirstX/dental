function loadView(viewUrl) {
    fetch(viewUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar la vista: ' + viewUrl);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar la vista:', error);
        });
}