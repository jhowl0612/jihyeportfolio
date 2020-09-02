const VueLoaderPlugin = require( 'vue-loader/lib/plugin' ); // 뷰 로더 플러그인 불러옴
const path = require( 'path' ); // 노드js 에 내장된 path 모듈 불러옴.
// 노드 환경에서는 const ooo = require(); 구문으로 모듈을 부른다.
// module.exports를 해 놓으면, require()로 부를 수 있음

module.exports = {
    mode: 'development', // development : 개발 중 / production : 배포 중
    devtool: 'eval', // eval - 웹팩 속도 빨라짐. / 배포 시에는 hidden-source-map
    resolve: { // 확장자 처리
        extensions: ['.js', '.vue' ], // main.js의 임포트에서 .vue를 적지 않더라도 인식해 줌.
    },
    entry: { // 대표적인, 핵심 파일 이름
        app: path.join(__dirname, 'main.js'), // app, main.js는 임의 지정 이름
         // 현재 경로 + main.js(하위 폴더 or 파일)
    },
    module:{ // 웹팩 핵심 부분.
        rules: [{ // '어떻게' 합칠 지를 정함. 예외 상황이 발생할 때.
            test: /\.vue$/, // 정규표현식 \.vue$ = vue로 끝나는 파일. $가 '~로 끝나는'의 의미
            use: 'vue-loader', // 뷰 로더 플러그인 사용 지시. loader를 use로 써도 ㅇㅋ라서 그렇게 씀
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins:[ // modul 파츠 이후 처리.
        new VueLoaderPlugin(), // 사용 플러그인 기록
    ],
    output: { // 웹패킹으로 합쳐질 결과 파일
        filename: '[name].js', // 결과 파일의 이름. 엔트리에 지정한 이름
        // filename: 'app.js' 라고 작성하는 것과 결과 발생. 엔트리에서 지정한 name 가져오는 것
        path: path.join(__dirname, 'dist'), // 폴더 절대 경로. distribution: 배포
        publicPath: '/dist', // npm run dev 할 때 추가해야 함
    },
};