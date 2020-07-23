import PostsRepository from "./postRepository";

const repositories = {
  posts: PostsRepository
}

export const RepositoryFactory = {
  get: name => repositories[name],
}
