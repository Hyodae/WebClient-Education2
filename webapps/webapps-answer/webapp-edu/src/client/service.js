// https: //developer.mozilla.org/en-US/docs/Web/API/FormData
export function getFormData($form) {
  const data = {};
  for (var pair of new FormData($form)) {
    data[pair[0]] = pair[1]
  }
  return data;
}

export function validate(data) {
  if (!(data.title && data.title.trim())) {
    alert('영화 제목을 입력해 주세요.');
    return false;
  }
  const star = parseInt(data.star);
  if (star < 1 || star > 5) {
    alert('1 ~ 5 까지의 영화 평점을 입력해 주세요');
    return false;
  }
  if (!(data.content && data.content.trim())) {
    alert('영화 후기를 입력해 주세요.');
    return false;
  }
  return true;
}

export async function insert(data = {}) {
  return await fetch("/api/movies", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

export async function update(data = {}) {
  return await fetch(`/api/movies/${data.no}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

export async function list() {
  return await fetch(`/api/movies`, {
    method: "GET",
  }).then(response => response.json());
}

export async function get(no) {
  return await fetch(`/api/movies/${no}`, {
    method: "GET",
  }).then(response => response.json());
}

export async function remove(no) {
  return await fetch(`/api/movies/${no}`, {
    method: "DELETE",
  }).then(response => response.json());
}