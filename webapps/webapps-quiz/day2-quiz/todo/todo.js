var TODO = {
    /**
     * AJAX 호출을 처리
     * @param {String} url 호출할 AJAX API 주소
     * @param {Object} options AJAX 호출시 필요한 옵션
     * {
     *   method: "GET" | "POST",
     *   param: "key=value"  // post로 전송시 전달할 parameter 값
     *   callback: function() {}  // AJAX 처리후 실행할 콜백함수
     * }
     */
	ajax: function(url, options) {

	},

    /**
     * todo 데이터베이스에 등록된 글의 목록을 출력
     */
    list: function() {

    },

    /**
     * 새로운 todo 글을 등록
     * @param {Object} e submit 이벤트 객체
     */
	add: function(e) {

        e.preventDefault();
        return false;
	},

    /**
     * TODO idx값을 전달받아 완료 flag로 업데이트
     * @param {Number} idx todo 글 번호
     */
	done: function(idx) {

	}
};

TODO.list();