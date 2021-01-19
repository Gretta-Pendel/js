let money, time;

money = prompt("Ваш бюджет на месяц?", "0");
time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let q1_1, q1_2, q2_1, q2_2;

q1_1 = prompt("Введите обязательную статью расходов в этом месяце","");
q1_2 = prompt("Во сколько обойдется?","0");

q2_1 = prompt("Введите обязательную статью расходов в этом месяце","");
q2_2 = prompt("Во сколько обойдется?","0");

let appData = {
    budget: money,
    timeData: time,
    expenses: {q1_1:q2_1},
    optionalExpenses: {},
    income: [],
    savings: false
};