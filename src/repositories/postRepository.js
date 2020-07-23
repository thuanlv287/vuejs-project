import Repository from "./index";

const resource = "/photos";

export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getId(postId) {
    return Repository.get(`${resource}/${postId}`);
  },
}
