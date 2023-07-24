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
}
