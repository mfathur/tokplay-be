import { NotFoundError } from "../../utils/errors/NotFoundError.js";

export class VideoService {
  constructor(model) {
    this.model = model;
  }

  async getAllVideosBy(keyword) {
    // if search keyword exists
    if (keyword) {
      const regex = new RegExp(`${keyword}`, "i");
      return await this.model.find({ title: regex }).select({ comments: 0 });
    }

    return await this.model.find().select({ comments: 0 });
  }

  async getCommentsBy(videoId) {
    const selectedVideo = await this.model
      .findOne({ _id: videoId })
      .select({ comments: 1, _id: 0 });

    if (!selectedVideo) {
      throw new NotFoundError("Video not found");
    }

    return selectedVideo.comments;
  }

  async insertComment(videoId, username, comment) {
    await this.model.findOneAndUpdate(
      { _id: videoId },
      { $push: { comments: { username: username, comment: comment } } }
    );
  }
}
