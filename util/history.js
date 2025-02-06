var history_button = document.getElementById('btn-history');
var history_div = document.getElementById('display_history');
var history_content = document.getElementById('history_content');


function load_history() {

    if (history_div.style.display === 'block') {
        history_content.innerHTML = '';

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let temp = localStorage.getItem(key);

            let p = document.createElement('p');
            p.textContent = temp;
            history_content.appendChild(p);
        }
    }
}

export function display_history() {
    history_button.addEventListener('click', (e) => {
        if (history_div.style.display === 'none' || history_div.style.display === '') {
            history_div.style.display = 'block';
            load_history();
        }
        else {
            history_div.style.display = 'none';
        }

    });

}
export function clear_history() {
    localStorage.clear();
    load_history();
}
// export { display_history, clear_history };