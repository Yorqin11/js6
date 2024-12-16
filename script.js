let fruits = ['Olma', 'Banan', 'Gilos', 'Shaftoli'];

function confirmAction() {
    let arrayLength = fruits.length;

    while (arrayLength > 0) {
        const confirmation = confirm(`Arrayning uzunligi: ${arrayLength}`);
        if (confirmation) {
            alert('Sizning arrayingizdan malumotlarni olib tashlamoqchimisiz!');
            fruits.pop();
            arrayLength = fruits.length; 
            console.log('Updated array:', fruits);
        } else {
            alert('Action canceled.');
            break; 
        }
    }

    if (arrayLength === 0) {
        alert('Sizning arrayingizdan barcha malumotlarni olib tashladik.');
    }
}

confirmAction();