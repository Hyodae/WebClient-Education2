import {
  insert,
  list,
  get,
  remove,
  update,
  validate,
  getFormData
} from './service';
import {
  drawMovie,
  drawMovieDetail,
  drawCanvas
} from './view';
import LayerManager from './LayerManager';

const selectors = {
  "registerBtn": "#registryBtn",
  "submitBtn": "#submitBtn",
  "form": "#regForm",
  "imageInput": "#imageInput",
  "drop": "#dropArea",
  "preview": "#preview",
  "list": "#list",
  "detail": "#detail",
};

class MovieManager {
  constructor() {
    this.elements = Object.keys(selectors).reduce((acc, selector) => {
      acc[selector] = document.querySelector(selectors[selector]);
      return acc;
    }, {});
    this.refreshList();
    this.attachHandlers();
    this.layerManager = new LayerManager();
  }

  attachHandlers() {
    this.elements["registerBtn"].addEventListener("click", this.onClickRegister.bind(this));
    this.elements["submitBtn"].addEventListener("click", this.onSubmit.bind(this));
    this.elements["list"].addEventListener("click", this.onClickDetail.bind(this));
    this.elements["imageInput"].addEventListener("change", this.onChangeFile.bind(this));
    this.elements["drop"].addEventListener("drop", this.onDropFile.bind(this));
    this.elements["drop"].addEventListener("dragover", this.onDragoverFile.bind(this));
  }

  onClickRegister(event) {
    this.readyForm();
  }

  async onSubmit(event) {
    const data = getFormData(this.elements["form"]);
    if (validate(data)) {
      try {
        const {
          no
        } = data.no ? await update(data) : await insert(data);
        if (no != null) {
          this.refreshList();
          this.resetForm();
          this.layerManager.hide(this.elements["form"]);
          alert(data.no ? `ID ${no}가 수정되었습니다.` :
            `ID ${no}가 정상적으로 등록되었습니다.`);
        } else {
          throw new Error("글 등록에 실패 했습니다");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  async onClickDetail(event) {
    const {
      target
    } = event;
    const targetNo = target.closest("li").dataset.no;
    if (target.classList.contains("modify")) {
      const movie = await get(targetNo);
      if (movie.no != null) {
        this.readyForm(movie);
      }
    } else if (target.classList.contains("delete") && confirm(`글을 삭제 하시겠습니까?`)) {
      const {
        no
      } = await remove(targetNo);
      if (no != null) {
        alert(`ID ${targetNo}가 정상적으로 삭제되었습니다.`);
        this.refreshList();
      } else {
        alert("글 삭제에 실패 했습니다");
      }
    } else {
      const movie = await get(targetNo);
      if (movie.no != null) {
        this.elements["detail"].innerHTML = drawMovieDetail(movie);
        this.layerManager.show(this.elements["detail"]);
      }
    }
  }

  onChangeFile(event) {
    this.checkFiles(event.target.files);
  }

  onDropFile(event) {
    event.stopPropagation();
    event.preventDefault();
    this.checkFiles(event.dataTransfer.files);
  }

  onDragoverFile(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  checkFiles(files) {
    Array.from(files).map(file => {
      if (!/^image/.test(file.type)) {
        alert("지원되지 않는 포맷입니다!");
        this.elements["imageInput"].value = null;
        this.elements["preview"].style.display = "none";
      } else {
        const reader = new FileReader();
        reader.addEventListener("load", event => {
          const imageData = event.target.result;
          this.setImage(imageData);
        });
        reader.readAsDataURL(file);
      }
    });
  }

  async refreshList() {
    try {
      const movies = await list();
      const html = movies.reduce((acc, movie) => {
        acc.push(drawMovie(movie));
        return acc;
      }, []);
      this.elements["list"].innerHTML = html.join('');
    } catch (e) {
      this.elements["list"].innerHTML = "";
      console.error(e);
    }
  }

  resetForm() {
    this.elements["preview"].style.display = "none";
    this.elements["form"].no.value = "";
    this.elements["form"].image.vaule = "";
    this.elements["form"].reset();
    this.elements["form"].scrollTo(0, 0);
  }

  readyForm(movie) {
    if (movie) {
      this.elements["form"].no.value = movie.no;
      this.elements["form"].title.value = movie.title;
      this.elements["form"].star.value = movie.star;
      this.elements["form"].content.value = movie.content;
      if (movie.reference_url) {
        this.elements["form"].referenceUrl.value = movie.reference_url;
      }
      movie.image && this.setImage(movie.image);
    } else {
      this.resetForm();
    }
    this.layerManager.show(this.elements["form"]);
  }

  setImage(imageData) {
    this.elements["form"].image.value = imageData;
    drawCanvas(this.elements["preview"], imageData);
  }
}

export default MovieManager;