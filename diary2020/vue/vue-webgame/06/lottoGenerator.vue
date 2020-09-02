<template>
    <div>
       <div>당첨 숫자</div>
       <div id="결과창">        <!-- v-for에서 배열을 돌며 호출된 ball을 바로 props로 넘김! -->
           <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
       </div>
       <div>보너스</div>
       <lotto-ball v-if="bonus" :number="bonus"></lotto-ball> <!-- 추가된 bonus를 props로 넘김. 이쪽 부모 템플릿에서는 다른 옵션을 달았지만 불러지는 컴포넌트는 위의 것과 같음 -->
       <button v-if="redo" @click="onClickRedo">한 번 더!</button> <!-- redo = 다시하기 데이터위 값이 true가 될 때 보이도록 -->
    </div>
</template>
<script>
    import lottoBall from './lottoBall';

    function getWinNumbers(){// Array(45) 45길이 빈(반복문도 안 돌아가는 undefined) 배열 생성, 각 값을 반목문 돌아가는 undefined로 채우기(fill)
        const candidate = Array(45).fill().map((v, i) => i + 1); // 각 값 v에 i(배열인덱스)의 1 더한 값을 할당. = 0 ~ 44번 인덱스의 배열 값에 1 ~ 45 값이 할당됨
        const shuffle = []; // 빈 배열 선언
        while (candidate.length > 0) { // 배열에서 값을 하나씩 삭제하면서, 배열을 끝까지 쓸 때까지. 기준 값이 이렇게 바뀌는 경우 while 추천
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]); //  푸시 push ( splice( '랜덤한 자리로부터' , 한 개 추출) 추출된 배열의 첫 번째 값 [0] )
        }
        const bonusNumber = shuffle[6]; // 7번째로 집어넣어진 숫자
        // 0번부터, 6번 전까지 (0 ~ 5 6개) .sort((앞번호, 뒷번호) => p - c 가 0 이상이면, 둘이 순서를 바꾼다) / sort()에 옵션 없으면 11을 2보다 작은 수로 정렬함
        const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c); // 내림차순은 .sort((p, c) => c - p)
        return [...winNumbers, bonusNumber]; // 두 겹 배열이 아니라 평범한 배열로 합쳐짐. ES6 전개연산자라고 한다.
    }   

    const timeouts = []; // setTimeout이 7번 호출되므로, 배열에 담아 한번에 clear한다.

    export default {
        components: {
            'lotto-ball' : lottoBall    // 'HTML 엘리먼트 이름' : 자식파일의 export default 이름
        },  // 앞뒤가 케밥케이스 - 파스칼케이스 표기법차이 외엔 같을 경우, 뒤의 export default 이름만 적어둬도 됨 / 뒤 카멜표기법도 됨!!
        data() {
            return{
                winNumbers: getWinNumbers(), // 숫자 뽑는 데이터
                winBalls: [], // 배열이 표시되는 모양은 미리 다 정해두고, 이 배열에 시간차로 하나씩 추가함으로써 천천히 보여줌
                bonus: null,
                redo: false,
            };
        },
        computed: {
            
        },
        methods: {
            onClickRedo() { // 초기화
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                // this.showBalls(); 
            },
            showBalls() {
                for (let i = 0; i < this.winNumbers.length - 1; i++) { // 반복문 안에 비동기함수(setTimeout)가 들어가면 문제가 생기지만(클로저), var가 아니라 let을 쓰면 괜찮음)
                timeouts[i] = setTimeout(() => {    // 보너스를 뺀 6개
                    this.winBalls.push(this.winNumbers[i]);
                }, (i + 1) * 600);
            }
            timeouts[6] = setTimeout(() => {
                this.bonus = this.winNumbers[6]; // 보너스 데이터에 숫자 추가함으로써 보이기
                this.redo = true; // 다시하기 버튼 보이기
            },4200);
            },
        },
        mounted() { // 화면 뜬 직후부터 움직이기 시작하는 건 여기서
            this.showBalls();
        },
        beforeDestroy() {   // setTimeinterval이나 setTimeout 이 메모리 누수를 일으키지 않도록 뒤처리하기
            timeouts.forEach((t) => {    // timeouts 배열에 담긴 각 setTimeout 하나씩(t로 호명함)에 대하여
                clearTimeout(t)     // 초기화
            })
        },
        watch: {    // 데이터가 변하는지 감시. 바뀔 때마다 추가적인 동작을 할 수 있다.
            redo(value, oldvalue) {     // 데이터명 (현재 값 , 직전 값 ) this.redo 값이 변할 때마다 실행됨
                console.log(value, oldvalue);   // 감시할 데이터가 객체나 배열일 경우, '참조'하기 때문에 현재값 이전값이 같게 뜨는 경우 많음
                if (value === false) {          // 감시할 데이터가 원시 값인 게 좋음 (넘버 스트링 불린 기타등등)
                    this.showBalls();       // 많은 사용은 권장되지 않음! 재귀 지옥에 빠질 수 있고, 비동기 방식인데 자주 호출되어 데이터 파악이 힘들어짐
                }                           // 웬만한 경우엔 watch 안 쓰고도 해결되고, 오류를 일으킬 확률 높음. 최후의 수단으로 생각할 것.
            }
        },
    };
</script>
<style> 
   
</style>