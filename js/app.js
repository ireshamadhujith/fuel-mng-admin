function registerMainLayoutInstance(dotNetHelper) {
    
        const container = document.getElementById('uis-container');
        if (!container)
            console.error("container not found");
        
        const sidebar = document.getElementById('uis-sidebar');
        if (!sidebar)
            console.error("sidebar not found");

        sidebar.addEventListener('transitionend', () => {
            if (sidebar.classList.contains('collapsed')) {
                container.classList.add('collapsed-sidebar');
            } else {
                container.classList.remove('collapsed-sidebar');
            }

            dotNetHelper.invokeMethodAsync('TriggerStateHasChanged')
                .catch(err => {
                    console.error('Error triggering StateHasChanged:', err);
                });
        });
    
}