import Vue from 'vue';  // package.js에 기록된 뷰를 임포트
import numberBaseball from './numberBaseball'; // 컴포넌트를 작성한 뷰 파일 연결
// 뷰 환경에서는 import로 모듈을 부른다(파이썬 방식)


new Vue(numberBaseball).$mount( '#root' ); // 뷰 인스턴스. cdn 예제의 el: '#root'와 같은 역할. 통제할 요소 이름