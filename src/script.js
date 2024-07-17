
function showModal(modal) {
    const modalElement = document.querySelector(modal);
    let newDiv = null;

    const closeBody = function(e){
        if (e.target == modalElement){ 
            closeModal();
        }
    }

    if(window.innerWidth > 768){
        modalElement.classList.remove('hidden');
        modalElement.classList.add('flex');
        
        newDiv = document.createElement('div');
        newDiv.classList.add('bg-gray-900/50', 'dark:bg-gray-900/80', 'fixed', 'inset-0', 'z-40', 'modal-overlay');
        document.body.appendChild(newDiv);
        newDiv.addEventListener('click', () => {
            modalElement.classList.add('hidden');
            modalElement.classList.remove('flex');
            newDiv.remove();
        });
        document.body.addEventListener('click', closeBody);
    } else {
        modalElement.style.transform = 'translateX(0)';
    }

    

    document.querySelectorAll('.close-modal').forEach((closeButton) => {
        const closeModalFunction = (e) => {
            e.stopPropagation();
           closeModal();
            closeButton.removeEventListener('click', closeModalFunction);
        };
        closeButton.addEventListener('click', closeModalFunction);

    });

    

    
    function closeModal() {
        
        if(window.innerWidth > 768){
            modalElement.classList.add('hidden');
            modalElement.classList.remove('flex');
            newDiv.remove();
            document.body.removeEventListener('click', closeBody);
        } else {
            modalElement.style.transform = 'translateX(-120%)';
        }

    }





}