<template>
    <div class="ball" :style="styleObject">{{number}}</div>
</template>
<script>
    export default {
        name: 'lottoBall', // 안 적어도 파일명과 연동되긴 한다.
        props: {
            number: Number, // number라는 프롭스의 자료형은 숫자Number다 라는 뜻
        },
        computed: {
            styleObject() {
                let background; // 선언만
                if (this.number <= 10) {
                    background = 'red';
                } else if (this.number <= 20) {
                    background = 'orange';
                } else if (this.number <= 30) {
                    background = 'yellow';
                } else if (this.number <= 40) {
                    background = 'blue';
                } else {
                    background = 'green';
                }
                return {
                    background,
                };
            }
        } // 아무 것도 안 쓴 data나 methods 남아있으면 오류뜸 
    }
</script>
<style>
    .ball{
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width:40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>