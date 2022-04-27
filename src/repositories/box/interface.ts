interface Ibox {
  id?: string;
  title: string;
  month: string;
}

interface IboxRepository {
  createBox: (boxData: Ibox) => Ibox;
  saveBox: (boxData: Ibox) => Promise<Ibox>;
  findBoxByKey: (key: string, value: string) => Promise<Ibox[]>;
}

export { IboxRepository, Ibox };
