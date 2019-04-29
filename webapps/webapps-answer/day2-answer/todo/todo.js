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
        var req = new XMLHttpRequest();

        req.addEventListener("load", function() {
            options.callback(req);
        }, false);

        req.open(options.method || "GET", url);
        req.setRequestHeader("X-Test", "one");
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        req.send(options.param);
	},

    /**
     * todo 데이터베이스에 등록된 글의 목록을 출력
     */
    list: function() {
        this.ajax("/list", {
            method: "GET",
            callback: function(res) {
                var rows = JSON.parse(res.responseText);
                var tpl = "<li class='${=CLASS}'>${=COMPLETE} ${=IDX}: <span>${=TODO}</span></li>";
                var html = "";

                for (var x in rows) {
                    var row = rows[x];

                    html += tpl
                        .replace(/\${=CLASS}/g, row.complete === 1 ? "done" : "")
                        .replace(/\${=COMPLETE}/g, row.complete === 1 ? "" : "<input type='checkbox' onclick='TODO.done("+ row.idx +")'>")
                        .replace(/\${=IDX}/g, row.idx)
                        .replace(/\${=TODO}/g, row.todo);
                }

                document.getElementById("todolist").innerHTML = html;
            }
        });
    },

    /**
     * 새로운 todo 글을 등록
     * @param {Object} e submit 이벤트 객체
     */
	add: function(e) {
		var that = this;
        var value = document.getElementById("todo").value;

        this.ajax("/create", {
            method: "POST",
            param: "todo="+ value,
            callback: function() {
                document.getElementById("todo").value = "";
                that.list();
            }
        });

        e.preventDefault();
        return false;
	},

    /**
     * TODO idx값을 전달받아 완료 flag로 업데이트
     * @param {Number} idx todo 글 번호
     */
	done: function(idx) {
	    var that = this;

        this.ajax("/done?idx="+ idx, {
            method: "GET",
            callback: function() {
                that.list();
            }
        });
	}
};

TODO.list();