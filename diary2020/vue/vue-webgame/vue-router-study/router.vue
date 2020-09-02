<template>
    <div>
        <div>  <!--  바뀌지 않을 부분, 네비게이터 -->
            <router-link to="/game/index">게임 매처</router-link> 
            <router-link to="/game/number-baseball">숫자 야구</router-link>  <!-- a링크의 모습을 하지만 페이지가 아니라 컴포넌트를 부름. 눈속임 -->
            <router-link to="/game/response-check">반응 속도 게임</router-link>
            <router-link to="/game/rock-scissors-paper">가위 바위 보</router-link>
            <router-link to="/game/lotto-generator">로또 추첨기</router-link>
            <router-link to="/game/tic-tac-toe?pages=7&hello=nope">틱택토</router-link>
        </div>   <!-- 'tic-tac-toe'는 params, ? 이후는 query로 넘겨진다(쿼리스트링). &은 키값 한쌍씩을 구분하는 구분선. -->
        <router-view></router-view> <!-- 화면이 들어갈 틀 컴포넌트 -->
    </div>
</template>
<script>
    import router from './routes';

    export default {
        router,      // 라우터 연결 다 해놓아야 각 컴포넌트에서 $router 사용 가능

    };
</script>
<style> 
    
</style>