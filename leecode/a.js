// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。



function isStringRight(str) {
    let stack = []
    str.split('').forEach(s => {
        if (s === '(' || s === '{' || s === '[') {
            stack.push(s)
        } else if (s === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else if (s === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        } else if (s === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
        } else {
            stack.push(s)
        }
    })
    console.log(stack);
}


isStringRight('{{{{{{}}}}}}[]}}}}[]}[}}]')
function validateStackSequences(pushed, poped) {
    var stack = []
    for (let cur of pushed) {
        stack.push(cur)
        
        while (stack[stack.length - 1] === poped[0]&& stack.length) {
            stack.pop()
            poped.shift()
            console.log(stack[stack.length - 1], poped[0]);
        }
    }
    console.log(stack);

}

validateStackSequences([1, 2, 3, 4, 6], [2, 3, 4, 6, 1])