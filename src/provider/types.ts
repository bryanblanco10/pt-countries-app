export interface Repository {
  getAll: () => void;
  find: () => void;
  save: () => void;
  delete: () => void;
  update: () => void;
}
