const inputText = document.querySelector('#input');
const submitText = document.querySelector('#submit');
// inputText.innerHTML;


console.log(inputText);

submitText.onclick = () => {
    submitText.innerHTML = `COPIED`;
    submitText.style.backgroundColor = "green";
    inputText.select();
    document.execCommand('copy');
}
