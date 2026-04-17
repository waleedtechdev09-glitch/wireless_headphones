// viewmodels/BlogsViewModel.js
import { BlogsModel } from "../models/BlogsModel";

export class BlogsViewModel {
  constructor() {
    this.blogs = BlogsModel.blogs;
  }

  getBlogs() {
    return this.blogs;
  }
}
