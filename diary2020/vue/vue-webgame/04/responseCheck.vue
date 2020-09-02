<template>
    <div>            <!-- v-bind: 속성의 '값'을 데이터(혹은  자바스크립트 식)에 연결시키고 싶을 때. v-bind: = : -->
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <template v-show="result.length">  <!-- v-show: 값이 False일 때, display:none / v-if는 주석처리를 한다는 것이 차이점-->
            <div>평균 시간 : {{ average }} ms</div> 
            <button @click="onReset">리셋</button>
        </template>
    </div>
</template>
<script>
    let startTime = 0; // 화면과 관련 없으므로 컴포넌트 밖으로 뺌
    let endtime = 0;
    let timeout = null; // 초기화하기 위해 setTimeout에 이름을 줌.
    export default {
        data() {
            return{
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            };
        },
        computed: {
            average(){
                return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
                // result 전부 더한 값 / result 값 갯수 || 가본값 0
            }
        },
        methods: {
            onReset(){ // 리셋 버튼
               this.result = [];
            },
            onClickScreen(){ // 반응속도게임 상자 클릭 시
                if (this.state === 'waiting'){
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요.';
                    timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date(); 
                    }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
                } else if (this.state === 'ready'){
                    clearTimeout(timeout);
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.';
                } else if (this.state === 'now'){
                    endtime = new Date(); 
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요.';
                    this.result.push( endtime - startTime ); // 배열 형태로 준비한 데이터에 푸시
                }
            }
        }
    }
</script>
#css의 컴포넌트화? 컴포넌트 안에서만 #screen이 호명됨. 다른 컴포넌트에서도 #screen이라는 이름을 따로 쓸 수 있음. 남용해도 해롭진 않다고 함
<style scoped> 
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>