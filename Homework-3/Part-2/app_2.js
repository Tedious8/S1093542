var display = document.getElementById("display");
var stack = [];

const key = (op) => {
    display.innerHTML += op;
    stack.push(op);
};

const erase = () => {
    display.innerHTML = '';
    stack = []
};

const calculate = () => {
    
    let operand = [];
    let operator = [];
    let holder = '';
    let value = 0;
    for (let i = 0; i < stack.length; i++) {
        if (isOperand(stack[i])) {
            holder += stack[i];
        } else {
            value = parseInt(holder, 2);
            operand.push(value);
            operator.push(stack[i]);
            holder = '';
        }
    }
    value = parseInt(holder, 2);
    operand.push(value);
    console.log(operand);
    console.log(operator);
    while (operator.length > 0) {
        operand.unshift(applyOp(operator.shift(), operand.shift(), operand.shift()));
    }
    value = operand.pop();
    holder = value.toString(2);
    let anotherHolder = holder.split('');
    stack = anotherHolder;
    display.innerHTML = holder;
    console.log(stack);
};

const applyOp = (op, left, right) => {
    switch (op)
        {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            if (right == 0)
            {
                console.log("Cannot divide by zero");
                display.innerHTML = "Cannot divide by zero";
            }
            return parseInt(left / right, 10);
        }
        return 0;
};

const isOperand = (value) => {
    if (value >= '0' && value <= '1')
        return true;
    return false;
};