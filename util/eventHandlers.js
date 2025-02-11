export function handleButtonClick(parent_element_id, element_class, callback) {
    document.getElementById(parent_element_id).addEventListener('click', (e) => {
        if (element_class === '' || e.target.classList.contains(element_class)) {
            callback(e);
        }
    });
}

export function handleKeyPress(element_id, callback) {
    document.getElementById(element_id).addEventListener("keypress", (e) => {
        if (e.code == 'Enter' || e.code == 'NumpadEnter') {
            callback();
        }
    });
} 