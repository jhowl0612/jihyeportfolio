<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm"> <!-- v-on → @ / e.preventDefault → .prevent -->
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div> <!-- tries 배열 길이가 곧 시도 횟수이므로. -->
        <ul>
            <li v-for="t in tries" :key="t.try"> <!-- 배열. 배열을 돌면서 값을 한 번씩 호출하시오. -->
                <div>{{t.try}}</div> <!-- v-for은 여러 개의 엘리먼트를 생성하는데, key로 각각 다른 이름을 붙여 구별함. -->
                <div>{{t.result}}</div> <!-- 각 엘리먼트가 구별되면, 화면을 바꿀 때 바꿀 필요 없는 건 건드리지 않을 수 있어 성능이 향상됨. -->
            </li> 
        </ul>
    </div>
</template>

<script>
    // 컴포넌트 안의 메소드로 만들 수 있지만 화면과 관련 적고 분리가능하므로 분리함. 분리하면 다른 컴포넌트에서도 쓸 수 있음
    const getNumbers = () => { // 컴포넌트에서 사용할 4자리 수 무작위 산출 함수
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            //            candiates 값 자름(정수화( 0~1 사이 랜덤실수 * (9 - i)), 한 자리씩)[잘린 것 중 첫 번째만]
            array.push(chosen);
        }    
        return array;
    };
    
    //export를 해 놓아야, 메인.js에서 import할 수 있음
    export default { // cdn 방식의 Vue.component({});와 같은 역할.
        data(){
            return {
                answer: getNumbers(), // 정답인 수 지정
                tries: [], // 시도 기록, 시도 수
                value: '', // 입력
                result: '', // 결과
            };
        },
        methods: {
            onSubmitForm(){
                if (this.value === this.answer.join('')) { // if 정답 / 배열을 조인해서 문자열로
                    // this.tries.push(this.value); // 지금 들어온 value 값 추가(쉬운 방식)
                    this.tries.push({ // tries 안에 객체 넣기 위해 중괄호{} 한 겹 추가
                        try: this.value,
                        result: '홈런', // 이 데이터들의 한 회 묶음이 템플릿 구간의 't'
                    });
                    this.result = `${this.answer.join}, 홈런!`;
                    alert('정답! 게임을 다시 시작합니다.');
                    this.answer = getNumbers();
                    this.tries = [];

                } else { // 틀렸을 때

                    if (this.tries.length >= 9) { // 10번째로 틀렸을 때, 리셋
                        this.result = `열 번 틀려서 실패! 답은 ${this.answer.join('')}였습니다.`;
                        alert('실패! 게임을 다시 시작합니다.');
                        this.answer = getNumbers();
                        this.tries = [];
                    };

                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v));
                    //      입력값을 자리별로 쪼갠 배열.배열 매 값마다 실행(값 => 정수 숫자데이터화(v)) / v는 임의지정이름 t나 i같은
                    for (let i = 0; i < 4; i += 1) {
                        if (answerArray[i] === this.answer[i]) { // 스트라이크일 때
                            strike++;
                        } else if (this.answer.includes(answerArray[i])) { // 볼일 때 (정답문자열이 입력값 i자리 수를 포함할 때)
                            ball++;
                        };
                    };
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`, // 백틱으로 쓰면 문자열 안에서 변수 출력 가능!
                    });
                };
                
                this.value = '';
                this.$refs.answer.focus();
            }
        }
    }
</script>

<style>

</style>