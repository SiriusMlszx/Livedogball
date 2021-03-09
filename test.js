const string = `
/* 你好，我叫王司宇 */
/* 我现在要用CSS画一只小狗和球 */
/* 首先将小狗的身体画出来  */
.dog {
    width: 100px;
    height: 100px;
    z-index: 1;
}

.dog {
    top: 10%;
    width: 100px;
    height: 100px;
    z-index: 1;
}

.dog:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.03);
    transform: translateY(-30%) scale(1.5);
}

.dog * {
    position: absolute;
}

@keyframes dog-body {
    from {
        transform: translateX(-10%);
    }

    to {
        transform: translateX(10%);
    }
}

.dog-body {
    top: -50%;
    animation: dog-body 200ms ease-in-out infinite alternate;
}

@keyframes dog-head {

    from,
    to {
        transform: rotate(45deg)
    }

    33.3% {
        transform: rotate(-45deg)
    }

    66.6% {
        transform: rotate(0)
    }
}

.dog-head {
    animation: dog-head 1800ms cubic-bezier(0.11, 0.79, 0, 0.99) infinite;
}

@keyframes dog-torso {
    from {
        transform: translateX(-5%);
    }

    to {
        transform: translateY(5%);
    }
}

.dog-body,
.dog-torso,
.dog-head {
    border-radius: 50%;
    background: white;
    position: absolute;
    height: 100%;
    width: 100%;
}

.dog-body,
.dog-torso {
    box-shadow: inset 0 -15px 0 0 #EAEBEC;
}

.dog-torso {
    top: -20%;
    animation: dog-torso 200ms ease-in-out infinite alternate-reverse;
}

@keyframes dog-eye {

    from,
    to {
        animation-timing-function: step-end;
        opacity: 1;
    }

    50%,
    55% {
        animation-timing-function: step-start;
        opacity: 0;
    }
}


/* 接着是眼睛，右眼是橘子斑 */
.dog-eyes {
    width: 60%;
    top: 55%;
    left: 20%;
    z-index: 1;
}

.dog-eyes:before {
    content: '';
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    position: absolute;
    background: orange;
    top: -10px;
    left: -10px;
    z-index: 0;
    border: 4px solid white;
    border-left-width: 0;
    border-bottom-width: 0;
    border-top-width: 0;
    transform: rotate(-45deg)
}

.dog-eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    z-index: 1;
    animation: dog-eye 1800ms infinite;
}



.dog-eye:first-child {
    left: 0;
}

.dog-eye:last-child {
    right: 0;
}

/* 鼻子和狗中 */
.dog-muzzle {
    width: 60%;
    left: 20%;
    height: 50%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background: white;
    bottom: -15%;
}

.dog-muzzle:before,
.dog-muzzle:after {
    content: '';
    display: block;
    position: absolute;
}

.dog-muzzle:before {
    width: 6px;
    height: 20px;
    bottom: 0;
    left: calc(50% - 3px);
    background: #EAEBEC;
}

.dog-muzzle:after {
    background: black;
    width: 20px;
    height: 15px;
    bottom: 12px;
    left: calc(50% - 10px);
    border-bottom-left-radius: 60% 60%;
    border-bottom-right-radius: 60% 60%;
    border-top-left-radius: 50% 40%;
    border-top-right-radius: 50% 40%;
}

@keyframes dog-tongue {

    from,
    to {
        transform: rotate(0);
    }

    16.67% {
        transform: rotate(30deg);
    }

    33.33%,
    66.67% {
        transform: rotate(0);
    }

    50%,
    83.33% {
        transform: rotate(-20deg);
    }
}

@keyframes dog-tongue-inner {
    from {
        transform: translateY(5%);
    }

    to {
        transform: translateY(22%);
    }
}

/* 狗狗热的舌头，后面会让它伸出来的 */
.dog-tongue {
    width: 40px;
    height: 100%;
    left: calc(50% - 20px);
    z-index: -1;
    transform-origin: center top;
    animation: dog-tongue 1800ms -50ms ease-in-out infinite;
}



.dog-tongue:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: #fd3163;
    animation: dog-tongue-inner 100ms ease-in-out infinite alternate;
}

/* 然后画耳朵 */
@keyframes dog-ears {

    42.3%,
    71.6% {
        transform: rotate(-5deg);
    }

    50.3%,
    79.6% {
        transform: rotate(5deg);
    }

    5% {
        transform: rotate(5deg);
    }

    12% {
        transform: rotate(-5%);
    }

    from,
    33.3%,
    66%,
    to {
        transform: rotate(0);
    }
}

.dog-ears {
    width: 40%;
    top: 25%;
    left: 30%;
    animation: dog-ears 1800ms 100ms ease infinite;
}



.dog-ear {
    bottom: -10px;
    height: 50px;
    width: 50px;
    background: #EAEBEC;
    animation-duration: 400ms;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
}

.dog-ear:first-child {
    border-bottom-left-radius: 80%;
    border-top-right-radius: 80%;
    right: 100%;
    box-shadow: inset -15px 15px 0 1px white;
    transform-origin: right bottom;
    transform: rotate(10deg)
}

.dog-ear:last-child {
    border-top-left-radius: 80%;
    border-bottom-right-radius: 80%;
    left: 100%;
    box-shadow: inset 15px 15px 0 0 white;
    transform-origin: left bottom;
    transform: rotate(-10deg)
}

/* 最后是尾巴 */
@keyframes dog-tail-segment {
    from {
        transform: rotate(-10deg);
    }

    to {
        transform: rotate(10deg);
    }
}



@keyframes dog-tail {
    from {
        transform: rotate(-45deg);
    }

    to {
        transform: rotate(45deg);
    }
}

.dog-tail {
    width: 22px;
    height: 24.2px;
    background: white;
    bottom: 40%;
    border-radius: 11px;
    left: calc(50% - 11px);
    transform-origin: center bottom;
}

.dog-tail .dog-tail {
    animation: dog-tail-segment 200ms ease-in-out infinite alternate;
}

.dog-body>.dog-tail {
    bottom: 90%;
    animation: dog-tail 200ms ease-in-out infinite alternate;
}

/* 给狗狗一个小球，让他们一起玩耍吧！ */
@keyframes bounce {
    from {
        transform: scale(2);
        animation-timing-function: ease-in;
    }

    to {
        transform: scale(0.8);
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }
}

@keyframes bounce-shadow {
    from {
        transform: scale(2.5, 2.6) translateY(-50%);
        animation-timing-function: ease-in;
    }

    to {
        transform: scale(0.5) translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }
}

.ball {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-top: 4rem;
    z-index: 0;
    top: 10%;
}

.ball:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: inset 0 -8px 0 0 rgba(0, 0, 0, 0.2);
    background: #FF879D;
    z-index: 1;
}

.ball:focus {
    outline: none;
}

.ball:focus:after {
    animation: bounce 400ms infinite alternate;
}

.ball:focus:before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.05);
    animation: bounce-shadow 400ms infinite alternate;
    z-index: -10;
}

/* 点一下小球就可以让它弹起来！ */
/* 画完啦！一只小狗和一个小球，送给你！ */
`


const player = {
    id: undefined,
    time: 50,
    n: 1,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()

    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnFast': 'fast',
        '#btnNormal': 'normal'
    },
    bindEvents: () => {

        for (let key in player.events)
            if (player.events.hasOwnProperty(key))
        // if用来防止遍历继承的对象
        {
            const value = player.events[key]
            document.querySelector(key).onclick = player[value]
        }

    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }

        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        player.pause()
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 50
        player.play()

    },
    normal: () => {
        player.pause()
        player.time = 20
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()