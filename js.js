class funcao {
    constructor() {
        this.currentInput = document.querySelector('.currentInput');
        this.answerScreen = document.querySelector('.answerScreen');
        this.buttons = document.querySelectorAll('button');
        this.erasebtn = document.querySelector('#erase');
        this.clearbtn = document.querySelector('#clear');
        this.evaluate = document.querySelector('#evaluite');
        this.data = document.querySelector('.data');
        this.hora = document.querySelector('.hora');
        this.realTimeScreenValue = [];
        this.clearbtn.addEventListener('click', () => {
            this.realTimeScreenValue = [];
            this.answerScreen.innerHTML = 0;
            this.answerScreen.getElementsByClassName.color = " rgba(150,150,150,0.87)";
        })
        this.botao();
        this.dataehora();
        this.initKeyboard();
    }
    botaonum(value) {
        this.realTimeScreenValue.push(value);
        this.currentInput.innerHTML = this.realTimeScreenValue.join('');
    }
    initKeyboard() {

        document.addEventListener('keyup', e => {

            switch (e.key) {
                case 'Escape':
                    this.realTimeScreenValue.pop();
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case 'Backspace':
                    this.realTimeScreenValue = [];
                    this.answerScreen.innerHTML = 0;
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    this.answerScreen.getElementsByClassName.color = " rgba(150,150,150,0.87)";
                    break;
                case '+':
                    this.realTimeScreenValue.push('+');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case '-':
                    this.realTimeScreenValue.push('-');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case '*':
                    this.realTimeScreenValue.push('*');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case '/':
                    this.realTimeScreenValue.push('/');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case '%':
                    this.realTimeScreenValue.push('%');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case 'Enter':
                case '=':
                    this.answerScreen.innerHTML = eval(this.realTimeScreenValue.join(''));
                    this.answerScreen.style.color = 'white';
                    break;
                case '.':
                case ',':
                    this.realTimeScreenValue.push('.');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case '0':
                    this.realTimeScreenValue.push('0');
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                    break;
                case '1':
                    this.botaonum('1');
                    break;
                case '2':
                    this.botaonum('2');
                    break;
                case '3':
                    this.botaonum('3');
                    break;
                case '4':
                    this.botaonum('4');
                    break;
                case '5':
                    this.botaonum('5');
                    break;
                case '6':
                    this.botaonum('6');
                    break;
                case '7':
                    this.botaonum('7');
                    break;
                case '8':
                    this.botaonum('8');
                    break;
                case '9':
                    this.botaonum('9');
                    break;

            }

        });

    }
    botao() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.id.match(this.erasebtn, this.evaluite)) {
                    this.realTimeScreenValue.push(btn.value);
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                } else if (btn.value == this.evaluate.value) {
                    this.answerScreen.innerHTML = eval(this.realTimeScreenValue.join(''));
                    this.answerScreen.style.color = 'white';
                } else if (btn.id.match(this.erasebtn)) {
                    this.realTimeScreenValue.pop();
                    this.currentInput.innerHTML = this.realTimeScreenValue.join('');
                } else if (typeof eval(this.realTimeScreenValue.join('')) == 'undefined') {
                    this.answerScreen.innerHTML = 0;
                }
            })
        })
    }
    dataehora() {
        this.datas = this.currentdate.toLocaleDateString('pt-br');
        this.horas = this.currentdate.toLocaleTimeString('pt-br');
        setInterval(() => {
            this.datas = this.currentdate.toLocaleDateString('pt-br');
            this.horas = this.currentdate.toLocaleTimeString('pt-br');
        }, 1000)

    }

    set datas(value) { this.data.innerHTML = value; }
    set horas(value) { this.hora.innerHTML = value; }
    get currentdate() { return new Date(); }

}