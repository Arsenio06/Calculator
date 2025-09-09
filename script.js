let display = document.getElementById('result');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        
        // ПОМИЛКА: Неправильна обробка операції додавання
        // Замість звичайного додавання використовується конкатенація рядків
        if (expression.includes('+')) {
            let parts = expression.split('+');
            let result = parseFloat(parts[0]) + parseFloat(parts[1]); // Це конкатенація, не додавання!
            display.value = result;
        } else {
            // Для інших операцій використовуємо eval (не рекомендується в продакшні)
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = 'Помилка';
    }
}

// Додаткова функція для тестування
function testCalculator() {
    console.log('Тест: 5 + 3 =', calculate('5+3'));
    console.log('Тест: 10 - 4 =', calculate('10-4'));
}
