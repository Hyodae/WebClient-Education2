export function drawMovie(movie) {
  const imageArea = movie.image ? `<img src="${movie.image}" />` : ``;
  const urlArea = movie.reference_url ? `<a href="${movie.reference_url}" target="_blank">관련 링크</a>` : ``;
  return `<li data-no=${movie.no}>
    <div class="movie">
      <div class="image">${imageArea}</div>
      <div class="text">
        <div class="title">${movie.title}</div>
        <div>
          <span class="star_rating">
            <span style="width: ${movie.star * 20}%"></span>
          </span>
        </div>
        <div>등록일: ${movie.reg_date}</div>
        ${urlArea}
        <div class="control">
          <button class="modify">수정</button>
          <button class="delete">삭제</button>
        </div>
      </div>
    </div>
  </li>`;
}

export function drawMovieDetail(movie) {
  const imageArea = movie.image ? `<img src="${movie.image}" />` : ``;
  const urlArea = movie.reference_url ? `<a href="${movie.reference_url}" target="_blank">관련 링크</a>` : ``;
  return `
      <h2>${movie.title}</h2>
      ${imageArea}
      <div class="text">
        <div>
          <span class="star_rating">
            <span style="width: ${movie.star * 20}%"></span>
          </span>
        </div>
        <div>등록일: ${movie.reg_date}</div>
        ${urlArea}
        <hr/>
      </div>
      <div>${movie.content.replace(/\n/g, "<br>")}</div>
    `;
}

// Cavas에 이미지 그리기
export function drawCanvas(target, imageData) {
  const ctx = target.getContext("2d");
  const image = new Image();
  image.addEventListener("load", () => ctx.drawImage(image,
    0, 0,
    target.width,
    target.height));
  image.src = imageData;
  target.style.display = "block";
}