interface IFeedback {
  id?: string;
  content: string;
  rating: number;
}

interface IFeedbackRepository {
  createFeedback: (feedback: IFeedback) => IFeedback;
  saveFeedback: (feedback: IFeedback) => Promise<IFeedback>;
  findFeedbackByKey: (key: string, value: string) => Promise<IFeedback[]>;
  findAllFeedback: () => Promise<IFeedback[]>;
}

export { IFeedbackRepository, IFeedback };
