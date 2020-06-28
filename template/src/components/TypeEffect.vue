<template>
    <div class="container">
        <h1>I am Ugur Yuce &
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h1>
    </div>
</template>

<script>
    import { setTimeout } from 'timers';
    export default {
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Frontend Developer', 'designer', 'freelancer'],
                typingSpeed: 200,
                erasingSpeed: 100,
                newTextDelay: 500,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
        methods: {
            typeText() {
                if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                    if(!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                    this.charIndex += 1;
                    setTimeout(this.typeText, this.typingSpeed);
                }
                else {
                    this.typeStatus = false;
                    setTimeout(this.eraseText, this.newTextDelay);
                }
            },
            eraseText() {
                if(this.charIndex > 0) {
                    if(!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex -= 1;
                    setTimeout(this.eraseText, this.erasingSpeed);
                }
                else {
                    this.typeStatus = false;
                    this.typeArrayIndex += 1;
                    if(this.typeArrayIndex >= this.typeArray.length)
                        this.typeArrayIndex = 0;
                    setTimeout(this.typeText, this.typingSpeed + 1000);
                }
            }
        },
        created() {
            setTimeout(this.typeText, this.newTextDelay + 200);
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding-left: 0px;
        margin-left: 0px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    h1 {
        font-size: 1.2rem;
        font-weight: 600;
        span.typed-text {
            color: #D2B94B;
        }
        span.cursor {
            display: inline-block;
            margin-left: 1px;
            width: 4px;
            background-color: #000;
            animation: cursorBlink 1s infinite;
        }
        span.cursor.typing {
            animation: none;
        }
    }
    @keyframes cursorBlink {
        49% { background-color: #000; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
    }
</style>