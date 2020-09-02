<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('가위')">가위</button> <!-- 함수에 인자 넣기 -->
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}} 점</div>
    </div>
</template>
<script>
    const rspCoords = { // 좌표만 보고 의미를 알기 힘드므로, 가독성을 위해 명시적 이름을 줌.
        바위: '0',
        가위: '-142px',
        보: '-284px',
    };

    const scores = { // 가위 바위 보 승패를 결정하는 사전
        가위: 1,    // 1 - 1 = 0 : 비김
        바위: 0,    // 1 - (-1) = 2 : 이김 , 0 - 1 = -1 : 이김 
        보: -1      // 1 - 0 = 1 : 짐 , -1 - 1 = -2 : 짐  
    };

    const computerChoice = (imgCoord) => { // 그냥 배열에는 indexOf 등을 쓰지만 2차원 배열에는 find나 findindex 사용함
        return Object.entries(rspCoords).find(function (v){ // find는 반복문. (v)는 반복하는 동안 건드리는 각 하나씩의 객체(한쌍의 키:값) 를 말하는 것
            return v[1] === imgCoord; // rspCoords 사전 중 값(좌표) === 현재 상태 (ex. rspCoords.바위) 의 좌표 인 (일치하는) 키:값을 리턴
        })[0]; // 리턴된 것 중 키(가위 or 바위 or 보)만 취함 = 현재 좌표에 해당하는 가위바위보 가져오기
    };

    let interval = null;

    export default {
        data() {
            return{
                imgCoord: rspCoords.바위,
                result: '',
                score: 0,
            };
        },
        computed: {
            computedStyleObject(){ // 이미지를 매번 새로 부르는 것을 막기 위해 캐싱이 되는 computed로 가져옴. coord : 좌표
                return {
                    background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0` 
                };
            }
        },
        methods: {
            changeHand(){
                interval = setInterval(() => { // 초기화 위해 변수에 저장
                    if (this.imgCoord === rspCoords.바위) {
                        this.imgCoord = rspCoords.가위;
                    } else if (this.imgCoord === rspCoords.가위) {
                        this.imgCoord = rspCoords.보;
                    } else if (this.imgCoord === rspCoords.보) {
                        this.imgCoord = rspCoords.바위;
                    }
                }, 100);
            },
            onClickButton(choice){
                clearInterval(interval);
                const myScore = scores[choice];
                const spuScore = scores[computerChoice(this.imgCoord)]; // [현 이미지좌표에 해당하는 가위바위보]의 점수
                const diff = myScore - spuScore;
                if (diff === 0) {
                    this.result = '비겼습니다.';
                } else if ([-1,2].includes(diff)) { // -1이나 2 중에 diff가 있으면
                    this.result = '이겼습니다.';
                    this.score += 1;  
                } else {
                    this.result = '졌습니다.';
                    this.score -= 1;  
                }
                setTimeout(() => {
                    this.changeHand();
                },2000);
            },
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
            this.changeHand();
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
            clearInterval(interval);
        },
        destroyed() {
            console.log('destroyed');
        },
    }
</script>
<style scoped> 
   #computer {
       width: 142px;
       height: 200px;
       background-position: 0 0;
   }
</style>