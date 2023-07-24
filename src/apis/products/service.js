export class ProductService {
  constructor(model) {
    this.model = model;
  }

  async getAllProductsBy(query) {
    const { relatedVideoId } = query;

    if (relatedVideoId) {
      return await this.model
        .find({ relatedVideoIds: relatedVideoId })
        .select({ relatedVideoIds: 0 });
    }

    return await this.model.find({});
  }
}
