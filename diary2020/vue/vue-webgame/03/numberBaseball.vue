<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm"> <!-- v-on → @ / e.preventDefault → .prevent -->
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div> <!-- tries 배열 길이가 곧 시도 횟수이므로. -->
        <ul>
            <li v-for="t in tries"> <!-- 배열. 배열을 돌면서 값을 한 번씩 표시하시오. -->
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li> 
        </ul>
    </div>
</template>

<script>
    export default { // cdn 방식의 Vue.component({});와 같은 역할
        data(){
            return {
                tries: [],
                value: '',
                result: '',
            };
        },
        methods: {
            onSubmitForm(){
                // this.tries.push(this.value); // 지금 들어온 value 값 추가(쉬운 방식)
                this.tries.push({ // tries 안에 객체 넣기 위해 중괄호{} 한 겹 추가
                    try: this.value,
                    result: '홈런', // 이 데이터들의 한 회 묶음이 't'
                });
                this.value = '';
                this.$refs.answer.focus(); // 입력 인풋에 다시 포커스 지시
            }
        }
    }
</script>

<style>

</style>