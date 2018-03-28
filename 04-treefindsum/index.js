var tree = {
    value: 10,
    left: {
        value: 5,
        left: {
            value: 4
        },
        right: {
            value: 7
        }
    },
    right: {
        value: 12
    }
};

function findPath(node, history, sum) {
    history += node.value + ',';
    sum += node.value;
    if (!node.left && !node.right && sum == 22) {
        console.log(history);
    }
    node.left && findPath(node.left, history, sum);
    node.right && findPath(node.right, history, sum);
}

findPath(tree, '', 0);