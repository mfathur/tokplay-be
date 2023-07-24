export class VideoService {
  constructor(model) {
    this.model = model;
  }

  async getAllVideosBy(keyword) {
    // if search keyword exists
    if (keyword) {
      const regex = new RegExp(`${keyword}`, "i");
      return await this.model.find({ title: regex });
    }

    return await this.model.find();
  }

  async getCommentsBy(videoId) {
    const selectedVideo = await this.model
      .findOne({ _id: videoId })
      .select({ comments: 1, _id: 0 });

    return selectedVideo.comments;
  }

  async insertComment(videoId, username, comment) {
    await this.model.findOneAndUpdate(
      { _id: videoId },
      { $push: { comments: { username: username, comment: comment } } }
    );
  }
}
