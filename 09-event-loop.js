const fun1 = () => {
    setTimeout(() => {
        console.log('setTimeout Triggered...');
    }, 3000);
}
const fun2 = () => {
    console.log('before call setTimeout()');
    fun1();
    console.log('after call setTimeout()');
}
const fun3 = () => {
    return fun2();
}
fun3();